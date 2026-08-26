"use client";
import ShopTitle from "@/components/common/shop-title";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { MessageSquareText, Send, Star } from "lucide-react";
import React, { useState } from "react";

const ratingLabels = {
  1: "Poor",
  2: "Fair",
  3: "Average",
  4: "Good",
  5: "Excellent",
} as const;

const ratingVariants = {
  1: {
    className:
      "bg-red-50 text-red-700 border-red-200 fill-red-500 stroke-red-500 dark:bg-red-400/10 dark:text-red-400 dark:border-red-400/20 dark:fill-red-400 dark:stroke-red-400",
  },
  2: {
    className:
      "bg-orange-50 text-orange-700 border-orange-200 fill-orange-500 stroke-orange-500 dark:bg-orange-400/10 dark:text-orange-400 dark:border-orange-400/20 dark:fill-orange-400 dark:stroke-orange-400",
  },
  3: {
    className:
      "bg-yellow-50 text-yellow-700 border-yellow-200 fill-yellow-500 stroke-yellow-500 dark:bg-yellow-400/10 dark:text-yellow-400 dark:border-yellow-400/20 dark:fill-yellow-400 dark:stroke-yellow-400",
  },
  4: {
    className:
      "bg-emerald-50 text-emerald-700 border-emerald-200 fill-emerald-500 stroke-emerald-500 dark:bg-emerald-400/10 dark:text-emerald-400 dark:border-emerald-400/20 dark:fill-emerald-400 dark:stroke-emerald-400",
  },
  5: {
    className:
      "bg-blue-50 text-blue-700 border-blue-200 fill-blue-500 stroke-blue-500 dark:bg-blue-400/10 dark:text-blue-400 dark:border-blue-400/20 dark:fill-blue-400 dark:stroke-blue-400",
  },
} as const;

type RatingScore = keyof typeof ratingLabels;

const CommentsForm = () => {
  const [score, setScore] = useState<RatingScore>(1);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <MessageSquareText className="text-primary size-[25px]" />
          <ShopTitle
            title="Customer Reviews"
            isShape={false}
            className="ml-2 font-black"
          />
        </div>
      </div>
      <form action="#">
        <div className="border py-2 px-4 mt-5 rounded-lg bg-background flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground font-semibold">
              Your Rating
            </span>
            <div className="flex items-center mt-1 gap-1">
              {Array.from({ length: 5 }).map((i, index) => {
                const value = (index + 1) as RatingScore;
                const isActive = value <= score;

                return (
                  <button
                    onClick={() => setScore(value)}
                    type="button"
                    key={value}
                  >
                    <Star
                      className={cn(
                        " size-5 cursor-pointer",
                        isActive
                          ? "stroke-rating fill-rating"
                          : "stroke-muted-foreground/20 fill-muted-foreground/20",
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </div>
          <span
            className={`rounded-full text-sm font-semibold border px-3 py-1 ${ratingVariants[score].className}`}
          >
            {ratingLabels[score]}
          </span>
        </div>
        <div className="mt-5">
          <FieldGroup>
            <Field>
              <Textarea
                placeholder="Share your thoughts about this product..."
                className="h-[200px] !bg-background"
              ></Textarea>
            </Field>
            <Field orientation={"horizontal"} className="flex justify-end">
              <Button type="submit" className="cursor-pointer py-4.5 px-4">
                <div className="flex items-center">
                  <Send className="mr-1" />
                  Submit Review
                </div>
              </Button>
            </Field>
          </FieldGroup>
        </div>
      </form>
    </>
  );
};

export default CommentsForm;
