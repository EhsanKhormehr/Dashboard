import { Button } from "@/components/ui/button";
import { Edit, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

const CheckoutAddresses = () => {
  return (
    <div className="bg-surface rounded-xl shadow-card self-start">
      <div className="px-4 py-3 border-b flex items-center justify-between">
        <div className="flex items-center">
          <MapPin className="size-[20px]" />
          <span className="font-bold ml-2">Address</span>
        </div>
        <Button asChild>
          <Link href="/account/addresses" className="flex items-center">
            <Edit className="size-[20px]" />
            <span className="font-semibold">Edit Address</span>
          </Link>
        </Button>
      </div>
      <div className="p-4">
        <div className="flex items-center flex-wrap">
          <h4 className="font-black mr-2">Home : </h4>
          <p className="text-sm font-semibold text-dashboard-text"> Esfahan, Esfahan, Tohid Miani,30,10</p>
        </div>
        <p className="text-sm font-bold text-muted-foreground mt-3">Postal Code : 827464738</p>
      </div>
    </div>
  );
};

export default CheckoutAddresses;
