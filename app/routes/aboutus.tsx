import { useRef } from 'react'
import { motion } from 'framer-motion'
import { SLIDE_UP } from '~/constant/app'
import { useTranslation } from 'react-i18next'

export function meta () {
  return [
    {
      title:
        'Homsleepsalon | Head Spa & Relaxation Sukhumvit 22 & Sathorn  Rama3'
    },
    {
      name: 'description',
      content:
        'Homsleepsalon สุขุมวิท 22 บริการ Head Spa เวียดนาม สปาหู สปาหน้า และทำเล็บ ในบรรยากาศผ่อนคลายใจกลางกรุงเทพฯ ใกล้ BTS พร้อมพงษ์'
    }
  ]
}

export default function Aboutus () {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  function handleScroll () {
    if (scrollRef?.current) {
      scrollRef.current.scrollIntoView()
    }
  }

  return (
    <main className='scroll-smooth'>
      {/* hero */}
      <section className='relative flex items-center justify-center text-white bg-[var(--secondary-color)] overflow-hidden min-h-[600px] md:h-screen'>
        {/* Background image */}
        <div className='absolute inset-0'>
          <img
            src='/images/hom3/hom3 (89).jpg'
            alt='homesleep bed'
            className='w-full h-full object-cover object-center'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-black/20' />
        </div>

        {/* Text Content */}
        <div className='relative z-10 w-full px-5 md:px-0'>
          <div className='box-container text-center md:text-left max-w-3xl mx-auto md:mx-0'>
            <motion.h2 className='md:text-6xl text-4xl text-[var(--primary-color)]  max-w-[450px] font-thin merriweather'>
              {t('aboutTitle')}
            </motion.h2>
            <motion.p className='text-base sm:text-lg  mx-auto md:mx-0 leading-relaxed max-w-[600px]'>
              {t('aboutusDes')}
            </motion.p>
          </div>
        </div>

        {/* Scroll Button */}
        <div className='absolute bottom-5 w-full flex justify-center group'>
          <div className='flex flex-col items-center animate-bounce'>
            <div className='text-sm text-white opacity-0 group-hover:opacity-70 transition-opacity pb-2'>
              Scroll down
            </div>
            <button
              onClick={handleScroll}
              className='border-2 border-white/70 rounded-full p-2 hover:p-3 opacity-70 hover:opacity-100 transition-all duration-200'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 5v14m6-6l-6 6m-6-6l6 6'
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* about us */}

      <section
        ref={scrollRef}
        className='md:h-screen md:max-h-[600px] overflow-hidden h-auto bg-[#FFF5DF] flex items-center pt-10 md:py-10'
      >
        <div className='box-container-md w-full grid md:grid-cols-2 gap-8 items-center'>
          {/* Text */}
          <div className='text-center md:text-left'>
            <motion.h2
              {...SLIDE_UP}
              className='header-1 mb-5 text-[var(--secondary-color)] font-bold'
            >
              {t('aboutUSTitle')}
            </motion.h2>
            <motion.p
              {...SLIDE_UP}
              className='text-base text-[var(--secondary-color)] max-w-[400px] mx-auto md:mx-0'
            >
              {t('aboutUSDes')}
            </motion.p>
          </div>
          {/* Image */}
          <div className='w-full h-[450px] md:h-auto md:translate-y-[200px] rounded-t-full md:rounded-full overflow-hidden'>
            <img
              src='/images/hom4/hom4 (108).jpg'
              className='h-full w-full object-cover'
              alt='homesleep bed'
            />
          </div>
        </div>
      </section>

      {/* Branches / Locations Section */}
      <section className='py-16 bg-[#FFF5DF]'>
        <div className='mx-auto flex flex-col gap-6'>
          {/* Header */}
          <motion.div {...SLIDE_UP} className='text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-[var(--secondary-color)]'>
              {t('getintouch')}
            </h2>
            <p className='mt-3 text-gray-700 max-w-md mx-auto'>
              {t('getintouchDes')}
            </p>
          </motion.div>

          {/* Branch Cards */}
          <div className='grid gap-8 mt-10'>
            {/* Sukhumvit 22 */}
            <motion.div
              {...SLIDE_UP}
              className='flex flex-col overflow-hidden'
            >
              <div className='p-6 box-container'>
                <h3 className='text-xl font-semibold text-[var(--secondary-color)] mb-2'>
                  Sukhumvit 22
                </h3>
                <p className='text-gray-600 mb-4'>
                  Conveniently located in the heart of Sukhumvit. Come relax
                  with our signature treatments.
                </p>
              </div>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.814629147776!2d100.5656344!3d13.7296701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f00520c964f%3A0xd8a7b0dbff3225d3!2sHom%20Sleep%20Salon%20Sukhumvit%2022!5e0!3m2!1sth!2sth!4v1759912872377!5m2!1sth!2sth'
                loading='lazy'
                className='w-[90vw]  md:w-[70vw] mx-auto rounded-2xl h-64 md:h-80 border-t border-gray-200'
              ></iframe>
            </motion.div>

            {/* Sathorn */}
            <motion.div
              {...SLIDE_UP}
              className='flex flex-col overflow-hidden'
            >
              <div className='p-6 box-container'>
                <h3 className='text-xl font-semibold text-[var(--secondary-color)] mb-2'>
                  Sathorn
                </h3>
                <p className='text-gray-600 mb-4'>
                  Our Sathorn branch offers a peaceful escape from the busy city
                  life. Enjoy premium spa services here.
                </p>
              </div>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.1383965451146!2d100.53959141061674!3d13.71006659820289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f0009938ce3%3A0x89a18b5485f8e905!2sHom%20Sleep%20Salon%20Sathorn%20Rama3!5e0!3m2!1sth!2sth!4v1759912942510!5m2!1sth!2sth'
                loading='lazy'
                className='w-[90vw]  md:w-[70vw] mx-auto rounded-2xl h-64 md:h-80 border-t border-gray-200'
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
