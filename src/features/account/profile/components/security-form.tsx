"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import React from "react";
import {
  passwordFormDefaultValue,
  PasswordFormValue,
  passwordSchema,
} from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "@/components/common/error-message";
import { Eye } from "lucide-react";
import PasswordInput from "@/components/common/password-input";
import { useUpdatePassword } from "../services/useMutation";

const SecurityForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordFormValue>({
    resolver: zodResolver(passwordSchema),
    defaultValues: passwordFormDefaultValue,
  });
  const { mutate } = useUpdatePassword();
  const passwordSubmitHandler = (data: PasswordFormValue) => {
    mutate({
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    });
  };

  return (
    <form onSubmit={handleSubmit(passwordSubmitHandler)}>
      <FieldSet className="mt-5">
        <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Field>
            <FieldLabel>Current Password</FieldLabel>
            <Controller
              control={control}
              name="currentPassword"
              render={({ field }) => (
                <PasswordInput
                  className="bg-background"
                  placeholder="Enter current password"
                  {...field}
                />
              )}
            />

            {errors.currentPassword && (
              <ErrorMessage text={errors.currentPassword.message} />
            )}
          </Field>
          <Field>
            <FieldLabel>New Password</FieldLabel>
            <Controller
              control={control}
              name="newPassword"
              render={({ field }) => (
                <PasswordInput
                  placeholder="Enter your new password"
                  className="bg-background"
                  {...field}
                />
              )}
            />

            {errors.newPassword && (
              <ErrorMessage text={errors.newPassword.message} />
            )}
          </Field>
          <Field>
            <FieldLabel>Confirm New Password</FieldLabel>
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <PasswordInput
                  placeholder="Repeat new password"
                  className="bg-background"
                  {...field}
                />
              )}
            />

            {errors.confirmPassword && (
              <ErrorMessage text={errors.confirmPassword.message} />
            )}
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
