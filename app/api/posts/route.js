import adminData from "@/app/model/posts";
import { dbconnect } from "@/app/lib/dbconnect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await dbconnect();

    const { username, password } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 10); 

    await adminData.create({ username, password: hashedPassword });

    return NextResponse.json({ message: "User created successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "An error occurred", error: error.message }, { status: 500 });
  }
}
