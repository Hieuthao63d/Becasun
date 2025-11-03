import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/page";

export const metadata: Metadata = {
  title: "Becasun",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
