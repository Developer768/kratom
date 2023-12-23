import "@/styles/globals.css";

import { DM_Sans } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";

const dmSans = DM_Sans({
  weight: ["100","200","300","400","500","600","700","800","900","1000"],
  subsets:["latin"],
  variable: "--font-dmSans"
});

export const metadata = {
  title: "Kratom",
  description: "Buy Kratom Powder",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-dmSans ${dmSans.variable} max-w-[1920px] mx-auto`} suppressHydrationWarning={true}>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
