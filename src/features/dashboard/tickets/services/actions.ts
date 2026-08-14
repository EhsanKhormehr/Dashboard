"use server";

import { executeAction } from "@/lib/executeAction";
import { prisma } from "@/lib/prisma";
import {
  TicketCategory,
  TicketStatus,
} from "../../../../../generated/prisma/enums";
import { Prisma } from "../../../../../generated/prisma/client";
import { getCurrentUser } from "@/features/auth/utils/getCurrentUser";
import { requireAdmin } from "@/features/auth/utils/requireAdmin";

type getTicketsParams = {
  search?: string;
  status?: TicketStatus | "DEFAULT";
  category?: TicketCategory | "DEFAULT";
  perPage?: string;
  page?: string;
};

type ReplyTicketInput = {
  message: string;
  ticketId: string;
};

export const getAllTickets = async (params: getTicketsParams) => {
  return executeAction({
    actionFn: async () => {
      await requireAdmin();

      const page = Math.max(1, parseInt(params.page || "1", 10) || 1);
      const perPage = Math.max(1, parseInt(params.perPage || "12", 10) || 12);
      const skip = (page - 1) * perPage;

      const where: Prisma.TicketWhereInput = {};
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
          include: {
            user: {
              select: {
                id: true,
                userName: true,
                firstName: true,
                lastName: true,
                email: true,
              },
            },
          },
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
      await requireAdmin();

      return prisma.ticket.findUnique({
        where: {
          id,
        },
        include: {
          user: {
            select: {
              id: true,
              userName: true,
              firstName: true,
              lastName: true,
              email: true,
            },
          },
          messages: true,
        },
      });
    },
  });
};

export const adminReplyTicket = async ({
  message,
  ticketId,
}: ReplyTicketInput) => {
  return executeAction({
    actionFn: async () => {
      await requireAdmin();
      const ticket = await prisma.ticket.findUnique({
        where: {
          id: ticketId,
        },
      });
      if (!ticket) {
        throw new Error("Ticket not found");
      }
      const [newMessage] = await prisma.$transaction([
        prisma.ticketMessage.create({
          data: {
            ticketId,
            message,
            isAdmin: true,
          },
        }),
        prisma.ticket.update({
          where: {
            id: ticket.id,
          },
          data: {
            updatedAt: new Date(),
            status: "ANSWERED",
          },
        }),
      ]);
      return newMessage;
    },
  });
};

export const closeTicket = async (ticketId: string) => {
  return executeAction({
    actionFn: async () => {
      await requireAdmin();

      return await prisma.ticket.update({
        where: {
          id: ticketId,
        },
        data: {
          status: "CLOSED",
        },
      });
    },
  });
};

export const openTicket = async (ticketId: string) => {
  return executeAction({
    actionFn: async () => {
      await requireAdmin();

      return await prisma.ticket.update({
        where: {
          id: ticketId,
        },
        data: {
          status: "OPEN",
        },
      });
    },
  });
};
