import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import HomePageProductCard from "./product-card";

const HomePageProducts = () => {
  return (
    <div className="my-14">
      <MaxWidthWrapper>
        <Tabs defaultValue="new">
          <TabsList variant={"line"} className="mb-8">
            <TabsTrigger value="new">New Products</TabsTrigger>
            <TabsTrigger value="best">Best Products</TabsTrigger>
          </TabsList>
          <TabsContent
            value="new"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <HomePageProductCard />
            <HomePageProductCard />
            <HomePageProductCard />
            <HomePageProductCard />
          </TabsContent>
          <TabsContent
            value="best"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <HomePageProductCard />
            <HomePageProductCard />
            <HomePageProductCard />
          </TabsContent>
        </Tabs>
      </MaxWidthWrapper>
    </div>
  );
};

export default HomePageProducts;
