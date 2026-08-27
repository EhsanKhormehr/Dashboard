import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Clock, Clock12 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Prisma } from "../../../../../generated/prisma/client";
import DOMPurify from "isomorphic-dompurify";
import { formatDistanceToNow } from "date-fns";

type BlogContentProps = {
  article: Prisma.BlogGetPayload<{
    include: {
      user: {
        select: {
          userName: true;
        };
      };
    };
  }>;
};

const BlogContent = ({ article }: BlogContentProps) => {
  const sanitizeContent = DOMPurify.sanitize(article.content);
  return (
    <div className="bg-surface shadow-soft-card rounded-xl px-5">
      <h2 className="border-b py-5 font-extrabold text-2xl">{article.title}</h2>
      <div className="py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <Avatar className="size-6">
                <AvatarImage src={"/avatar-user.jpg"} />
              </Avatar>
              <span className="font-bold text-surface-foreground">
                {article.user?.userName}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground font-semibold">
                {formatDistanceToNow(new Date(article.createdAt), {
                  addSuffix: true,
                })}
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
      <div
        className="pb-5 border-b tiptap"
        dangerouslySetInnerHTML={{ __html: sanitizeContent }}
      />
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
          className="inline-flex self-start rounded-full text-xs border-primary/70 border-1 px-4 py-1 text-primary bg-blue-100 font-bold dark:bg-primary/10 dark:text-blue-400 capitalize"
        >
          {article.category}
        </Link>
      </div>
    </div>
  );
};

export default BlogContent;
