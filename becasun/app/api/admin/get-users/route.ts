import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
    const [rows]: any = await pool.query(
        "SELECT id, name, email, role, created_date FROM users ORDER BY created_date DESC"
    );
    return NextResponse.json(rows);
}
