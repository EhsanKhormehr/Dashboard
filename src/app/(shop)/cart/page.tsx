import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import CartWrapper from "@/features/shop/cart/components/cart-wrapper";
import OrderSummery from "@/features/shop/shared/components/order-summery";
import React from "react";

const Cart = () => {
  return (
    <MaxWidthWrapper className="grid grid-cols-12 my-15 lg:gap-8 gap-y-8">
      <CartWrapper />
      <OrderSummery isCart={true} />
    </MaxWidthWrapper>
  );
};

export default Cart;
