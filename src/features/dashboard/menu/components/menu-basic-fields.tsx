"use client";
import { FieldGroup } from "@/components/ui/field";
import React from "react";
import { MenuFormValue } from "../types/schema";
import ControlledInput from "@/components/common/controlled-input";

const MenuBasicFields = () => {
  return (
    <FieldGroup>
      <ControlledInput<MenuFormValue>
        name="name"
        type="text"
        placeholder="Name"
        className="bg-surface rounded-3xl text-sm text-foreground py-5 sm:max-w-[300px]"
        label="Name"
      />
      <ControlledInput<MenuFormValue>
        name="href"
        type="text"
        placeholder="Href"
        className="bg-surface rounded-3xl text-sm text-foreground py-5 sm:max-w-[300px]"
        label="Href"
      />
    </FieldGroup>
  );
};

export default MenuBasicFields;
