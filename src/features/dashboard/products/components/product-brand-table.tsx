"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BrandGetPayload } from "../../../../../generated/prisma/models";
import ConfirmDialog from "@/components/common/confirm-dialog";
import { useDeleteBrand } from "../services/useMutation";

type ProductBrandTableProps = {
  brands: BrandGetPayload<{
    include: {
      _count: {
        select: {
          products: true;
        };
      };
    };
  }>[];
};

const ProductBrandTable = ({ brands }: ProductBrandTableProps) => {
  const { mutate: deleteBrand } = useDeleteBrand();
  return (
    <Table className="min-w-[900px]">
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Slug</TableHead>
          <TableHead>Logo</TableHead>
          <TableHead>Products</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Updated At</TableHead>
          <TableHead>Edit</TableHead>
          <TableHead>Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {brands.map((brand) => (
          <TableRow key={brand.id}>
            <TableCell>{brand.id}</TableCell>
            <TableCell>{brand.name}</TableCell>
            <TableCell>{brand.slug}</TableCell>
            <TableCell>
              <Image
                src={brand.logo}
                width={500}
                height={500}
                alt="logo"
                className="w-[70px] h-[40px] invert"
              />
            </TableCell>
            <TableCell>{brand._count.products}</TableCell>
            <TableCell>{new Date(brand.createdAt).toDateString()}</TableCell>
            <TableCell>{new Date(brand.updatedAt).toDateString()}</TableCell>
            <TableCell>
              <Button variant={"outline"} asChild>
                <Link href={`/dashboard/brands/${brand.slug}/edit`}>Edit</Link>
              </Button>
            </TableCell>
            <TableCell>
              <ConfirmDialog
                trigger={
                  <Button variant={"destructive"} className="cursor-pointer">
                    Delete
                  </Button>
                }
                cancelText="Cancel"
                confirmText="Delete"
                cancelVariant="outline"
                confirmVariant="destructive"
                onConfirm={() => deleteBrand(brand.id)}
                title="Are you sure to delete brand?"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductBrandTable;
