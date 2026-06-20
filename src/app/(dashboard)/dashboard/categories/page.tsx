import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CategoriesTable from "@/features/dashboard/categories/components/categories-table";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Categories() {
  return (
    <div>
      <h1 className="font-bold text-3xl">Categories</h1>
      <Card className="shadow-card mt-6">
        <CardHeader className="flex items-center justify-between gap-2 space-y-0 py-0 sm:flex-row">
          <CardTitle className="font-bold text-2xl">Categories</CardTitle>
          <Button
            type="button"
            className="cursor-pointer py-4.5 font-semibold"
            asChild
          >
            <Link href={"/dashboard/new-category"}>
              New Category
              <Plus className="size-5" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <CategoriesTable />
        </CardContent>
      </Card>
    </div>
  );
}
