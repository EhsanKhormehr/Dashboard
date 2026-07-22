"use server";

import { executeAction } from "@/lib/executeAction";
import { MenuFormValue } from "../types/schema";
import { prisma } from "@/lib/prisma";

export const createMenu = async (data: MenuFormValue) => {
  return executeAction({
    actionFn: async () => {
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
