"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SignupPage() {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const [error, seterror] = useState();
  const router = useRouter();

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!username || !password || !confirmpassword) {
      seterror("Full fill your information");
      return;
    }

    if (confirmpassword != password) {
      seterror("Pass word don't match");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (res.ok) {
        router.push("/coeadmin");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 font-kanit">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          สมัครสมาชิก
        </h1>
        {error && <div className="text-center text-red-500 mb-4">{error}</div>}
        <form onSubmit={handlesubmit} className="space-y-6">
          {/* ชื่อผู้ใช้ */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              ผู้ใช้งาน
            </label>
            <input
              onChange={(e) => setusername(e.target.value)}
              type="text"
              id="username"
              placeholder="กรอกชื่อผู้ใช้"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* รหัสผ่าน */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              รหัสผ่าน
            </label>
            <input
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              id="password"
              placeholder="กรอกรหัสผ่าน"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* ยืนยันรหัสผ่าน */}
          <div>
            <label
              htmlFor="confirmpassword"
              className="block text-sm font-medium text-gray-700"
            >
              ยืนยันรหัสผ่าน
            </label>
            <input
              onChange={(e) => setconfirmpassword(e.target.value)}
              type="password"
              id="confirmpassword"
              placeholder="ยืนยันรหัสผ่าน"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* ปุ่มสมัคร */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            สมัครสมาชิก
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          มีบัญชีอยู่แล้ว?{" "}
          <Link href="/coeadmin" className="text-blue-500 hover:underline">
            เข้าสู่ระบบ
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
