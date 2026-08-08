import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard } from "lucide-react";
import React from "react";

const CheckoutPayment = () => {
  return (
    <div className="bg-surface rounded-xl shadow-card self-start mt-8">
      <div className="px-4 py-3 border-b">
        <div className="flex items-center">
          <CreditCard className="size-[20px]" />
          <span className="font-bold ml-2">Delivery Method</span>
        </div>
      </div>
      <div className="p-4">
        <RadioGroup defaultValue="online" className="grid grid-cols-2">
          <FieldLabel htmlFor="online" className="cursor-pointer">
            <Field orientation={"horizontal"}>
              <FieldContent>
                <FieldTitle className="font-bold">Online Payment</FieldTitle>
                <FieldDescription>
                  Pay securely online using your credit or debit card.
                </FieldDescription>
              </FieldContent>
              <RadioGroupItem className="hidden" value="online" id="online" />
            </Field>
          </FieldLabel>
        </RadioGroup>
      </div>
    </div>
  );
};

export default CheckoutPayment;
