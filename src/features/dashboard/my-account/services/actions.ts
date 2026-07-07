"use server";
import { executeAction } from "@/lib/executeAction";
import { UpdateMyAccountData } from "../types/schema";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/features/auth/utils/password";
import { getCurrentUser } from "@/features/auth/utils/getCurrentUser";

export const updateMyAccount = async (data: UpdateMyAccountData) => {
  await executeAction({
    actionFn: async () => {
      const updateData: UpdateMyAccountData = {
        email: data.email,
        userName: data.userName,
      };
      if (data.password && data.password?.trim() !== "") {
        updateData.password = await hashPassword(data.password!);
      }
      const currentUser = await getCurrentUser()

      await prisma.user.update({
        where: {
          id: currentUser?.id,
        },
        data: updateData,
      });
    },
  });
};
