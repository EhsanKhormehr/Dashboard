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
        href: "/dashboard/products",
        label: "Products",
      },
      {
        href: "/dashboard/new-products",
        label: "New Products",
      },
      {
        href: "/dashboard/categories",
        label: "Categories",
      },
      {
        href: "/dashboard/new-category",
        label: "New Categoy",
      },
      {
        href: "/dashboard/favorites",
        label: "Favorites",
      },
      
    ],
  },
  {
    group: "Pages",
    items: [
      {
        href: "/dashboard/pricing",
        label: "Pricing",
      },
      {
        href: "/dashboard/calender",
        label: "Calender",
      },
      {
        href: "/dashboard/to-do",
        label: "To-Do",
      },
      {
        href: "/dashboard/contact",
        label: "Contact",
      },
      {
        href: "/dashboard/invoice",
        label: "Invoice",
      },
      {
        href: "/dashboard/ui-elements",
        label: "UI Elements",
      },
      {
        href: "/dashboard/team",
        label: "Team",
      },
      {
        href: "/dashboard/table",
        label: "Table",
      },
    ],
  },
];
