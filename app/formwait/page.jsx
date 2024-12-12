"use client"

import { useState } from "react";
import { DateTime } from "luxon";

export default function ShowDate() {
  const [timeStamp, setTimeStamp] = useState("");

  // ฟังก์ชันที่จะอัพเดทเวลาเมื่อคลิกปุ่ม
  const handleClick = () => {
    const currentTime = DateTime.now()
      .setZone("Asia/Bangkok")
      .toFormat("yyyy:LL:dd");
    setTimeStamp(currentTime); // อัพเดทเวลาที่แสดง
  };

  return (
    <div>
      <button onClick={handleClick}>แสดงวันที่และเวลา</button>
      {timeStamp && (
        <div style={{ marginTop: "20px", fontSize: "20px", fontWeight: "bold" }}>
          วันที่และเวลา: {timeStamp}
        </div>
      )}
    </div>
  );
}
