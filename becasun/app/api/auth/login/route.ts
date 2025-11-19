import bcrypt from "bcryptjs";

import { NextResponse } from "next/server";

import pool from "@/lib/db";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        const [rows]: any = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
        if (!rows.length) {
            return NextResponse.json({ error: "Email không tồn tại" }, { status: 401 });
        }

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({ error: "Sai mật khẩu" }, { status: 401 });
        }

        const token = jwt.sign(
            { id: user.id, role: user.role, email: user.email, name: user.name},
            process.env.JWT_SECRET || "secret_key",
            { expiresIn: "2h" }
        );

        const cookieStore = await cookies();
        cookieStore.set("token", token, {
            httpOnly: true, 
            secure: process.env.NODE_ENV === "production", 
            path: "/", 
            maxAge: 60 * 60 * 2, 
            sameSite: "strict",
        });


        return NextResponse.json({
            message: "Đăng nhập thành công",
            token,
            user: { id: user.id, name: user.name, email: user.email, role: user.role },
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Lỗi máy chủ" }, { status: 500 });
    }
}
