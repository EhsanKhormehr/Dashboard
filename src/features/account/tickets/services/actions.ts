"use server";

import { getCurrentUser } from "@/features/auth/utils/getCurrentUser";
import { TicketFormValues } from "../types/schema";
import { prisma } from "@/lib/prisma";

export const createTicket = async (data: TicketFormValues) => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    throw new Error("Unauthorized!");
  }

  return await prisma.ticket.create({
    data: {
      subject: data.subject,
      category: data.category,
      message: data.message,
      userId: currentUser.id,
    },
  });
};
