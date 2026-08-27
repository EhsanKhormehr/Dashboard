"use server";

import { executeAction } from "@/lib/executeAction";
import {
  BlogFormValues,
  newBlogSchema,
  newTagSchema,
  TagFormValues,
} from "../types/schema";
import { requireAdmin } from "@/features/auth/utils/requireAdmin";
import { prisma } from "@/lib/prisma";
import { BlogStatus, Prisma } from "../../../../../generated/prisma/client";

type GetBlogsVariables = {
  search?: string;
  category?: string;
  status?: BlogStatus | "DEFAULT";
  perPage?: string;
  page?: string;
};

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

export const getBlogs = async (params: GetBlogsVariables) => {
  return executeAction({
    actionFn: async () => {
      await requireAdmin();
      const where: Prisma.BlogWhereInput = {};
      const page = Math.max(1, parseInt(params.page || "1", 10) || 1);
      const perPage = Math.max(1, parseInt(params.perPage || "12", 10) || 12);
      const skip = (page - 1) * perPage;

      if (params.category && params.category !== "DEFAULT") {
        where.category = params.category;
      }
      if (params.search) {
        where.title = {
          contains: params.search,
          mode: "insensitive",
        };
      }
      if (params.status && params.status !== "DEFAULT") {
        where.status = params.status;
      }
      const [blogs, totalCount] = await Promise.all([
        prisma.blog.findMany({
          where: where,
          skip: skip,
          take: perPage,
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
        }),
        prisma.blog.count({ where }),
      ]);
      return {
        blogs,
        totalCount,
        page,
        perPage,
        totalPages: Math.ceil(totalCount / perPage),
      };
    },
  });
};

export const deleteBlog = async (id: string) => {
  return executeAction({
    actionFn: async () => {
      await requireAdmin();

      await prisma.blog.delete({
        where: {
          id,
        },
      });
    },
  });
};

export const updateBlog = async (id: string, data: BlogFormValues) => {
  return executeAction({
    actionFn: async () => {
      await requireAdmin();
      await prisma.blog.update({
        where: {
          id,
        },
        data: {
          title: data.title,
          content: data.content,
          description: data.description,
          slug: data.slug,
          category: data.category,
          status: data.status,
          thumbnail: data.thumbnail ?? undefined,
        },
      });
    },
  });
};

// Blog Tags
export const createBlogTag = async (data: TagFormValues) => {
  return executeAction({
    actionFn: async () => {
      await requireAdmin();
      const validatedData = newTagSchema.parse(data);
      return await prisma.blogTag.create({
        data: {
          name: validatedData.name,
          slug: validatedData.slug,
        },
      });
    },
  });
};

export const getBlogTags = async () => {
  return executeAction({
    actionFn: async () => {
      await requireAdmin();
      return prisma.blogTag.findMany({
        where: {},
      });
    },
  });
};

export const deleteBlogTag = async (id: string) => {
  return executeAction({
    actionFn: async () => {
      await requireAdmin();
      return await prisma.blogTag.delete({
        where: {
          id,
        },
      });
    },
  });
};
