import React from "react";
import Image from "next/image";

function Landing2() {
  return (
    <div className="flex flex-col-reverse gap-[150px] sm:flex-row-reverse justify-center h-screen items-center">
      <div className="flex flex-col gap-[25px]">
        <div >
          <h2 className="my-[10px] font-kanit font-medium text-[1.8rem]">
            1. ประเภทภาพที่ไม่ควรใช้
          </h2>
          <p className="w-[370px] text-[1.3rem]">
            ภาพที่ดาวโหลดจากแหล่งที่อยู่อื่น เช่น messenger instragram line
            รวมทั้งภาพแคปหน้าจอ จะไม่สามารถใช้งานกับระบบตรวจสอบข้อมูลได้
          </p>
        </div>
        <div className="flex gap-[20px] text-[0.905rem] font-medium  ">
          <button className="border-[3px] hover:text-[#292929] hover:border-[#292929] border-black px-[40px] py-[7px] rounded-[12px]">ย้อนกลับ</button>
          <button className="bg-black text-white  hover:bg-[#292929] transition-all px-[40px] py-[7px] rounded-[12px]">ขั้นตอนถัดไป</button>
        </div>
      </div>
       {/*rounded mean border-raduis 
      *use rem instead px because of font are stertch*/}
      <Image
        src="/image/670dcf9fc8133002fdd63b8b_055-min.png"
        width={382}
        height={382}
        quality={100}
        alt="sadWithCat"
      ></Image>
    </div>
  );
}

export default Landing2;
