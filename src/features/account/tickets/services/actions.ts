"use server";

import { getCurrentUser } from "@/features/auth/utils/getCurrentUser";
import { TicketFormValues } from "../types/schema";
import { prisma } from "@/lib/prisma";
import { executeAction } from "@/lib/executeAction";

type ReplyTicketInput = {
  message: string;
  ticketId: string;
};

export const createTicket = async (data: TicketFormValues) => {
  return executeAction({
    actionFn: async () => {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        throw new Error("Unauthorized!");
      }

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

export const getTickets = async () => {
  return executeAction({
    actionFn: async () => {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        throw new Error("Unauthorized!");
      }

      return await prisma.ticket.findMany({
        where: {
          userId: currentUser.id,
        },
        orderBy: {
          updatedAt: "desc",
        },
      });
    },
  });
};

export const getTicketById = async (id: string) => {
  return executeAction({
    actionFn: async () => {
      const currentUser = await getCurrentUser();

      if (!currentUser) {
        throw new Error("Unauthorized!");
      }
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
      const currentUser = await getCurrentUser();

      if (!currentUser) {
        throw new Error("Unauthorized!");
      }

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
          },
        }),
      ]);
      return newTicketMessage;
    },
  });
};
