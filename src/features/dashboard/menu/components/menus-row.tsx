"use client";
import React from "react";
import ConfirmDialog from "@/components/common/confirm-dialog";

import { Button } from "@/components/ui/button";

import { TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { useDeleteMenu } from "../services/useMutation";
import SubMenuDialog from "./submenu-dialog";
import { Menu } from "@/types/menu";

type MenusRowProps = {
  menu: Menu;
};

const MenusRow = ({ menu }: MenusRowProps) => {
  const { mutate } = useDeleteMenu();
  return (
    <TableRow>
      <TableCell>{menu.name}</TableCell>
      <TableCell>
        <Link href={menu.href.startsWith("/") ? menu.href : `/${menu.href}`}>
          {menu.href}
        </Link>
      </TableCell>
      <TableCell>
        {menu.subMenus.length === 0 ? (
          <Button>
            <Link href={`/dashboard/menus/${menu.id}/edit`}>Add Sub Menu</Link>
          </Button>
        ) : (
          <SubMenuDialog subMenus={menu.subMenus} baseHref={menu.href} menuName={menu.name} />
        )}
      </TableCell>
      <TableCell>{new Date(menu.createdAt).toLocaleDateString()}</TableCell>
      <TableCell>
        <Button
          type="button"
          className="cursor-pointer px-4 font-semibold"
          variant={"outline"}
          asChild
        >
          <Link href={`/dashboard/menus/${menu.id}/edit`}>Edit</Link>
        </Button>
      </TableCell>
      <TableCell>
        <ConfirmDialog
          trigger={
            <Button
              type="button"
              className="cursor-pointer px-4 font-semibold"
              variant={"destructive"}
            >
              Delete
            </Button>
          }
          title="Are you sure to delete this menu?"
          confirmText="Delete"
          cancelText="Cancel"
          confirmVariant="destructive"
          cancelVariant="outline"
          onConfirm={() => mutate(menu.id)}
        />
      </TableCell>
    </TableRow>
  );
};

export default MenusRow;
