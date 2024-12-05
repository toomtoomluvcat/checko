import React from "react";
import Link from "next/link";
{
  /* หน้าแรก 
  
  เวลาจะ navigation ไปหน้าอื่นให้ใช้ tag Link แทน a เช่น
  <Link href='/'>กดไปหน้าแรก</Link>
  
  เวลาจะใช้ css ประกาศ className แทน class
  และการใช้ style จะใช้ synax 
  style= {{display:'flex',flexDirection:'column'}} 

  */
}
function Page() {
  return (
    <div className="flex items-center h-screen justify-center">
      <Link
        href="form"
        className="mw-[20px] bg-red-400 mw-[150px] rounded-[7px] px-[10px] py-[3px] font-notoSansThaiLooped"
      >
        แบบฟอร์ม
      </Link>
      
    </div>
  );
}

export default Page;
