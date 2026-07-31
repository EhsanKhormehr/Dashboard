"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import React from "react";

const TicketsForm = () => {
  const router = useRouter();
  return (
    <form className=" rounded-sm p-4">
      <FieldSet>
        <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field className="col-span-2 sm:col-span-1">
            <FieldLabel>Subject</FieldLabel>
            <Input
              placeholder="Please enter subject"
              type="text"
              className="bg-background"
            />
          </Field>
          <Field className="col-span-2 sm:col-span-1">
            <FieldLabel>Category</FieldLabel>
            <Select>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="order">order</SelectItem>
                  <SelectItem value="payment">payment</SelectItem>
                  <SelectItem value="shipping">shipping</SelectItem>
                  <SelectItem value="return">return</SelectItem>
                  <SelectItem value="technical">technical</SelectItem>
                  <SelectItem value="other">other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Field className="col-span-2">
            <FieldLabel>Message</FieldLabel>
            <Textarea
              className="bg-background h-[200px]"
              placeholder="Enter your message"
            ></Textarea>
          </Field>
        </FieldGroup>
        <div className="flex justify-end mt-5">
          <Button
            className="py-4 cursor-pointer mr-3"
            variant={"outline"}
            type="button"
            onClick={() => router.push("/account/tickets")}
          >
            Cancel
          </Button>
          <Button className="py-4 cursor-pointer" type="submit">Submit Ticket</Button>
        </div>
      </FieldSet>
    </form>
  );
};

export default TicketsForm;
