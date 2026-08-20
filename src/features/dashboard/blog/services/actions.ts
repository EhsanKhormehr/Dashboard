"use server";

import { executeAction } from "@/lib/executeAction";
import { BlogFormValues, newBlogSchema } from "../types/schema";
import { requireAdmin } from "@/features/auth/utils/requireAdmin";
import { prisma } from "@/lib/prisma";

export const createBlog = async (data: BlogFormValues) => {
  return executeAction({
    actionFn: async () => {
      const currentAdmin = await requireAdmin();
      const validatedData = newBlogSchema.parse(data);

      return await prisma.blog.create({
        data: {
          title: validatedData.title,
          slug: validatedData.slug,
          description: validatedData.description,
          category: validatedData.category,
          status: validatedData.status,
          thumbnail: validatedData.thumbnail ?? null,
          content: validatedData.content,
          userId: currentAdmin.id,
        },
      });
    },
  });
};
