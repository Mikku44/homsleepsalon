import { BASE_URL, CREAM_GALLERY, OIL_GALLERY, SCRUB_GALLERY, SHAMPO_GALLERY, SLIDE_UP } from '~/constant/app'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { Route } from './+types/product'
import 'react-photo-view/dist/react-photo-view.css'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import HorizontalSwiper from '~/components/HorizontalSwiper'
import { Link } from 'react-router'

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

export default function Product() {
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
                {t('products & promotions')}
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

      {/* service */}

      <section className='min-h-[600px] flex flex-col py-5 items-center bg-[var(--secondary-color)]'>
        <div className=' box-container-md w-full items-center py-5' >
          <motion.h2
            {...SLIDE_UP}
            className='header-1 mb-5 text-white font-bold'
          >
            {t('services')}
          </motion.h2>
        </div>

        <div className="grid gap-16 box-container-md w-full px-4 md:px-0">
          {[
            {
              src: '/images/ser15.jpg',
              title: 'Head Spa',
              subtitle: 'RESTORATIVE RITUAL',
              desc: 'An immersive experience designed to release cranial tension and nourish the scalp with organic Thai botanicals.',
              price: 'From ฿899',
              path: '/head-spa',
            },
            {
              src: '/promotions/ear-aromatherapy.png',
              title: 'Ear Cleaning',
              subtitle: 'ANCIENT THERAPY',
              desc: 'A calming traditional practice focusing on gentle cleaning and pressure point massage for total mental clarity.',
              price: 'From ฿800',
              path: '/ear-spa',
            },
            {
              src: '/promotions/cupping.jpg',
              title: 'Special Promotions',
              subtitle: 'EXCLUSIVE OFFERS',
              desc: 'Carefully curated seasonal offers and limited-time packages crafted for exceptional value and indulgence.',
              price: 'Limited Time',
              path: '/promotion',
            },

          ].map((item) => (
            <Link
              to={item.path}
              key={item.title}
              className="group relative grid md:grid-cols-2 overflow-hidden  gap-4"
            >
              {/* Image */}
              <div className="relative aspect-square  rounded-3xl overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover scale-100
                   group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Price */}
                <div className="absolute top-5 right-5">
                  <span className="text-[11px] tracking-[0.25em] uppercase text-white/90">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative flex flex-col justify-center px-8 md:px-14 py-10 backdrop-blur-md bg-linear-60 to-orange-300 from-yellow-100 rounded-3xl">
                {/* Subtitle */}
                <span className="text-[10px] tracking-[0.45em] uppercase text-neutral-400 mb-3">
                  {item.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-light tracking-tight text-neutral-800 mb-6 group-hover:italic transition-all duration-500">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="w-10 h-px bg-neutral-300 mb-6 group-hover:w-24 transition-all duration-700" />

                {/* Description */}
                <p className="max-w-md text-[14px] leading-relaxed text-neutral-500 font-light mb-10">
                  {item.desc}
                </p>

                {/* CTA */}
                <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase font-semibold text-neutral-800">
                  {t('Explore Detail')}
                  <span className="w-6 h-px bg-neutral-800 group-hover:w-10 transition-all duration-500" />
                </span>
              </div>
            </Link>
          ))}
        </div>


        {/*  */}
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
