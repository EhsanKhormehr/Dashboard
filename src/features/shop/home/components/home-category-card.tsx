import { Laptop, LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type HomeCategoryCardProps = {
  title: string;
  icon: LucideIcon;
};

const HomeCategoryCard = ({ title, icon:Icon }: HomeCategoryCardProps) => {
  return (
    <Link
      href={"/"}
      className="bg-surface flex flex-col items-center justify-center rounded-2xl shadow-card p-6"
    >
      <Icon className="size-[45px] text-primary" strokeWidth={1} />
      <span className="font-extrabold text-xs sm:text-sm mt-3">{title}</span>
    </Link>
  );
};

export default HomeCategoryCard;
