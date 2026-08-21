import { useDebounce } from "@/lib/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type UseDebouncedSearchParamsProps = {
  key?: string;
  delay?: number;
};

export const useDebouncedSearchParams = ({
  key = "search",
  delay = 500,
}: UseDebouncedSearchParamsProps = {}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchValue, setSearchValue] = useState(searchParams.get(key) ?? "");
  const debouncedSearch = useDebounce(searchValue, delay);
  useEffect(() => {
    const currentSearch = searchParams.get(key) ?? "";
    if (currentSearch === debouncedSearch) return;

    const params = new URLSearchParams(searchParams.toString());
    if (debouncedSearch.trim()) {
      params.set(key, debouncedSearch);
    } else {
      params.delete(key);
    }

    router.replace(`${pathname}?${params}`);
  }, [debouncedSearch]);
  return [searchValue, setSearchValue] as const;
};
