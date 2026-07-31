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
import { Controller, useForm } from "react-hook-form";
import React from "react";
import {
  ticketDefaultValues,
  TicketFormValues,
  ticketSchema,
} from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "@/components/common/error-message";
import { useCreateTicket } from "../services/useMutation";

const TicketsForm = () => {
  const router = useRouter();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<TicketFormValues>({
    resolver: zodResolver(ticketSchema),
    defaultValues: ticketDefaultValues,
  });

  const { mutate } = useCreateTicket();

  const ticketSubmitHandler = (data: TicketFormValues) => {
    mutate(data);
  };

  return (
    <form
      className="rounded-sm p-4"
      onSubmit={handleSubmit(ticketSubmitHandler)}
    >
      <FieldSet>
        <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field className="col-span-2 sm:col-span-1">
            <FieldLabel>Subject</FieldLabel>
            <Controller
              control={control}
              name="subject"
              render={({ field }) => (
                <Input
                  placeholder="Please enter subject"
                  type="text"
                  className="bg-background"
                  {...field}
                />
              )}
            />
            {errors.subject && <ErrorMessage text={errors.subject.message} />}
          </Field>
          <Field className="col-span-2 sm:col-span-1">
            <FieldLabel>Category</FieldLabel>
            <Controller
              control={control}
              name="category"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="ORDER">Order</SelectItem>
                      <SelectItem value="PAYMENT">Payment</SelectItem>
                      <SelectItem value="SHIPPING">Shipping</SelectItem>
                      <SelectItem value="RETURN">Return</SelectItem>
                      <SelectItem value="TECHNICAL">Technical</SelectItem>
                      <SelectItem value="OTHER">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.category && <ErrorMessage text={errors.category.message} />}
          </Field>
          <Field className="col-span-2">
            <FieldLabel>Message</FieldLabel>
            <Controller
              control={control}
              name="message"
              render={({ field }) => (
                <Textarea
                  value={field.value}
                  className="bg-background h-[200px]"
                  placeholder="Enter your message"
                  onChange={(event) => field.onChange(event.target.value)}
                ></Textarea>
              )}
            />
            {errors.message && <ErrorMessage text={errors.message.message} />}
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
          <Button className="py-4 cursor-pointer" type="submit">
            Submit Ticket
          </Button>
        </div>
      </FieldSet>
    </form>
  );
};

export default TicketsForm;
