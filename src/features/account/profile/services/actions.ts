"use server";

import { getCurrentUser } from "@/features/auth/utils/getCurrentUser";
import { executeAction } from "@/lib/executeAction";
import { prisma } from "@/lib/prisma";
import { ProfileFormValue, profileSchema } from "../types/schema";

export const getUserInfo = async () => {
  return executeAction({
    actionFn: async () => {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        throw new Error("Unauthorized!");
      }

      const user = await prisma.user.findUnique({
        where: {
          id: currentUser.id,
        },
        select: {
          firstName: true,
          lastName: true,
          email: true,
          phoneNumber: true,
          userName: true,
        },
      });
      if (!user) {
        throw new Error("User not found in database!");
      }
      return user;
    },
  });
};

export const updateUserInfo = async (data: ProfileFormValue) => {
  return executeAction({
    actionFn: async () => {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        throw new Error("Unauthorized!");
      }
      const validatedData = profileSchema.parse(data);

      return await prisma.user.update({
        where: {
          id: currentUser.id,
        },
        data: {
          firstName: validatedData.firstName?.trim() || null,
          lastName: validatedData.lastName?.trim() || null,
          email: validatedData.email.trim().toLocaleLowerCase(),
          phoneNumber: validatedData.phoneNumber?.trim() || null,
          userName: validatedData.userName.trim(),
        },
      });
    },
  });
};
