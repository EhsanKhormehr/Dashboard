import PageHeader from "@/components/common/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DiscountCodeForm from "@/features/dashboard/products/components/discount-code-form";
import { getDiscountCodeById } from "@/features/dashboard/products/services/actions";
import { DiscountCodeFormValues } from "@/features/dashboard/products/types/schema";
import React from "react";

type EditDiscountCodeProps = {
  params: Promise<{
    id: string;
  }>;
};

const EditDiscountCode = async ({ params }: EditDiscountCodeProps) => {
  const urlParams = await params;
  const discountId = urlParams.id;

  const discountCode = await getDiscountCodeById(discountId);
  if (!discountCode) return;

  const initalValue: DiscountCodeFormValues = {
    code: discountCode.code,
    discountType: discountCode.discountType,
    name: discountCode.name,
    usageLimit: discountCode.usageLimit,
    amount: discountCode.amount ?? undefined,
    percentage: discountCode.percentage ?? undefined,
    startDate: discountCode.startDate ?? undefined,
    endDate: discountCode.endDate ?? undefined,
  };

  return (
    <div>
      <PageHeader title="Edit Discount Code" />
      <Card className="shadow-card mt-6">
        <CardHeader className="flex items-center justify-between gap-2 space-y-0 py-0 sm:flex-row">
          <CardTitle className="font-bold text-2xl">
            Edit Discount Code
          </CardTitle>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <DiscountCodeForm
            mode="edit"
            initialValue={initalValue}
            id={discountCode.id}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default EditDiscountCode;
