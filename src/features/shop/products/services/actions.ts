"use server";

import { executeAction } from "@/lib/executeAction";
import { prisma } from "@/lib/prisma";
import { Prisma } from "../../../../../generated/prisma/client";

type GetProductsParams = {
  search?: string;
  sortBy?: string;
  category?: string[];
  brand?: string[];
  min?: string;
  max?: string;
  inStock?: string;
  page?: string;
  perPage?: string;
};

export const getProducts = async (params: GetProductsParams) => {
  return executeAction({
    actionFn: async () => {
      const where: Prisma.ProductWhereInput = {};

      const page = Math.max(1, parseInt(params.page || "1", 10) || 1);
      const perPage = Math.max(1, parseInt(params.perPage || "12", 10) || 12);
      const skip = (page - 1) * perPage;
      const isInStock = params.inStock === "true";
      if (params.search) {
        where.name = {
          contains: params.search,
          mode: "insensitive",
        };
      }
      if (params.category) {
        where.category = {
          slug: {
            in: params.category,
          },
        };
      }
      if (params.brand) {
        where.brand = {
          slug: {
            in: params.brand,
          },
        };
      }
      if (isInStock) {
        where.stock = {
          gt: 0,
        };
      }
      if (params.min || params.max) {
        where.price = {
          ...(params.min && { gte: Number(params.min) }),
          ...(params.max && { lte: Number(params.max) }),
        };
      }
      const orderBy: Prisma.ProductOrderByWithRelationInput = {};
      if (params.sortBy && params.sortBy !== "DEFAULT") {
        switch (params.sortBy) {
          case "NEWEST":
            orderBy.createdAt = "desc";
            break;
          case "OLDEST":
            orderBy.createdAt = "asc";
            break;
          case "PRICEHTL":
            orderBy.price = "desc";
            break;
          case "PRICELTH":
            orderBy.price = "asc";
            break;

          default:
            orderBy.createdAt = "desc";
            break;
        }
      }
      const [products, totalCount, priceRange] = await Promise.all([
        prisma.product.findMany({
          where,
          orderBy,
          take: perPage,
          skip,
          include: {
            category: {
              select: {
                name: true,
                slug: true,
              },
            },
          },
        }),
        prisma.product.count({ where }),
        prisma.product.aggregate({
          _min: {
            price: true,
          },
          _max: {
            price: true,
          },
        }),
      ]);
      return {
        products,
        totalCount,
        skip,
        perPage,
        totalPages: Math.ceil(totalCount / perPage),
        priceRange,
      };
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
        take: 4,
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

export const getCategories = async () => {
  return executeAction({
    actionFn: async () => {
      return await prisma.category.findMany({
        where: {},
        orderBy: {
          createdAt: "desc",
        },
      });
    },
  });
};

export const getBrands = async () => {
  return executeAction({
    actionFn: async () => {
      return await prisma.brand.findMany({
        where: {},
        orderBy: {
          createdAt: "desc",
        },
      });
    },
  });
};
