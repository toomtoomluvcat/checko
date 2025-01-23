import pool from "@/app/lib/dbconnect";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get('studentId');
    if (studentId) {
      const query = "SELECT * FROM users WHERE studentId = ?";
      const [rows] = await pool.query(query, [studentId.toString()]);
      if (rows.length == 0) {
        return NextResponse.json({ error: "USER not found" }, { status: 500 });
      }
      return NextResponse.json(rows, { status: 200 });
    } else {
      const query = "SELECT * FROM users";
      const [rows] = await pool.query(query);
      return NextResponse.json(rows, { status: 200 });
    }
  } catch (error) {
    console.error("GET METHOD ERROR:", error.message);
    return NextResponse.json({ error: "GET METHOD ERROR" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, studentId, timeStamp, answer, rowExcel, columExcel } = body;

    const query =
      "INSERT INTO users (name, studentId, timeStamp, answer, rowExcel, columExcel) VALUES (?, ?, ?, ?, ?, ?)";
    const [result] = await pool.query(query, [
      name,
      studentId,
      timeStamp,
      answer,
      rowExcel,
      columExcel,
    ]);

    return NextResponse.json(
      { message: "User added successfully", id: result.insertId },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST METHOD ERROR:", error.message);
    return NextResponse.json({ error: "POST METHOD ERROR" }, { status: 500 });
  }
}
