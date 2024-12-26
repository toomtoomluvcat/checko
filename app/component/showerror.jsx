import React from "react";
import Image from "next/image";
import Link from "next/link";
function ShowError({onclick}) {
  return (
    <div className="fixed inset-0 m-auto">
      <div className="h-screen w-screen bg-black opacity-[30%]"></div>
      <div className="max-w-[470px] bg-white h-[460px] sm:h-[550px] flex fiexd inset-0 left-[50px] right-[50px] m-auto rounded-[20px] flex-col items-center absolute justify-center">
        <div className="relative w-[140px] h-[140px] sm:w-[170px] bottom-[50px] mb-[-90px] sm:mb-[-70px] sm:h-[170px]">
          <Image
           
            src="/image/670dd2a9606dd945143474ac_027-min.png"
            width={200}
            height={200}
            alt="catinbag"
          ></Image>
          

        </div>
        <div className="w-[100%] relative shadow-md border-b-[2px] border-gray h-10 "></div>
        <div className="flex flex-col justify-ceter items-center text-center mt-[40px] font-kanit space-y-[10px]">
          <h1 className="font-medium text-[20px] sm:text-[25px] text-red-400">
            แก้อาการแมวหมุนส่งข้อมูลไม่ได้
          </h1>
          <p className="sm:text-[15px] w-[80%] text-[14px] text-[#5B5B5B]">
            service api ของ google ล่มประมาณ 15 นาที เลยอาจเกิดอาการ "แมวหน้าโหลดหมุน" ฝากเพื่อนๆ เช็คประวัติการส่งตัวเองด้วยนะครับ ขอโทษมากๆ ครับ 
            ถ้าพบว่ามีปัญหาโปรดติดต่อ anusorn@kku.ac.th
          </p>
          <button >
            <a href="https://docs.google.com/spreadsheets/d/1aOklifcp5SNvkdTZBSN-lIkj7ZpEEYpzRKiTcB9lnXg/edit?usp=sharing"><p className="bg-[#323232] mt-[10px] sm:mt-[20px] text-[14px] sm:text-[17px] text-white w-[170px] sm:w-[220px] shadow-inner py-[12px] rounded-[25px]">
              ตรวจสอบ
            </p></a>
          </button>
          <button >
         <p onClick={onclick} className="bg-[#D9D9D9]  text-[14px] sm:text-[17px] text-black shadow-inner w-[170px] sm:w-[220px] py-[10px] sm:py-[12px] rounded-[25px]">
              เอาไว้ทีหลัง
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowError;
