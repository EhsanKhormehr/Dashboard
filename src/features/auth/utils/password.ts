import bcrypt from "bcrypt";

const SALT_ROUND = 12;

export async function hashPassword(password: string) {
  return bcrypt.hash(password, SALT_ROUND);
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return bcrypt.compare(password, hashedPassword);
}
