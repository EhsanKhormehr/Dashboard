import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React from "react";

type ProductsSwitchButtonProps = {
  labelValue: string;
  idValue: string;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
};

const ProductsSwitchButton = ({
  labelValue,
  idValue,
  onCheckedChange,
  checked,
}: ProductsSwitchButtonProps) => {
  return (
    <div className="flex justify-between items-center mt-4 px-2">
      <Label htmlFor={idValue} className="font-semibold">
        {labelValue}
      </Label>
      <Switch
        onCheckedChange={onCheckedChange}
        id={idValue}
        checked={checked}
        className="cursor-pointer !h-7 !w-12 [&>span]:bg-muted-foreground/65 [&>span]:!size-6 [&>span]:data-[state=checked]:translate-x-5 [&>span]:data-[state=checked]:bg-primary data-[state=checked]:bg-primary/30 "
      />
    </div>
  );
};

export default ProductsSwitchButton;
