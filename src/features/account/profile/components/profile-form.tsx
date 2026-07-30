import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";

const ProfileForm = () => {
  return (
    <form>
      <div className="mt-5 flex flex-col justify-center items-center">
        <Avatar className="size-[72px]">
          <AvatarImage src={"/avatar-user.jpg"} alt="avatar"></AvatarImage>
        </Avatar>
        <div className="mt-3">
          <Input id="avatar" type="file" className="hidden" />
          <Button type="button" variant={"secondary"} asChild>
            <label htmlFor="avatar" className="cursor-pointer">
              <Upload />
              Upload Image
            </label>
          </Button>
        </div>
      </div>
      <FieldSet className="mt-5">
        <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Field>
            <FieldLabel>First Name</FieldLabel>
            <Input
              type="text"
              placeholder="First Name"
              className="bg-background"
            />
          </Field>
          <Field>
            <FieldLabel>Last Name</FieldLabel>
            <Input
              type="text"
              placeholder="Last Name"
              className="bg-background"
            />
          </Field>
          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input type="text" placeholder="Email" className="bg-background" />
          </Field>
          <Field>
            <FieldLabel>Phone Number</FieldLabel>
            <Input
              type="text"
              placeholder="Phone Number"
              className="bg-background"
            />
          </Field>
          <Field>
            <FieldLabel>User Name</FieldLabel>
            <Input
              type="text"
              placeholder="User Name"
              className="bg-background"
            />
          </Field>
          <Field>
            <FieldLabel>National ID</FieldLabel>
            <Input
              type="text"
              placeholder="National ID"
              className="bg-background"
            />
          </Field>
          <Field className="my-4" orientation={"horizontal"}>
            <Button className="py-4 w-full sm:w-auto">Save Changes</Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
};

export default ProfileForm;
