import { BASE_URL, CREAM_GALLERY, OIL_GALLERY, SCRUB_GALLERY, SHAMPO_GALLERY, SLIDE_UP } from '~/constant/app'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { Route } from './+types/product'
import ProductCard from '~/components/ProductCard'
import 'react-photo-view/dist/react-photo-view.css'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import HorizontalSwiper from '~/components/HorizontalSwiper'

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

export default function Product () {
  const { t } = useTranslation()

  return (
    <main>
      <section className='md:h-screen md:max-h-[600px] overflow-hidden h-auto bg-[#FFF5DF] flex items-center pt-10 md:py-10'>
        <div className=' w-full grid md:grid-cols-2 gap-8 items-center pt-10'>
          {/* Text */}
          <div className='box-container'>
            <div className='text-center md:text-left'>
              <motion.h2
                {...SLIDE_UP}
                className='header-1 mb-5 text-[var(--secondary-color)] font-bold'
              >
                {t('product')}
              </motion.h2>
              <motion.p
                {...SLIDE_UP}
                className='text-base text-[var(--secondary-color)] max-w-[400px] mx-auto md:mx-0'
              >
                {t('productDes')}
              </motion.p>
            </div>
          </div>
          {/* Image */}
          <div className='w-full  overflow-hidden'>
            <img
              src='/images/544351_0.jpg'
              className='md:h-full h-[250px] w-full object-cover'
              alt='homesleep bed'
            />
          </div>
        </div>
      </section>

      {/* products section */}
      <section className='min-h-[600px] flex flex-col py-5 items-center bg-[var(--secondary-color)]'>
        <div className=' box-container-md w-full items-center py-5' >
          <motion.h2
            {...SLIDE_UP}
            className='header-1 mb-5 text-white font-bold'
          >
            {t('bodyscrub')}
          </motion.h2>
        </div>
        <PhotoProvider>
          <HorizontalSwiper className=' box-container-md w-full items-center'>
            {SCRUB_GALLERY?.map((item, index) => (
              <PhotoView key={index} src={item.src}>
                <motion.div
                  {...SLIDE_UP}
                  className='w-full mb-2 h-[300px]  md:h-[500px] select-none overflow-hidden rounded-2xl'
                >
                  <img
                    src={item.src}
                    loading='lazy'
                    alt={`homsleepsalon service ${index + 1}`}
                    className=' w-full h-full break-inside-avoid object-cover cursor-pointer'
                  />
                </motion.div>
              </PhotoView>
            ))}
          </HorizontalSwiper>
        </PhotoProvider>
      </section>

      
      {/* products section */}
      <section className='min-h-[600px] flex flex-col py-5 items-center bg-[var(--secondary-color)]'>
        <div className=' box-container-md w-full items-center py-5' >
          <motion.h2
            {...SLIDE_UP}
            className='header-1 mb-5 text-white font-bold'
          >
            {t('hairconditional')}
          </motion.h2>
        </div>
        <PhotoProvider>
          <HorizontalSwiper className=' box-container-md w-full items-center'>
            {CREAM_GALLERY?.map((item, index) => (
              <PhotoView key={index} src={item.src}>
                <motion.div
                  {...SLIDE_UP}
                  className='w-full mb-2 h-[300px]  md:h-[500px] select-none overflow-hidden rounded-2xl'
                >
                  <img
                    src={item.src}
                    loading='lazy'
                    alt={`homsleepsalon service ${index + 1}`}
                    className=' w-full h-full break-inside-avoid object-cover cursor-pointer'
                  />
                </motion.div>
              </PhotoView>
            ))}
          </HorizontalSwiper>
        </PhotoProvider>
      </section>


      {/* products section */}
      <section className='min-h-[600px] flex flex-col py-5 items-center bg-[var(--secondary-color)]'>
        <div className=' box-container-md w-full items-center py-5' >
          <motion.h2
            {...SLIDE_UP}
            className='header-1 mb-5 text-white font-bold'
          >
            {t('massageoil')}
          </motion.h2>
        </div>
        <PhotoProvider>
          <HorizontalSwiper className=' box-container-md w-full items-center'>
            {OIL_GALLERY?.map((item, index) => (
              <PhotoView key={index} src={item.src}>
                <motion.div
                  {...SLIDE_UP}
                  className='w-full mb-2 h-[300px]  md:h-[500px] select-none overflow-hidden rounded-2xl'
                >
                  <img
                    src={item.src}
                    loading='lazy'
                    alt={`homsleepsalon service ${index + 1}`}
                    className=' w-full h-full break-inside-avoid object-cover cursor-pointer'
                  />
                </motion.div>
              </PhotoView>
            ))}
          </HorizontalSwiper>
        </PhotoProvider>
      </section>
      {/* shampo section */}
      <section className='min-h-[600px] flex flex-col py-5 items-center bg-[var(--secondary-color)]'>
        <div className=' box-container-md w-full items-center py-5' >
          <motion.h2
            {...SLIDE_UP}
            className='header-1 mb-5 text-white font-bold'
          >
            {t('shampo')}
          </motion.h2>
        </div>
        <PhotoProvider>
          <HorizontalSwiper className=' box-container-md w-full items-center'>
            {SHAMPO_GALLERY?.map((item, index) => (
              <PhotoView key={index} src={item.src}>
                <motion.div
                  {...SLIDE_UP}
                  className='w-full mb-2 h-[300px]  md:h-[500px] select-none overflow-hidden rounded-2xl'
                >
                  <img
                    src={item.src}
                    loading='lazy'
                    alt={`homsleepsalon service ${index + 1}`}
                    className=' w-full h-full break-inside-avoid object-cover cursor-pointer'
                  />
                </motion.div>
              </PhotoView>
            ))}
          </HorizontalSwiper>
        </PhotoProvider>
      </section>
    </main>
  )
}
