import { useState } from 'react';
import Combobox from './Select'
import { listOfLang } from '~/constant/app'

export default function LangSelector() {
    const [currentLang, setCurrentLang] = useState("US");

    function onSubmit (lang : string | null) {
        const newLang = lang?.split("-")?.[1] || "US"
        setCurrentLang(newLang)

        console.log("Set to " , newLang)
    }
  return (
    <Combobox value={currentLang} onChange={(item) => onSubmit(item)} items={listOfLang} />
  )
}
