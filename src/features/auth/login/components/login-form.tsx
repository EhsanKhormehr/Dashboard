"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginFormDefaultValues,
  LoginFormValues,
  loginSchema,
} from "../types/schema";
import ErrorMessage from "@/components/common/error-message";
import { useLogin } from "../services/useMutation";

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: loginFormDefaultValues,
  });

  const { mutate } = useLogin();

  const loginFormHandler = (data: LoginFormValues) => {
    mutate(data);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(loginFormHandler)}>
      <FieldSet>
        <FieldGroup className="my-8">
          <Field className="my-2.5">
            <FieldLabel>Email address</FieldLabel>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  placeholder="example@gmail.com"
                  className="py-6 bg-background"
                  {...field}
                />
              )}
            />
            {errors.email && <ErrorMessage text={errors.email.message} />}
          </Field>
          <Field className="my-2.5">
            <div className="flex items-center justify-between ">
              <FieldLabel>Password</FieldLabel>
              <Link
                href={"/forget-Password"}
                className="text-dashboard-text/60 font-semibold text-sm"
              >
                Forget Password?
              </Link>
            </div>
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <Input
                  placeholder="******"
                  className="py-6 bg-background"
                  {...field}
                />
              )}
            />
            {errors.password && <ErrorMessage text={errors.password.message} />}
          </Field>
        </FieldGroup>
        <FieldGroup>
          <Field>
            <div className="flex justify-center flex-col items-center">
              <Button
                type="submit"
                className="font-bold text-xl py-7 w-4/5 cursor-pointer"
              >
                Sign In
              </Button>
              <div className="mt-4">
                <span className="text-dashboard-text/65 font-semibold">
                  Don’t have an account?
                </span>
                <Link
                  href={"/signup"}
                  className="underline text-primary font-bold"
                >
                  {" "}
                  Create Account{" "}
                </Link>
              </div>
            </div>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
