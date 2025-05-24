'use client';

import { useLanguage } from "@/context/LanguageContext";


export default function LocationSearchForm() {
  const { text } = useLanguage();

  return (
    <div className="bg-[#252525] text-white text-sm h-full">
      {/* หัวข้อ */}
      <div className="p-2 bg-[#F05A28]" >
        <h2 className="text-white text-xl font-semibold">{text.location_search_title}</h2>
      </div>

      {/* กล่องดำ */}
      <div className=" px-4 py-2 flex flex-col justify-between ">
        {/* Dropdown */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="whitespace-nowrap">{text.location_province}</label>
            <select className="text-black w-[178px] border border-orange-500 rounded px-2 py-1 text-sm">
              <option>{text.location_select_province}</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label className="whitespace-nowrap">{text.location_district}</label>
            <select className="text-black w-[178px] border border-orange-500 rounded px-2 py-1 text-sm">
              <option>{text.location_select_district}</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label className="whitespace-nowrap">{text.location_shop}</label>
            <select className="text-black w-[178px] border border-orange-500 rounded px-2 py-1 text-sm">
              <option>{text.location_select_shop}</option>
            </select>
          </div>
        </div>

        {/* หมายเหตุและปุ่ม */}
        <div className="text-center mt-2 text-orange-400 text-xs">
          {text.location_note}
          <div className="mt-2">
            <button className="mt-1">
              <img
                src="/images/SOne_index_search.png"
                alt={text.search_button_alt}
                width={100}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
