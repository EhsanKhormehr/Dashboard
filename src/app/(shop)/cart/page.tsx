import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import CartSummary from "@/features/shop/cart/components/cart-summary";
import CartWrapper from "@/features/shop/cart/components/cart-wrapper";
import React from "react";

const Cart = () => {
  return (
    <MaxWidthWrapper className="grid grid-cols-12 my-15 gap-8">
      <CartWrapper />
      <CartSummary />
    </MaxWidthWrapper>
  );
};

export default Cart;
