import { en } from "./en";
import { th } from "./th";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { ja } from "./ja";
import { ar } from "./ar";
import { ko } from "./ko";
import { vi } from "./vi";
import { zh } from "./zh";


const resources = {
  en: en,
  th : th,
  ja : ja,
  ar : ar,
  ko : ko,
  vi : vi,
  zh : zh
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"], // เช็คจาก localStorage ก่อน
      caches: ["localStorage"],             // จดจำใน localStorage
    }
  });

export default i18n;