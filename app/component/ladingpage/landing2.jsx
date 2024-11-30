import React from "react";
import Image from "next/image";

function Landing2() {
  return (
    <div className="flex gap-y-[60px] gap-x-[150px] flex-col sm:flex-row-reverse justify-center h-screen items-center">
      <div className="flex flex-col sm:items-start items-center">
        <h2 className="my-[10px] font-kanit font-medium text-[1.3rem] sm:text-[1.8rem]">
          1. ประเภทภาพที่ไม่ควรใช้
        </h2>
        <p className="max-w-[250px] sm:max-w-[437px] text-[0.7rem] sm:text-[1.3rem] text-center sm:text-start ">
          ภาพที่ดาวโหลดจากแหล่งที่อยู่อื่น เช่น messenger instragram line
          รวมทั้งภาพแคปหน้าจอ จะไม่สามารถใช้งานกับระบบตรวจสอบข้อมูลได้
        </p>
        <div className="flex gap-x-[10px] sm:gap-[20px] mt-[25px] sm:mt-[35px] text-[0.67rem] sm:text-[0.905rem] font-medium  ">
          <button className="border-[2px] sm:border-[3px] hover:text-[#292929] hover:border-[#292929] border-black px-[25px] sm:px-[40px] py-[5.5px] sm:py-[7px] rounded-[9px] sm:rounded-[12px]">
            ย้อนกลับ
          </button>
          <button className="bg-black text-white  hover:bg-[#292929] transition-all px-[25px] sm:px-[40px] py-[5.5px] sm:py-[7px] rounded-[9px] sm:rounded-[12px]">
            ขั้นตอนถัดไป
          </button>
        </div>
      </div>
      {/*rounded mean border-raduis
       *use rem instead px because of font are stertch*/}
      <Image className="w-[200px] h-[200px] sm:w-[382px] sm:h-[382px]"
        src="/image/670dcf9fc8133002fdd63b8b_055-min.png"
        width={1500}
        height={1500}
        quality={100}
        alt="sadWithCat"
      ></Image>
    </div>
  );
}

export default Landing2;
