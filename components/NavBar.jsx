"use client";

import { useState } from "react";
import Image from "next/image";
import LangSwitcher from "./LangSwitcher";

export default function NavBar() {
  const [search, setSearch] = useState("");

  return (
    <nav className="bg-white p-4 flex flex-col lg:flex-row items-center justify-between gap-4 container mx-auto">
      {/* Logo + Language */}
      <div className="flex items-center ">
        <div className="relative w-60 h-24">
          <Image
            src="/images/SOne_index_logo.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Search box */}

      {/* Menu Links */}
      <div className="text-sm text-black flex flex-col justify-center gap-2 text-end">
        <div className="flex items-center gap-2 ml-auto">
          <LangSwitcher />
        </div>
        <div className="flex items-center bg-orange-600 p-1 llg:ml-auto">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 text-sm border border-gray-300 focus:outline-none"
            placeholder="Search..."
          />
          <button className="w-10 h-10 flex items-center justify-center">
            <Image
              src="/images/SOne_index_btsearch.jpg"
              width={23}
              height={23}
              alt="Search"
            />
          </button>
        </div>
        <div className="flex items-center gap-2 text-xs whitespace-nowrap">
          <a href="#" className="hover:underline ">
            About S-ONE
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Job Opportunity
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Site Map
          </a>
        </div>
      </div>
    </nav>
  );
}
