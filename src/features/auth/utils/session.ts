import { prisma } from "@/lib/prisma";
import crypto from "crypto";

export const AUTH_COOKIE_NAME = "auth_session";

export function generateSessionToken() {
  return crypto.randomBytes(32).toString("hex");
}

export function getSessionExpiresAt() {
  const expiresAt = new Date();

  expiresAt.setDate(expiresAt.getDate() + 7);

  return expiresAt;
}

export async function createSession(userId: string) {
  const token = generateSessionToken();
  const expiresAt = getSessionExpiresAt();

  await prisma.session.create({
    data: {
      token,
      userId,
      expiresAt,
    },
  });

  return {
    token,
    expiresAt,
  };
}
