import { AUTH_COOKIE_NAME } from "@/features/auth/utils/session";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cookieStore = await cookies();

    const sessionToken = cookieStore.get(AUTH_COOKIE_NAME)?.value;

    if (!sessionToken) {
      return NextResponse.json(
        {
          user: null,
        },
        {
          status: 200,
        },
      );
    }

    const session = await prisma.session.findUnique({
      where: {
        token: sessionToken,
      },
      include: {
        user: true,
      },
    });

    if (!session) {
      return NextResponse.json(
        {
          user: null,
        },
        {
          status: 200,
        },
      );
    }

    const isSessionExpired = session.expiresAt < new Date();

    if (isSessionExpired) {
      await prisma.session.delete({
        where: {
          id: session.id,
        },
      });

      cookieStore.delete(AUTH_COOKIE_NAME);

      return NextResponse.json(
        {
          user: null,
        },
        {
          status: 200,
        },
      );
    }
    return NextResponse.json(
      {
        user: {
          id: session.user.id,
          userName: session.user.userName,
          email: session.user.email,
          role: session.user.role,
        },
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("GET_ME_ERROR", error);

    return NextResponse.json(
      {
        message: "Something went wrong.",
      },
      {
        status: 500,
      },
    );
  }
}
