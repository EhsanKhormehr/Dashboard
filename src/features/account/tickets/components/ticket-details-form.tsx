import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const TicketDetailsForm = () => {
  return (
    <form className="py-5">
      <Textarea className="bg-background h-[200px]" placeholder="Enter your message..."></Textarea>
      <div className="flex justify-end">
        <Button type="submit" className="mt-5 px-10 py-5 cursor-pointer">
          Send
        </Button>
      </div>
    </form>
  );
};

export default TicketDetailsForm;
