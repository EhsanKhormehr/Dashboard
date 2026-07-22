import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { FieldArrayWithId, UseFieldArrayRemove } from "react-hook-form";
import { MenuFormValue } from "../types/schema";
import MenuRow from "./menu-row";
type MenuTableProps = {
  fields: FieldArrayWithId<MenuFormValue, "subMenus", "id">[];
  remove: UseFieldArrayRemove;
};

const MenuTable = ({ fields, remove }: MenuTableProps) => {
  return (
    <Table className="min-w-[900px]">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Href</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {fields.map((field , index) => (
          <MenuRow index={index} key={field.id} onRemove={remove} />
        ))}
      </TableBody>
    </Table>
  );
};

export default MenuTable;
