
import React from "react";
import HomePagePromoGridCard from "./promo-grid-card";

const HomePagePromoGrid = () => {
  return (
    <div className="grid grid-cols-4 mb-16">
      <HomePagePromoGridCard />
      <HomePagePromoGridCard />
      <HomePagePromoGridCard />
      <HomePagePromoGridCard />
    </div>
  );
};

export default HomePagePromoGrid;