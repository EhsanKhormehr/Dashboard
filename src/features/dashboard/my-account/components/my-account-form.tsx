"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldSet } from "@/components/ui/field";

import { FormProvider, useForm } from "react-hook-form";
import React, { useEffect } from "react";
import {
  myAccountDefaultValues,
  MyAccountFormValues,
  myAccountSchema,
  UpdateMyAccountData,
} from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMeQuery } from "@/features/auth/me/services/useQueries";
import { useUpdateMyAccount } from "../services/useMutation";
import ControlledInput from "@/components/common/controlled-input";

export default function MyAccountForm() {
  const { data: userData } = useMeQuery();
  const form = useForm<MyAccountFormValues>({
    resolver: zodResolver(myAccountSchema),
    defaultValues: myAccountDefaultValues,
  });
  const {
    handleSubmit,
    reset,
  } = form;
  useEffect(() => {
    if (!userData?.user) return;

    reset({
      email: userData.user.email,
      userName: userData.user.userName,
      password: "",
    });
  }, [userData?.user, reset]);

  const { mutate } = useUpdateMyAccount();

  const myAccountSubmitHandler = (data: UpdateMyAccountData) => {
    mutate({
      email: data.email,
      userName: data.userName,
      password: data.password,
    });
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(myAccountSubmitHandler)}>
        <FieldSet>
          <FieldGroup>
            <div className="grid grid-cols-2 gap-6">
              <ControlledInput<MyAccountFormValues>
                name="email"
                type="text"
                placeholder="example@gmail.com"
                label="Email"
              />
              <ControlledInput<MyAccountFormValues>
                name="password"
                type="text"
                placeholder="********"
                label="Password"
              />
              <ControlledInput<MyAccountFormValues>
                name="userName"
                type="text"
                placeholder="Username"
                label="Username"
              />
            </div>
            <Field>
              <div>
                <Button
                  type="submit"
                  className="cursor-pointer py-4.5 px-6 font-semibold mt-5 "
                >
                  Save
                </Button>
              </div>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </FormProvider>
  );
}
