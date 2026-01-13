import { FaSpa, FaHeadphonesAlt } from "react-icons/fa"
import { AiFillProduct } from "react-icons/ai";

export const BASE_URL = "https://homsleepsalon.com"

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
    href: "/products", label: "products & promotions",
    subMenu: [
      {
        href: "/head-spa",
        label: "Head Spa",
        desc: "Deep relaxation & scalp therapy",
        icon: FaSpa,
      },
      {
        href: "/ear-spa",
        label: "Ear Spa",
        desc: "Sensory calm & pressure relief",
        icon: FaHeadphonesAlt,
      },
      {
        href: "/products",
        label: "products & promotions",
        desc: "See all products & promotions",
        icon: AiFillProduct ,
      },
    ],
  },
  {
    href: "/gallery", label: "gallery",
  },
  {
    href: "/news", label: "news",
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
    href: "/promotion#",
    alt: "HomeSleepSalon Vietnam spa promotion and special offers"
  },
  {
    src: "/promotions/relaxing-hair.jpg",
    href: "https://line.me/R/ti/p/@408onese?text=relaxing hair",
    alt: "HomeSleepSalon relaxing hair"
  },

  {
    src: "/promotions/ear-aromatherapy.png",
    href: "/promotion#",
    alt: "HomeSleepSalon ear aromatherapy spa service"
  },

  {
    src: "/promotions/face-spa.png",
    href: "/promotion#",
    alt: "HomeSleepSalon facial spa and skin care treatment"
  },

  {
    src: "/promotions/body-scrub.png",
    href: "/promotion#",
    alt: "HomeSleepSalon body scrub and aroma therapy spa treatment"
  },

  {
    src: "/promotions/foot-spa.png",
    href: "/promotion#",
    alt: "HomeSleepSalon foot spa and massage service"
  },

];

export const ALL_SHORTS = [
  {
    src: "eotEJOLbvi4",
  },
  {
    src: "T-0Ci2-UDRw",
  },
  {
    src: "miDmXFnDtAs",
  },
]

export const ALL_PROMOTION = [
  {
    src: "/promotions/vietnam-banner.png",
    line: "https://line.me/R/ti/p/@408onese?text=Vietnam%20spa%20promotion%20and%20special%20offers",
    whatsapp: "https://wa.me/66657479789?text=Vietnam%20spa%20promotion%20and%20special%20offers",
    alt: "HomeSleepSalon Vietnam spa promotion and special offers"
  },
  {
    src: "/promotions/relaxing-hair.jpg",
    line: "https://line.me/R/ti/p/@408onese?text=relaxing%20hair",
    whatsapp: "https://wa.me/66657479789?text=relaxing%20hair",
    alt: "HomeSleepSalon relaxing hair"
  },
  {
    src: "/promotions/15steps.jpg",
    line: "https://line.me/R/ti/p/@408onese?text=relaxing%20hair",
    whatsapp: "https://wa.me/66657479789?text=relaxing%20hair",
    alt: "HomeSleepSalon 15 Steps Hair wash"
  },
  {
    src: "/promotions/17steps.jpg",
    line: "https://line.me/R/ti/p/@408onese?text=relaxing%20hair",
    whatsapp: "https://wa.me/66657479789?text=relaxing%20hair",
    alt: "HomeSleepSalon 17 Steps Hair wash"
  },
  {
    src: "/promotions/cupping.jpg",
    line: "https://line.me/R/ti/p/@408onese?text=relaxing%20hair",
    whatsapp: "https://wa.me/66657479789?text=relaxing%20hair",
    alt: "HomeSleepSalon Program Cupping"
  },
  {
    src: "/promotions/comboset.jpg",
    line: "https://line.me/R/ti/p/@408onese?text=relaxing%20hair",
    whatsapp: "https://wa.me/66657479789?text=relaxing%20hair",
    alt: "HomeSleepSalon Program Comboset Head + Cupping"
  },
  {
    src: "/promotions/headear.jpg",
    line: "https://line.me/R/ti/p/@408onese?text=relaxing%20hair",
    whatsapp: "https://wa.me/66657479789?text=relaxing%20hair",
    alt: "HomeSleepSalon Program Comboset Head + Ear"
  },
  {
    src: "/promotions/headfoot.jpg",
    line: "https://line.me/R/ti/p/@408onese?text=relaxing%20hair",
    whatsapp: "https://wa.me/66657479789?text=relaxing%20hair",
    alt: "HomeSleepSalon Program Comboset Head + Foot"
  },
  {
    src: "/promotions/ear-aromatherapy.png",
    line: "https://line.me/R/ti/p/@408onese?text=ear%20aromatherapy%20spa%20service",
    whatsapp: "https://wa.me/66657479789?text=ear%20aromatherapy%20spa%20service",
    alt: "HomeSleepSalon ear aromatherapy spa service"
  },
  {
    src: "/promotions/face-spa.png",
    line: "https://line.me/R/ti/p/@408onese?text=facial%20spa%20and%20skin%20care%20treatment",
    whatsapp: "https://wa.me/66657479789?text=facial%20spa%20and%20skin%20care%20treatment",
    alt: "HomeSleepSalon facial spa and skin care treatment"
  },
  {
    src: "/promotions/nail.png",
    line: "https://line.me/R/ti/p/@408onese?text=nail%20spa%20paraffin",
    whatsapp: "https://wa.me/66657479789?text=nail%20spa%20paraffin",
    alt: "HomeSleepSalon nail spa paraffin"
  },
  {
    src: "/promotions/body-scrub.png",
    line: "https://line.me/R/ti/p/@408onese?text=body%20scrub%20and%20aroma%20therapy%20spa%20treatment",
    whatsapp: "https://wa.me/66657479789?text=body%20scrub%20and%20aroma%20therapy%20spa%20treatment",
    alt: "HomeSleepSalon body scrub and aroma therapy spa treatment"
  },
  {
    src: "/promotions/foot-spa.png",
    line: "https://line.me/R/ti/p/@408onese?text=foot%20spa%20and%20massage%20service",
    whatsapp: "https://wa.me/66657479789?text=foot%20spa%20and%20massage%20service",
    alt: "HomeSleepSalon foot spa and massage service"
  },
  {
    src: "/promotions/vip-promo.png",
    line: "https://line.me/R/ti/p/@408onese?text=VIP%20Private%20Spa%20Experience",
    whatsapp: "https://wa.me/66657479789?text=VIP%20Private%20Spa%20Experience",
    alt: "HomeSleepSalon VIP Private Spa Experience"
  },
  {
    src: "/promotions/vip-service.jpg",
    line: "https://line.me/R/ti/p/@408onese?text=VIP%20Private%20Spa%20Experience",
    whatsapp: "https://wa.me/66657479789?text=VIP%20Private%20Spa%20Experience",
    alt: "HomeSleepSalon VIP Service Spa Ear + Spa + Face"
  },
  {
    src: "/promotions/voucher.jpg",
    line: "https://line.me/R/ti/p/@408onese?text=voucher",
    whatsapp: "https://wa.me/66657479789?text=voucher",
    alt: "HomeSleepSalon voucher"
  },
];

