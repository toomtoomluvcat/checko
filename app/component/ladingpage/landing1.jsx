import React from "react";
import Image from "next/image";

function Landing1() {
  return (
    <div className="flex items-center justify-between mx-auto w-[1000px] h-screen">
      <div className="relative right-[50px]">
        <Image
          src="/image/Untitled-2.png"
          alt="allBox"
          width={437}
          height={437}
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-kanit text-[45.25px] font-medium">
          ขั้นตอนการเช็คชื่อ
        </h2>
        <h3 className="font-kanit text-[72.82px] font-medium translate-y-[-20px]">
          SC501006
        </h3>
        <p className="font-kanit text-center w-[312px] text-[20px] font-normal h-[60px] translate-y-[-20px] ">
          เพียง 2 ขั้นตอนในการเข้าใช้งานง่ายๆ
          จะได้ไม่พลาดการเช็คชื่อเข้าร่วมชั้นเรียน
        </p>
        <button className="text-[26px] font-medium translate-y-[20px] text-white bg-black px-[88px] py-[10px] rounded-[15px]">
          เริ่มกันเลย
        </button>
      </div>
    </div>
  );
}

export default Landing1;
