import PageHeader from "@/components/common/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DiscountCodeTable from "@/features/dashboard/products/components/discount-code-table";
import { getDiscountCodes } from "@/features/dashboard/products/services/actions";
import React from "react";

const DiscountCodes = async () => {
  const discountCodes = await getDiscountCodes();

  return (
    <div>
      <PageHeader title="Discount Codes" />
      <Card className="shadow-card mt-6">
        <CardHeader className="flex items-center justify-between gap-2 space-y-0 py-0 sm:flex-row">
          <CardTitle className="font-bold text-2xl">Discount Codes</CardTitle>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <DiscountCodeTable discountCodes={discountCodes} />
        </CardContent>
      </Card>
    </div>
  );
};

export default DiscountCodes;
