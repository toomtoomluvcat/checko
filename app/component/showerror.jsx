import React from "react";
import Image from "next/image";
import Link from "next/link";
function ShowError({ onclick }) {
  return (
    <div className="fixed inset-0 m-auto">
      <div className="h-screen w-screen bg-black opacity-[30%]"></div>
      <div className="max-w-[470px] bg-white h-[550px] sm:h-[550px] flex fiexd inset-0 left-[50px] right-[50px] m-auto rounded-[20px] flex-col items-center absolute justify-center">
        <div className="relative w-[140px] h-[140px] sm:w-[170px] bottom-[50px] mb-[-90px] sm:mb-[-70px] sm:h-[170px]">
          <Image
            src="/02.jpg"
            width={200}
            height={200}
            alt="catinbag"
          ></Image>
        </div>
        <div className="w-[100%] relative shadow-md border-b-[2px] border-gray h-10 "></div>
        <div className="flex flex-col justify-ceter items-center text-center mt-[40px] font-kanit space-y-[10px]">
          <h1 className="font-medium text-[20px] sm:text-[25px] mb-[10px] text-red-400">
           admin พิมตก
          </h1>
          <p className="sm:text-[15px] w-[70%] text-[14px] text-[#5B5B5B]">
           เนื่องจากในวันที่ 6 มีนาคมที่ผ่านมาไม่สามารถเช็คชื่อได้ เพราะแอดมินพิมเครื่องหมาย &gt; แทน &lt; ทำให้คนนอกห้องเช็คชื่อได้แทนคนในห้อง ตอนนี้แก้แล้ว ขออภัยมากๆ ครับ (แต่มีคนเช็คชื่อมานะ 😈)
          </p>
          <button>
            <p
              onClick={onclick}
              className="bg-[#323232] mt-[15px] sm:mt-[20px] text-[14px] sm:text-[17px] text-white w-[170px] sm:w-[220px] shadow-inner py-[12px] rounded-[25px]"
            >
              โอเคเลย!
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowError;
