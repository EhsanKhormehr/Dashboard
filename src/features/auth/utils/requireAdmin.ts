import { requireUser } from "./requireUser";

export const requireAdmin = async () => {
  const user = await requireUser();

  if (user.role !== "ADMIN") {
    throw new Error("Forbidden");
  }
  return user;
};
