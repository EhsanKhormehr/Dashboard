"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { AddressItem } from "../types/types";
import {
  useDeleteAddress,
  useMakeAddressDefault,
} from "../services/useMutation";
import ConfirmDialog from "@/components/common/confirm-dialog";
import AddressesForm from "./addresses-form";
import { AddressFormValue } from "../types/schema";

type AddressCardProps = {
  data: AddressItem;
};

const AddressCard = ({ data }: AddressCardProps) => {
  const { mutate: makeAddressDefault } = useMakeAddressDefault();
  const { mutate: deleteAddress } = useDeleteAddress();

  const initialData:AddressFormValue = {
    province: data.province,
    city: data.city,
    street: data.street,
    buildingNo: data.buildingNo,
    postalCode: data.postalCode,
    phoneNumber: data.phoneNumber,
    recipientName: data.recipientName,
    addressLabel: data.addressLabel ?? "",
    unit: data.unit ?? "",
  };

  return (
    <div className="shadow-soft-card rounded-xl bg-background">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="font-bold">{data.addressLabel}</span>
          {data.isDefault === true && (
            <Badge className="text-xs font-semibold">
              Default
            </Badge>
          )}
        </div>
        <span className="mt-4 block text-sm text-dashboard-text/80 font-semibold">
          {data.province} , {data.city} , {data.street} , {data.buildingNo}{" "}
          {data.unit && ` , ${data.unit}`}
        </span>
        <div className="flex flex-col *:text-[15px] *:font-bold mt-4">
          <span>Recipient : {data.recipientName}</span>
          <span>Phone Number : {data.phoneNumber}</span>
          <span>Postal Code : {data.postalCode}</span>
        </div>
      </div>

      <div className="flex justify-end border-t p-3">
        {data.isDefault === false && (
          <Button
            variant={"outline"}
            className="mr-4"
            size={"sm"}
            onClick={() => makeAddressDefault(data.id)}
          >
            Make Default
          </Button>
        )}

        <AddressesForm mode="edit" initialData={initialData} addressId={data.id} />
        
        <ConfirmDialog
          trigger={
            <Button variant={"destructive"} size={"sm"}className="cursor-pointer">
              Delete
            </Button>
          }
          cancelText="Cancel"
          confirmText="Delete"
          confirmVariant="destructive"
          cancelVariant="outline"
          title="Are you sure to delete this address?"
          onConfirm={() => deleteAddress(data.id)}
        />
      </div>
    </div>
  );
};

export default AddressCard;
