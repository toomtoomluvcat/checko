import React from "react";
import Nav from "../component/nav";
import Image from "next/image";

function Form() {
  return (
    <div>
      <Nav></Nav>
      <div className="flex">
        <div>
          <div className="flex flex-col items-center justify-center">
            <h2>กรอกข้อมูลเช็คชื่อ</h2>
            <h4>กรอกข้อมูลให้ครบถ้วนตามเงื่อนไข</h4>
          </div>
          <hr className="mt-[10px] w-[350px] border-[1px] bg-black"></hr>
        </div>
        <form>
          
        </form>
        <Image
          src="/image/checko_form_image/checko_form.png"
          width={1500}
          height={1500}
          alt="forimage"
          className="w-[650px]"
        ></Image>
      </div>
    </div>
  );
}

export default Form;
