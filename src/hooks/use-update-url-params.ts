"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type UpdateParamProps = {
  key: string;
  value: string;
  defaultValue?: string;
};

export const useUpdateUrlParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const getParam = (key: string) => searchParams.get(key);

  const updateParam = ({ key, value, defaultValue }: UpdateParamProps) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "" || value === "DEFAULT" || value === defaultValue) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.replace(`${pathname}?${params.toString()}`);
  };
  return { updateParam, getParam };
};
