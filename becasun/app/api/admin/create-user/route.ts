import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import pool from "@/lib/db";

export async function POST(req: Request) {
    try {
        const { name, email, password, role } = await req.json();

        const hashed = await bcrypt.hash(password, 10);
        await pool.query(
            "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
            [name, email, hashed, role || "user"]
        );

        return NextResponse.json({ message: "Tạo tài khoản thành công!" });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Không thể tạo tài khoản" }, { status: 500 });
    }
}
