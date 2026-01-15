import { ALL_PROMOTION, BASE_URL, SLIDE_UP } from '~/constant/app'
import type { Route } from './+types/promotion'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import PromotionCard from '~/components/PromotionCard'
import PromotionModal from '~/components/Promo'
import { ReserveForm } from '~/components/ReserveForm'


export function meta({ }: Route.MetaArgs) {
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

export default function Promotion() {
  const { t } = useTranslation()



  return (
    <main>
      {/* <PromotionModal
        title="Special Promotion!"
        description="Get extra max 50% for your first top-up."
        imageUrl="/promotions/recharge-gift.jpg"
        ctaText="recharge gift"
        ctaLink="/reserve"
      /> */}


      <section className='md:h-screen md:max-h-[600px] overflow-hidden h-auto bg-[var(--secondary-color)] flex items-center pt-10 md:py-10'>
        <div className=' w-full grid md:grid-cols-2 gap-8 items-center pt-10 '>
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
        <div className='box-container w-full grid md:grid-cols-3 grid-cols-2 gap-3'>
          {ALL_PROMOTION?.map((item, index) => (

            <div className="">
              <PromotionCard
                key={item.alt + index}
                src={item.src}
                href={item.line}
                whatsApp={item.whatsapp}
                className='w-full max-w-[500px]'
                alt={`${item.alt} promotion`}
              />
            </div>

          ))}
        </div>
      </section>


      {/* Reserve Form Section */}
      <section className="max-w-6xl mx-auto my-24 bg-white rounded-3xl 
      md:px-0 px-4
      overflow-hidden shadow-2xl flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src="/images/544350_0.jpg"
            className="h-full w-full object-cover min-h-[400px]"
            alt="Reserve Ear Cleaning"
          />
        </div>
        <div className="md:w-1/2 p-8 md:p-12 ">
          <ReserveForm />
        </div>
      </section>
    </main >
  )
}
