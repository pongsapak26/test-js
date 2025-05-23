'use client';

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function TireSearch() {
  const { text } = useLanguage();

  return (
    <div className="text-white bg-black/85 border border-orange-500">
      {/* Header */}
      <div className="bg-orange-500 text-xl font-bold px-4 py-2 w-full">
        {text.tire_search_title}
      </div>

      {/* Body */}
      <div className="flex w-full relative pb-10">
        <img
          className=""
          src="https://s-one-react-clone.vercel.app/assets/SOne_index_bg_searchtype-DSU2IMr1.jpg"
          alt="ค้นหายางพื้นหลัง"
        />

        <div className="w-full h-full flex items-end">
          <div className="absolute md:w-[60%] sm:w-[80%] w-[60%] right-0 top-0 mx-2 flex flex-col">

            {/* หน้ายาง */}
            <div className="mb-2">
              <p className="text-xl font-semibold">{text.tire_width}</p>
              <p className="text-xs">{text.tire_width_desc}</p>
              <select className="bg-white text-sm focus:outline-none border border-orange-500 text-black w-full mt-1">
                <option value="">{`-- ${text.tire_width} --`}</option>
              </select>
            </div>

            {/* ซีรี่ย์ */}
            <div className="mb-2">
              <p className="text-xl font-semibold">{text.tire_series}</p>
              <p className="text-xs">{text.tire_series_desc}</p>
              <select className="bg-white text-sm focus:outline-none border border-orange-500 text-black w-full mt-1">
                <option value="">{`-- ${text.tire_series} --`}</option>
              </select>
            </div>

            {/* กระทะล้อ */}
            <div className="mb-2">
              <p className="text-xl font-semibold">{text.tire_rim}</p>
              <p className="text-xs">{text.tire_rim_desc}</p>
              <select className="bg-white text-sm focus:outline-none border border-orange-500 text-black w-full mt-1">
                <option value="">{`-- ${text.tire_rim} --`}</option>
              </select>
            </div>

            {/* ปุ่มค้นหา */}
            <div className="w-full flex justify-center">
              <button className="mt-2 bg-orange-500 text-black font-bold py-1 px-4 rounded hover:bg-orange-400 transition">
                {text.tire_search_btn}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
