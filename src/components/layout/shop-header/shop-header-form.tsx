import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const ShopHeaderForm = () => {
  return (
    <div className="relative w-[350px] hidden lg:inline">
      <form >
        <Input type="text" placeholder="Search..." className="rounded-4xl pl-10 py-5 bg-muted text-muted-foreground" /> 
        <Search className="absolute top-1/2 left-3 -translate-y-1/2 pointer-events-none text-muted-foreground" />
      </form>
    </div>
  );
};

export default ShopHeaderForm;
