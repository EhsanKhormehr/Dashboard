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

export type StockStatus = "available" | "unavailable";

export type WishlistItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  slug: string;
  stockStatus: StockStatus;
};
