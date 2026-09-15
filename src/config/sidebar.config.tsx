import type { LucideIcon } from "lucide-react";

import {
  LayoutDashboard,
  Package,
  PackagePlus,
  Tags,
  Tag,
  Heart,
  Boxes,
  MessageSquareText,
  ListTree,
  ListPlus,
  Ticket,
  Newspaper,
  FilePlus2,
  MessagesSquare,
  BadgeCheck,
  BadgePlus,
  BadgePercent,
  Percent,
  BadgeDollarSign,
  ListTodo,
  UsersRound,
} from "lucide-react";

export type RouteItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export type RouteGroup = {
  label: string;
  icon: LucideIcon;
  href?: string;
  items?: RouteItem[];
};

export const ROUTE_GROUPS: RouteGroup[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },

  {
    label: "Products",
    icon: Package,
    items: [
      {
        href: "/dashboard/products",
        label: "All Products",
        icon: Package,
      },
      {
        href: "/dashboard/new-products",
        label: "New Product",
        icon: PackagePlus,
      },
      {
        href: "/dashboard/categories",
        label: "Categories",
        icon: Tags,
      },
      {
        href: "/dashboard/new-category",
        label: "New Category",
        icon: Tag,
      },
      {
        href: "/dashboard/product-stock",
        label: "Product Stock",
        icon: Boxes,
      },
      {
        href: "/dashboard/product-comments",
        label: "Product Comments",
        icon: MessageSquareText,
      },
      {
        href: "/dashboard/favorites",
        label: "Favorites",
        icon: Heart,
      },
    ],
  },

  {
    label: "Menus",
    icon: ListTree,
    items: [
      {
        href: "/dashboard/menus",
        label: "All Menus",
        icon: ListTree,
      },
      {
        href: "/dashboard/new-menu",
        label: "New Menu",
        icon: ListPlus,
      },
    ],
  },

  {
    label: "Blog",
    icon: Newspaper,
    items: [
      {
        href: "/dashboard/blogs",
        label: "All Blogs",
        icon: Newspaper,
      },
      {
        href: "/dashboard/new-blog",
        label: "New Blog",
        icon: FilePlus2,
      },
      {
        href: "/dashboard/blog-tags",
        label: "Blog Tags",
        icon: Tags,
      },
      {
        href: "/dashboard/new-blog-tag",
        label: "New Blog Tag",
        icon: Tag,
      },
      {
        href: "/dashboard/blog-comments",
        label: "Blog Comments",
        icon: MessagesSquare,
      },
    ],
  },

  {
    label: "Brands",
    icon: BadgeCheck,
    items: [
      {
        href: "/dashboard/brands",
        label: "All Brands",
        icon: BadgeCheck,
      },
      {
        href: "/dashboard/new-brand",
        label: "New Brand",
        icon: BadgePlus,
      },
    ],
  },

  {
    label: "Discounts",
    icon: BadgePercent,
    items: [
      {
        href: "/dashboard/discount-codes",
        label: "Discount Codes",
        icon: Percent,
      },
      {
        href: "/dashboard/new-discount-code",
        label: "New Discount Code",
        icon: BadgePercent,
      },
    ],
  },

  {
    href: "/dashboard/tickets",
    label: "Tickets",
    icon: Ticket,
  },

  {
    href: "/dashboard/pricing",
    label: "Pricing",
    icon: BadgeDollarSign,
  },

  {
    href: "/dashboard/todo",
    label: "To-Do",
    icon: ListTodo,
  },

  {
    href: "/dashboard/team",
    label: "Team",
    icon: UsersRound,
  },
];
