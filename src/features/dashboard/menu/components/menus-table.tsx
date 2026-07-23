"use client";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { useGetMenus } from "../services/useQueries";
import MenusRow from "./menus-row";

const MenusTable = () => {
  const { data } = useGetMenus();

  return (
    <Table className="min-w-[900px]">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Href</TableHead>
          <TableHead>Sub Menu</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Edit</TableHead>
          <TableHead>Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((menu) => (
          <MenusRow menu={menu} key={menu.id} />
        ))}
      </TableBody>
    </Table>
  );
};

export default MenusTable;
