import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    const { pathname } = req.nextUrl;

    const protectedRoutes = ["/dashboard", "/admin"];

    if (protectedRoutes.some((path) => pathname.startsWith(path)) && !token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}
