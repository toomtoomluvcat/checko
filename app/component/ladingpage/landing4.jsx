import React from "react";
import Image from "next/image";

function Landing4() {
  return (
    <div className="flex flex-col-reverse gap-[150px] sm:flex-row justify-center h-screen items-center flex-shrink-1">
      <div className="flex flex-col gap-[25px]">
        <div >

          <h2 className="my-[10px] font-kanit font-medium text-[1.8rem]">
            3. ใช้ภาพที่มาจากกล้องเท่านั้น
          </h2>
          
          <p className="w-[570px] text-[1.3rem]">
          เป็นภาพที่ถ่ายจากแอปกล้องมือถือ โดยไม่ใช่การถ่ายในแบบฟอร์ม
          ระบบจะบันทึกวัน เวลา และสถานที่ที่ถ่ายรูปเพื่อตรวจสอบ และหากตรงกับเงื่อนไขที่ถูกต้อง
          จะบันทึกเข้าสู่ฐานข้อมูลและทำการเช็คชื่อเข้าเรียน 
          </p>
          
        </div>
        <div className="flex gap-[20px] text-[0.905rem] font-medium  ">
          <button className="border-[3px] hover:text-[#292929] hover:border-[#292929] border-black px-[40px] py-[7px] rounded-[12px]">ย้อนกลับ</button>
          <button className="bg-black text-white  hover:bg-[#292929] transition-all px-[40px] py-[7px] rounded-[12px]">เริ่มกันเลย</button>
        </div>
        
      </div>
      <Image 
        className="flex"
        right ="50000"
        src="/image/670dd072a519f57758814832_041-min.png"
        width={382}
        height={382}
        quality={100}
        alt="sadWithCat"
        
      ></Image>
       {/*rounded mean border-raduis 
      *use rem instead px because of font are stertch*/}
      
    </div>
  );
}

export default Landing4;
