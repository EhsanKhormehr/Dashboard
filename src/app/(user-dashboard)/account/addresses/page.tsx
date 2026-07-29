import ShopTitle from "@/components/common/shop-title";
import AddressesForm from "@/features/account/addresses/components/addresses-form";
import AddressesWrapper from "@/features/account/addresses/components/addresses-wrapper";
import React from "react";

const Addresses = () => {
  return (
    <div className="bg-surface shadow-card rounded-2xl w-full mt-5 px-4 py-8">
      <div className="flex items-center justify-between">
        <div>
          <ShopTitle title="Addresses" />
          <span className="text-xs text-muted-foreground">
            Manage your shipping addresses
          </span>
        </div>
        <div>
          <AddressesForm mode="create" />
        </div>
      </div>
      <AddressesWrapper />
    </div>
  );
};

export default Addresses;
