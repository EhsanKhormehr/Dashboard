"use server";
import { prisma } from "@/lib/prisma";
import { ProductFormValues } from "../types/schema";
import { executeAction } from "@/lib/executeAction";

export const getCategoryAttributes = async (id: string) => {
  return await prisma.category.findUnique({
    where: {
      id,
    },
    include: {
      attributes: true,
    },
  });
};

type AddNewProductInput = {
  name: string;
  slug: string;
  description?: string;
  price: number;
  stock: number;
  categoryId: string;
  attributes?: Record<string, string>;
};

export const createNewProduct = async (data: ProductFormValues) => {
  await executeAction({
    actionFn: async () => {
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

      const product = await prisma.product.create({
        data : {
          name: data.name,
          description: data.description,
          price: data.price,
          stock: data.stock,
          categoryId: data.categoryId,
          slug : data.slug,
          attributes: {
            create: attributeValues,
          },
        },
        include: {
          attributes: true,
        },
      });

      return product;
    },
  });
};
