import React from "react";
import Image from "next/image";

function Landing3() {
  return (
    <div className="flex flex-col-reverse gap-[150px] sm:flex-row-reverse justify-center h-screen items-center">
      <div className="flex flex-col gap-[25px]">
        <div >
          <h2 className="my-[10px] font-kanit font-medium text-[1.8rem]">
            2. เปิด GPS ขณะถ่ายภาพ
          </h2>
          <p className="w-[620px] text-[1.3rem]">
          สำหรับอุปกรณ์ที่ไม่ได้อยู่ในเครือ appleจำเป็น
          ต้องเปิด GPSเนื่องจากระบบจะตรวจสอบถานที่ที่ถ่ายภาพ 
          ดังนั้นแล้วภาพถ่าย ที่ถ่ายนอกเหนือรัศมีห้องเรียนที่กำหนดไว้จะถูกแจ้งไปยังอาจารย์
          </p>
        </div>
        <div className="flex gap-[20px] text-[0.905rem] font-medium  ">
          <button className="border-[3px] hover:text-[#292929] hover:border-[#292929] border-black px-[40px] py-[7px] rounded-[12px]">ย้อนกลับ</button>
          <button className="bg-black text-white  hover:bg-[#292929] transition-all px-[40px] py-[7px] rounded-[12px]">เริ่มกันเลย</button>
        </div>
      </div>
       {/*rounded mean border-raduis 
      *use rem instead px because of font are stertch*/}
      <Image
        src="/image/670dcc96646a4b44586c66ff_080-min.png"
        width={382}
        height={382}
        quality={100}
        alt="sadWithCat"
      ></Image>
    </div>
  );
}

export default Landing3;
