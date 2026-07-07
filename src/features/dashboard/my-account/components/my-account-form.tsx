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
import { Controller, useForm } from "react-hook-form";
import React, { useEffect } from "react";
import {
  myAccountDefaultValues,
  MyAccountFormValues,
  myAccountSchema,
  UpdateMyAccountData,
} from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "@/components/common/error-message";
import { useMeQuery } from "@/features/auth/me/services/useQueries";
import { useUpdateMyAccount } from "../services/useMutation";

export default function MyAccountForm() {
  const { data : userData } = useMeQuery();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MyAccountFormValues>({
    resolver: zodResolver(myAccountSchema),
    defaultValues: myAccountDefaultValues,
  });

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
    <form onSubmit={handleSubmit(myAccountSubmitHandler)}>
      <FieldSet>
        <FieldGroup>
          <div className="grid grid-cols-2 gap-6">
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <Input
                    type="email"
                    placeholder="example@gmail.com"
                    {...field}
                  />
                )}
              />
              {errors.email && <ErrorMessage text={errors.email.message} />}
            </Field>
            <Field>
              <FieldLabel>Password</FieldLabel>
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <Input type="password" placeholder="********" {...field} />
                )}
              />
              {errors.password && (
                <ErrorMessage text={errors.password.message} />
              )}
            </Field>
            <Field>
              <FieldLabel>Username</FieldLabel>
              <Controller
                control={control}
                name="userName"
                render={({ field }) => (
                  <Input type="text" placeholder="Username" {...field} />
                )}
              />
              {errors.userName && (
                <ErrorMessage text={errors.userName.message} />
              )}
            </Field>
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
  );
}
