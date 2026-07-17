import { Camera } from "lucide-react";
import Link from "next/link";
import React from "react";

const ShopCategoryBrowserBox = () => {
  return (
    <Link href={"/"}>
      <div className="bg-chart-1/50 rounded-2xl flex justify-center flex-col items-center h-[128px]">
        <Camera size={40} />
        <span className="font-bold">Phones</span>
      </div>
    </Link>
  );
};

export default ShopCategoryBrowserBox;
