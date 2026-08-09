import ShopTitle from "@/components/common/shop-title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SlidersHorizontal } from "lucide-react";
import React from "react";

const specifications = [
  { feature: "Processor", details: "Intel Core i7-13650HX, 14 cores" },
  { feature: "Graphics", details: "NVIDIA GeForce RTX 4060 8GB GDDR6" },
  { feature: "Memory", details: "16GB DDR5 4800MHz" },
  { feature: "Storage", details: "1TB PCIe Gen4 NVMe SSD" },
  { feature: "Display", details: '16" FHD+ IPS, 165Hz refresh rate' },
  { feature: "Operating System", details: "Windows 11 Home" },
  { feature: "Battery", details: "90Wh, fast charging support" },
  { feature: "Connectivity", details: "Wi-Fi 6E, Bluetooth 5.3" },
  { feature: "Ports", details: "USB-C, HDMI 2.1, USB-A, RJ45, Audio Jack" },
  { feature: "Weight", details: "2.5 kg" },
];

const ProductSpecifications = () => {
  return (
    <div className="mt-5 bg-surface shadow-soft-card rounded-xl p-5">
      <div className="flex items-center">
        <SlidersHorizontal className="text-primary size-[25px]" />
        <ShopTitle
          title="Specifications"
          isShape={false}
          className="ml-2 font-black"
        />
      </div>
      <Table className="mt-5">
        <TableHeader>
          <TableRow>
            <TableHead>Feature</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {specifications.map((specific) => (
            <TableRow>
              <TableCell className="font-bold py-4">{specific.feature}</TableCell>
              <TableCell className="py-4">{specific.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductSpecifications;
