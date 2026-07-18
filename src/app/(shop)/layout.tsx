import ShopFooter from "@/components/layout/shop-footer";
import ShopHeader from "@/components/layout/shop-header/shop-header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ShopHeader />
      {children}
      <ShopFooter />
    </div>
  );
};

export default Layout;
