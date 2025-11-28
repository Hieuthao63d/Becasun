import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import pool from "@/lib/db";

export async function POST(req: Request) {
    try {
        const { name, email, password, role } = await req.json();

        // tạo id dạng U001
        const [cnt]: any = await pool.query("SELECT COUNT(*) AS total FROM users");
        const number = cnt[0].total + 1;
        const newId = "U" + number.toString().padStart(3, "0");

        const hashed = await bcrypt.hash(password, 10);

        await pool.query(
            `INSERT INTO users
            (id, name, email, password, address, introduction, is_married, role, phone, status) 
            VALUES (?, ?, ?, ?, ?, NULL, NULL, ?, NULL, 1)`,
            [newId, name, email, hashed, "", role || "Investor"]
        );

        return NextResponse.json({ message: "Tạo tài khoản thành công!" });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Không thể tạo tài khoản" }, { status: 500 });
    }
}
