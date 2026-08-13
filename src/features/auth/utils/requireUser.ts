import { getCurrentUser } from "./getCurrentUser";

export const requireUser = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    throw new Error("Unauthorized!");
  }
  return currentUser;
};
