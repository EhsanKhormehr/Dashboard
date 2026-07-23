"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import React from "react";
import MenuBasicFields from "./menu-basic-fields";
import MenuTable from "./menu-table";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  menuSchema,
  MenuFormDefaultValue,
  MenuFormValue,
} from "../types/schema";
import { useCreateMenu, useUpdateMenu } from "../services/useMutation";

type MenuFormProps = {
  mode: "edit" | "create";
  initialData?: MenuFormValue;
  menuId: string;
};

const MenuForm = ({ mode, initialData, menuId }: MenuFormProps) => {
  const form = useForm<MenuFormValue>({
    resolver: zodResolver(menuSchema),
    defaultValues: initialData ?? MenuFormDefaultValue,
    mode: "onChange",
  });

  const { control, handleSubmit } = form;

  const { fields, append, remove } = useFieldArray({
    name: "subMenus",
    control,
  });

  const addSubMenu = () => {
    append({
      name: "",
      href: "",
    });
  };

  const { mutate: createMenu, isPending: isCreating } = useCreateMenu();
  const { mutate: updateMenu, isPending: isUpdating } = useUpdateMenu();

  const isPending = mode === "create" ? isCreating : isUpdating;
  const menuSubmitHandler = (data: MenuFormValue) => {
    if (mode === "create") {
      createMenu(data);
    }

    if (mode === "edit") {
      updateMenu({ id: menuId, data });
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(menuSubmitHandler)}>
        <MenuBasicFields />
        <Card className="shadow-card mt-6">
          <CardHeader className="flex items-center justify-between gap-2 space-y-0 py-0 sm:flex-row">
            <CardTitle className="font-bold text-2xl">Sub Menus</CardTitle>
            <Button
              type="button"
              className="cursor-pointer py-4.5 font-semibold"
              onClick={addSubMenu}
            >
              Add Sub Menu
              <Plus className="size-5" />
            </Button>
          </CardHeader>
          <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
            <MenuTable fields={fields} remove={remove} />
            <Button
              type="submit"
              className="cursor-pointer py-4.5 font-semibold mt-5"
            >
              {isPending
                ? mode === "create"
                  ? "Creating..."
                  : "Saving..."
                : mode === "edit"
                  ? "Save"
                  : "Create"}
              <Plus className="size-5" />
            </Button>
          </CardContent>
        </Card>
      </form>
    </FormProvider>
  );
};

export default MenuForm;
