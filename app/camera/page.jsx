"use client"

import React, { useState, useRef } from "react";
import EXIF from "exif-js"; // เพิ่มการ import EXIF.js

function CameraExifReader() {
  const [exifData, setExifData] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null); // ใช้เก็บ reference ของ media stream

  // เปิดกล้อง
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      streamRef.current = stream; // เก็บสตรีมของกล้องไว้ในตัวแปร
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error("Error accessing the camera: ", err);
    }
  };

  // ปิดกล้อง
  const stopCamera = () => {
    if (streamRef.current) {
      const tracks = streamRef.current.getTracks();
      tracks.forEach((track) => track.stop()); // หยุดการเล่นของกล้อง
      videoRef.current.srcObject = null; // ปิดการแสดงผลของกล้อง
      streamRef.current = null; // รีเซ็ตการเก็บสตรีม
    }
  };

  // ถ่ายภาพจากกล้อง
  const captureImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // วาดภาพจากวิดีโอที่แสดงบนหน้าจอ
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    // ได้ภาพจาก canvas และแปลงเป็น Data URL
    const imageData = canvas.toDataURL("image/jpeg");

    const img = new Image();
    img.src = imageData;
    img.onload = function () {
      EXIF.getData(img, function () {
        const allTags = EXIF.getAllTags(this);
        const dateTime = allTags.DateTime;
        let date, time;

        if (dateTime) {
          const [datepart, timepart] = dateTime.split(" ");
          date = datepart;
          time = timepart;
        }

        const latitude = allTags.GPSLatitude;
        const longitude = allTags.GPSLongitude;
        const altitude = allTags.GPSAltitude; // ข้อมูลความสูง
        const cameraMake = allTags.Make; // ข้อมูลยี่ห้อกล้อง
        const cameraModel = allTags.Model; // ข้อมูลรุ่นกล้อง

        // แสดงผลข้อมูล EXIF
        setDate(date);
        setTime(time);
        setExifData(allTags);
      });
    };
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">เปิดกล้องและถ่ายภาพเพื่อดึงข้อมูล EXIF</h1>
      <div className="w-full sm:w-96 md:w-[480px] bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <video
            ref={videoRef}
            autoPlay
            className="w-full h-auto max-w-full mb-4 rounded-md border-2 border-gray-300"
          ></video>
          <div className="flex gap-4">
            <button
              onClick={startCamera}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              เปิดกล้อง
            </button>
            <button
              onClick={captureImage}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              ถ่ายภาพ
            </button>
            <button
              onClick={stopCamera}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              ปิดกล้อง
            </button>
          </div>
        </div>
        <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
        {exifData && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">ข้อมูล EXIF:</h2>
            <pre className="bg-gray-800 text-white p-4 rounded-md">{JSON.stringify(exifData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default CameraExifReader;
