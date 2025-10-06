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

export const HOME_PROMOTION = [
  {
    src: "/promotions/vietnam-banner.png",
    href : "/promotion#",
    alt: "HomeSleepSalon Vietnam spa promotion and special offers"
  },
  {
    src: "/promotions/body-scrub.png",
    href : "/promotion#",
    alt: "HomeSleepSalon body scrub and aroma therapy spa treatment"
  },
  {
    src: "/promotions/ear-aromatherapy.png",
    href : "/promotion#",
    alt: "HomeSleepSalon ear aromatherapy spa service"
  },
  {
    src: "/promotions/face-spa.png",
    href : "/promotion#",
    alt: "HomeSleepSalon facial spa and skin care treatment"
  },
  {
    src: "/promotions/foot-spa.png",
    href : "/promotion#",
    alt: "HomeSleepSalon foot spa and massage service"
  },
  
];

export const HOME_GALLERY = [
  {src : "/images/hom4/hom4 (1).jpg"},
  {src : "/images/hom4/hom4 (2).jpg"},
  {src : "/images/hom4/hom4 (3).jpg"},
  {src : "/images/hom4/hom4 (4).jpg"},
  {src : "/images/hom4/hom4 (5).jpg"},
  {src : "/images/hom4/hom4 (6).jpg"},
  {src : "/images/hom4/hom4 (7).jpg"},
  {src : "/images/hom4/hom4 (8).jpg"},
  {src : "/images/hom4/hom4 (9).jpg"},
  {src : "/images/hom4/hom4 (26).jpg"},
  {src : "/images/hom4/hom4 (20).jpg"},
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
