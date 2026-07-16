export type MenuItem = {
  id: string;
  title: string;
  href: string;
  children?: {
    id: string;
    title: string;
    href: string;
  }[];
};

export const shopMenuItems: MenuItem[] = [
  {
    id: "men",
    title: "Men",
    href: "/categories/men",
    children: [
      {
        id: "men-tshirts",
        title: "T-Shirts",
        href: "/categories/men/t-shirts",
      },
      {
        id: "men-shirts",
        title: "Shirts",
        href: "/categories/men/shirts",
      },
      {
        id: "men-jeans",
        title: "Jeans",
        href: "/categories/men/jeans",
      },
      {
        id: "men-shoes",
        title: "Shoes",
        href: "/categories/men/shoes",
      },
    ],
  },
  {
    id: "women",
    title: "Women",
    href: "/categories/women",
    children: [
      {
        id: "women-dresses",
        title: "Dresses",
        href: "/categories/women/dresses",
      },
      {
        id: "women-tops",
        title: "Tops",
        href: "/categories/women/tops",
      },
      {
        id: "women-bags",
        title: "Bags",
        href: "/categories/women/bags",
      },
      {
        id: "women-shoes",
        title: "Shoes",
        href: "/categories/women/shoes",
      },
    ],
  },
  {
    id: "kids",
    title: "Kids",
    href: "/categories/kids",
    children: [
      {
        id: "kids-tshirts",
        title: "T-Shirts",
        href: "/categories/kids/t-shirts",
      },
      {
        id: "kids-hoodies",
        title: "Hoodies",
        href: "/categories/kids/hoodies",
      },
      {
        id: "kids-shoes",
        title: "Shoes",
        href: "/categories/kids/shoes",
      },
      {
        id: "kids-backpacks",
        title: "Backpacks",
        href: "/categories/kids/backpacks",
      },
    ],
  },
  {
    id: "accessories",
    title: "Accessories",
    href: "/categories/accessories",
    
  },
];
