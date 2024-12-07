import React from 'react'
import Image from 'next/image'
function Notmatch({onClick}) {
  return (
    <div className="fixed inset-0 m-auto">
      <div className="h-screen w-screen bg-black opacity-[30%]"></div>
      <div className="max-w-[470px] bg-white h-[460px] sm:h-[550px] shadow-custom flex fiexd inset-0 left-[50px] right-[50px] m-auto rounded-[20px] flex-col items-center absolute justify-center">
        <div className="relative bottom-[25px]">
          <Image
            src="/image/checko_form_image/Screenshot 2023-09-07 235126.png"
            width={300}
            height={300}
            alt="poorcat"
            className='w-[180px] h-[180px]'
          ></Image>
          
        </div>
        <div className="w-[100%] shadow-md border-b-[2px] border-gray h-10 absolute top-[36%] "></div>
        <div className="flex sm:mt-[50px] flex-col justify-ceter items-center text-center font-kanit space-y-[10px]">
          <h1 className="font-medium text-[20px] text-red-400 sm:text-[25px]">
            ไม่สามารถโหลดข้อมูลได้
          </h1>
          <p className="sm:text-[19px] w-[70%] text-[14px] text-[#5B5B5B]">
          ลองเปลี่ยนเป็นการถ่ายภาพจาก”แอปกล้องที่ไม่ใช่การถ่ายผ่านเว็บไซต์หรือภาพที่โหลดมาจากแหล่งที่อยู่อื่น
          </p>
          <button>
            <p onClick={onClick} className="bg-[#323232] mt-[30px] text-[17px] shadow-inner-custom text-white px-[60px] py-[9px] sm:px-[100px] shadow-inner sm:py-[12px] rounded-[30px]">
              ลองอีกครั้ง
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Notmatch