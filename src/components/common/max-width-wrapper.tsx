import React from "react";

const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 md:px-8">
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
