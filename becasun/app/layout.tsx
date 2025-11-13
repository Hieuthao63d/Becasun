import UserHeader from "@/components/UserHeader";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Becasun",
    description: "Solar credits system",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {/* Header của user (không dành cho admin) */}
                <UserHeader />
                {children}
            </body>
        </html>
    );
}
