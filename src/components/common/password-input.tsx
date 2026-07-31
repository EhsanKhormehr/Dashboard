"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";

type PasswordInputProps = React.ComponentProps<typeof Input>;

const PasswordInput = ({ className, ...props }: PasswordInputProps) => {
  const [show, setShow] = useState<boolean>(false);

  const togglePasswordHandler = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="relative">
      <Input
        {...props}
        className={` ${className}`}
        type={show ? "text" : "password"}
      />

      <button className="absolute right-3 cursor-pointer top-1/2 -translate-y-1/2" type="button" onClick={togglePasswordHandler}>
        {show ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
      </button>
    </div>
  );
};

export default PasswordInput;
