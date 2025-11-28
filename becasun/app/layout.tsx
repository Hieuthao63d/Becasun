import UserHeader from "@/components/UserHeader";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/page";
import { getCurrentUser } from "@/lib/currentUser";
import { UserProvider } from "@/context/UserContext";

export const metadata: Metadata = {
    title: "Becasun",
    description: "Solar credits system",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  console.log(user);
  
  return (
    <html lang="en">
      <body>
        <UserProvider user={user}>
          <Header />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
