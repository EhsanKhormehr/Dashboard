"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getFilteredProducts } from "../products/services/actions";
import ConfirmDialog from "@/components/common/confirm-dialog";
import { useDeleteProduct } from "../products/services/useMutation";
import ProductStockRow from "./product-stock-row";
import { useFilteredProducts } from "../products/services/useQueries";

type ProductsProps = {
  searchParams: {
    q?: string;
    sortBy?: string;
    category?: string;
    page?: string;
    limit?: string;
    minPrice?: string;
    maxPrice?: string;
  };
};

export default function ProductStockTable({ searchParams }: ProductsProps) {
  const { data: filteredProducts } = useFilteredProducts(searchParams);
  return (
    <Table className="min-w-[1000px]">
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Piece</TableHead>
          <TableHead>Available Color</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredProducts?.products.map((product) => (
          <ProductStockRow
            id={product.id}
            category={product.category.name}
            name={product.name}
            price={product.price}
            key={product.id}
          />
        ))}
      </TableBody>
    </Table>
  );
}
