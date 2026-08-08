import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Truck } from "lucide-react";
import React from "react";

const CheckoutDelivery = () => {
  return (
    <div className="mt-8 bg-surface rounded-xl shadow-card self-start">
      <div className="px-4 py-3 border-b">
        <div className="flex items-center">
          <Truck className="size-[20px]" />
          <span className="font-bold ml-2">Delivery Method</span>
        </div>
      </div>
      <div className="p-4">
        <RadioGroup defaultValue="standard" className="grid grid-cols-2">
          <FieldLabel htmlFor="standard" className="cursor-pointer">
            <Field orientation={"horizontal"}>
              <FieldContent>
                <FieldTitle className="font-bold">Standard Delivery</FieldTitle>
                <FieldDescription>
                  Delivery within 3 to 5 business days at an affordable rate.
                </FieldDescription>
              </FieldContent>
              <RadioGroupItem className="hidden" value="standard" id="standard" />
            </Field>
          </FieldLabel>
          <FieldLabel htmlFor="express" className="cursor-pointer">
            <Field orientation={"horizontal"}>
              <FieldContent>
                <FieldTitle className="font-bold">Express Delivery</FieldTitle>
                <FieldDescription>
                  Fast delivery within 1 to 2 business days.
                </FieldDescription>
              </FieldContent>
              <RadioGroupItem className="hidden" value="express" id="express" />
            </Field>
          </FieldLabel>
        </RadioGroup>
      </div>
    </div>
  );
};

export default CheckoutDelivery;
