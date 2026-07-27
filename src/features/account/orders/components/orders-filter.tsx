import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const OrdersFilter = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center my-5">
      <form className="w-full">
        <Input
          placeholder="Search By Order ID..."
          className="bg-background rounded-3xl py-4.5 sm:max-w-[300px]"
        />
      </form>
      <div className="flex items-center sm:mt-0 mt-4">
        <Select>
          <SelectTrigger className="bg-background py-4.5 ml-4">
            <SelectValue placeholder={"Status"} />
            <SelectContent>
              <SelectGroup>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectGroup>
            </SelectContent>
          </SelectTrigger>
        </Select>
        <Select>
          <SelectTrigger className="bg-background py-4.5 ml-4">
            <SelectValue placeholder={"Date"} />
            <SelectContent>
              <SelectGroup>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectGroup>
            </SelectContent>
          </SelectTrigger>
        </Select>
        <Select>
          <SelectTrigger className="bg-background py-4.5 ml-4">
            <SelectValue placeholder={"Orders per page"} />
            <SelectContent>
              <SelectGroup>
                <SelectItem value="12">12</SelectItem>
                <SelectItem value="24">24</SelectItem>
                <SelectItem value="48">48</SelectItem>
              </SelectGroup>
            </SelectContent>
          </SelectTrigger>
        </Select>
      </div>
    </div>
  );
};

export default OrdersFilter;
