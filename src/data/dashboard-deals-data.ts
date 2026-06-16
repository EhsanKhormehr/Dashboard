export type DashboardDealsRowStatus = "delivered" | "pending" | "rejected";

export type DashboardDeals = {
  id: string;
  image: string;
  name: string;
  location: string;
  date: string;
  piece: string;
  amount: string;
  status: DashboardDealsRowStatus;
};

export const data: DashboardDeals[] = [
  {
    id: "1",
    image: "/apple-watch.png",
    name: "Apple Watch",
    location: "6096 Marjolaine Landing",
    date: "12.09.2026 - 12.53 PM",
    piece: "432",
    amount: "132",
    status: "delivered",
  },
  {
    id: "2",
    image: "/apple-watch.png",
    name: "Apple Watch",
    location: "6096 Marjolaine Landing",
    date: "12.09.2026 - 12.53 PM",
    piece: "432",
    amount: "132",
    status: "pending",
  },
  {
    id: "3",
    image: "/apple-watch.png",
    name: "Apple Watch",
    location: "6096 Marjolaine Landing",
    date: "12.09.2026 - 12.53 PM",
    piece: "432",
    amount: "132",
    status: "rejected",
  },
];