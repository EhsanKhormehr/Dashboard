export type ProductStatus =
  | "delivered"
  | "processing"
  | "pending"
  | "shipped"
  | "cancelled";

export type PurchasedProduct = {
  id: number;
  title: string;
  image: string;
  price: number;
  status: ProductStatus;
  purchasedAt: string;
};
