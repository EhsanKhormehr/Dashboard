import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./features/auth/utils/getCurrentUser";
import { AUTH_COOKIE_NAME } from "./features/auth/utils/session";

export const proxy = async (request: NextRequest) => {
  const sessionToken = request.cookies.get(AUTH_COOKIE_NAME)?.value;

  if (!sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/account/:path*", "/dashboard/:path*"],
};
