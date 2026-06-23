"use server";
import { executeAction } from "@/lib/executeAction";
import { prisma } from "@/lib/prisma";
import { CategoryFormValues } from "../types/schema";

export const createCategory = async (data: CategoryFormValues) => {
  await executeAction({
    actionFn: () => {
      return prisma.category.create({
        data: {
          name: data.name,
          slug: data.slug,
          attributes: {
            create: data.attributes.map((attribute) => ({
              name: attribute.name,
              slug: attribute.slug,
              type: attribute.type,
              required: attribute.required,
              options:
                attribute.type === "SELECT"
                  ? (attribute.options ?? "")
                      .split(",")
                      .map((item) => item.trim())
                      .filter(Boolean)
                  : [],
            })),
          },
        },
      });
    },
  });
};

export const getCategories = async () => {
  return await prisma.category.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: {
          attributes: true,
        },
      },
    },
  });
};

export const deleteCategory = async (id: string) => {
  await executeAction({
    actionFn: () => {
      return prisma.category.delete({
        where: {
          id: id,
        },
      });
    },
  });
};

export const editCategory = async (id: string, data: CategoryFormValues) => {
  await executeAction({
    actionFn: () => {
      return prisma.category.update({
        where: {
          id,
        },
        data: {
          name: data.name,
          slug: data.slug,
          attributes: {
            deleteMany: {},
            create: data.attributes.map((attribute) => ({
              name: attribute.name,
              slug: attribute.slug,
              type: attribute.type,
              required: attribute.required,
              options:
                attribute.type === "SELECT"
                  ? (attribute.options ?? "")
                      .split(",")
                      .map((item) => item.trim())
                      .filter(Boolean)
                  : [],
            })),
          },
        },
      });
    },
  });
};
