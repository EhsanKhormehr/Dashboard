"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type UpdateParamProps = {
  key: string;
  value: string | boolean;
  defaultValue?: string | boolean;
};

type updateMultipleParamProps = {
  key: string;
  value: string;
  defaultValue?: string;
  checked?: boolean;
};

export const useUpdateUrlParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const getParam = (key: string) => searchParams.get(key);
  const getParams = (key: string) => searchParams.getAll(key);
  const updateParam = ({ key, value, defaultValue }: UpdateParamProps) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "" || value === "DEFAULT" || value === defaultValue) {
      params.delete(key);
    } else {
      params.set(key, String(value));
    }
    router.replace(`${pathname}?${params.toString()}`);
  };
  const updatePriceParams = (min: number, max: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (min === 0) {
      params.delete("min");
    } else {
      params.set("min", String(min));
    }
    if (max === 100) {
      params.delete("max");
    } else {
      params.set("max", String(max));
    }

    router.replace(`${pathname}?${params.toString()}`);
  };
  const updateMultipleParam = ({
    key,
    value,
    defaultValue,
    checked,
  }: updateMultipleParamProps) => {
    const params = new URLSearchParams(searchParams.toString());
    const values = params.getAll(key);
    params.delete(key);
    const nextValues = checked
      ? Array.from(new Set([...values, value]))
      : values.filter((item) => item !== value);

    nextValues.forEach((item) => params.append(key, item));
    router.replace(`${pathname}?${params.toString()}`);
  };
  const clearParams = () => {
    router.replace(pathname);
  };
  return {
    updateParam,
    getParam,
    updatePriceParams,
    updateMultipleParam,
    clearParams,
    getParams
  };
};
