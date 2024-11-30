import React from "react";
import Image from "next/image";

function Landing1() {
  return (
    <div className="flex flex-col sm:gap-[120px] gap-[45px] sm:flex-row items-center justify-center  h-screen">
      <div className="relative right-[0px] xl:right-[50px]">
        <Image
          src="/image/Untitled-2.png"
          alt="allBox"
          width={1500}
          height={1500}
          quality={100}
           className="w-[200px] h-[200px] sm:w-[437px] sm:h-[437px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-kanit text-[1.8rem] sm:text-[45.25px] font-medium">
          ขั้นตอนการเช็คชื่อ
        </h2>
        <h3 className="font-kanit text-[3.0rem] sm:text-[72.82px] font-medium translate-y-[-20px]">
          SC501006
        </h3>
        <p className="font-kanit text-center w-[240px] sm:w-[312px]  text-[0.9rem] sm:text-[20px] font-normal h-[60px] translate-y-[-20px] ">
          เพียง 3 ขั้นตอนในการเข้าใช้งานง่ายๆ
          จะได้ไม่พลาดการเช็คชื่อเข้าร่วมชั้นเรียน
        </p>
        <button className="sm:text-[26px] font-medium sm:translate-y-[20px] translate-y-[-10px] text-white bg-black px-[80px] sm:px-[88px] py-[10px] rounded-[15px]">
          เริ่มกันเลย
        </button>
      </div>
    </div>
  );
}

export default Landing1;
