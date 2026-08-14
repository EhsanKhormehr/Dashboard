"use server";

import { executeAction } from "@/lib/executeAction";
import { NewTeamMemberFormValues } from "../types/schema";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/features/auth/utils/requireAdmin";

export const createTeamMember = async (data: NewTeamMemberFormValues) => {
  return executeAction({
    actionFn: async () => {
      await requireAdmin();
      return prisma.team.create({
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          position: data.position,
          gender: data.gender,
        },
      });
    },
  });
};

export const getAllTeamMembers = async () => {
  return executeAction({
    actionFn: async () => {
      await requireAdmin();
      return prisma.team.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
    },
  });
};
