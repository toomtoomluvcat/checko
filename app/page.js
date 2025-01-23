"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "./component/nav";
import ShowError from "./component/showerror";
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
  const [popup,setPopup] =useState(0);
  useEffect(()=>{
    setPopup(0)
  },[])
  const handlePopup=()=>{
    setPopup(1)
  }
  return (
    <div className="">
      <Nav className="absolute inset-0"></Nav>
      <main className="flex flex-grow flex-col items-center justify-center px-6 py-16 sm:py-9">
        <div className="mt-[25px] sm:mt-188px flex-row-reverse">
          <Image
            src="/image/checko_form_image/Group 64.png"
            alt="Logo"
            width={1500}
            height={1500}
            quality={100}
            className="w-[250px] h-[110px] sm:w-[475px] sm:h-[200px]"
          />
        </div>

        <div className="flex flex-grow flex-col sm:flex-row-reverse items-center justify-center space-y-4 sm:space-y-0 sm:gap-[25px] mt-[35px] sm:mt-[0px]">
          <Link
            href={"/form"}
            className="bg-black text-white  hover:bg-[#292929] transition-all px-[70px] sm:px-[40px] py-[10px] sm:py-[12px] rounded-[11px] sm:rounded-[12px]"
          >
            เช็คชื่อเข้าเรียน
          </Link>

          <Link
            href={"/howToUse"}
            className="bg-[#D9D9D9] border-[3px] sm:border-[3px] hover:text-[#292929] hover:border-[#292929] border-black px-[75px] sm:px-[40px] py-[10px] sm:py-[12px] rounded-[11px] sm:rounded-[12px]"
          >
            วิธีการใช้งาน
          </Link>
        </div>

        <div className="mt-[70px] sm:mt-[100px]">
          <Image
            src="/image/checko_form_image/cathomepage.png"
            alt="Cat illustration"
            width={300}
            height={300}
            quality={100}
            className="w-[120px] h-[100px] sm:w-[160px] sm:h-[130px]"
          />
        </div>
      </main>

      <div>
        <footer className="text-center mt-[45px] text-black border-t border-gray-300">
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
              href="https://github.com/Pattararnxx"
              target="_blank"
              rel="noopener noreferrer"
              className="rgb-hover"
            >
              Prae
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="rgb-hover"
            >
              ,Phai
            </a>
            <br />
            and the Computer Engineering Team
          </p>
          <p className="mt-4 mb-8 text-[10px] sm:text-[10px]">
            Developed using React and Next.js (v13.5). Artwork by{" "}
            <a href="https://www.shigureni.com/">
              <span className="text-amber-200">Shigureni</span>
            </a>
          </p>
        </footer>
        {popup==0? <ShowError onclick={handlePopup}></ShowError>:<div></div>}
      </div>
    </div>
  );
}

export default Page;
