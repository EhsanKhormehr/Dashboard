import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type PricingCardProps = {
  name: string;
  description: string;
  price: number;
  features: string[];
  href : string
};

export default function PricingCard({
  name,
  description,
  price,
  features,
  href
}: PricingCardProps) {
  return (
    <div
      className="shadow-card rounded-2xl px-7 py-10 flex flex-col items-center bg-surface"
      style={{ backgroundImage: "url(/Pattern-bg.svg)" }}
    >
      <div className="flex flex-col items-center pb-10 border-b-2 w-full">
        <h3 className="text-2xl font-bold">{name}</h3>
        <span className="my-2">{description}</span>
        <span className="text-primary text-[48px] font-extrabold">
          ${price}
        </span>
      </div>
      <div className="py-10 flex flex-col items-center *:py-3 *:font-semibold *:text-[18px] border-b-2 w-full text-center">
        {features.map((feature) => (
          <span key={feature}>{feature}</span>
        ))}
      </div>
      <div className="pt-10">
        <Button
          type="button"
          variant={"default"}
          className="cursor-pointer font-bold text-[18px] rounded-full py-7 px-9 bg-transparent border-primary text-primary border-2 hover:text-white"
          asChild
        >
          <Link href={href}>Get Started</Link>
        </Button>
      </div>
    </div>
  );
}
