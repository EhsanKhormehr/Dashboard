"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductGetPayload } from "../../../../../generated/prisma/models";
import { Badge } from "@/components/ui/badge";
import { useDeleteProduct } from "../services/useMutation";
import ConfirmDialog from "@/components/common/confirm-dialog";

export const productStockVariants = {
  INSTOCK:
    "border-green-200 bg-green-100 text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400",

  OUTOFSTOCK:
    "border-red-200 bg-red-100 text-red-700 dark:border-red-800 dark:bg-red-900/30 dark:text-red-400",
} as const;

export const productStockLabel = {
  INSTOCK: "In Stock",
  OUTOFSTOCK: "Out of Stock",
};

type ProductsTableProps = {
  products: ProductGetPayload<{
    include: {
      category: true;
    };
  }>[];
};

const ProductsTable = ({ products }: ProductsTableProps) => {
  const { mutate: deleteProduct } = useDeleteProduct();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Thumbnail</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Updated At</TableHead>
          <TableHead>Edit</TableHead>
          <TableHead>Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => {
          const productsStatus = product.stock === 0 ? "OUTOFSTOCK" : "INSTOCK";

          return (
            <TableRow key={product.id}>
              <TableCell>
                <Image
                  width={500}
                  height={500}
                  src={product.thumbnail}
                  alt="product"
                  className="object-cover aspect-video w-[70px] h-[40px] rounded-md"
                />
              </TableCell>
              <TableCell>
                <Link href={`/products/${product.slug}`}>{product.name}</Link>
              </TableCell>
              <TableCell>{product.category.name}</TableCell>
              <TableCell>${product.price.toLocaleString("en-US")}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>
                <Badge className={`${productStockVariants[productsStatus]}`}>
                  {productStockLabel[productsStatus]}
                </Badge>
              </TableCell>
              <TableCell>
                {new Date(product.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {" "}
                {new Date(product.updatedAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <Button variant={"outline"} asChild>
                  <Link href={`/dashboard/products/${product.id}/edit`}>
                    Edit
                  </Link>
                </Button>
              </TableCell>
              <TableCell>
                <ConfirmDialog
                  trigger={<Button variant={"destructive"} className="cursor-pointer">Delete</Button>}
                  cancelText="Cancel"
                  confirmText="Delete"
                  cancelVariant="outline"
                  confirmVariant="destructive"
                  title="Are you sure to delete this product?"
                  onConfirm={() => deleteProduct(product.id)}
                />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ProductsTable;
