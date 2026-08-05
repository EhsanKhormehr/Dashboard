import React from "react";
import HomeCategoryCard from "./home-category-card";
import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import {
  Cpu,
  Headset,
  Laptop,
  MemoryStick,
  Monitor,
  Mouse,
  Smartphone,
} from "lucide-react";

const homeCategories = [
  {
    title: "Laptop",
    icon: Laptop,
  },
  {
    title: "Headset",
    icon: Headset,
  },
  {
    title: "CPU",
    icon: Cpu,
  },
  {
    title: "RAM",
    icon: MemoryStick,
  },
  {
    title: "Mobile",
    icon: Smartphone,
  },
  {
    title: "Monitor",
    icon: Monitor,
  },
  {
    title: "Mouse",
    icon: Mouse,
  },
];

const HomeCategory = () => {
  return (
    <MaxWidthWrapper className="grid grid-cols-2 min-[380px]:grid-cols-3 min-[450px]:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 lg:gap-12 my-12 gap-3">
      {homeCategories.map((category) => (
        <HomeCategoryCard title={category.title} icon={category.icon} key={category.title} />
      ))}
    </MaxWidthWrapper>
  );
};

export default HomeCategory;
