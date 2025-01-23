"use client";
import React, { useState } from "react";
import Image from "next/image";
import Nav from "@/app/component/nav";

function page() {
  const [studentId, setStudentId] = useState("");
  const [status, setStatus] = useState("");
  const [studentCheck, setStudentCheck] = useState("");
  const [showdata, setShowdata] = useState(false);
  const [loading, setloading] = useState(false);

  const handlecheck = async () => {
    if (studentId) {
      const id = studentId.replace("-", "");
      const res = await fetch(`/api/users?studentId=${id}`);
      if (res.ok) {
        setloading(true);
        const data = await res.json();
        setloading(false);
        setStudentCheck(data);
        setShowdata(true);
        console.log(data);
      } else {
        setStatus("USER not found");
        throw new Error("something went wrong!");
      }
    } else {
      setStatus("Please provid infomation");
    }
  };
  const separateDateTime = (timeStamp) => {
    if (!timeStamp) return { time: "", date: "" };
    const parts = timeStamp.split(" ");
    return {
      time: parts[0] || "",
      date: parts[1] || "",
    };
  };
  return (
    <div>
      <Nav></Nav>
      <div className="flex max-w-[600px] mb-[140px] mx-auto flex-col items-center">
        <Image
          src="/image/checko_form_image/Group 64.png"
          alt="Logo"
          width={1500}
          height={1500}
          quality={100}
          className="w-[250px] mx-auto h-[110px] mt-[60px] md:mt-[50px] md:w-[405px] md:h-auto"
        />
        <div className=" flex items-center gap-x-[15px] w-[70%]">
          <input
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            type="text"
            placeholder="Enter your student Id"
            className="rounded-[30px] text-[13px]  w-full px-[15px] py-[12px] border-2 border-[#545252]"
          />
          <button
            type="button"
            disabled={loading}
            onClick={() => handlecheck()}
            className="p-[8px] rounded-[50%] bg-[#C9AE8C]"
          >
            <Image
              src="/image/checko_form_image/01.svg"
              alt="icon"
              width={1500}
              height={1500}
              quality={100}
              className="w-[25px] h-auto"
            ></Image>
          </button>
        </div>
        <div className="mt-4 flex gap-x-4">
          <a
            href="https://docs.google.com/spreadsheets/d/1aOklifcp5SNvkdTZBSN-lIkj7ZpEEYpzRKiTcB9lnXg/edit?usp=sharing"
            className="text-[13px] p-[8px] rounded-[7px] bg-[#EAEAEA]  text-474747"
          >
            ตารางเช็คชื่ออันเดิม
          </a>
          <a
            href="https://physics.sc.kku.ac.th/?page_id=727"
            className="text-[13px] p-[8px] rounded-[7px] bg-[#EAEAEA]  text-474747"
          >
           ติดต่ออาจารย์
          </a>
        </div>
        {showdata ? (
          <div className="lg:w-[900px] mt-[75px] w-[350px] md:w-[700px] p-4">
            <div className="overflow-x-auto shadow-md rounded-lg">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="p-3  text-xs sm:text-sm md:text-base text-left text-gray-700 uppercase tracking-wider">
                      Student name
                    </th>

                    <th className="p-3 text-xs sm:text-sm md:text-base text-left text-gray-700 uppercase tracking-wider">
                      Date
                    </th>

                    <th className="p-3  text-xs sm:text-sm md:text-base text-left text-gray-700 uppercase tracking-wider">
                      Answer
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {studentCheck.map((student) => {
                    const { time, date } = separateDateTime(student.timeStamp);
                    return (
                      <tr
                        key={student.id}
                        className="hover:bg-gray-50 transition-colors duration-200"
                      >
                        <td className="p-3  text-xs sm:text-sm md:text-base">
                          {student.name}
                        </td>
                        <td className="p-3 text-xs sm:text-sm md:text-base">
                          {date}
                        </td>

                        <td className="p-3 text-xs sm:text-sm md:text-base">
                          {student.answer}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div>
            <div className="mt-4 text-[12px] text-red-400">{status}</div>
            <Image
              src="/image/checko_form_image/catOnsearch.png"
              alt="Cat illustration"
              width={300}
              height={300}
              quality={100}
              className="w-[100px] mt-[30px] h-[100px] sm:w-[160px] sm:h-[160px]"
            />
          </div>
        )}
      </div>

      <div></div>
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
            , Phai
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
    </div>
  );
}

export default page;
