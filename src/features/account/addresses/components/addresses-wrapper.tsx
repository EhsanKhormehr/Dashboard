"use client";
import React from "react";
import AddressCard from "./address-card";
import { useGetAddresses } from "../services/useQueries";

const AddressesWrapper = () => {
  const { data } = useGetAddresses();

  return (
    <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {data?.map((address) => (
        <AddressCard data={address ?? []} key={address.id}/>
      ))}
    </div>
  );
};

export default AddressesWrapper;
