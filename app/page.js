import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    <div className="">
      <main className="flex flex-grow flex-col items-center justify-center px-6 py-16 sm:py-9">
        <div className="mt-28 sm:mt-188px flex-row-reverse">
          <img
            src="\image\checko_form_image\logo small.png"
            alt="Logo"
            width={350}
            height={100}
            quality={100}
            className="w-[250px] h-[100px] sm:w-[475px] sm:h-[225px]"
          />
        </div>

        <div className="flex flex-grow flex-col sm:flex-row-reverse items-center justify-center space-y-4 sm:space-y-0 sm:gap-12 mt-6 sm:-mt-10">
          <Link
            href={"check"}
            className="bg-black text-white  hover:bg-[#292929] transition-all px-[70px] sm:px-[40px] py-[5.5px] sm:py-[7px] rounded-[9px] sm:rounded-[12px]"
          >
            เช็กชื่อเข้าเรียน
          </Link>

          <Link
            href={"landing1.jsx"}
            className="bg-[#D9D9D9] border-[1px] sm:border-[2px] hover:text-[#292929] hover:border-[#292929] border-black px-[75px] sm:px-[40px] py-[5.5px] sm:py-[7px] rounded-[9px] sm:rounded-[12px]"
          >
            วิธีการใช้งาน
          </Link>
        </div>

        <div className="mt-36 sm:mt-12">
          <img
            src="\image\checko_form_image\cathomepage.png"
            alt="Cat illustration"
            width={125}
            height={125}
            quality={100}
            className="w-[120px] h-[100px] sm:w-[160px] sm:h-[130px]"
          />
        </div>
      </main>

      <div>
        <footer className="text-center text-black border-t border-gray-300">
        <p className="text-[12px] sm:text-[13px] mt-6">
    This website was created by{" "}
    <a
      href="https://github.com/toomtoomluvcat"
      target="_blank"
      rel="noopener noreferrer"
      className="rgb-hover"
    >
      Toom
    </a>
    ,{" "}
    <a
      href="https://github.com/Sorawitphum"
      target="_blank"
      rel="noopener noreferrer"
      className="rgb-hover"
    >
      Phum
    </a>
    ,{" "}
    <a
      href="https://example.com/prae"
      target="_blank"
      rel="noopener noreferrer"
      className="rgb-hover"
    >
      Prae
    </a>
    <br />
    and the Computer Engineering Team
  </p>
          <p className="mt-4 mb-8 text-[10px] sm:text-[10px]">
            Developed using React and Next.js (v13.5). Artwork by{" "}
            <span className="text-amber-200">Shigureni</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Page;
