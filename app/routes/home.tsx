import { BASE_URL, SLIDE_UP } from '~/constant/app'
import type { Route } from './+types/home'
import { motion } from 'motion/react'

export function meta ({}: Route.MetaArgs) {
  return [
    { title: 'Homsleepsalon | Head Spa & Relaxation Sukhumvit 22' },
    {
      name: 'description',
      content:
        'Homsleepsalon สุขุมวิท 22 บริการ Head Spa เวียดนาม สปาหู สปาหน้า และทำเล็บ ในบรรยากาศผ่อนคลายใจกลางกรุงเทพฯ ใกล้ BTS พร้อมพงษ์'
    },
    {
      name: 'keywords',
      content:
        'Homsleepsalon, Head Spa, สปาหู, สปาหน้า, สุขุมวิท 22, สปากรุงเทพ'
    },
    {
      property: 'og:title',
      content: 'Homsleepsalon | Head Spa & Relaxation Sukhumvit 22'
    },
    {
      property: 'og:description',
      content:
        'สัมผัสการผ่อนคลายด้วย Head Spa เวียดนาม และบริการสปาหลากหลายที่ Homsleepsalon สุขุมวิท 22'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${BASE_URL}` },
    { property: 'og:image', content: `${BASE_URL}/logo.png` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Homsleepsalon Head Spa & Relaxation' }
  ]
}

export default function Home () {
  return (
    <main className='min-h-screen w-full image-1 '>
      <div className='max-h-screen overflow-hidden relative'>
        <div className='w-full h-full absolute z-10 flex justify-center  flex-col'>
          <div className="box-container w-full">
            <motion.h1
              {...SLIDE_UP}
              className='text-6xl text-[var(--primary-color)] font-thin merriweather'
            >
              Homsleepsalon
            </motion.h1>
            <motion.h3
            {...SLIDE_UP}
            className='text-3xl text-white font-thin'>
              {' '}
              Head Spa & Relaxation in Sukhumvit 22
            </motion.h3>
          </div>
        </div>
        <img src='/images/hom4/hom4 (11).jpg' loading='lazy' alt='spa' />
        <div className='w-full h-full bg-gradient-to-t from-black to-black/10 absolute top-0'>
          {' '}
        </div>
      </div>
    </main>
  )
}
