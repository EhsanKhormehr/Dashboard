"use server";

import { executeAction } from "@/lib/executeAction";
import { prisma } from "@/lib/prisma";
import { Prisma } from "../../../../../generated/prisma/client";

type getArticlesParams = {
  search?: string;
  sortBy?: string;
};

export const getLatestArticles = async () => {
  return executeAction({
    actionFn: async () => {
      return await prisma.blog.findMany({
        where: { status: "PUBLISHED" },
        select: {
          id: true,
          title: true,
          createdAt: true,
          category: true,
          slug: true,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 4,
      });
    },
  });
};

export const getArticles = async (params: getArticlesParams) => {
  return executeAction({
    actionFn: async () => {
      const where: Prisma.BlogWhereInput = { status: "PUBLISHED" };
      const orderBy: Prisma.BlogOrderByWithRelationInput = {
        createdAt: "desc",
      };
      if (params.search && params.search !== "") {
        where.title = {
          contains: params.search,
          mode: "insensitive",
        };
      }

      if (params.sortBy && params.sortBy !== "LATEST") {
        orderBy.createdAt = "asc";
      }

      return await prisma.blog.findMany({
        where,
        orderBy,
        include: {
          user: {
            select: {
              userName: true,
            },
          },
        },
      });
    },
  });
};

export const getArticle = async (slug: string) => {
  return executeAction({
    actionFn: async () => {
      return await prisma.blog.findFirst({
        where: {
          slug,
          status: "PUBLISHED",
        },
        include: {
          user: {
            select: {
              userName: true,
            },
          },
          tags: {
            select: {
              id: true,
              name: true,
              slug: true,
            },
          },
        },
      });
    },
  });
};

export const getRelatedArticles = async (
  category: string,
  currentArticle: string,
) => {
  return executeAction({
    actionFn: async () => {
      return await prisma.blog.findMany({
        where: {
          category,
          id: {
            not: currentArticle,
          },
        },
        take: 4,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          user: {
            select: {
              userName: true,
            },
          },
        },
      });
    },
  });
};
