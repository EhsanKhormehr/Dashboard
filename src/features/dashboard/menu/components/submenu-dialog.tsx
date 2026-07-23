import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { SubMenu } from "@/types/menu";
import SubMenuTable from "./submenu-table";

type SubMenuDialogProps = {
  subMenus: SubMenu[];
  baseHref: string;
  menuName: string;
};

const SubMenuDialog = ({
  baseHref,
  subMenus,
  menuName,
}: SubMenuDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">view</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <DialogHeader>
          <DialogTitle>Sub Menus</DialogTitle>
          <DialogDescription>
            Sub Menu for <span>{menuName}</span>
          </DialogDescription>
        </DialogHeader>
        <SubMenuTable baseHref={baseHref} subMenus={subMenus} />
      </DialogContent>
    </Dialog>
  );
};

export default SubMenuDialog;
