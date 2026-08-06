import Image from "next/image";
import Link from "next/link";
import React from "react";

type HomeFeaturedBrandsCardProps = {
  name: string;
  image: string;
  href: string;
};

const HomeFeaturedBrandsCard = ({
  name,
  image,
  href,
}: HomeFeaturedBrandsCardProps) => {
  return (
    <div className="bg-surface p-4 rounded-2xl shadow-card">
      <Link href={href} className="w-full flex justify-center">
        <Image
          src={image}
          width={75}
          height={75}
          alt="featured"
          className="dark:invert"
        />
      </Link>
    </div>
  );
};

export default HomeFeaturedBrandsCard;
