import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="bg-surface flex flex-col items-center py-14 px-10 rounded-3xl w-full sm:max-w-[500px] mx-5">
        <span className="text-3xl font-bold ">Login To Account</span>
        <span className="text-dashboard-text/80 font-semibold  text-[18px] mt-3">
          Please enter your email and password to continue
        </span>
        <form className="w-full">
          <FieldSet>
            <FieldGroup className="my-8">
              <Field className="my-2.5">
                <FieldLabel>Email address</FieldLabel>
                <Input
                  placeholder="example@gmail.com"
                  className="py-6 bg-background"
                />
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
                <Input placeholder="******" className="py-6 bg-background" />
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
      </div>
    </div>
  );
}
