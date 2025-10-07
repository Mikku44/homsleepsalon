import { ALL_PROMOTION, BASE_URL, SLIDE_UP } from '~/constant/app'
import type { Route } from './+types/promotion'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import PromotionCard from '~/components/PromotionCard'


export function meta ({}: Route.MetaArgs) {
  return [
    {
      title: 'Homsleepsalon | Product'
    },
    {
      name: 'description',
      content:
        'Homsleepsalon สุขุมวิท 22 & สาทร รามา3 บริการ Head Spa เวียดนาม สปาหู สปาหน้า และทำเล็บ ในบรรยากาศผ่อนคลายใจกลางกรุงเทพฯ ใกล้ BTS พร้อมพงษ์'
    },
    {
      name: 'keywords',
      content:
        'Homsleepsalon, Head Spa, สปาหู, สปาหน้า, สุขุมวิท 22 , สาทร รามา3, สปากรุงเทพ'
    },
    {
      property: 'og:title',
      content: 'Homsleepsalon | Product'
    },
    {
      property: 'og:description',
      content:
        'สัมผัสการผ่อนคลายด้วย Head Spa เวียดนาม และบริการสปาหลากหลายที่ Homsleepsalon สุขุมวิท 22, สาทร รามา3'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${BASE_URL}` },
    { property: 'og:image', content: `${BASE_URL}/logo.png` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Homsleepsalon Head Spa & Relaxation' }
  ]
}

export default function Promotion () {
  const { t } = useTranslation()

  return (
    <main>
      <section className='md:h-screen md:max-h-[600px] overflow-hidden h-auto bg-[var(--secondary-color)] flex items-center pt-10 md:py-10'>
        <div className=' w-full grid md:grid-cols-2 gap-8 items-center pt-10'>
          {/* Text */}
          <div className='box-container'>
            <div className='text-center md:text-left'>
              <motion.h2
                {...SLIDE_UP}
                className='header-1 mb-5 text-[var(--tertiary-color)] font-bold'
              >
                {t('promotion')}
              </motion.h2>
              <motion.p
                {...SLIDE_UP}
                className='text-base text-[var(--tertiary-color)] max-w-[400px] mx-auto md:mx-0'
              >
                {t('promotionDes')}
              </motion.p>
            </div>
          </div>

          {/* Image */}
          <div className='w-full overflow-hidden'>
            <img
              src='/promotions/vietnam-banner.png'
              className='md:h-full h-[250px] w-full object-cover'
              alt='homesleep bed'
            />
          </div>
        </div>
      </section>

      {/* Promotion */}

      <section
        className=' overflow-auto  bg-[#FFF5DF]
        flex flex-col items-center justify-center py-10'
      >
        {/* Carousel Promotion */}
        <div className='box-container w-full'>
          <h2 className='header-1 mb-5 font-bold max-w-[350px] text-[var(--secondary-color)]'>
            {t('promotion')}
          </h2>
        </div>
        <div className='box-container grid md:grid-cols-3 grid-col-2 gap-3'>
          {ALL_PROMOTION?.map((item, index) => (
            <PromotionCard
              key={item.alt + index}
              src={item.src}
              href={item.href}
              className='w-full'
              alt={`${item.alt} promotion`}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
