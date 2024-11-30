import React from "react";
import Image from "next/image";

function Landing3() {
  return (
    <div className="flex gap-x-[200px] justify-center flex-col sm:flex-row  ">
      <Image
        src="/image/girlwithgps.png"
        width={400}
        height={400}
        quality={100}
        alt="girlwithgps"
      ></Image>
      <div className="flex flex-col gap-[25px]">
        <div>
          <h2 className="my-[10px] font-kanit font-medium text-[1.8rem]">
            3. ใช้ภาพที่มาจากกล้องเท่านั้น
          </h2>
          <p className="w-[370px] text-[1.3rem]">
            เป็นภาพที่ถ่ายจากแอปกล้องมือถือ โดยไม่ใช่การถ่าย ในแบบฟอร์ม
            ระบบจะบันทึกวัน เวลา และสถานที่ ที่ถ่ายรูปเพื่อตรวจสอบ
            และหากตรงกับเงื่อนไขที่ ถูกต้อง
            จะบันทึกเข้าสู่ฐานข้อมูลและทำการเช็คชื่อ เข้าเรียน
          </p>
        </div>
        <div className="flex gap-[20px] text-[0.905rem] font-medium  ">
          <button className="border-[3px] hover:text-[#292929] hover:border-[#292929] border-black px-[40px] py-[7px] rounded-[12px]">
            ย้อนกลับ
          </button>
          <button className="bg-black text-white  hover:bg-[#292929] transition-all px-[40px] py-[7px] rounded-[12px]">
            ขั้นตอนถัดไป
          </button>
        </div>
      </div>
      
    </div> 
  );
}

export default Landing3;
