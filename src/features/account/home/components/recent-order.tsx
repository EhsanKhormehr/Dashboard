import ShopTitle from "@/components/common/shop-title";
import React from "react";
import RecentOrderTable from "./recent-order-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const RecentOrder = () => {
  return (
    <div className="bg-surface shadow-card rounded-2xl w-full mt-5 px-4 py-8">
      <div className="flex justify-between items-center">
        <ShopTitle title="Recent Order" className="text-md" />
         <Button asChild variant={"secondary"}>
          <Link href={"/account/orders"}>
            <ArrowRight />
          </Link>
        </Button>
      </div>
      <div className="mt-5">
        <RecentOrderTable />
      </div>
    </div>
  );
};

export default RecentOrder;
