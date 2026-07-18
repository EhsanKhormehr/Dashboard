import Link from "next/link";
import React from "react";

const HomePageCampaignBanner = () => {
  return (
    <div className="relative h-[450px] bg-gradient-to-r from-zinc-700 to-neutral-900 text-center">
      <div className=" absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url(/shop/campaign-banner.png)]"></div>
      <div className="flex flex-col items-center justify-center z-10 relative h-full">
        <span className="text-6xl text-white">
          Big Summer <span className="font-extrabold">Sale</span>
        </span>
        <span className="text-muted-foreground">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </span>
        <Link
          href={"/"}
          className="text-white py-4 inline-block mt-10 text-sm px-14 border font-semibold rounded-sm"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default HomePageCampaignBanner;
