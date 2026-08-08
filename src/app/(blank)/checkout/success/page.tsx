import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <MaxWidthWrapper className="">
        <div className="bg-surface rounded-xl shadow-card px-4 py-15">
          <div className="flex flex-col items-center justify-center ">
            <CircleCheck className="size-[120px] text-green-400 dark:text-green-600" />
            <div className="mt-3">
              <h1 className="text-3xl font-bold text-center">
                Thank you for your order :)
              </h1>
              <p className="text-muted-foreground mt-3 text-center">
                Order ID:
                <span className="font-semibold text-foreground"> #12345</span>
              </p>
            </div>
            <div className="mt-3 flex gap-4">
              <Button asChild>
                <Link href={"/"} className="h-[45px]">
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant={"outline"}>
                <Link href={"/account/orders/12345"} className="h-[45px]">
                  View Order Details
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default OrderConfirmation;
