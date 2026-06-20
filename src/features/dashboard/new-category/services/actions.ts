"use server";
import { prisma } from "@/lib/prisma";
import { CategoryFormValues } from "../types/schema";
import { executeAction } from "@/lib/executeAction";

export const createCategory = async (data: CategoryFormValues) => {
  await executeAction({
    actionFn: () => {
      return prisma.category.create({
        data: {
          name: data.name,
          slug: data.slug,
          attribute: {
            create: data.attributes.map((attribute) => ({
              name: attribute.name,
              slug: attribute.slug,
              type: attribute.type,
              required: attribute.required === "TRUE",
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
