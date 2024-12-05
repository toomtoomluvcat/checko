"use client";

import React, { useState } from "react";
import EXIF from "exif-js";
import { DateTime } from "luxon";

function Form() {
  const [exifData, setExifData] = useState();
  const [imageSrc, setImageSrc] = useState();
  const [status, setstatus] = useState("");
  const [studentname, setstudentname] = useState();
  const [date, setDate] = useState();
  const [studentId, setStudentId] = useState();

  const classDate = {
    "26/11": 6,
    "28/11": 7,
    "03/12": 8,
    "05/12": 9,
    "10/12": 10,
    "12/12": 11,
    "17/12": 12,
    "19/12": 13,
    "24/12": 14,
    "26/12": 15,
    "31/12": 16,
    "02/01": 17,
    "07/01": 18,
    "09/01": 19,
    "14/01": 20,
    "16/01": 21,
    "21/01": 22,
    "23/01": 23,
    "28/01": 24,
    "30/01": 25,
    "04/02": 26,
    "06/02": 27,
    "11/02": 28,
    "13/02": 29,
    "18/02": 30,
    "23/02": 31,
    "25/02": 32,
    "27/02": 33,
    "04/03": 34,
    "06/03": 34,
    "11/03": 32,
    "13/03": 33,
    "18/03": 34,
    "20/03": 35,
    "25/03": 36,
    "27/03": 37,
    "01/04": 38,
    "03/04": 39,
  };

  const studentdict = {
    6330406784: { name: "นายกฤษฎา ดำดี", row: 3 },
    6430407537: { name: "นายณัฐนนท์ คะยอมดอก", row: 4 },
    6530400227: { name: "นายสัญธนา พานิชรัมย์", row: 5 },
    6530400421: { name: "นายธีระพงศ์ ล้อมนาค", row: 6 },
    6530402588: { name: "นายคุณากร โสภาวัฒน์", row: 7 },
    6530402693: { name: "นายธีรภัทร อุปทุม", row: 8 },
    6530402839: { name: "นายภูวฤทธิ์ อินทรีย์", row: 9 },
    6630400854: { name: "นายนาถพงศ์ หมุดปิน", row: 10 },
    6630401101: { name: "นายก้องกิดากร อ่อนสุวรรณา", row: 11 },
    6630401321: { name: "นายสุภธิษณ์ ศรีชาติ", row: 12 },
    6630401347: { name: "นายไอดิน ฆารสว่าง", row: 13 },
    6630401761: { name: "นายพัสกร พรชนะรัตน์", row: 14 },
    6630401818: { name: "นางสาวศิริลักษณ์ เมืองแวง", row: 15 },
    6630403909: { name: "นางสาวณัฏฐนิชา ชนะชัย", row: 16 },
    6630405252: { name: "นางสาวภัทรนิษฐ์ ทองธรรมชาติ", row: 17 },
    6630405765: { name: "นายจิณณวัทย์ สุวรรณแสง", row: 18 },
    6630406012: { name: "นายศิริภัทร ดวงสุพันธ์", row: 19 },
    6630406305: { name: "นางสาวปิยะมาศ สมอารีย์", row: 20 },
    6630406509: { name: "นายธนาสุทธิ์ รัตนาถาวร", row: 21 },
    6730400122: { name: "นายทีปภัทร ลุสีดา", row: 22 },
    6730400740: { name: "นายปิยวัฒน์ คำประดำ", row: 23 },
    6730400839: { name: "นายชัชวีร์ แสนสุข", row: 24 },
    6730401013: { name: "นายพงษ์พิพัฒน์ ใจศิริ", row: 25 },
    6730401021: { name: "นางสาวภัสกร ทองเหง้า", row: 26 },
    6730401047: { name: "นายวงศธร พวงคุ้ม", row: 27 },
    6730401055: { name: "นางสาวกวิสรา สิงห์คำหาญ", row: 28 },
    6730401063: { name: "นางสาวกัญญาณัฐ ศิลประคอง", row: 29 },
    6730401071: { name: "นายก้องเกียรติ งามสาย", row: 30 },
    6730401097: { name: "นายธนัชนนท์ สุราช", row: 31 },
    6730401102: { name: "นางสาวธัญฐญากร บุตรชน", row: 32 },
    6730401110: { name: "นางสาวนฤภร ทองเติม", row: 33 },
    6730401152: { name: "นายภรศิษฐ์ ชุมภักดี", row: 34 },
    6730401160: { name: "นางสาววิภาวรรณ โคตะเพ็ชร", row: 35 },
    6730401178: { name: "นางสาวสัตตกมล ศรีสุวรรณ", row: 36 },
    6730401186: { name: "นางสาวเวียงสะหวัน หลวงอุดม", row: 37 },
    6730401194: { name: "นายเอกชนะ เทพสุคนธ์", row: 38 },
    6730401209: { name: "นายกวิน พาโคกทม", row: 39 },
    6730401241: { name: "นางสาวนิชา กองการ", row: 40 },
    6730401259: { name: "นายบุญพัฒน์ พัฒนขจร", row: 41 },
    6730401267: { name: "นายพศวีร์ สารีบุตร", row: 42 },
    6730401291: { name: "นางสาววิรากานต์ พุ่มพวง", row: 43 },
    6730401306: { name: "นายศิรัชวิทค์ พิมพะกรรณ์", row: 44 },
    6730401314: { name: "นายศิริราช กางทอง", row: 45 },
    6730401356: { name: "นางสาวเบญญาภา ชุ่มวิจิตร", row: 46 },
    6730401526: { name: "นายกฤษฎ์ เขตไพบูลย์", row: 47 },
    6730401615: { name: "นายนรภัทร นินนานนท์", row: 48 },
    6730401712: { name: "นายรัฐธรรมนูญ นารี", row: 49 },
    6730401720: { name: "นายวีระพัฒน์ จัตุรัส", row: 50 },
    6730401738: { name: "นายสิทธินนท์ จ้ำแพงจันทร์", row: 51 },
    6730402776: { name: "นายธนากร สุวรรณธาดา", row: 52 },
    6730402807: { name: "นายบุรธัช เบญจกุล", row: 53 },
    6730402988: { name: "นายชิติพัทธ์ ทรงยศวัฒนา", row: 54 },
    6730402996: { name: "นายฐปนัท พลกุล", row: 55 },
    6730403007: { name: "นายณธกรณ์ โประวะ", row: 56 },
    6730403023: { name: "นายณัชพล นิลบรรพต", row: 57 },
    6730403049: { name: "นางสาวณัฐชนุตร์ ลานุ้ย", row: 58 },
    6730403057: { name: "นายณัฐธัญ ทองศิริ", row: 59 },
    6730403112: { name: "นายธนู อาเล็ส", row: 60 },
    6730403120: { name: "นางสาวธัญวลัย วิเศษวิสัย", row: 61 },
    6730403146: { name: "นายนิพัฒน์พนธ์ สารมโน", row: 62 },
    6730403154: { name: "นายบุญญณัฐฏ์ สำรวมจิตต์", row: 63 },
    6730403162: { name: "นายปณชัย แม่นมาตย์", row: 64 },
    6730403188: { name: "นายปรัชญา หาญกุล", row: 65 },
    6730403196: { name: "นายปุญญพัฒน์ คำจันทร์", row: 66 },
    6730403201: { name: "นายพงศ์พนธ์ พิเนตรบูรณะ", row: 67 },
    6730403219: { name: "นายพงศ์พล โทรัตน์", row: 68 },
    6730403269: { name: "นายภวินท์ จันทร์ไผ่", row: 69 },
    6730403308: { name: "นายอธิวัฒน์ ลัคนาทรัพย์", row: 70 },
    6730403316: { name: "นายอัครปวิชฒ์ วิเศษวงษา", row: 71 },
    6730403324: { name: "นายเวชพิสิฐ ศิรวตานนท์", row: 72 },
    6730403358: { name: "นายจิรกิตต์ สาศิริ", row: 73 },
    6730403366: { name: "นายจิรสิน สรรพวานิชกิจ", row: 74 },
    6730403382: { name: "นายชวนากร สามีรัมย์", row: 75 },
    6730403390: { name: "นางสาวฐิติพร ดวงดารา", row: 76 },
    6730403413: { name: "นายณิชพงษ์ สีไสย์", row: 77 },
    6730403447: { name: "นายปฏิพัธย์ ขัตติยะ", row: 78 },
    6730403463: { name: "นายวชิรวิทย์ ธงศรี", row: 79 },
    6730403528: { name: "นางสาวกันยารัตน์ ต่อสกุล", row: 80 },
    6730403536: { name: "นางสาวชนกนันท์ ชัยวุฒินันท์", row: 81 },
    6730403544: { name: "นางสาวณัฏฐ์ณิชา จันทนป", row: 82 },
    6730403560: { name: "นายธนวิชญ์ มณีศรี", row: 83 },
    6730403586: { name: "นายประสิทธิ์ชัย เพ็งลาย", row: 84 },
    6730403594: { name: "นางสาวปรินดา ประภัสสรมนู", row: 85 },
    6730403609: { name: "นางสาวปวีณวรรณ ศรีสวน", row: 86 },
    6730403617: { name: "นางสาวพัฒนาภรณ์ ลาดเหลา", row: 87 },
    6730403625: { name: "นางสาวพิชชาภา ทูลธรรม", row: 88 },
    6730403633: { name: "นายพีรพัฒน์ บุญฤกษ์", row: 89 },
    6730403641: { name: "นายภัทรธนเทพ แก่นการ", row: 90 },
    6730403659: { name: "นางสาวรพีพัชร ถ้ำสูงเนิน", row: 91 },
    6730403667: { name: "นางสาวรมิตา เสนานุฤทธิ์", row: 92 },
    6730403675: { name: "นางสาวรัตนาพร นอขุนทด", row: 93 },
    6730403683: { name: "นางสาววรุณฤดี ชัยลาภ", row: 94 },
    6730403691: { name: "นางสาวศศิธร ไชยสระแก้ว", row: 95 },
    6730403706: { name: "นายศุภสิทธิ์ สายบัว", row: 96 },
    6730403714: { name: "นางสาวสิริกร จันทร์โสภา", row: 97 },
    6730403722: { name: "นายอธิษฐ์ คงลี", row: 98 },
    6730403764: { name: "นายกิตติพัฒน์ เพชรสุริยา", row: 99 },
    6730403772: { name: "นายจักรภัทร พันธ์ศิริ", row: 100 },
    6730403780: { name: "นายจิรพัฒน์ บำรุงกุล", row: 101 },
    6730403798: { name: "นางสาวชญานันท์ แก้วระวัง", row: 102 },
    6730403845: { name: "นายณภัทร ผดุงกิจ", row: 103 },
    6730403853: { name: "นางสาวณัฐณิชา โคตรพันธ์", row: 104 },
    6730403861: { name: "นายณัฐิวุฒิ แสงสารพันธ์", row: 105 },
    6730403879: { name: "นายดุลยเดช พวงจำปี", row: 106 },
    6730403918: { name: "นายปริญญา มัธยม", row: 107 },
    6730403926: { name: "นางสาวปัณฑารีย์ สมนึกในธรรม", row: 108 },
    6730403934: { name: "นางสาวปานชนก จงศิริ", row: 109 },
    6730403950: { name: "นายพงศภร แสงชารี", row: 110 },
    6730403968: { name: "นายพิชยวัฒน์ วสุเสถียร", row: 111 },
    6730403984: { name: "นายภคิน ไชยพรม", row: 112 },
    6730403992: { name: "นายภูตะวัน ตนกลาย", row: 113 },
    6730404011: { name: "นายภูรินท์ เวียงสมุทร", row: 114 },
    6730404037: { name: "นายยศภัทร ปราสาทศรี", row: 115 },
    6730404045: { name: "นายรัชพล นัทธี", row: 116 },
    6730404079: { name: "นายสรวิชญ์ จันทร์ใต้", row: 117 },
    6730404087: { name: "นายอิสระ นันทพานิช", row: 118 },
    6730404095: { name: "นายเดชาวัสส์ แน่นอุดร", row: 119 },
    6730405376: { name: "นางสาวกชกร ศรีสวัสดิ์", row: 120 },
    6730405384: { name: "นางสาวชนันรัตน์ พนาเกษมรัตน์", row: 121 },
    6730405415: { name: "นายณภัทรชนม์ ยุทธเกษมสันต์", row: 122 },
    6730405481: { name: "นางสาวธิญาดา เติมบุญ", row: 123 },
    6730405570: { name: "นางสาวศิริศุภางค์ โชคศิริวรางค์", row: 124 },
    6730405685: { name: "นายธนบดี ทุมนันท์", row: 125 },
    6730405782: { name: "นายศุภฤกษ์ แป้นขำ", row: 126 },
    6730405790: { name: "นายสรณ สุนทร", row: 127 },
    6730405805: { name: "นายสรวิชญ์ เครือเพียกุล", row: 128 },
    6730405813: { name: "นายสุภัทชวัฒน์ จอดนอก", row: 129 },
    6730405871: { name: "นายขวัญแก้ว ต้นกัญญา", row: 130 },
    6730405889: { name: "นางสาวจิดาภา ประทุมชาติ", row: 131 },
    6730405902: { name: "นางสาวชมพูนุช พาวงค์", row: 132 },
    6730405910: { name: "นางสาวชลธิชา สิทธินันท์เจริญ", row: 133 },
    6730405944: { name: "นางสาวนภัสนันท์ เพชรประกอบ", row: 134 },
    6730405960: { name: "นางสาวปภัชญา ทองลือ", row: 135 },
    6730406005: { name: "นายวุฒิพงษ์ วงษา", row: 136 },
    6730406021: { name: "นายณัฐกิตติ์ เชี่ยวการ", row: 137 },
    6730406039: { name: "นายนัทสิทธิ์ นนดารา", row: 138 },
    6730406047: { name: "นายบวรวิชญ์ เลื่อมใส", row: 139 },
    6730406055: { name: "นางสาวพิมพ์ศิริ แสนทวีสุข", row: 140 },
    6730406063: { name: "นายพีรพัฒน์ มูลสาร", row: 141 },
    6730406071: { name: "นางสาวมนัญชยา ประทุมชัย", row: 142 },
    6730406089: { name: "นางสาวรัชพรรณ พูลสำราญ", row: 143 },
    6730406097: { name: "นายวรเมท ดอกบัว", row: 144 },
    6730406102: { name: "นางสาวศศิธร หงสรถ", row: 145 },
    6730406110: { name: "นางสาวหทัยรัตน์ สิทธิจันทเสน", row: 146 },
    6730406136: { name: "นายกฤติณ หรั่งเจริญ", row: 147 },
    6730406144: { name: "นายกฤษฎา แบบทอง", row: 148 },
    6730406152: { name: "นายกอบชัย ยอดเพชร", row: 149 },
    6730406160: { name: "นางสาวขนิษฐา แก้วหนูนวล", row: 150 },
    6730406178: { name: "นางสาวจิดาภา นาเมือง", row: 151 },
    6730406186: { name: "นายณนณภพ สุขธ์สบาย", row: 152 },
    6730406209: { name: "นางสาวณัฐณิชา นันทะกุล", row: 153 },
    6730406217: { name: "นายณัฐพนธ์ ตั้งประเสริฐ", row: 154 },
    6730406225: { name: "นายธนพัฒน์ บัวผัด", row: 155 },
    6730406267: { name: "นายปิยพนธ์ รุ่งพิสิฐไชย", row: 156 },
    6730406275: { name: "นางสาวภัทรภร พจนาพิมล", row: 157 },
    6730406291: { name: "นางสาววันรพี ไชยคำ", row: 158 },
    6730406306: { name: "นายศรวัสย์ เหลาคม", row: 159 },
    6730406364: { name: "นางสาวสการ์เล็ต เบญญา", row: 160 },
    6730406372: { name: "นายสนธิ อิทธิพร", row: 161 },
    6730406380: { name: "นายอนุชา วงค์ละคร", row: 162 },
    6730406398: { name: "นางสาวอัญชิสา แฮนเกตุ", row: 163 },
    6730406762: { name: "นายพีรพัฒน์ วารินสะอาด", row: 164 },
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const file = document.getElementById("fileinput").files[0];
    if (!file) {
      setstatus("Input your image before submit");
      return;
    }
    if (!date) {
      setstatus("Image doesn't contain any formation data, try another image.");
      return;
    }
    
    if (!studentId || !studentdict[studentId.replace("-", "")]) {
      setstudentname("dont match any student id");
      return
    } else {
      setstudentname(studentdict[studentId.replace("-", "")].name);
    }
    try {
      const timeStamp = DateTime.now()
        .setZone("Asia/Bangkok")
        .toFormat("yyyy:LL:dd");
      const RowFormDate =
        classDate[
          `${exifData.date.substring(8)}/${exifData.date.substring(5, 7)}`
        ];
      const body = {
        datum: {
          name: `${studentdict[studentId.replace("-", "")].name}`,
          datestamp: timeStamp,
          date: exifData.date,
          time: exifData.time,
          latitude: JSON.stringify(exifData.latitude).substring(
            1,
            JSON.stringify(exifData.latitude).length - 1
          ),
          longtitude: JSON.stringify(exifData.longtitude).substring(
            1,
            JSON.stringify(exifData.longtitude).length - 1
          ),
          row: `${studentdict[studentId.replace("-", "")].row}`,
          colum: RowFormDate ? RowFormDate : 0,
        },
      };

      const res = await fetch(
        "https://api.sheety.co/198501d3d858aa8cff12db41f95a6a2c/physicAttendance/datum",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      if (res.ok) {
        setstudentname(`บันทึกสำเร็จ`);
        setstatus(timeStamp);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const img = new Image();
        img.src = event.target.result;
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
            const longtitude = allTags.GPSLongitude;
            setDate(date);
            setExifData({ date, time, latitude, longtitude });
          });
        };
      };
      reader.readAsDataURL(file);
      setImageSrc(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-lg">
      <form onSubmit={handlesubmit} className="space-y-8">
        <h2 className="text-3xl font-bold text-blue-700 text-center">
          อัปโหลดข้อมูลนักศึกษา
        </h2>

        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">
              รหัสนักศึกษา
            </label>
            <input
              onChange={(e) => setStudentId(e.target.value)}
              className="border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
              type="text"
              placeholder="กรอกรหัสนักศึกษา"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">กรอกรูปภาพ</label>
            <input
              type="file"
              id="fileinput"
              accept="image/*"
              onChange={handleFileChange}
              className="file:py-2 file:px-4 file:rounded-lg file:border-none file:bg-blue-100 file:text-blue-600 hover:file:bg-blue-200"
            />
          </div>
        </div>

        <button
          className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
          type="submit"
        >
          กดส่งภาพ
        </button>

        {studentname && (
          <div className="mt-4 text-green-600 font-medium text-center">
            {studentname}
          </div>
        )}

        {status && (
          <div className="mt-2 text-red-500 font-medium text-center">
            {status}
          </div>
        )}
      </form>

      {imageSrc && (
        <div className="mt-8">
          <h3 className="text-center text-blue-600 font-semibold mb-4">
            ตัวอย่างรูปภาพที่เลือก
          </h3>
          <div className="flex justify-center">
            <img
              src={imageSrc}
              alt="Selected"
              className="w-64 rounded-lg shadow-md border border-gray-300"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
