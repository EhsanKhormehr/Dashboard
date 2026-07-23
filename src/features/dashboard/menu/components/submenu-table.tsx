import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { SubMenu } from "@/types/menu";

type SubMenuTable = {
  subMenus: SubMenu[];
  baseHref: string;
};

const SubMenuTable = ({ baseHref, subMenus }: SubMenuTable) => {
  return (
    <Table className="min-w-[900px]">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Href</TableHead>
          <TableHead>Created At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {subMenus.map((submenu) => (
          <TableRow key={submenu.id}>
            <TableCell>{submenu.name}</TableCell>
            <TableCell>
              <Link
                href={
                  submenu.href.startsWith("/")
                    ? `${baseHref}/${submenu.href}`
                    : `/${baseHref}/${submenu.href}`
                }
              >
                {submenu.href}
              </Link>
            </TableCell>
            <TableCell>
              {new Date(submenu.createdAt).toLocaleDateString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SubMenuTable;
