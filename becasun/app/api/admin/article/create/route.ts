import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req: Request) {
    const { title, content, user_id } = await req.json();

    await pool.query(
        "INSERT INTO article (title, content, user_id) VALUES (?, ?, ?)",
        [title, content, user_id]
    );

    return NextResponse.json({ message: "Đăng bài thành công" });
}
