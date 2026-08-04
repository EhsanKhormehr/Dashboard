import ShopTopBar from "@/components/layout/shop/shop-header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ShopTopBar />
      {children}
    </div>
  );
};

export default Layout;
