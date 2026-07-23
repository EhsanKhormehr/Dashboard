import PageHeader from "@/components/common/page-header";
import MenuForm from "@/features/dashboard/menu/components/menu-form";
import { prisma } from "@/lib/prisma";
import React from "react";

type MenuEditProps = {
  params: {
    id: string;
  };
};

const MenuEdit = async ({ params }: MenuEditProps) => {
  const { id } = await params;
  const menu = await prisma.menu.findUnique({
    where: {
      id,
    },
    include: {
      subMenus: true,
    },
  });

  if (!menu) {
    return <p>Menu Not Found</p>;
  }

  const initialData = {
    name: menu?.name,
    href: menu?.href,
    subMenus: menu?.subMenus.map((submenu) => ({
      name: submenu.name,
      href: submenu.href,
    })),
  };
  
  return (
    <div>
      <PageHeader title="Edit Menu" />
      <div className="mt-6">
        <MenuForm mode="edit" initialData={initialData} menuId={id} />
      </div>
    </div>
  );
};

export default MenuEdit;
