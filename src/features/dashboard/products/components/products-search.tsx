"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function ProductsSearch() {
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();
  const pathName = usePathname()
  const searchParams = useSearchParams()

  const searchProductHandler = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams(searchParams.toString())
    if (searchValue.trim()) {
      params.set("q" , searchValue)
    } else {
      params.delete("q")
    }
    router.push(`${pathName}?${params}`);
  };

  return (
    <div className="relative w-full sm:w-[260px] md:w-[350px]">
      <form onSubmit={(e) => searchProductHandler(e)}>
        <Input
          type="text"
          placeholder="Search..."
          className="bg-surface rounded-3xl pl-10 text-sm text-foreground py-5"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Search className="absolute top-1/2 text-foreground opacity-35 bottom-0 left-2 -translate-y-1/2" />
      </form>
    </div>
  );
}