export const HOME_GALLERY = [
  { src: "/images/hom4/hom4 (47).jpg" },
  { src: "/images/hom4/hom4 (108).jpg" },
  { src: "/images/hom4/hom4 (98).jpg" },
  { src: "/images/hom4/hom4 (5).jpg" },
  { src: "/images/hom4/hom4 (122).jpg" },
  { src: "/images/hom4/hom4 (7).jpg" },
  { src: "/images/hom4/hom4 (129).jpg" },
  { src: "/images/hom4/hom4 (9).jpg" },
  { src: "/images/hom4/hom4 (26).jpg" },
  { src: "/images/hom4/hom4 (83).jpg" },
  { src: "/images/hom4/hom4 (20).jpg" },
  { src: "/images/hom4/hom4 (135).jpg" },
  { src: "/images/hom4/hom4 (150).jpg" },
]

export const HOME_TIKTOK = [
  { src: "/videos/homsleep1.mp4" },
  { src: "/videos/homsleep3.mp4" },
  { src: "/videos/homsleep4.mp4" },
  { src: "/videos/homsleep5.mp4" },

]

export const SCRUB_GALLERY = [
  { src: "/promotions/aromatic-jasmins-en.png" },
  { src: "/promotions/aromatic-lavender-en.png" },
  { src: "/promotions/aromatic-peppermint-en.png" },
  { src: "/promotions/aromatic-rose-en.png" },
  { src: "/promotions/aromatic-tamarind-en.png" },


]
export const CREAM_GALLERY = [
  { src: "/promotions/good-hair.png" },
  { src: "/promotions/cream-treatment.png" },
  { src: "/promotions/rice-milk.png" },
  { src: "/promotions/rice-milk-1.png" },
  { src: "/promotions/rice-milk-2.png" },

]

export const OIL_GALLERY = [
  { src: "/promotions/lavender-004.png" },
  { src: "/promotions/lavender-004-1.png" },
  { src: "/promotions/lavender-004-2.png" },
  { src: "/promotions/lavender-oil.png" },
  { src: "/promotions/lavender-oil-1.png" },
  { src: "/promotions/lavender-oil-2.png" },
  { src: "/promotions/oil-peony.png" },
  { src: "/promotions/oil-peony-1.png" },
  { src: "/promotions/oil-peony-2.png" },
  { src: "/promotions/pure-body.png" },
  { src: "/promotions/pure-body-1.png" },
  { src: "/promotions/pure-body-2.png" },
]

export const SHAMPO_GALLERY = [
  { src: "/promotions/lemongrass-shampo.png" },
  { src: "/promotions/lemongrass-shampo-1.png" },
  { src: "/promotions/lemongrass-shampo-2.png" },
  { src: "/promotions/moisturizing.png" },
  { src: "/promotions/moisturizing-1.png" },
  { src: "/promotions/moisturizing-2.png" },
  { src: "/promotions/shampo-flowery.png" },
  { src: "/promotions/shampo-flowery-1.png" },
  { src: "/promotions/shampo-flowery-2.png" },


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


