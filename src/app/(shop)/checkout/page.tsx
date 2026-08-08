import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import CartSummary from "@/features/shop/cart/components/cart-summary";
import CheckoutAddresses from "@/features/shop/checkout/components/checkout-addresses";
import CheckoutDelivery from "@/features/shop/checkout/components/checkout-delivery";
import CheckoutDiscount from "@/features/shop/checkout/components/checkout-discount";
import CheckoutPayment from "@/features/shop/checkout/components/checkout-payment";
import React from "react";

const Checkout = () => {
  return (
    <MaxWidthWrapper className="grid grid-cols-12 gap-y-8 lg:gap-8 my-15">
      <div className="col-span-12 lg:col-span-8 ">
        <CheckoutAddresses />
        <CheckoutDelivery />
        <CheckoutPayment />
      </div>
      <div className="col-span-12 lg:col-span-4 ">
        <CartSummary />
        <CheckoutDiscount/>
      </div>
    </MaxWidthWrapper>
  );
};

export default Checkout;
