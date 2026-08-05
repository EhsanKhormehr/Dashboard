import React from "react";
import BenefitCard, { BenefitCardProps } from "./benefit-card";
import ShopTitle from "@/components/common/shop-title";
import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import { CreditCard, Headphones, ShieldCheck, Truck } from "lucide-react";

const storeBenefits: BenefitCardProps[] = [
  {
    title: "Fast Delivery",
    description: "Get your orders delivered quickly and safely.",
    icon: Truck,
    variant: "purple",
  },
  {
    title: "Original Products",
    description: "All products are 100% original and guaranteed.",
    icon: ShieldCheck,
    variant: "yellow",
  },
  {
    title: "Secure Payment",
    description: "Your payment information is always safe with us.",
    icon: CreditCard,
    variant: "green",
  },
  {
    title: "24/7 Support",
    description: "Our support team is always ready to help you.",
    icon: Headphones,
    variant: "orange",
  },
];

const HomeBenefits = () => {
  return (
    <MaxWidthWrapper className="mt-15">
      <ShopTitle title="Why Shop With Us" />
      <p className="mt-2 text-sm text-muted-foreground">
        Everything you need for a better shopping experience
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-3">
        {storeBenefits.map((benefit) => (
          <BenefitCard
            key={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
            title={benefit.title}
            variant={benefit.variant}
          />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default HomeBenefits;
