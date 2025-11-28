"use client";

import { usePathname } from "next/navigation";
import UserHeader from "@/components/UserHeader";

export default function LayoutClient({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    // Ẩn header trên /admin và /login
    const hideHeader =
        pathname.startsWith("/admin") ||
        pathname.startsWith("/login");

    return (
        <>
            {!hideHeader && <UserHeader />}
            {children}
        </>
    );
}
