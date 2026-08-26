"use client";

import React, { createContext, useContext } from "react";

export type CommentType = "product" | "blog";

type CommentsContextValue = {
  type: CommentType;
};

const CommentsContext = createContext<CommentsContextValue | null>(null);

type CommentsProviderProps = {
  type: CommentType;
  children: React.ReactNode;
};

export const CommentsProvider = ({ type, children }: CommentsProviderProps) => {
  return (
    <CommentsContext.Provider value={{ type }}>
      {children}
    </CommentsContext.Provider>
  );
};

export const useCommentsContext = () => {
  const context = useContext(CommentsContext);
  if (!context) {
    throw new Error("useCommentsContext must be used inside CommentsProvider");
  }
  return context;
};
