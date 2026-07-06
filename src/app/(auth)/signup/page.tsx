import AuthBackgroundShape from "@/components/common/auth-background-shape";
import SignUpForm from "@/features/auth/signup/components/signup-form";
import React from "react";

export default function SignUp() {
  return (
    <>
      <AuthBackgroundShape />
      <div className="flex items-center justify-center w-full">
        <div className="bg-surface flex flex-col items-center py-14 px-10 rounded-3xl w-full sm:max-w-[500px] mx-5">
          <span className="text-3xl font-bold ">Create An Account</span>
          <span className="text-dashboard-text/80 font-semibold  text-[18px] mt-3">
            Create a account to continue
          </span>
          <SignUpForm />
        </div>
      </div>
    </>
  );
}
