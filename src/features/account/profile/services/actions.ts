"use server";

import { getCurrentUser } from "@/features/auth/utils/getCurrentUser";
import { executeAction } from "@/lib/executeAction";
import { prisma } from "@/lib/prisma";
import { ProfileFormValue, profileSchema } from "../types/schema";
import { hashPassword, verifyPassword } from "@/features/auth/utils/password";

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

export const updatePassword = async (
  currentPassword: string,
  newPassword: string,
) => {
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
          password: true,
        },
      });

      if (!user) {
        throw new Error("User not found!");
      }

      const isPasswordCorrect = await verifyPassword(
        currentPassword,
        user.password,
      );

      if (!isPasswordCorrect) {
        throw new Error("Current password is incorrect!");
      }

      const isSamePassword = await verifyPassword(newPassword, user.password);

      if (isSamePassword) {
        throw new Error(
          "New password must be different from current password!",
        );
      }

      const newHashedPassword = await hashPassword(newPassword);
      await prisma.user.update({
        where: {
          id: currentUser.id,
        },
        data: {
          password: newHashedPassword,
        },
      });
      return {
        success: true,
        message: "Password updated successfully",
      };
    },
  });
};
