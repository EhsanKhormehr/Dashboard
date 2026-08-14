"use server";
import { executeAction } from "@/lib/executeAction";
import { UpdateMyAccountData } from "../types/schema";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/features/auth/utils/password";
import { requireAdmin } from "@/features/auth/utils/requireAdmin";

export const updateMyAccount = async (data: UpdateMyAccountData) => {
  return executeAction({
    actionFn: async () => {
      const currentUser = await requireAdmin();

      const updateData: UpdateMyAccountData = {
        email: data.email,
        userName: data.userName,
      };

      if (data.password && data.password.trim() !== "") {
        updateData.password = await hashPassword(data.password);
      }

      return prisma.user.update({
        where: {
          id: currentUser.id,
        },
        data: updateData,
      });
    },
  });
};
