import React from "react";
import Image from "next/image";
import Link from "next/link";

function Finishsave({ studentName }) {
  return (
    <div className="fixed inset-0 m-auto">
      <div className="h-screen w-screen bg-black opacity-[30%]"></div>
      <div className="max-w-[470px] bg-white h-[460px] sm:h-[550px] flex fiexd inset-0 left-[50px] right-[50px] m-auto rounded-[20px] flex-col items-center absolute justify-center">
        <div className="relative">
          <Image
            src="/image/checko_form_image/670cd586577a0eeb27e89da4_105-min.png"
            width={250}
            height={250}
            alt="idol"
          ></Image>
          <div className="absolute bottom-[30%] left-[25.5%] w-full h-full flex items-center justify-center">
          <p className="text-[10px] text-center font-medium">
                ขอบคุณสำหรับฟอร์มนะ<br></br> {studentName}
              </p>
          </div>
        </div>
        <div className="w-[100%] shadow-md border-b-[2px] border-gray h-10 "></div>
        <div className="flex flex-col justify-ceter items-center text-center mt-[50px] font-kanit space-y-[10px]">
          <h1 className="font-medium text-[20px] text-[#78C27B] sm:text-[25px]">
            บันทึกแบบฟอร์มเสร็จสิ้น
          </h1>
          <p className="sm:text-[19px] w-[100%] text-[14px] text-[#5B5B5B]">
            ขอบคุณสำหรับการส่งแบบฟอร์ม <br></br>
            กดปุ่มด้านล่างเพื่อกลับไปยังหน้าแรก
          </p>
          <button>
            <Link href='/'><p className="bg-[#323232] mt-[30px] text-[17px] text-white px-[50px] shadow-inner py-[12px] rounded-[20px]">
              กลับไปยังหน้าแรก
            </p></Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Finishsave;
