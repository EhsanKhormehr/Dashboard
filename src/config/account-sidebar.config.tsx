import {
  Heart,
  LayoutDashboard,
  LogOut,
  LucideIcon,
  MapPin,
  Menu,
  Settings,
  ShoppingBag,
  Ticket,
  User,
} from "lucide-react";

type AccountMenuItemValue = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export const accountMenuItems:AccountMenuItemValue[] = [
  { title: "Dashboard", href: "/account", icon: LayoutDashboard },
  { title: "Orders", href: "/account/orders", icon: ShoppingBag },
  { title: "Wishlist", href: "/account/wishlist", icon: Heart },
  { title: "Addresses", href: "/account/addresses", icon: MapPin },
  { title: "Profile", href: "/account/profile", icon: User },
  { title: "Tickets", href: "/account/tickets", icon: Ticket },
  { title: "Settings", href: "/account/settings", icon: Settings },
];
