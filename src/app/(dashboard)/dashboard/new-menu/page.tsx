import PageHeader from "@/components/common/page-header";
import MenuForm from "@/features/dashboard/menu/components/menu-form";
import React from "react";

const NewMenu = () => {
  return (
    <div>
      <PageHeader title="New Menu" />
      <div className="mt-6">
        <MenuForm mode="create" />
      </div>
    </div>
  );
};

export default NewMenu;
