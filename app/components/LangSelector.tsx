import { useEffect, useState } from 'react'
import Combobox from './Select'
import { listOfLang } from '~/constant/app'
import i18n from '~/i18n/i18n'

export default function LangSelector () {
  const [currentLang, setCurrentLang] = useState<string>('US')

  useEffect(() => {
    // โหลดค่าที่เคยเลือก
    const savedLang = localStorage.getItem("lang")
    if (savedLang) {
      const [lng, country] = savedLang.split('-')
      setCurrentLang(country)
      i18n.changeLanguage(lng)
    }
  }, [])

  function onSubmit (lang: string | null) {
    if (!lang) return
    const [lng, country] = lang.split('-')
    setCurrentLang(country)
    i18n.changeLanguage(lng)

    // จดจำค่า
    localStorage.setItem("lang", lang)
    console.log('Set to ', lang)
  }

  return (
    <Combobox
      value={currentLang}
      onChange={item => onSubmit(item)}
      items={listOfLang}
    />
  )
}
