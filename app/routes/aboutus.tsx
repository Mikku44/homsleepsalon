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
            <motion.h2
              
              className='md:text-6xl text-4xl text-[var(--primary-color)]  max-w-[450px] font-thin merriweather'
            >
              {t('aboutTitle')}
            </motion.h2>
            <motion.p
              
              className='text-base sm:text-lg  mx-auto md:mx-0 leading-relaxed max-w-[600px]'
            >
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
  

       <section ref={scrollRef} className='md:h-screen md:max-h-[600px] overflow-hidden h-auto bg-[#FFF5DF] flex items-center pt-10 md:py-10'>
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
    </main>
  )
}
