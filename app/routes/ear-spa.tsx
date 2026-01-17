import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Clock, Star, Leaf, Coffee, Music } from 'lucide-react';
import ImageCarousel from "~/components/ImageCarousel";
import { ReserveForm } from "~/components/ReserveForm";
import { BASE_URL } from "~/constant/app";
import type { Route } from "./+types/ear-spa";
import PromotionCard from "~/components/PromotionCard";

export function meta({ }: Route.MetaArgs) {
  return [
    {
      title:
        'Homsleepsalon | Ear Cleaning & Relaxation Sukhumvit 22 & Sathorn Rama 3',
    },
    {
      name: 'description',
      content:
        'Homsleepsalon สุขุมวิท 22 & สาทร รามา 3 บริการ Ear Cleaning เวียดนาม สปาหูแบบผ่อนคลาย ช่วยคลายความเครียด เพิ่มสมดุลร่างกายและจิตใจ ใจกลางกรุงเทพฯ ใกล้ BTS พร้อมพงษ์',
    },
    {
      name: 'keywords',
      content:
        'Homsleepsalon, Ear Cleaning, สปาหู, สปาหูเวียดนาม, สุขุมวิท 22, สาทร รามา 3, สปากรุงเทพ, ผ่อนคลาย',
    },
    {
      property: 'og:title',
      content:
        'Homsleepsalon | Ear Cleaning & Relaxation Sukhumvit 22 & Sathorn Rama 3',
    },
    {
      property: 'og:description',
      content:
        'สัมผัสการผ่อนคลายลึกถึงจิตใจด้วย Ear Cleaning เวียดนาม ที่ Homsleepsalon สุขุมวิท 22 และสาทร รามา 3',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${BASE_URL}/ear-spa` },
    { property: 'og:image', content: `${BASE_URL}/images/service15.jpg` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    {
      property: 'og:image:alt',
      content: 'Homsleepsalon Ear Cleaning & Relaxation',
    },
  ]
}


const EarSpaPage = () => {
  const { t } = useTranslation();

  const earRitualSteps = [
    { id: 1, title: t('Therapeutic Sound Healing'), desc: t('Awakens the senses and promotes mental clarity through soothing sound therapy.') },
    { id: 2, title: t('Aromatic Sensory Awakening'), desc: t('Opening the senses with premium essential oils to induce immediate relaxation.') },
    { id: 3, title: t('Lymphatic Head & Neck Massage'), desc: t('A specialized massage targeting lymph nodes and the back of the neck to improve circulation.') },
    { id: 4, title: t('Professional Otoscope Examination'), desc: t('A high-precision visual inspection of the ear canal using advanced camera technology.') },
    { id: 5, title: t('Deep Ear Canal Cleansing'), desc: t('Gentle and thorough irrigation to remove impurities from the inner ear.') },
    { id: 6, title: t('Signature Ear Picking & Grooming'), desc: t('Expert ear picking and internal stimulation for a unique sense of relief.') },
    { id: 7, title: t('Medicinal Ear Purifying'), desc: t('Application of specialized cleansing solutions to sanitize the ear canal.') },
    { id: 8, title: t('Complete Inner & Outer Ear Care'), desc: t('Meticulous cleaning and buffing of both the internal canal and external ear structure.') },
    { id: 9, title: t('Herbal Ear Candling Therapy'), desc: t('Traditional herbal candles used to extract moisture, reduce odors, and relieve ear congestion.') },
    { id: 10, title: t('Post-Treatment Visual Verification'), desc: t('A final camera inspection to ensure total cleanliness and health of the ear canal.') },
    { id: 11, title: t('Relaxing Cranial Massage'), desc: t('A soothing head massage to release any remaining tension and balance the nervous system.') },
    { id: 12, title: t('Signature Tea & Refreshments'), desc: t('Conclude the ritual with the salon’s premium relaxation tea and light snacks.') }
  ];


  const EAR_PROMO = [
    {
      src: "/promotions/comboset.jpg",
      line: "https://line.me/R/ti/p/@408onese?text=relaxing%20hair",
      whatsapp: "https://wa.me/66657479789?text=relaxing%20hair",
      alt: "HomeSleepSalon Program Comboset Head + Cupping"
    },
    {
      src: "/promotions/vip-service.jpg",
      line: "https://line.me/R/ti/p/@408onese?text=VIP%20Private%20Spa%20Experience",
      whatsapp: "https://wa.me/66657479789?text=VIP%20Private%20Spa%20Experience",
      alt: "HomeSleepSalon VIP Service Spa Ear + Spa + Face"
    },
  ]

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-neutral-800">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <ImageCarousel
          images={[
            "/images/hom3/hom3 (1).jpg",
            "/images/hom3/hom3 (2).jpg",
            "/images/hom3/hom3 (3).jpg",
            "/images/hom3/hom3 (4).jpg",
            "/images/hom3/hom3 (5).jpg",
            "/images/hom3/hom3 (6).jpg",
            "/images/hom3/hom3 (7).jpg",
          ]}
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 z-10 bg-black/40" />

        <div className="relative z-10 text-center px-4">
          <span className="text-white/80 tracking-[0.6em] uppercase text-[12px] mb-4 block">
            {t('Deep Sensory Healing')}
          </span>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-tighter mb-6">
            {t('Signature Ear Cleaning')}
          </h1>
          <div className="flex items-center justify-center gap-6 text-white/90 text-[13px] tracking-widest uppercase">
            <span className="flex items-center gap-2"><Clock size={16} /> 60 {t('Minutes')}</span>
            <span className="w-px h-4 bg-white/30" />
            <span>{t("FROM")} {t('฿999')}</span>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <div className="max-w-screen overflow-hidden bg-(--secondary-color)">


        <section className="relative  mx-auto flex flex-col items-center justify-center max-w-6xl h-[450px] py-24 px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{

              type: "tween"
            }}
            className="text-2xl md:text-3xl font-light mb-8 italic text-white/80 max-w-2xl"
          >
            "{t("A deep auditory and sensory escape designed to quiet the world outside.")}"
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              type: "tween"
            }}
            className="text-base md:text-lg text-white/60 font-light leading-relaxed max-w-3xl"
          >
            {t("Our 1-hour Ear Cleaning is a comprehensive wellness journey. We integrate the delicate art of ear care with our 17-step signature head massage and therapeutic soundscapes to provide a total neurological reset.")}
          </motion.p>
        </section>
      </div>

      {/* The Ritual Steps Grid */}
      <section className="pb-24 px-6 mt-24 max-w-6xl mx-auto">
        <img src="/promotions/ear-aromatherapy.png" className="mb-16 rounded-2xl max-h-[500px] mx-auto" alt="ear cleaning 999" />
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {earRitualSteps.map((step, index) => (
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

      {/* Feature Highlight */}
      <section className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-300 tracking-widest text-xs uppercase mb-4 block">{t('The Experience')}</span>
            <h3 className="text-4xl font-light max-w-[500px] mb-8">{t('Why our 1h Ritual?')}</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Music className="text-orange-300 shrink-0" />
                <p className="text-sm text-neutral-300 leading-relaxed">{t('Sound therapy combined with precise pressure point massage helps regulate the nervous system and improve sleep quality.')}</p>
              </div>
              <div className="flex gap-4">
                <Star className="text-orange-300 shrink-0" />
                <p className="text-sm text-neutral-300 leading-relaxed">{t('Our 17-step massage is specifically calibrated to address the root causes of tension for those suffering from Office Syndrome.')}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/544340_0.jpg" alt="Ear Cleaning Detail" className="rounded-2xl h-64 w-full object-cover" />
            <img src="/images/hom3/hom3 (17).jpg" alt="Ear Cleaning Detail" className="rounded-2xl h-64 w-full object-cover mt-8" />
          </div>
        </div>
      </section>

      <div className="py-24 bg-amber-100">
        <section className="
        min-h-[500px] md:px-40 px-5
        overflow-hidden flex flex-col ">
          <h3 className="text-3xl mb-5">{t("promotion")}</h3>
          <div className="flex md:flex-row flex-col gap-5 ">
            {EAR_PROMO?.map((item, index) => (
              <div className="">
                <PromotionCard
                  key={item.alt + index}
                  src={item.src}
                  href={item.line}
                  whatsApp={item.whatsapp}
                  className='w-full h-full max-w-[500px]'
                  alt={`${item.alt} promotion`}
                />
              </div>
            ))}
          </div>

        </section>
      </div>

      {/* Reserve Form Section */}
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

export default EarSpaPage;