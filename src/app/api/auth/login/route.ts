import { loginSchema } from "@/features/auth/login/types/schema";
import { verifyPassword } from "@/features/auth/utils/password";
import {
  AUTH_COOKIE_NAME,
  generateSessionToken,
  getSessionExpiresAt,
} from "@/features/auth/utils/session";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = loginSchema.parse(body);

    const user = await prisma.user.findUnique({
      where: {
        email: validatedData.email,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "Invalid email or password",
        },
        {
          status: 401,
        },
      );
    }

    const isPasswordValid = await verifyPassword(
      validatedData.password,
      user.password,
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          message: "Invalid email or password",
        },
        {
          status: 401,
        },
      );
    }

    const sessionToken = generateSessionToken();
    const expiresAt = getSessionExpiresAt();

    await prisma.session.create({
      data: {
        token: sessionToken,
        userId: user.id,
        expiresAt: expiresAt,
      },
    });

    const cookieStore = await cookies();

    cookieStore.set(AUTH_COOKIE_NAME, sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: expiresAt,
    });

    return NextResponse.json(
      {
        message: "Logged in successfuly",
        user: {
          id: user.id,
          userName: user.userName,
          email: user.email,
          role: user.role,
        },
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          message: "Invalid form data.",
          errors: error.flatten().fieldErrors,
        },
        {
          status: 400,
        },
      );
    }

    console.error("LOGIN_ERROR", error);

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
