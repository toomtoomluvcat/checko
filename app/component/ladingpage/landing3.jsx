import React from "react";
import Image from "next/image";

function Landing3() {
  return (
    <>
      <div className="h-screen justify-center flex items-center">
        <div className="flex gap-x-[200px] justify-center items-center flex-col sm:flex-row  ">
          <Image
            className="my-[30px] sm:my-[0px] w-[200px] h-[200px] sm:w-[382px] sm:h-[382px]"
            src="/image/girlwithgps.png"
            width={1500}
            height={1500}
            quality={100}
            alt="girlwithgps"
          ></Image>
          <div className="flex flex-col gap-[20px] sm:gap[10px]">
            <div>
              <h2 className="my-[15px] sm:my-[10px] font-kanit font-medium text-[1.25rem] sm:text-[1.8rem]">
                2. เปิด GPS ขณะถ่ายภาพ
              </h2>
              <p
                style={{ textIndent: "40px" }}
                className="max-w-[250px] sm:max-w-[390px] text-[0.8rem] sm:text-[1.2rem]"
              >
                สำหรับอุปกรณ์ที่ไม่ได้อยู่ในเครือ apple จำเป็น ต้องเปิด GPS
                เนื่องจากระบบจะตรวจสอบถานที่ที่ถ่ายภาพ
                ดังนั้นแล้วภาพถ่ายที่ถ่ายนอกเหนือรัศมีห้องเรียนที่กำหนดไว้จะถูกแจ้งไปยังอาจารย์
              </p>
            </div>
            <div className="flex gap-x-[10px] sm:gap-[20px] sm:mt-[5px] text-[0.67rem] sm:text-[0.905rem] font-medium">
              <button className="border-[2px] sm:border-[3px] hover:text-[#292929] hover:border-[#292929] border-black px-[25px] sm:px-[40px] py-[5.5px] sm:py-[7px] rounded-[9px] sm:rounded-[12px]">
                ย้อนกลับ
              </button>
              <button className="bg-black text-white  hover:bg-[#292929] transition-all px-[25px] sm:px-[40px] py-[5.5px] sm:py-[7px] rounded-[9px] sm:rounded-[12px]">
                ขั้นตอนถัดไป
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing3;
