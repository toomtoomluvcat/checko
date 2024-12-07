import React from "react";
import Image from "next/image";

function Catspin() {
  return (
    <div className="fixed inset-0 m-auto">
      <div className="h-screen w-screen bg-black opacity-[30%]"></div>
      <div className="max-w-[400px] bg-white h-[320px] sm:h-[500px] shadow-custom flex fiexd inset-0 left-[50px] right-[50px] m-auto rounded-[20px] flex-col items-center absolute justify-center">
        <div className="text-center font-kanit space-y-[10px]">
          <h1 className="font-medium text-[20px] sm:text-[25px]">กำลังบันทึกข้อมูล</h1>
          <p className="sm:text-[17px] text-[12px] text-[#5B5B5B]">
            ระบบกำลังถึงฐานข้อมูล กรุณารอซักครู่ . . .
          </p>
        </div>
        <Image
          className="sm:w-[200px] w-[120px] sm:my-[50px] my-[30px] animate-spin-360 "
          src="/image/checko_form_image/670cd3fe2cbb453c66bb2130_112-min 4.png"
          alt="blackcatspin"
          quality={100}
          width={200}
          height={400}
        />
        <p className="font-kanit text-[#5B5B5B] text-center">มุเงี๊ยวววววว~</p>
      </div>
      
    </div>
  );
}

export default Catspin;
