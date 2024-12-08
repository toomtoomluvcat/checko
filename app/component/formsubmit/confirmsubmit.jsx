import React from "react";
import Image from "next/image";
import Link from "next/link";
function Confirmsubmit({ onPopup, onClick, studentName }) {
  return (
    <div className="fixed inset-0 m-auto">
      <div className="h-screen w-screen bg-black opacity-[30%]"></div>
      <div className="max-w-[470px] bg-white h-[460px] sm:h-[550px] flex fiexd inset-0 left-[50px] right-[50px] m-auto rounded-[20px] flex-col items-center absolute justify-center">
        <div className="relative w-[140px] h-[140px] sm:w-[170px] bottom-[50px] mb-[-50px] sm:mb-[-40px] sm:h-[170px]">
          <Image
           
            src="/image/checko_form_image/670dd09b0ae166e32b77cb84_039-min.png"
            width={300}
            height={300}
            alt="catinbag"
          ></Image>
          <p className="text-[10px] sm:text-[14px] text-center translate-y-[-15px] py-[7px] rounded-[10px] bg-[#E8E8E8]">{studentName}</p>

        </div>
        <div className="w-[100%] relative shadow-md border-b-[2px] border-gray h-10 "></div>
        <div className="flex flex-col justify-ceter items-center text-center mt-[40px] font-kanit space-y-[10px]">
          <h1 className="font-medium text-[20px] sm:text-[25px]">
            ยืนยันการส่งแบบฟอร์ม
          </h1>
          <p className="sm:text-[15px] w-[80%] text-[14px] text-[#5B5B5B]">
          ระบบจะบันทึกเวลา สถานที่ที่รูปถูกถ่าย การเข้ารหัสการแก้ไขรูปภาพ โปรดตรวจสอบรูปภาพก่อนส่งข้อมูล
          </p>
          <button onClick={onPopup}>
            <p className="bg-[#323232] mt-[20px] sm:mt-[50px] text-[14px] sm:text-[17px] text-white w-[170px] sm:w-[220px] shadow-inner py-[12px] rounded-[25px]">
              ยืนยันการส่ง
            </p>
          </button>
          <button onClick={onClick}>
         <p className="bg-[#D9D9D9]  text-[14px] sm:text-[17px] text-black shadow-inner w-[170px] sm:w-[220px] py-[10px] sm:py-[12px] rounded-[25px]">
              ฉันยังไม่พร้อม
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirmsubmit;
