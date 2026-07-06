import { signUpSchema } from "@/features/auth/signup/types/schema";
import { hashPassword } from "@/features/auth/utils/password";
import { AUTH_COOKIE_NAME, createSession } from "@/features/auth/utils/session";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const data = signUpSchema.parse(body);

    const existingUser = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "Email is already exist.",
        },
        {
          status: 409,
        },
      );
    }

    const userCount = await prisma.user.count();

    const hashedPassword = await hashPassword(data.password);

    const user = await prisma.user.create({
      data: {
        email: data.email,
        userName: data.userName,
        password: hashedPassword,
        role: userCount === 0 ? "ADMIN" : "USER",
      },
      select: {
        id: true,
        email: true,
        userName: true,
        role: true,
        createdAt: true,
      },
    });

    const session = await createSession(user.id);

    const cookieStore = await cookies();

    cookieStore.set(AUTH_COOKIE_NAME, session.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: session.expiresAt,
    });

    return NextResponse.json(
      {
        message: "Signup successfuly",
        user,
      },
      {
        status: 201,
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

    console.error("SIGNUP_ERROR", error);

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
