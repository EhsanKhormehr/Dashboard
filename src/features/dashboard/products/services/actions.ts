"use server";
import { prisma } from "@/lib/prisma";
import { ProductFormValues } from "../types/schema";
import { executeAction } from "@/lib/executeAction";
import { Prisma } from "../../../../../generated/prisma/browser";
import { requireAdmin } from "@/features/auth/utils/requireAdmin";

type getFilteredProductsParams = {
  q?: string;
  sortBy?: string;
  category?: string;
  page?: string;
  limit?: string;
  minPrice?: string;
  maxPrice?: string;
};

export const getCategoryAttributes = async (id: string) => {
  return executeAction({
    actionFn: async () => {
      await requireAdmin();
      if (!id) {
        throw new Error("Category id is required");
      }
      return prisma.category.findUnique({
        where: {
          id,
        },
        include: {
          attributes: true,
        },
      });
    },
  });
};

export const createNewProduct = async (data: ProductFormValues) => {
  return executeAction({
    actionFn: async () => {
      await requireAdmin();

      const categoryAttributes = await prisma.categoryAttribute.findMany({
        where: {
          categoryId: data.categoryId,
        },
        select: {
          id: true,
          slug: true,
        },
      });

      const attributeMap = new Map(
        categoryAttributes.map((attribute) => [attribute.slug, attribute.id]),
      );

      const attributeValues = Object.entries(data.attributes ?? {})
        .map(([slug, value]) => {
          const attributeId = attributeMap.get(slug);

          if (!attributeId) return null;

          return {
            attributeId,
            value: String(value),
          };
        })
        .filter(
          (item): item is { attributeId: string; value: string } =>
            item !== null,
        );

      return prisma.product.create({
        data: {
          name: data.name,
          description: data.description,
          price: data.price,
          stock: data.stock,
          content: data.content,
          categoryId: data.categoryId,
          slug: data.slug,
          thumbnail: data.thumbnail,
          images: data.images,
          attributes: {
            create: attributeValues,
          },
        },
        include: {
          attributes: true,
        },
      });
    },
  });
};

export const getFilteredProducts = async (
  params: getFilteredProductsParams,
) => {
  return executeAction({
    actionFn: async () => {
      await requireAdmin();

      const page = parseInt(params.page || "1", 10);
      const limit = parseInt(params.limit || "8", 10);
      const skip = (page - 1) * limit;

      const where: Prisma.ProductWhereInput = {};

      if (params.q) {
        where.name = { contains: params.q, mode: "insensitive" };
      }

      if (params.category && params.category !== "default") {
        where.categoryId = params.category;
      }

      if (params.minPrice || params.maxPrice) {
        where.price = {
          ...(params.minPrice && { gte: parseFloat(params.minPrice) }),
          ...(params.maxPrice && { lte: parseFloat(params.maxPrice) }),
        };
      }

      const orderBy: Prisma.ProductOrderByWithRelationInput = {};

      switch (params.sortBy) {
        case "price-asc":
          orderBy.price = "asc";
          break;
        case "price-desc":
          orderBy.price = "desc";
          break;
        default:
          orderBy.createdAt = "desc";
          break;
      }

      const [products, totalCount] = await prisma.$transaction([
        prisma.product.findMany({
          where,
          orderBy,
          skip,
          take: limit,
          include: {
            category: true,
          },
        }),
        prisma.product.count({ where }),
      ]);
      return {
        products,
        totalCount,
        totalPages: Math.ceil(totalCount / limit),
        currentPage: page,
      };
    },
  });
};

export const deleteProduct = async (id: string) => {
  return executeAction({
    actionFn: async () => {
      await requireAdmin();
      return prisma.product.delete({
        where: {
          id,
        },
      });
    },
  });
};
