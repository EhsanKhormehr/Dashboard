import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import ShopTitle from "@/components/common/shop-title";
import React from "react";
import CartProduct from "./cart-product";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CartWrapper = () => {
  return (
    <MaxWidthWrapper className="grid grid-cols-1 gap-12 my-20 md:grid-cols-2 ">
      <div>
        <ShopTitle title="Shopping Cart" />
        <div className="mt-10">
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </div>
      </div>
      <div>
        <form className="py-14 px-4">
          <ShopTitle title="Order Summary" />
          <FieldGroup className="mt-10">
            <Field>
              <FieldLabel>Discount code / Promo code</FieldLabel>
              <Input type="text" placeholder="Code" className="text-sm py-7" />
            </Field>
          </FieldGroup>
          <div className="mt-6">
            <div className="flex justify-between">
                <span className="font-bold">Subtotal</span>
                <span className="font-bold">$2347</span>
            </div>
          </div>
          <Button type="submit" className="mt-12 bg-black hover:bg-black/80 w-full py-7">Checkout</Button>
        </form>
      </div>
    </MaxWidthWrapper>
  );
};

export default CartWrapper;
