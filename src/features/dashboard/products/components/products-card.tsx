import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProductsCardProps = {
  id : string
  thumbnail : string
  name : string
  price : number
  rate : string
  rateCount : string
}

function ProductsCard(data:ProductsCardProps) {
  return (
    <div className="bg-surface shadow-card rounded-3xl overflow-hidden">
      <div className="relative h-[300px] w-full overflow-hidden ">
        <Image
          src={data.thumbnail}
          alt={"/apple-watch1.png"}
          fill
          className="object-cover aspect-video"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <Link href={"/products"} className="font-bold text-[18px]">
              {data.name}
            </Link>
            <span className="text-primary font-bold mt-1">$ {data.price}</span>
          </div>
          <Heart className="size-7 cursor-pointer" />
        </div>
        <div className="flex my-5 items-center">
          <Star className="fill-rating text-rating cursor-pointer" />
          <Star className="ml-[1px] fill-rating text-rating cursor-pointer" />
          <Star className="ml-[1px] fill-rating text-rating cursor-pointer" />
          <Star className="ml-[1px] fill-rating text-rating cursor-pointer" />
          <Star className="ml-[1px] text-black opacity-20 fill-black cursor-pointer" />
          <span className="text-dashboard-text font-semibold text-sm ">
            ({data.rateCount})
          </span>
        </div>
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button className="bg-[var(--soft)] text-surface-foreground text-sm font-bold py-5 px-7 cursor-pointer hover:text-primary-foreground hover:bg-primary hover:-translate-y-0.5">
                <Link href={`/dashboard/products/${data.id}/edit`}>
                Edit Product
                </Link>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Product</DialogTitle>
              </DialogHeader>
              <FieldGroup>
                <Field>
                  <FieldLabel>name</FieldLabel>
                  <Input type="text" placeholder="name" className="bg-soft"/>
                </Field>
                
                <Button type="submit" className="cursor-pointer">Save</Button>
              </FieldGroup>
            </DialogContent>
          </form>
        </Dialog>
      </div>
    </div>
  );
}

export default ProductsCard;
