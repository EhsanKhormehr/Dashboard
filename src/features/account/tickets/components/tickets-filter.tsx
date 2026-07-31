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

const TicketsFilter = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center my-5">
      <form className="w-full">
        <Input
          placeholder="Search tickets..."
          className="bg-background rounded-3xl py-4.5 sm:max-w-[300px]"
        />
      </form>
      <div className="flex items-center sm:mt-0 mt-4">
        <Select>
          <SelectTrigger className="bg-background py-4.5 ml-4">
            <SelectValue placeholder={"Status"} />
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Open">Open</SelectItem>
                <SelectItem value="answered">Answered</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectGroup>
            </SelectContent>
          </SelectTrigger>
        </Select>
        <Select>
          <SelectTrigger className="bg-background py-4.5 ml-4">
            <SelectValue placeholder={"Category"} />
            <SelectContent>
              <SelectGroup>
                <SelectItem value="shipping">Shipping</SelectItem>
                <SelectItem value="payment">Payment</SelectItem>
                <SelectItem value="return">Return</SelectItem>
              </SelectGroup>
            </SelectContent>
          </SelectTrigger>
        </Select>
        <Select>
          <SelectTrigger className="bg-background py-4.5 ml-4">
            <SelectValue placeholder={"Tickets per page"} />
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

export default TicketsFilter;
