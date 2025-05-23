"use client";

import { createContext, useContext, useState, useEffect } from "react";
import en from "../translations/en";
import th from "../translations/th";

const translations = { en, th };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const [text, setText] = useState(translations["en"]);

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    setText(translations[lang]);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, text }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
