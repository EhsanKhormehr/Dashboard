export type RouteGroup = {
  group?: string;
  items: {
    href: string;
    label: string;
  }[];
};

export const ROUTE_GROUPS: RouteGroup[] = [
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
      {
        href: "/dashboard/product-stock",
        label: "Product Stock",
      },
      {
        href: "/dashboard/new-menu",
        label: "New Menu",
      },
      {
        href: "/dashboard/menus",
        label: "Menus",
      },
      {
        href: "/dashboard/tickets",
        label: "Tickets",
      },
      {
        href: "/dashboard/blogs",
        label: "Blogs",
      },
      {
        href: "/dashboard/new-blog",
        label: "New Blog",
      },
      {
        href: "/dashboard/new-blog-tag",
        label: "New Blog Tag",
      },
      {
        href: "/dashboard/blog-tags",
        label: "Blog Tags",
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
        href: "/dashboard/todo",
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
