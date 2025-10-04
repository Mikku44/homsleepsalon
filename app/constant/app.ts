export const BASE_URL = "https://homsleepsalon.vercel.app"

export const SLIDE_UP = {
  initial: {
    y: 20,
    opacity: 0
  },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};


export const MENU = [
  {
    href: "/", label: "home",
  },
  {
    href: "/aboutus", label: "aboutus",
  },
  {
    href: "/booking", label: "booking",
  },
  {
    href: "/promotion", label: "promotion",
  },
  {
    href: "/products", label: "products",
  },
  {
    href: "/gallery", label: "gallery",
  },
]

export const PROMOTIONS = [
  {
    href: "/promotion?#", label: "Promotion 1",
  },

]


export const listOfLang = [
  { label: "ไทย", value: "th-TH", flag: "TH" },
  { label: "English", value: "en-US", flag: "US" },
  { label: "中文", value: "zh-CN", flag: "CN" },
  { label: "日本語", value: "ja-JP", flag: "JP" },
  { label: "한국어", value: "ko-KR", flag: "KR" },
  { label: "Tiếng Việt", value: "vi-VN", flag: "VN" },
  { label: "العربية", value: "ar-SA", flag: "SA" },
];
