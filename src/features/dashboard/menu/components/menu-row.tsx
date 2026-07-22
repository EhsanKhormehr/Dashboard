"use client";
import ConfirmDialog from "@/components/common/confirm-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TableCell, TableRow } from "@/components/ui/table";
import { Trash2 } from "lucide-react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { MenuFormValue, SubMenuFormValue } from "../types/schema";
import ErrorMessage from "@/components/common/error-message";

type MenuRowProps = {
  onRemove: () => void;
  index: number;
};

const MenuRow = ({ onRemove, index }: MenuRowProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<MenuFormValue>();

  return (
    <TableRow>
      <TableCell>
        <Controller
          control={control}
          name={`subMenus.${index}.name`}
          render={({ field }) => (
            <Input placeholder="Name" className="!bg-surface" {...field} />
          )}
        />
        {errors.subMenus?.[index]?.name && (
          <ErrorMessage text={errors.subMenus[index].name.message} />
        )}  
      </TableCell>
      <TableCell>
        <Controller
          control={control}
          name={`subMenus.${index}.href`}
          render={({ field }) => (
            <Input placeholder="Href" className="!bg-surface" {...field} />
          )}
        />
        {errors.subMenus?.[index]?.href && (
          <ErrorMessage text={errors.subMenus[index].href.message} />
        )}
      </TableCell>
      <TableCell>
        <ConfirmDialog
          trigger={
            <Button
              type="button"
              variant={"destructive"}
              className="cursor-pointer"
            >
              <Trash2 />
              Delete
            </Button>
          }
          title="Are you sure to delete this field?"
          cancelText="Cancel"
          confirmText="Delete"
          confirmVariant="destructive"
          onConfirm={onRemove}
        />
      </TableCell>
    </TableRow>
  );
};

export default MenuRow;
