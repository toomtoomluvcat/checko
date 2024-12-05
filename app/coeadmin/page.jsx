"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Signin() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const { data: session } = useSession();

  const router = useRouter();
  
  useEffect(() => {
    if (session) router.push("/welcome");
  }, [session, router]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });
      if (res.error) {
        seterror("invalid credentails");
        return;
      }
      router.replace("/welcome");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-800 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          ยินดีต้อนรับกลับ
        </h2>
        {error && <div className="text-center text-red-500 mb-4">{error}</div>}
        <form className="space-y-6" onSubmit={handlesubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              ผู้ใช้งาน
            </label>
            <input
              onChange={(e) => setusername(e.target.value)}
              value={username}
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="กรุณากรอกชื่อผู้ใช้"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              รหัสผ่าน
            </label>
            <input
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="กรุณากรอกรหัสผ่าน"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          ยังไม่มีบัญชี?{" "}
          <Link href="/signup" className="text-indigo-500 hover:underline">
            สมัครสมาชิก
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
