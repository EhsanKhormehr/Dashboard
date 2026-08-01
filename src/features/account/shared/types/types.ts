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

export type TicketStatus = "OPEN" | "PENDING" | "ANSWERED" | "CLOSED";

export type StockStatus = "available" | "unavailable";

export type Ticket = {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
};

export type WishlistItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  slug: string;
  stockStatus: StockStatus;
};
