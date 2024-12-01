"use client"

import React,{useEffect, useState} from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";

function Landing4({onBack2}) {
  const[canClick,setcanClick] = useState(false);
  const [cooldown,setCooldown] = useState(5);
  const router = useRouter()
  
  useEffect(() =>{
    if (cooldown ===0){
      setcanClick(true);
    } else{
      const interval = setInterval(()=> { //ลดค่าตัวจับเวลา
        setCooldown((prev) => prev-1)
      },1000);
      return () => clearInterval(interval);
    }
},[cooldown]);

  const handlesubmit = (e)=>{
    e.preventDefault();
    router.push('https://forms.gle/YV2x4YDYX14PV7qZ8')
  }
  return (
    <div className="flex flex-col-reverse gap-x-[150px] sm:flex-row justify-center h-screen items-center flex-shrink-1">
      <div className="flex flex-col gap-[35px] sm:items-start items-center">
        <div>
          <h2 className="text-center sm:text-start max-w-[400px] my-[5px] sm:my-[10px] font-kanit font-medium text-[1.25rem] sm:text-[1.8rem]">
            3. ใช้ภาพที่มาจากกล้องเท่านั้น
          </h2>

          <p className="text-center sm:text-start max-w-[250px] sm:max-w-[390px] text-[0.8rem] sm:text-[1.2rem]">
            กรุณาถ่ายภาพผ่านแอปกล้องมือถือ ระบบจะบันทึกวัน เวลา
            และสถานที่เพื่อตรวจสอบ
            หากตรงตามเงื่อนไขจะบันทึกเข้าสู่ฐานข้อมูลเพื่อเช็คชื่อเข้าเรียน
          </p>
        </div>
        <div className="flex gap-x-[10px] sm:gap-[20px] sm:mt-[5px] text-[0.67rem] sm:text-[0.905rem] font-medium">
          <button onClick={onBack2} className="border-[2px] sm:border-[3px] hover:text-[#292929] hover:border-[#292929] border-black px-[25px] sm:px-[40px] py-[5.5px] sm:py-[7px] rounded-[9px] sm:rounded-[12px]">
            ย้อนกลับ
          </button>
          <button 
          onClick={handlesubmit} 
          className="bg-black text-white  hover:bg-[#292929] transition-all px-[25px] sm:px-[40px] py-[5.5px] sm:py-[7px] rounded-[9px] sm:rounded-[12px]"
          disabled = {!canClick}
          >
          
            {canClick ? "ขั้นตอนถัดไป" : `รออีก ${cooldown} วินาที`}
          </button>
        </div>
      </div>
      <Image
        className="w-[200px] h-[200px] sm:w-[382px] sm:h-[382px]"
        right="50000"
        src="/image/6370cd8e80c2d2d95ea0f949f_082-min 2.png"
        width={1500}
        height={1500}
        quality={100}
        alt="sadWithCat"
      ></Image>
      {/*rounded mean border-raduis
       *use rem instead px because of font are stertch*/}
    </div>
  );
}

export default Landing4;
