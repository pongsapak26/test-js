"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function LangSwitcher() {
  const { setLang } = useLanguage();
  return (
    <div className="flex gap-2">
      <div className="flex items-center gap-2">
        <Image
          onClick={() => setLang("th")}
          src="/images/SOne_index_iconthai.jpg"
          width={25}
          height={18}
          alt="Thai"
        />
        <Image
          onClick={() => setLang("en")}
          src="/images/SOne_index_iconeng.jpg"
          width={25}
          height={18}
          alt="English"
        />
      </div>
    </div>
  );
}
