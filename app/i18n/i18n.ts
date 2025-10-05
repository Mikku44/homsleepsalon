import { en } from "./en";
import { th } from "./th";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';


const resources = {
  en: en,
  th : th
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