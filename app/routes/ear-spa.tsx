import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Clock, Star, Leaf, Coffee, Music } from 'lucide-react';
import ImageCarousel from "~/components/ImageCarousel";
import { ReserveForm } from "~/components/ReserveForm";

const EarSpaPage = () => {
  const { t } = useTranslation();

  const ritualSteps = [
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
            {t('Signature Ear Spa')}
          </h1>
          <div className="flex items-center justify-center gap-6 text-white/90 text-[13px] tracking-widest uppercase">
            <span className="flex items-center gap-2"><Clock size={16} /> 1.45 {t('Hours')}</span>
            <span className="w-px h-4 bg-white/30" />
            <span>{t('฿800')}</span>
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
            {t("Our 1.45-hour Ear Spa is a comprehensive wellness journey. We integrate the delicate art of ear care with our 17-step signature head massage and therapeutic soundscapes to provide a total neurological reset.")}
          </motion.p>
        </section>
      </div>

      {/* The Ritual Steps Grid */}
      <section className="pb-24 px-6 mt-24 max-w-6xl mx-auto">
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

      {/* Feature Highlight */}
      <section className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-300 tracking-widest text-xs uppercase mb-4 block">{t('The Experience')}</span>
            <h3 className="text-4xl font-light max-w-[500px] mb-8">{t('Why our 1.45h Ritual?')}</h3>
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
            <img src="/images/544340_0.jpg" alt="Ear Spa Detail" className="rounded-2xl h-64 w-full object-cover" />
            <img src="/images/hom3/hom3 (17).jpg" alt="Ear Spa Detail" className="rounded-2xl h-64 w-full object-cover mt-8" />
          </div>
        </div>
      </section>

      {/* Reserve Form Section */}
      <section className="max-w-6xl mx-auto my-24 bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src="/images/544350_0.jpg"
            className="h-full w-full object-cover min-h-[400px]"
            alt="Reserve Ear Spa"
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