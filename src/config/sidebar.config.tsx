export type RouteGroup = {
  group?: string;
  items: {
    href: string;
    label: string;
  }[];
};

export const ROUTE_GROUPS : RouteGroup[] = [
  {
    group: "",
    items: [
      {
        href: "/dashboard",
        label: "Dashboard",
      },
      {
        href: "/products",
        label: "Products",
      },
      {
        href: "/favorites",
        label: "favorites",
      },
      {
        href: "/inbox",
        label: "Inbox",
      },
      {
        href: "/order-lists",
        label: "Order Lists",
      },
      {
        href: "/product-stock",
        label: "Product Stock",
      },
    ],
  },
  {
    group: "Pages",
    items: [
      {
        href: "/pricing",
        label: "Pricing",
      },
      {
        href: "/calender",
        label: "Calender",
      },
      {
        href: "/to-do",
        label: "To-Do",
      },
      {
        href: "/contact",
        label: "Contact",
      },
      {
        href: "/invoice",
        label: "Invoice",
      },
      {
        href: "/ui-elements",
        label: "UI Elements",
      },
      {
        href: "/team",
        label: "Team",
      },
      {
        href: "/table",
        label: "Table",
      },
    ],
  },
];
