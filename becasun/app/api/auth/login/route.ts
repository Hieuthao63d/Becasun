export const runtime = "nodejs";

import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import pool from "@/lib/db";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
    try {
        // FIX lỗi Unexpected end of JSON input
        const body = await req.json().catch(() => null);

        if (!body || !body.email || !body.password) {
            return NextResponse.json(
                { error: "Thiếu email hoặc mật khẩu" },
                { status: 400 }
            );
        }

        const { email, password } = body;

        // Truy vấn DB
        const [rows]: any = await pool.query(
            "SELECT id, name, email, password, role FROM users WHERE email = ?",
            [email]
        );

        if (!rows.length) {
            return NextResponse.json(
                { error: "Email không tồn tại" },
                { status: 401 }
            );
        }

        const user = rows[0];
        const storedPassword = user.password;

        let isMatch = false;

        // Kiểm tra password plaintext hoặc bcrypt
        if (storedPassword.startsWith("$2b$")) {
            isMatch = await bcrypt.compare(password, storedPassword);
        } else {
            isMatch = password === storedPassword;
        }

        if (!isMatch) {
            return NextResponse.json(
                { error: "Sai mật khẩu" },
                { status: 401 }
            );
        }

        // Tạo JWT token
        const token = jwt.sign(
            {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            process.env.JWT_SECRET || "secret_key",
            { expiresIn: "2h" }
        );

        return NextResponse.json({
            message: "Đăng nhập thành công",
            token,
            user,
        });
    } catch (error) {
        console.error("Lỗi API login:", error);
        return NextResponse.json(
            { error: "Lỗi máy chủ" },
            { status: 500 }
        );
    }
}
