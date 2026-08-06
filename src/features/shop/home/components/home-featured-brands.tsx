import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import ShopTitle from "@/components/common/shop-title";
import React from "react";
import HomeFeaturedBrandsCard from "./home-featured-brands-card";

export const featuredBrands = [
  {
    name: "Redragon",
    image: "/shop/redragon.svg",
    href: "/products?brand=redragon",
  },
  {
    name: "Samsung",
    image: "/shop/samsung.svg",
    href: "/products?brand=samsung",
  },
  {
    name: "NVIDIA",
    image: "/shop/nvidia.svg",
    href: "/products?brand=nvidia",
  },
  {
    name: "Razer",
    image: "/shop/razer.svg",
    href: "/products?brand=razer",
  },
  {
    name: "AMD",
    image: "/shop/amd.svg",
    href: "/products?brand=amd",
  },
  {
    name: "Intel",
    image: "/shop/intel.svg",
    href: "/products?brand=intel",
  },
  {
    name: "ROG",
    image: "/shop/rog.svg",
    href: "/products?brand=rog",
  },
];

const HomeFeaturedBrands = () => {
  return (
    <MaxWidthWrapper className="mt-15">
      <ShopTitle title="Featured Brands" />
      <div className="my-3 grid grid-cols-2 min-[380px]:grid-cols-3 min-[450px]:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 lg:gap-12 gap-3">
        {featuredBrands.map((brand) => (
          <HomeFeaturedBrandsCard
            key={brand.name}
            href={brand.href}
            image={brand.image}
            name={brand.name}
          />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default HomeFeaturedBrands;
