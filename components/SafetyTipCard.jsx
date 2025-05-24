'use client';

export default function SafetyTipCard() {
  return (
    <div className="w-full max-w-xl mx-auto border border-orange-500 h-full">
      {/* กล่องหัว + ตัวเนื้อหา */}
      <div className="flex">
        {/* ซ้าย: รูป background หัว */}
        <div
          className="w-[142px] h-[128px] bg-no-repeat bg-left-top"
          style={{ backgroundImage: "url('/images/SOne_index_tips1.png')" }}
        ></div>

        {/* กลาง: ข้อความและเนื้อหา */}
        <div
          className="flex-1 bg-repeat-x bg-left-top p-3 text-white"
          style={{ backgroundImage: "url('/images/SOne_index_tips2.png')" }}
        >
          <p className="text-center text-orange-500 text-lg font-bold">Safety Tips</p>

          <div className="my-1 w-full flex justify-start">
            <img
              src="/images/SOne_index_pic66.png"
              alt="arrow up"
              width={13}
              height={9}
            />
          </div>

          <p className="text-center text-sm whitespace-pre-line">
            ตรวจเช็คลมยางทุกวันก่อนออกเดินทาง{'\n'}
            โดยเฉพาะในช่วงเช้าและก่อนขับรถทางไกล
          </p>

          <div className="mt-1 w-full flex justify-end">
            <img
              src="/images/SOne_index_pic99.png"
              alt="arrow down"
              width={13}
              height={9}
            />
          </div>
        </div>

        {/* ขวา: เส้นหัวด้านขวา */}
        <div
          className="w-[5px] h-[128px] bg-no-repeat bg-right-top"
          style={{ backgroundImage: "url('/images/SOne_index_tips3.png')" }}
        ></div>
      </div>

      {/* ช่องรับเบอร์โทร + ปุ่ม Go */}
      <div className="flex items-center justify-between p-2 bg-white text-black">
        <span className="text-sm font-medium pl-2">สมัครรับข่าวสาร</span>
        <div className="flex items-center bg-white border border-orange-500">
          <input
            type="text"
            placeholder="กรุณากรอกเบอร์มือถือ"
            className="p-1 text-sm w-full focus:outline-none"
          />
          <button className="">
            <img
              src="/images/SOne_index_btgo.jpg"
              alt="go"
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>

      {/* เส้นคั่นล่าง */}
      <div
        className="h-[8px] bg-repeat-x"
        style={{ backgroundImage: "url('/images/SOne_index_dash--.png')" }}
      ></div>

      {/* ปุ่มโทร */}
      <div className="text-center py-2">
        <img
          src="/images/SOne_index_call.png"
          alt="call"
          width={277}
          height={33}
          className="inline-block"
        />
      </div>
    </div>
  );
}
