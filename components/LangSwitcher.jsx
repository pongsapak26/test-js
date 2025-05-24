"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function LangSwitcher() {
  const { setLang , lang } = useLanguage();
  return (
    <div className="flex gap-2">
      <div className="flex items-center gap-2">
        <Image
          onClick={() => setLang("th")}
          src={lang === "th" ? "/images/SOne_index_iconthai.jpg" : "/images/SOne_index_iconthai2.jpg"}
          width={25}
          height={18}
          className="cursor-pointer"
          alt="Thai"
        />
        <Image
          onClick={() => setLang("en")}
          src={lang === "en" ? "/images/SOne_index_iconeng.jpg" : "/images/SOne_index_iconeng2.jpg"}
          width={25}
          height={18}
          className="cursor-pointer"
          alt="English"
        />
      </div>
    </div>
  );
}
