import type { DiscountCode } from "../../generated/prisma/client";

export type DiscountStatus =
  | "SCHEDULED"
  | "ACTIVE"
  | "EXPIRED"
  | "DISABLED"
  | "USAGE_LIMIT_REACHED";

const getDiscountStatus = (discount: DiscountCode): DiscountStatus => {
  const now = new Date();

  if (!discount.isActive) {
    return "DISABLED";
  }
  
  if (now < discount.startDate) {
    return "SCHEDULED";
  }

  if (now >= discount.endDate) {
    return "EXPIRED";
  }
  if (discount.usageCount >= discount.usageLimit) {
    return "USAGE_LIMIT_REACHED";
  }

  return "ACTIVE";
};

export default getDiscountStatus;
