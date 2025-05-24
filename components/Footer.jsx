'use client';

export default function Footer() {
  return (
    <div className="flex container px-6 lg:px-0 mx-auto gap-2 items-center text-xs mt-4 ">
      {/* โลโก้ซ้าย */}
      <img
        src="/images/SOne_index_logos.png"
        alt="logo"
        className="h-auto w-auto"
      />

      {/* กล่องข้อความขวา */}
      <div className="flex justify-between items-center bg-black text-white w-full p-3 rounded">
        <p>Copyright © 2014</p>
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <p className="border-b border-white md:border-none">Supakorn Cherdcahi</p>
          <p className="hidden md:block mx-1">|</p>
          <a
            href="mailto:yo-dew-yo@hotmail.com"
            className="hover:text-orange-500"
          >
            yo-dew-yo@hotmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
