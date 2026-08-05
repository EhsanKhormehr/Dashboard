import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/app-provider";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: ["400","500", "600", "700", "800","900","1000"],
});

export const metadata: Metadata = {
  title: "Dashboard",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${nunitoSans.variable} font-sans`}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </>
  );
}
