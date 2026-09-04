"use server";
import { prisma } from "@/lib/prisma";
import { ProductFormValues } from "../types/schema";
import { executeAction } from "@/lib/executeAction";
import { Prisma } from "../../../../../generated/prisma/browser";
import { requireAdmin } from "@/features/auth/utils/requireAdmin";

type getFilteredProductsParams = {
  search?: string;
  status?: string;
  category?: string;
  sortBy?: string;
  perPage?: string;
  page?: string;
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
          brand: data.brand,
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

export const updateProduct = async (id: string, data: ProductFormValues) => {
  return executeAction({
    actionFn: async () => {
      await requireAdmin();

      const categoryAttributes = await prisma.categoryAttribute.findMany({
        where: { categoryId: data.categoryId },
        select: { id: true, slug: true },
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

      return prisma.product.update({
        where: { id },
        data: {
          name: data.name,
          slug: data.slug,
          description: data.description,
          price: data.price,
          stock: data.stock,
          thumbnail: data.thumbnail,
          images: data.images,
          content: data.content,
          categoryId: data.categoryId,
          brand: data.brand,
          attributes: {
            deleteMany: {},
            create: attributeValues,
          },
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

      const page = Math.max(1, parseInt(params.page || "1", 10) || 1);
      const perPage = Math.max(1, parseInt(params.perPage || "12", 10) || 12);
      const skip = (page - 1) * perPage;

      const where: Prisma.ProductWhereInput = {};

      if (params.search) {
        where.name = { contains: params.search, mode: "insensitive" };
      }

      if (params.category && params.category !== "ALL") {
        where.categoryId = params.category;
      }

      if (params.status && params.status !== "ALL") {
        switch (params.status) {
          case "INSTOCK":
            {
              where.stock = {
                gt: 0,
              };
            }
            break;
          case "OUTOFSTOCK":
            {
              where.stock = {
                equals: 0,
              };
            }
            break;
        }
      }

      const orderBy: Prisma.ProductOrderByWithRelationInput = {};

      if (params.sortBy && params.sortBy !== "DEFAULT") {
        switch (params.sortBy) {
          case "PRICEASC":
            orderBy.price = "asc";
            break;
          case "PRICEDESC":
            orderBy.price = "desc";
            break;
          case "NEWEST":
            orderBy.createdAt = "desc";
            break;
          case "OLDEST":
            orderBy.createdAt = "asc";
            break;
          default:
            {
              orderBy.createdAt = "desc";
            }
            break;
        }
      }

      const [products, totalCount] = await prisma.$transaction([
        prisma.product.findMany({
          where,
          orderBy,
          skip,
          take: perPage,
          include: {
            category: true,
          },
        }),
        prisma.product.count({ where }),
      ]);
      return {
        products,
        totalCount,
        perPage,
        totalPages: Math.ceil(totalCount / perPage),
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

export const getProductById = async (id: string) => {
  return executeAction({
    actionFn: async () => {
      return await prisma.product.findUnique({
        where: {
          id,
        },
        include: {
          attributes: {
            include: {
              attribute: {
                select: {
                  slug: true,
                },
              },
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
      await requireAdmin();
      return prisma.category.findMany({});
    },
  });
};
