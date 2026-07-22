import {
  Smartphone,
  Laptop,
  Monitor,
  Tablet,
  Headphones,
  Watch,
  Camera,
  Gamepad2,
  Speaker,
  Keyboard,
  Mouse,
  Cpu,
  HardDrive,
  Cable,
  Printer,
  Tv,
  Home,
} from "lucide-react";

export const categoryIcons = {
  Smartphone,
  Laptop,
  Monitor,
  Tablet,
  Headphones,
  Watch,
  Camera,
  Gamepad2,
  Speaker,
  Keyboard,
  Mouse,
  Cpu,
  HardDrive,
  Cable,
  Printer,
  Tv,
  Home,
};

export type CategoryIconName = keyof typeof categoryIcons;

export const categoryIconOptions = Object.keys(
  categoryIcons
) as CategoryIconName[];
