import { Input } from "@/components/ui/input";
import React from "react";

const HeaderForm = () => {
  return (
    <form className=" hidden lg:flex">
      <Input
        placeholder="Search,something like laptop"
        className="rounded-full bg-surface w-xl xl:w-3xl py-5"
      />
    </form>
  );
};

export default HeaderForm;
