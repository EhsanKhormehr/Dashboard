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
import ControlledInput from "@/components/common/controlled-input";

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
        <ControlledInput<MenuFormValue>
          name={`subMenus.${index}.name`}
          type="text"
          placeholder="Name"
          className="!bg-surface"
        />
      </TableCell>
      <TableCell>
        <ControlledInput<MenuFormValue>
          name={`subMenus.${index}.href`}
          type="text"
          placeholder="Href"
          className="!bg-surface"
        />
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
