"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function ToggleTheme() {
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
        className="size-[45px] rounded-full bg-surface cursor-pointer border-none shadow-sm"
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </Button>
    </div>
  );
}
