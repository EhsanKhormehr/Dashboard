import { Button } from "@/components/ui/button";
import {
  BadgeDollarSign,
  Bell,
  Handbag,
  PackageCheck,
  PackageX,
  RotateCcw,
  ShieldCheck,
  Truck,
} from "lucide-react";

const purchaseBenefits = [
  {
    label: "Free Shipping",
    icon: Truck,
  },
  {
    label: "18-Month Warranty",
    icon: ShieldCheck,
  },
  {
    label: "7-Day Return",
    icon: RotateCcw,
  },
];

type ProductPurchasePanelProps = {
  price: number;
  stock: number;
};

const ProductPurchasePanel = ({ price, stock }: ProductPurchasePanelProps) => {
  const isInStock = stock > 0 ? true : false;
  return (
    <aside className="col-span-12 self-start rounded-2xl bg-surface shadow-soft-card px-4 py-5 lg:sticky lg:top-5 lg:col-span-3">
      <div className="rounded-2xl border border-border/70 bg-surface-foreground/5 p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-sm font-bold text-muted-foreground">
              Price
            </span>

            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-3xl font-black tracking-tight text-foreground">
                ${price}
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                USD
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground/70">Final price</p>
          </div>
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground">
            <BadgeDollarSign className="size-5" />
          </div>
        </div>
      </div>
      {isInStock && (
        <div className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3.5 text-sm font-bold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400">
          <PackageCheck className="size-5" />
          <span>In Stock</span>
        </div>
      )}
      {!isInStock && (
        <div className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm font-bold text-red-600 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400">
          <PackageX className="size-5" />
          <span>Out of Stock</span>
        </div>
      )}

      <Button className="mt-5 h-12 w-full gap-2 text-base font-bold" disabled={!isInStock}>
        <Handbag className="size-5" />
        Add To Cart
      </Button>

      <div className="mt-5 space-y-3 border-t border-border/70 pt-5">
        {purchaseBenefits.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-3 text-sm font-medium text-muted-foreground"
          >
            <div className="flex size-9 items-center justify-center rounded-xl bg-surface-foreground/5 text-primary">
              <Icon className="size-4" />
            </div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ProductPurchasePanel;
