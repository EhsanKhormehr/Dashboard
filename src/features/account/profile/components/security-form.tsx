import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React from "react";

const SecurityForm = () => {
  return (
    <form>
      <FieldSet className="mt-5">
        <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Field>
            <FieldLabel>Current Password</FieldLabel>
            <Input
              type="text"
              placeholder="Enter your current password"
              className="bg-background"
            />
          </Field>
          <Field>
            <FieldLabel>New Password</FieldLabel>
            <Input
              type="text"
              placeholder="Enter your new password"
              className="bg-background"
            />
          </Field>
          <Field>
            <FieldLabel>Confirm New Password</FieldLabel>
            <Input
              type="text"
              placeholder="Repeat new password"
              className="bg-background"
            />
          </Field>
        </FieldGroup>
        <Field className="my-4" orientation={"horizontal"}>
          <Button
            className="py-4 w-full sm:w-auto cursor-pointer"
            type="submit"
          >
            Update Password
          </Button>
        </Field>
      </FieldSet>
    </form>
  );
};

export default SecurityForm;
