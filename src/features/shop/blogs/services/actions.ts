"use server";

import { executeAction } from "@/lib/executeAction";
import { prisma } from "@/lib/prisma";

export const getLatestArticles = async () => {
  return executeAction({
    actionFn: async () => {
      return await prisma.blog.findMany({
        where: {},
        select: {
          id: true,
          title: true,
          createdAt: true,
          category: true,
          slug : true
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 4,
      });
    },
  });
};
