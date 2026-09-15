"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type ToggleThemeProps = {
  className?: string;
};

export default function ToggleTheme({ className }: ToggleThemeProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div>
      <Button
        variant={"outline"}
        asChild
        className={cn(
          "size-[45px] rounded-full bg-surface cursor-pointer border-none shadow-sm",
          className,
        )}
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </Button>
    </div>
  );
}
