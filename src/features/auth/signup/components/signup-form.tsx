"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SignUpFormValues,
  signUpFormDefaultValues,
  signUpSchema,
} from "../types/schema";
import ErrorMessage from "@/components/common/error-message";
import { useSignUp } from "../services/useMutation";

export default function SignUpForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: signUpFormDefaultValues,
  });

  const { mutate } = useSignUp();
  
  const signUpSubmitHandler = (data: SignUpFormValues) => {
    mutate(data);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(signUpSubmitHandler)}>
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
            <FieldLabel>Username</FieldLabel>
            <Controller
              control={control}
              name="userName"
              render={({ field }) => (
                <Input
                  placeholder="Username"
                  className="py-6 bg-background"
                  {...field}
                />
              )}
            />
            {errors.userName && <ErrorMessage text={errors.userName.message} />}
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
                Sign Up
              </Button>
              <div className="mt-4">
                <span className="text-dashboard-text/65 font-semibold">
                  Already have an account?{" "}
                </span>
                <Link
                  href={"/login"}
                  className="underline text-primary font-bold"
                >
                  {" "}
                  Login
                </Link>
              </div>
            </div>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
