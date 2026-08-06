import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import ShopTitle from "@/components/common/shop-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const HomeNewsletter = () => {
  return (
    <MaxWidthWrapper className="mt-15">
      <section >
        <div className="rounded-2xl bg-primary px-8 py-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-primary-foreground">Stay Updated</h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-primary-foreground/80">
                Subscribe to get the latest tech deals, new arrivals, and
                exclusive offers.
              </p>
            </div>

            <form className="flex w-full flex-col gap-3 sm:flex-row lg:justify-end">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 w-full rounded-xl !bg-white px-4 text-sm sm:max-w-sm"
              />
              <Button
                type="submit"
                className="h-12 rounded-xl bg-gray-800 hover:bg-gray-700 cursor-pointer px-6 text-sm font-semibold text-primary-foreground"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default HomeNewsletter;
