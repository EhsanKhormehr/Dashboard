"use server";

import { executeAction } from "@/lib/executeAction";
import { MenuFormValue } from "../types/schema";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/features/auth/utils/requireAdmin";

export const createMenu = async (data: MenuFormValue) => {
  return executeAction({
    actionFn: async () => {
      await requireAdmin();
      return await prisma.menu.create({
        data: {
          name: data.name,
          href: data.href,
          subMenus: {
            create:
              data.subMenus?.map((submenu) => ({
                name: submenu.name,
                href: submenu.href,
              })) ?? [],
          },
        },
      });
    },
  });
};

export const getMenus = async () => {
  return executeAction({
    actionFn: async () => {
      await requireAdmin();
      return await prisma.menu.findMany({
        include: {
          subMenus: true,
        },
      });
    },
  });
};

export const deleteMenu = async (id: string) => {
  return executeAction({
    actionFn: async () => {
      await requireAdmin();
      return await prisma.menu.delete({
        where: {
          id,
        },
      });
    },
  });
};

export const updateMenu = async (id: string, data: MenuFormValue) => {
  return executeAction({
    actionFn: async () => {
      await requireAdmin();
      return await prisma.menu.update({
        where: {
          id,
        },
        data: {
          name: data.name,
          href: data.href,
          subMenus: {
            deleteMany: {},
            create: data.subMenus?.map((submenu) => ({
              name: submenu.name,
              href: submenu.href,
            })),
          },
        },
      });
    },
  });
};
