import React from "react";
import Link from "next/link";
import Catspin from "./component/formsubmit/catspin";
import Nav from "./component/nav";
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
      <Nav></Nav>
    </div>
  );
}

export default Page;
