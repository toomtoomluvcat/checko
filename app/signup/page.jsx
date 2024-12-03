"use client"

import React from 'react';

function SignupPage() {
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-kanit">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          สมัครสมาชิก
        </h1>
        <form>
          {/* ชื่อผู้ใช้ */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              ชื่อผู้ใช้
            </label>
            <input
              type="text"
              id="username"
              placeholder="กรอกชื่อผู้ใช้"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* รหัสผ่าน */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              รหัสผ่าน
            </label>
            <input
              type="password"
              id="password"
              placeholder="กรอกรหัสผ่าน"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmpasswordpassword"
              className="block text-gray-700 font-medium mb-2"
            >
              ยืนยันรหัสผ่าน
            </label>
            <input
              type="password"
              id="confirmpassword"
              placeholder="ยืนยันรหัสผ่าน"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* ปุ่มสมัคร */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            สมัครสมาชิก
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          มีบัญชีอยู่แล้ว?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            เข้าสู่ระบบ
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
