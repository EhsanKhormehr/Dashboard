import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductCommentBox = () => {
  return (
    <div className="bg-background rounded-md p-6 my-6">
      <div className="flex items-center justify-between ">
        <Image
          src={"/shop/person-1.png"}
          width={56}
          height={56}
          alt="person"
          className="rounded-full"
        />
        <div className="sm:ml-3">
          <span className="font-black text-[17px]">Grace Carey</span>
          <div className="flex mt-2 ">
            <Star className="fill-rating text-rating cursor-pointer" />
            <Star className="ml-[1px] fill-rating text-rating cursor-pointer" />
            <Star className="ml-[1px] fill-rating text-rating cursor-pointer" />
            <Star className="ml-[1px] fill-rating text-rating cursor-pointer" />
            <Star className="ml-[1px]  text-rating cursor-pointer" />
          </div>
        </div>
        <span className="text-muted-foreground/50 font-bold self-start sm:ml-auto">
          24 January,2023
        </span>
      </div>
      <p className="font-semibold text-muted-foreground my-4">
        I was a bit nervous to be buying a secondhand phone from Amazon, but I
        couldn’t be happier with my purchase!! I have a pre-paid data plan so I
        was worried that this phone wouldn’t connect with my data plan, since
        the new phones don’t have the physical Sim tray anymore, but couldn’t
        have been easier! I bought an Unlocked black iPhone 14 Pro Max in
        excellent condition and everything is PERFECT. It was super easy to set
        up and the phone works and looks great. It truly was in excellent
        condition. Highly recommend!!!🖤
      </p>
    </div>
  );
};

export default ProductCommentBox;
