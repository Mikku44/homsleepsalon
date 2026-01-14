import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { Clock, Star, Leaf, Coffee } from 'lucide-react';
import ImageCarousel from "~/components/ImageCarousel";
import { ReserveForm } from "~/components/ReserveForm";
import { BASE_URL } from "~/constant/app";
import type { Route } from "./+types/head-spa";



export function meta({ }: Route.MetaArgs) {
  return [
    {
      title:
        'Homsleepsalon | Head Spa & Relaxation Sukhumvit 22 & Sathorn Rama 3',
    },
    {
      name: 'description',
      content:
        'Homsleepsalon สุขุมวิท 22 & สาทร รามา 3 บริการ Head Spa เวียดนาม ช่วยผ่อนคลายหนังศีรษะ คลายความตึงเครียด และฟื้นฟูสมดุลร่างกายและจิตใจ ใจกลางกรุงเทพฯ ใกล้ BTS พร้อมพงษ์',
    },
    {
      name: 'keywords',
      content:
        'Homsleepsalon, Head Spa, Head Spa เวียดนาม, สปาศีรษะ, สุขุมวิท 22, สาทร รามา 3, สปากรุงเทพ, ผ่อนคลาย',
    },
    {
      property: 'og:title',
      content:
        'Homsleepsalon | Head Spa & Relaxation Sukhumvit 22 & Sathorn Rama 3',
    },
    {
      property: 'og:description',
      content:
        'สัมผัสการผ่อนคลายลึกด้วย Head Spa เวียดนาม ที่ Homsleepsalon สุขุมวิท 22 และสาทร รามา 3',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${BASE_URL}/head-spa` },
    { property: 'og:image', content: `${BASE_URL}/images/service17.jpg` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    {
      property: 'og:image:alt',
      content: 'Homsleepsalon Head Spa & Relaxation',
    },
  ]
}


const HeadSpaPage = () => {
  const { t } = useTranslation();

  // The 1.15 hour ritual steps based on your info
  const ritualSteps = [
    {
      id: 1,
      title: t("Eye Relaxation"),
      desc: t("Eye mask treatment with the spa’s signature relaxing formula"),
    },
    {
      id: 2,
      title: t("Sensory Awakening"),
      desc: t("Aromatherapy with organic scents to awaken the senses and promote deep relaxation"),
    },
    {
      id: 3,
      title: t("Sound Therapy"),
      desc: t("Soothing sound therapy with relaxing music"),
    },
    {
      id: 4,
      title: t("Pre-Wash Massage"),
      desc: t("Application of premium organic oil with neck and shoulder massage to relieve office syndrome and relax the body before hair cleansing"),
    },
    {
      id: 5,
      title: t("Hair Cleansing Ritual"),
      desc: t("Double hair wash using the spa’s premium organic shampoo to deeply nourish the hair"),
    },
    {
      id: 6,
      title: t("Signature Hair Spa"),
      desc: t("Hair spa treatment with two rounds of washing using the spa’s signature relaxing massage techniques"),
    },
    {
      id: 7,
      title: t("Foam Spa"),
      desc: t("Relaxing foam spa treatment"),
    },
    {
      id: 8,
      title: t("Deep Conditioning"),
      desc: t("Application of premium organic conditioner with a pleasant aroma, leaving hair soft and deeply nourished"),
    },
    {
      id: 9,
      title: t("Signature Head Massage"),
      desc: t("Signature 17-step head massage to relieve migraines, headaches, and work-related fatigue"),
    },
    {
      id: 10,
      title: t("Vietnamese Water Curtain"),
      desc: t("Warm water curtain therapy inspired by Vietnamese relaxation techniques"),
    },
    {
      id: 11,
      title: t("Arm Relaxation"),
      desc: t("Relaxing arm massage in a lying-down position"),
    },
    {
      id: 12,
      title: t("Herbal Heat Therapy"),
      desc: t("Hot herbal compress to reduce muscle tension and soreness"),
    },
    {
      id: 13,
      title: t("Seated Massage"),
      desc: t("Seated massage focusing on the neck, shoulders, and upper back"),
    },
    {
      id: 14,
      title: t("Hair Finishing"),
      desc: t("Hair drying and application of nourishing hair serum"),
    },
    {
      id: 15,
      title: t("Tea Ceremony"),
      desc: t("Enjoy a cup of the spa’s premium relaxing herbal tea with light refreshments"),
    },
  ];


  const ritualSteps2 = [
    { id: 1, title: t('Relaxing Eye Mask'), desc: t('Gently relaxes the eyes and nervous system using the salon’s signature calming technique.') },
    { id: 2, title: t('Aromatic Sensory Awakening'), desc: t('Opens the senses with organic aromas to induce deep relaxation.') },
    { id: 3, title: t('Therapeutic Sound Relaxation'), desc: t('Soothing therapy music enhances mental calm and emotional balance.') },
    { id: 4, title: t('Neck & Shoulder Oil Massage'), desc: t('Premium organic oil massage to relieve neck and shoulder tension and reduce office syndrome before cleansing.') },
    { id: 5, title: t('Organic Shampoo Cleansing'), desc: t('Hair is gently cleansed twice using the salon’s premium organic shampoo for deep nourishment.') },
    { id: 6, title: t('Signature Hair Spa Massage'), desc: t('Relaxing shampoo massage using the salon’s exclusive techniques.') },
    { id: 7, title: t('Foam Spa Relaxation'), desc: t('A soft foam spa treatment to further calm the scalp and senses.') },
    { id: 8, title: t('Organic Conditioner Treatment'), desc: t('Premium organic conditioner deeply nourishes hair, leaving it soft and fragrant.') },
    { id: 9, title: t('17-Step Signature Head Massage'), desc: t('A therapeutic head massage designed to relieve migraines, headaches, and work-related fatigue.') },
    { id: 10, title: t('Vietnamese Warm Water Curtain'), desc: t('A warm water therapy inspired by Vietnamese spa traditions for total relaxation.') },
    { id: 11, title: t('Arm Relaxation Massage'), desc: t('Gentle arm massage performed in a reclining position.') },
    { id: 12, title: t('Herbal Hot Compress'), desc: t('Warm herbal compress helps reduce muscle pain and tension.') },
    { id: 13, title: t('Seated Neck & Shoulder Massage'), desc: t('Focused massage to release tension in the neck, shoulders, and upper back.') },
    { id: 14, title: t('Hair Dry & Serum Care'), desc: t('Hair is gently dried and finished with nourishing serum.') },
    { id: 15, title: t('Relaxation Tea & Light Refreshments'), desc: t('Enjoy the salon’s signature premium hot tea with light snacks to conclude the ritual.') }
  ];


  return (
    <div className="min-h-screen bg-[#FCFAF7] text-neutral-800">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        {/* <img
          src="/images/538070_0.jpg"
          alt="Head Spa"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}
        <ImageCarousel
          images={[
            "/images/hom1/hom1 (1).jpg",
            "/images/hom1/hom1 (2).jpg",
            "/images/hom1/hom1 (3).jpg",
            "/images/hom1/hom1 (4).jpg",
            "/images/hom1/hom1 (5).jpg",
            "/images/hom1/hom1 (6).jpg",
            "/images/hom1/hom1 (7).jpg",
          ]}
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 z-10 bg-black/30" />

        <div className="relative z-10 text-center px-4">
          <span className="text-white/80 tracking-[0.6em] uppercase text-[12px] mb-4 block">
            {t('Exclusive Ritual')}
          </span>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-tighter mb-6">
            {t('Head Spa')}
          </h1>
          <div className="flex items-center justify-center gap-6 text-white/90 text-[13px] tracking-widest uppercase">
            <span className="flex items-center gap-2"><Clock size={16} /> 1.45 {t('Hours')} / 1.15 {t('Hours')}</span>
            <span className="w-px h-4 bg-white/30" />
            <span>{t('From ฿1,290')} / {t("฿ 899")}</span>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}


      <div className="max-w-screen overflow-hidden bg-(--primary-color)">
        <section className="
          relative mx-auto flex flex-col items-center justify-center
          max-w-6xl
          h-[420px] sm:h-[460px] lg:h-[520px]
          py-16 sm:py-20 lg:py-24
          px-4 sm:px-6
          text-center
        ">
          {/* LEFT IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="
        absolute space-y-5
        hidden lg:block
        left-[-60px] xl:left-[-130px]
            "
          >
            {[
              { src: "/images/544316_0.jpg", size: "size-[100px] xl:size-[130px]", float: 0 },
              { src: "/images/544340_0.jpg", size: "size-[70px] xl:size-[80px] translate-x-6 xl:translate-x-10", float: 10 },
              { src: "/images/544343_0.jpg", size: "size-[120px] xl:size-[150px] -translate-x-6 xl:-translate-x-10", float: -10 },
            ].map((img, i) => (
              <motion.div
                key={i}
                className={`rounded-full overflow-hidden shadow-xl ${img.size}`}
                animate={{ y: [0, img.float, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src={img.src} className="w-full h-full object-cover" alt="head spa" />
              </motion.div>
            ))}
          </motion.div>
          {/* RIGHT IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="
        absolute space-y-5
        hidden lg:block
        right-[-60px] xl:right-[-130px]
            "
          >
            {[
              { src: "/images/544351_0.jpg", size: "size-[100px] xl:size-[130px]", float: -10 },
              { src: "/images/544348_0.jpg", size: "size-[70px] xl:size-[80px]", float: 8 },
              { src: "/images/544350_0.jpg", size: "size-[120px] xl:size-[150px] translate-x-6 xl:translate-x-10", float: 12 },
            ].map((img, i) => (
              <motion.div
                key={i}
                className={`rounded-full overflow-hidden shadow-xl ${img.size}`}
                animate={{ y: [0, img.float, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src={img.src} className="w-full h-full object-cover" alt="head spa" />
              </motion.div>
            ))}
          </motion.div>
          {/* TEXT */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl font-light mb-6 sm:mb-8 italic text-neutral-900 max-w-2xl"
          >
            "{t("A journey to silence the mind and revive the spirit.")}"
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-sm sm:text-base lg:text-lg text-neutral-500 font-light leading-relaxed max-w-3xl"
          >
            {t(
              "Our Head Spa is more than a treatment; it is a 1.15-hour restorative ritual. We combine traditional Vietnamese water therapy with 17-step Thai massage techniques and organic botanicals to release cranial tension and treat Office Syndrome at its root."
            )}
          </motion.p>


          {/* MOBILE BOTTOM IMAGES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
    mt-10
    flex justify-center gap-4
    lg:hidden
  "
          >
            {[
              { src: "/images/544316_0.jpg", size: "size-[92px]" },
              { src: "/images/544340_0.jpg", size: "size-[84px]" },
              { src: "/images/544335_0.jpg", size: "size-[72px]" },
              { src: "/images/544343_0.jpg", size: "size-[84px]" },
              { src: "/images/544351_0.jpg", size: "size-[92px]" },
            ].map((img, i) => (
              <motion.div
                key={i}
                className={`rounded-full overflow-hidden shadow-lg ${img.size}`}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={img.src}
                  alt="head spa"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

        </section>
      </div>



      {/* The Ritual Steps - Visual Grid */}
      <section className="pb-24 px-6 mt-24 max-w-6xl mx-auto">
        <img src="/images/service15.jpg" className="mb-16 rounded-2xl max-h-[500px] mx-auto" alt="head spa 899" />
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {ritualSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.08, // subtle stagger
              }}
              whileHover={{ y: -4 }}
              className="flex gap-6 items-start group"
            >
              {/* Number */}
              <span
                className="
            text-3xl font-extralight text-orange-200
            group-hover:text-orange-400 transition-colors duration-300
          "
              >
                {step.id < 10 ? `0${step.id}` : step.id}
              </span>

              {/* Content */}
              <div>
                <h4 className="text-lg font-medium tracking-wide mb-2 uppercase text-neutral-800">
                  {step.title}
                </h4>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* retual 2 */}
      <section className="pb-24 px-6 mt-24 max-w-6xl mx-auto">
        <img src="/images/service17.jpg" className="mb-16 rounded-2xl max-h-[500px] mx-auto" alt="head spa 1290" />
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {ritualSteps2.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.08, // subtle stagger
              }}
              whileHover={{ y: -4 }}
              className="flex gap-6 items-start group"
            >
              {/* Number */}
              <span
                className="
            text-3xl font-extralight text-orange-200
            group-hover:text-orange-400 transition-colors duration-300
          "
              >
                {step.id < 10 ? `0${step.id}` : step.id}
              </span>

              {/* Content */}
              <div>
                <h4 className="text-lg font-medium tracking-wide mb-2 uppercase text-neutral-800">
                  {step.title}
                </h4>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Highlight Feature: Vietnamese Water Curtain */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-100 py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
            <img src="/images/544318_0.jpg" alt="Water Curtain" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-[11px] tracking-[0.4em] text-orange-400 uppercase font-bold mb-4 block">{t('Signature Techique')}</span>
            <h3 className="text-4xl font-light mb-6 leading-tight">{t('Traditional Vietnamese Water Curtain')}</h3>
            <p className="text-neutral-600 font-light leading-relaxed mb-8">
              {t('Experience the rhythmic sound and steady warmth of our water curtain. This technique promotes deep lymphatic drainage and washes away mental fatigue, leaving you in a state of pure bliss.')}
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-neutral-700">
                <Leaf size={18} className="text-orange-300" /> {t('Organic Thai Botanicals')}
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-700">
                <Star size={18} className="text-orange-300" /> {t('Relieves Migraines & Fatigue')}
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-700">
                <Coffee size={18} className="text-orange-300" /> {t('Premium Tea & Snacks Included')}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}


      {/* reserve form */}
      <section className="max-w-6xl mx-auto my-24 bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src="/images/544350_0.jpg"
            className="h-full w-full object-cover min-h-[400px]"
            alt="Reserve Ear Cleaning"
          />
        </div>
        <div className="md:w-1/2 p-8 md:p-12">
          <ReserveForm />
        </div>
      </section>
    </div>
  );
};

export default HeadSpaPage;