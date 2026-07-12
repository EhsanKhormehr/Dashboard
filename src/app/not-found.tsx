import BackgroundShape from "@/components/common/auth-background-shape";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="bg-primary h-screen relative overflow-hidden z-0 flex justify-center items-center">
      <BackgroundShape />
      <div className="bg-surface flex flex-col items-center justify-center py-28 px-5 sm:px-18 rounded-3xl w-full sm:max-w-[630px] mx-5 h-fit">
          <Image src={"/404.svg"} width={390} height={298} alt="404" />
          <span className="text-4xl font-bold text-dashboard-text text-center pt-24 pb-9">
            Looks like you’ve got lost….
          </span>
          <Button type="button" asChild className="font-bold text-xl w-full py-7">
            <Link href={"/dashboard"}>
              Back to Dashboard
            </Link>
          </Button>
      </div>
    </div>
  );
}
