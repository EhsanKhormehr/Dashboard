"use server"
import { cookies } from "next/headers";
import { AUTH_COOKIE_NAME } from "./session";
import { prisma } from "@/lib/prisma";

export const getCurrentUser = async () => {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(AUTH_COOKIE_NAME)?.value;

  if (!sessionToken) {
    return null;
  }

  const session = await prisma.session.findUnique({
    where: {
      token: sessionToken,
    },
    include: {
      user: {
        select: {
          id: true,
          email: true,
          userName: true,
          role: true,
        },
      },
    },
  });

  if (!session) {
    return null;
  }

  if (session.expiresAt && session.expiresAt < new Date()) {
    return null;
  }

  return session.user;
};
