"use client";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import React from "react";

// تعریف یکجا برای جلوگیری از ناهماهنگی
const NAV_ITEMS = [
  { id: "specifications", label: "Specifications" },
  { id: "expert-review", label: "Expert Review" },
  { id: "reviews", label: "Reviews" },
];

const ProductSectionsNav = () => {
  const sectionIds = NAV_ITEMS.map((item) => item.id);
  const activeSection = useScrollSpy(sectionIds);

  return (
    <div className="mt-5 bg-surface shadow-soft-card rounded-xl overflow-hidden text-muted-foreground col-span-12 lg:col-span-9 sticky top-0 z-10">
      <div className="flex ml-2 sm:ml-5 text-sm sm:text-base overflow-x-auto text-nowrap">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mr-3 sm:mr-7 py-4 border-b-[3px] transition-colors ${
                isActive
                  ? "border-primary text-surface-foreground font-bold"
                  : "border-transparent"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSectionsNav;
