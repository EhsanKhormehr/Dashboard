"use client";
import ConfirmDialog from "@/components/common/confirm-dialog";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDeleteProduct } from "../../products/services/useMutation";

type ProductStockRowProps = {
  id: string;
  name: string;
  price: number;
  category: string;
};

export default function ProductStockRow({
  id,
  category,
  name,
  price,
}: ProductStockRowProps) {
  const { mutate } = useDeleteProduct();
  const deleteProductHandler = () => {
    mutate(id);
  };
  return (
    <TableRow key={id}>
      <TableCell>
        <Image src={"/apple-watch1.png"} width={60} height={60} alt="product" />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{category}</TableCell>
      <TableCell>${price}</TableCell>
      <TableCell>63</TableCell>
      <TableCell>
        <div className="flex items-center">
          <div className="bg-black size-5 mr-2 rounded-full"></div>
          <div className="bg-amber-500 size-5 mr-2 rounded-full"></div>
          <div className="bg-blue-500 size-5 mr-2 rounded-full"></div>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex">
          <Button
            className="cursor-pointer border-0 py-2 px-3 rounded-sm"
            variant={"outline"}
            asChild
          >
            <Link href={`/dashboard/products/${id}/edit`}>
              <SquarePen className="size-[17px]" />
            </Link>
          </Button>
          <ConfirmDialog
            trigger={
              <Button
                className="cursor-pointer py-2 px-3 rounded-sm ml-2"
                variant={"destructive"}
              >
                <Trash2 className="size-[17px] text-destructive" />
              </Button>
            }
            cancelText="Cancle"
            confirmText="Delete"
            cancelVariant="outline"
            confirmVariant="destructive"
            title="Are you sure to delete this product?"
            onConfirm={deleteProductHandler}
          />
        </div>
      </TableCell>
    </TableRow>
  );
}
