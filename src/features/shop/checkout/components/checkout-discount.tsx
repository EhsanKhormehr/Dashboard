import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ChevronRight, TicketPercent } from "lucide-react";
import React from "react";

const CheckoutDiscount = () => {
  return (
    <Collapsible>
      <div className="bg-surface rounded-xl shadow-card self-start mt-8">
        <CollapsibleTrigger asChild className="cursor-pointer select-none">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <TicketPercent className="size-[20px]" />
              <span className="ml-2 text-sm font-semibold ">
                Have a discount code?
              </span>
            </div>
            <div>
              <ChevronRight className="size-[20px]" />
            </div>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-4 pt-2 pb-6">
            <FieldGroup className="flex">
              <Field orientation={"horizontal"}>
                <Input type="text" placeholder="Enter your discount code..." className="h-[45px]" />
                <Button className="h-[45px] font-semibold">Apply Code</Button>
              </Field>
            </FieldGroup>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

export default CheckoutDiscount;
