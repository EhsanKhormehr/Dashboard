"use server";

import { getCurrentUser } from "@/features/auth/utils/getCurrentUser";
import { TicketFormValues } from "../types/schema";
import { prisma } from "@/lib/prisma";
import { executeAction } from "@/lib/executeAction";
import {
  Prisma,
  TicketCategory,
  TicketStatus,
} from "../../../../../generated/prisma/client";
import { requireUser } from "@/features/auth/utils/requireUser";

type ReplyTicketInput = {
  message: string;
  ticketId: string;
};

type getTicketsParams = {
  search?: string;
  status?: TicketStatus | "DEFAULT";
  category?: TicketCategory | "DEFAULT";
  perPage?: string;
  page?: string;
};

export const createTicket = async (data: TicketFormValues) => {
  return executeAction({
    actionFn: async () => {
      const currentUser = await requireUser();

      return await prisma.ticket.create({
        data: {
          subject: data.subject,
          category: data.category,
          userId: currentUser.id,
          messages: {
            create: {
              message: data.message,
              userId: currentUser.id,
              isAdmin: false,
            },
          },
        },
        include: {
          messages: true,
        },
      });
    },
  });
};

export const getTickets = async (params: getTicketsParams) => {
  return executeAction({
    actionFn: async () => {
      const currentUser = await requireUser();

      const page = Math.max(1, parseInt(params.page || "1", 10) || 1);
      const perPage = Math.max(1, parseInt(params.perPage || "12", 10) || 12);
      const skip = (page - 1) * perPage;

      const where: Prisma.TicketWhereInput = { userId: currentUser.id };
      if (params.category && params.category !== "DEFAULT") {
        where.category = params.category;
      }

      if (params.search) {
        where.subject = { contains: params.search, mode: "insensitive" };
      }

      if (params.status && params.status !== "DEFAULT") {
        where.status = params.status;
      }
      const [tickets, totalCount] = await Promise.all([
        prisma.ticket.findMany({
          where: where,
          orderBy: {
            updatedAt: "desc",
          },
          skip: skip,
          take: perPage,
        }),
        prisma.ticket.count({ where }),
      ]);
      return {
        tickets,
        totalCount,
        page,
        perPage,
        totalPages: Math.ceil(totalCount / perPage),
      };
    },
  });
};

export const getTicketById = async (id: string) => {
  return executeAction({
    actionFn: async () => {
      const currentUser = await requireUser();

      return await prisma.ticket.findFirst({
        where: {
          id,
          userId: currentUser.id,
        },
        include: {
          messages: true,
        },
      });
    },
  });
};

export const replyTicket = async ({ message, ticketId }: ReplyTicketInput) => {
  return executeAction({
    actionFn: async () => {
      const currentUser = await requireUser();

      const ticket = await prisma.ticket.findFirst({
        where: {
          id: ticketId,
          userId: currentUser.id,
        },
        select: {
          id: true,
          status: true,
        },
      });

      if (!ticket) {
        throw new Error("Ticket not found!");
      }

      if (ticket.status === "CLOSED") {
        throw new Error("This ticket is closed!");
      }
      const [newTicketMessage] = await prisma.$transaction([
        prisma.ticketMessage.create({
          data: {
            message: message,
            ticketId: ticket.id,
            userId: currentUser.id,
            isAdmin: false,
          },
        }),
        prisma.ticket.update({
          where: {
            id: ticket.id,
          },
          data: {
            updatedAt: new Date(),
            status: "PENDING",
          },
        }),
      ]);
      return newTicketMessage;
    },
  });
};
