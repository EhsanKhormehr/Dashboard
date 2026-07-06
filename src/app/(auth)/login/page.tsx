
import LoginForm from "@/features/auth/login/components/login-form";
import React from "react";

export default function Login() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="bg-surface flex flex-col items-center py-14 px-10 rounded-3xl w-full sm:max-w-[500px] mx-5">
        <span className="text-3xl font-bold ">Login To Account</span>
        <span className="text-dashboard-text/80 font-semibold  text-[18px] mt-3">
          Please enter your email and password to continue
        </span>
        <LoginForm />
      </div>
    </div>
  );
}
