import { useTranslation } from 'react-i18next'
import ImageGallery from '~/components/ImageGallery'

export function meta(){
  return [
      {
      title:
        'Homsleepsalon | Head Spa & Relaxation Sukhumvit 22 & Sathorn  Rama3'
    },
    {
      name: 'description',
      content:
        'Homsleepsalon สุขุมวิท 22 บริการ Head Spa เวียดนาม สปาหู สปาหน้า และทำเล็บ ในบรรยากาศผ่อนคลายใจกลางกรุงเทพฯ ใกล้ BTS พร้อมพงษ์'
    },
  ]
}

export default function Gallery () {
  const images = [
    '/images/538070_0.jpg',
    '/images/544315_0.jpg',
    '/images/544316_0.jpg',
    '/images/544317_0.jpg',
    '/images/544319_0.jpg',
    '/images/544320_0.jpg',
    '/images/544323_0.jpg',
    '/images/544325_0.jpg',
    '/images/544335_0.jpg',
    '/images/544336_0.jpg',
    '/images/544339_0.jpg',
    '/images/544343_0.jpg',
    '/images/544351_0.jpg'
  ]

  const { t } = useTranslation()

  return (
    <main>
      <section
        className='md:h-screen h-[500px] overflow-hidden 
       bg-amber-100 flex justify-center items-center relative'
      >
        {/* image */}
        {/* <div className='md:w-[250px] md:block hidden absolute left-10 md:h-auto  overflow-hidden'>
          <img
            src='/icons/star-geometry.svg'
            className='size-[80px] absolute z-10'
            alt='star-geometry'
          />
          <img
            src='/images/hom4/hom4 (26).jpg'
            className='h-full w-full object-cover rounded-t-full'
            alt='homesleep bed'
          />
        </div> */}

        {/* text */}
        <div className='box-container-md w-full flex  text-right flex-col gap-5 justify-center items-center'>
          <div className=''>
            <h1 className='header-0 font-bold max-w-[350px]'>{t('gallery')}</h1>

            <h2 className='text-lg max-w-[350px] '>{t('galleryHeader')}</h2>
          </div>
        </div>
      </section>

      <section className='min-h-[500px] flex justify-center my-10 items-center'>
        <div className='box-container '>
          <div className='mb-8 max-w-[400px] ml-5 text-right md:float-end'>
            <h2 className='header-1 font-medium'>Homsleepsalon</h2>
            <div className="text-sm text-black/70">{t('galleryDes')}</div>
          </div>
          <ImageGallery images={images} />
        </div>
      </section>
    </main>
  )
}
