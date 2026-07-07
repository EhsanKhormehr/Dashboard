import PageHeader from "@/components/common/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MyAccountForm from "@/features/dashboard/my-account/components/my-account-form";
import React from "react";

export default function page() {
  return (
    <div>
      <PageHeader title="Manage Account" />

      <Card className="shadow-card mt-6">
        <CardHeader className="flex items-center justify-between gap-2 space-y-0 py-0 sm:flex-row">
          <CardTitle className="font-bold text-2xl">Manage Account</CardTitle>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <MyAccountForm />
        </CardContent>
      </Card>
    </div>
  );
}
