"use server";

import { executeAction } from "@/lib/executeAction";
import { prisma } from "@/lib/prisma";

export const getProducts = async () => {
  return executeAction({
    actionFn: async () => {
      return await prisma.product.findMany({
        include: {
          category: {
            select: {
              name: true,
              slug: true,
            },
          },
        },
      });
    },
  });
};

export const getProductBySlug = async (slug: string) => {
  return executeAction({
    actionFn: async () => {
      return prisma.product.findUnique({
        where: {
          slug,
        },
        include: {
          category: {
            select: {
              name: true,
              slug: true,
            },
          },
          attributes: {
            where: {},
            include: {
              attribute: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      });
    },
  });
};

export const getRelatedProducts = async (categoryId: string) => {
  return executeAction({
    actionFn: async () => {
      return await prisma.product.findMany({
        where: {
          categoryId,
        },
        take : 4, 
        include: {
          category: {
            select: {
              name: true,
              slug: true,
            },
          },
        },
      });
    },
  });
};
