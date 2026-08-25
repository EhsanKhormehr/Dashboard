import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Clock, Clock12 } from "lucide-react";
import Link from "next/link";
import React from "react";

const BlogContent = () => {
  return (
    <div className="bg-surface shadow-soft-card rounded-xl px-4">
        <h2 className="border-b py-5 font-extrabold text-2xl">
          How to Choose the Best Gaming Keyboard in 2026
        </h2>
        <div className="py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <Avatar className="size-6">
                  <AvatarImage src={"/avatar-user.jpg"} />
                </Avatar>
                <span className="font-bold text-surface-foreground">
                  Ehsan Khormehr
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground font-semibold">
                  2026/12/12
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock12 className="size-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                10 Minutes Read
              </span>
            </div>
          </div>
        </div>
        <div className="pb-5 border-b">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
          ut quaerat nostrum explicabo praesentium dolorum perspiciatis minus
          doloribus nobis laborum ipsa, obcaecati ad dolore sequi adipisci sit
          autem quos quod! Voluptate, repellat laboriosam, amet illum ea rerum
          repellendus deleniti aperiam omnis ipsa mollitia! Sed rem ad repellat
          est veritatis! In nostrum voluptatum culpa repellendus quas similique
          commodi architecto fuga molestias, itaque iusto perspiciatis eveniet
          iste quia iure maxime quibusdam fugit tempore optio velit earum et
          modi suscipit cumque? Maiores beatae repudiandae dolore error quaerat.
          Cupiditate minima reiciendis commodi error modi libero nemo autem quis
          fugit consequatur unde, laudantium nostrum quo?
        </div>
        <div className="py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground font-bold">Tags: </span>
            <div className="flex gap-2">
              <Link
                href={"/"}
                className="text-xs bg-muted hover:bg-primary duration-300 py-1 px-3 rounded-2xl"
              >
                Mouse
              </Link>
              <Link
                href={"/"}
                className="text-xs bg-muted hover:bg-primary duration-300 py-1 px-3 rounded-2xl"
              >
                Keyboard
              </Link>
            </div>
          </div>
          <Link
            href={"/"}
            className="inline-flex self-start rounded-full text-xs border-primary/70 border-1 px-4 py-1 text-primary bg-blue-100 font-bold dark:bg-primary/10 dark:text-blue-400"
          >
            Gaming
          </Link>
        </div>
    </div>
  );
};

export default BlogContent;
