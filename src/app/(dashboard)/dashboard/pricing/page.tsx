import PageHeader from "@/components/common/page-header";
import PricingCard from "@/features/dashboard/pricing/pricing-card";
import React from "react";

const pricingPlans = [
  {
    name: "Basic",
    description: "Monthly Charge",
    price: 14.99,
    href : "/dashboard/pricing/basic",
    features: [
      "Free Setup",
      "Bandwidth Limit 10 GB",
      "20 User Connection",
      "Analytics Report",
      "Public API Access",
      "Plugins Intregation",
      "Custom Content Management",
    ],
  },
  {
    name: "Middle",
    description: "Monthly Charge",
    price: 14.99,
    href : "/dashboard/pricing/middle",
    features: [
      "Free Setup",
      "Bandwidth Limit 10 GB",
      "20 User Connection",
      "Analytics Report",
      "Public API Access",
      "Plugins Intregation",
      "Custom Content Management",
    ],
  },
  {
    name: "Pro",
    description: "Monthly Charge",
    price: 14.32,
    href : "/dashboard/pricing/pro",
    features: [
      "Free Setup",
      "Bandwidth Limit 10 GB",
      "20 User Connection",
      "Analytics Report",
      "Public API Access",
      "Plugins Intregation",
      "Custom Content Management",
    ],
  },
];

export default function Pricing() {
  return (
    <div>
      <PageHeader title="Pricing" />
      <div className="grid grid-cols-1 gap-10 mt-6 md:grid-cols-2 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.name} description={plan.description} name={plan.name} features={plan.features} price={plan.price} href={plan.href} />
        ))}
      </div>
    </div>
  );
}
