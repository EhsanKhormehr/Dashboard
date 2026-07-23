import PageHeader from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MenusTable from "@/features/dashboard/menu/components/menus-table";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const Menus = () => {
  return (
    <div>
      <PageHeader title="Menus" />
      <div className="mt-6">
        <Card className="shadow-card mt-6">
          <CardHeader className="flex items-center justify-between gap-2 space-y-0 py-0 sm:flex-row">
            <CardTitle className="font-bold text-2xl">Menus</CardTitle>
            <Button
              type="button"
              className="cursor-pointer py-4.5 font-semibold"
              asChild
            >
              <Link href={"/dashboard/new-menu"}>
                New Menu
                <Plus className="size-5" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
            <MenusTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Menus;
