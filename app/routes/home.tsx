import { Link } from 'react-router'
import { motion } from 'motion/react'
import type { Route } from './+types/home'
import { useTranslation } from 'react-i18next'
import 'react-photo-view/dist/react-photo-view.css'
import AutoFadeImage from '~/components/AutoFadeImage'
import PromotionCard from '~/components/PromotionCard'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import HorizontalSwiper from '~/components/HorizontalSwiper'
import {
  ALL_PROMOTION,
  ALL_SHORTS,
  BASE_URL,
  HOME_GALLERY,
  HOME_TIKTOK,
  SLIDE_UP
} from '~/constant/app'
import TiktokVideo from '~/components/TiktokVideo'

export function meta ({}: Route.MetaArgs) {
  return [
    {
      title:
        'Homsleepsalon | Head Spa & Relaxation Sukhumvit 22 & Sathorn  Rama3'
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
      content:
        'Homsleepsalon | Head Spa & Relaxation Sukhumvit 22 & Sathorn  Rama3'
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

export default function Home () {
  const { t } = useTranslation()

  return (
    <main className=' w-full  '>
      <div className='max-h-screen overflow-hidden relative'>
        {/* Social */}
        <div className='w-full absolute right-0 bottom-0 text-sm mb-5  z-30'>
          <div className='box-container w-full flex gap-3 justify-end'>
            <Link
              target='_blank'
              rel='noreferal'
              to='https://www.youtube.com/@Homsleepsalon'
              className=' text-white social-icon'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                className='md:size-[24px] size-[16px]'
                viewBox='0 0 32 32'
              >
                <path
                  fill='currentColor'
                  d='M31.328 8.271a4 4 0 0 0-2.787-2.781c-2.495-.667-12.525-.667-12.525-.667S6.005 4.807 3.484 5.49A4 4 0 0 0 .703 8.271a41.6 41.6 0 0 0-.697 7.745a42 42 0 0 0 .697 7.708a4.02 4.02 0 0 0 2.781 2.787c2.495.667 12.532.667 12.532.667s10.005 0 12.525-.667a4.02 4.02 0 0 0 2.787-2.787c.459-2.541.683-5.125.667-7.708c.016-2.6-.203-5.188-.667-7.745M12.812 20.803v-9.595l8.349 4.808z'
                />
              </svg>
            </Link>
            <Link
              target='_blank'
              rel='noreferal'
              to='https://www.tiktok.com/@homsleepsalon'
              className=' text-white social-icon'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                className='md:size-[24px] size-[16px]'
                viewBox='0 0 32 32'
              >
                <path
                  fill='currentColor'
                  d='M16.708.027C18.453 0 20.188.016 21.921 0c.105 2.041.839 4.12 2.333 5.563c1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-.063-3.855-.463-5.6-1.291c-.76-.344-1.468-.787-2.161-1.24c-.009 3.896.016 7.787-.025 11.667c-.104 1.864-.719 3.719-1.803 5.255c-1.744 2.557-4.771 4.224-7.88 4.276c-1.907.109-3.812-.411-5.437-1.369C4.307 29.027 2.412 26.12 2.136 23a22 22 0 0 1-.016-1.984c.24-2.537 1.495-4.964 3.443-6.615c2.208-1.923 5.301-2.839 8.197-2.297c.027 1.975-.052 3.948-.052 5.923c-1.323-.428-2.869-.308-4.025.495a4.62 4.62 0 0 0-1.819 2.333c-.276.676-.197 1.427-.181 2.145c.317 2.188 2.421 4.027 4.667 3.828c1.489-.016 2.916-.88 3.692-2.145c.251-.443.532-.896.547-1.417c.131-2.385.079-4.76.095-7.145c.011-5.375-.016-10.735.025-16.093z'
                />
              </svg>
            </Link>
            <Link
              target='_blank'
              rel='noreferal'
              to='https://www.facebook.com/Homsleepsalon/'
              className=' text-white social-icon'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='486.04'
                height='1000'
                className='md:size-[24px] size-[16px]'
                viewBox='0 0 486.037 1000'
              >
                <path
                  fill='currentColor'
                  d='M124.074 1000V530.771H0V361.826h124.074V217.525C124.074 104.132 197.365 0 366.243 0C434.619 0 485.18 6.555 485.18 6.555l-3.984 157.766s-51.564-.502-107.833-.502c-60.9 0-70.657 28.065-70.657 74.646v123.361h183.331l-7.977 168.945H302.706V1000z'
                />
              </svg>
            </Link>
            <Link
              target='_blank'
              rel='noreferal'
              to='https://lin.ee/5KgYgyx'
              className=' text-white social-icon'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                className='md:size-[24px] size-[16px]'
                viewBox='0 0 32 32'
              >
                <path
                  fill='currentColor'
                  d='M25.817 13.151a.842.842 0 1 1 0 1.683h-2.339v1.5h2.339a.84.84 0 1 1 0 1.678H22.64a.84.84 0 0 1-.837-.839v-6.36c0-.463.375-.843.837-.843h3.183a.842.842 0 0 1-.005 1.682h-2.339v1.5zm-5.134 4.021a.845.845 0 0 1-.844.838a.85.85 0 0 1-.683-.333l-3.255-4.427v3.921a.839.839 0 1 1-1.678 0v-6.36c0-.359.235-.681.573-.796a.8.8 0 0 1 .26-.043c.26 0 .5.141.661.339l3.281 4.437v-3.937c0-.463.375-.843.839-.843s.844.38.844.843zm-7.656 0a.843.843 0 0 1-.844.839a.84.84 0 0 1-.833-.839v-6.36c0-.463.375-.843.839-.843s.839.38.839.843zm-3.287.839H6.557a.846.846 0 0 1-.844-.839v-6.36c0-.463.38-.843.844-.843s.839.38.839.843v5.521H9.74a.839.839 0 1 1 0 1.678M32 13.749C32 6.588 24.817.76 16 .76S0 6.588 0 13.749c0 6.417 5.693 11.792 13.38 12.813c.521.109 1.229.344 1.412.787c.161.4.104 1.02.052 1.443l-.219 1.359c-.063.401-.323 1.579 1.396.86c1.724-.719 9.224-5.437 12.583-9.303C30.901 19.193 32 16.609 32 13.749'
                />
              </svg>
            </Link>
            <Link
              target='_blank'
              rel='noreferal'
              to='https://wa.me/66657479789'
              className=' text-white social-icon'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                className='md:size-[24px] size-[16px]'
                viewBox='0 0 32 32'
              >
                <path
                  fill='currentColor'
                  d='M23.328 19.177c-.401-.203-2.354-1.156-2.719-1.292c-.365-.13-.63-.198-.896.203c-.26.391-1.026 1.286-1.26 1.547s-.464.281-.859.104c-.401-.203-1.682-.62-3.203-1.984c-1.188-1.057-1.979-2.359-2.214-2.76c-.234-.396-.026-.62.172-.818c.182-.182.401-.458.604-.698c.193-.24.255-.401.396-.661c.13-.281.063-.5-.036-.698s-.896-2.161-1.229-2.943c-.318-.776-.651-.677-.896-.677c-.229-.021-.495-.021-.76-.021s-.698.099-1.063.479c-.365.401-1.396 1.359-1.396 3.297c0 1.943 1.427 3.823 1.625 4.104c.203.26 2.807 4.26 6.802 5.979c.953.401 1.693.641 2.271.839c.953.302 1.823.26 2.51.161c.76-.125 2.354-.964 2.688-1.901c.339-.943.339-1.724.24-1.901c-.099-.182-.359-.281-.76-.458zM16.083 29h-.021c-2.365 0-4.703-.641-6.745-1.839l-.479-.286l-5 1.302l1.344-4.865l-.323-.5a13.17 13.17 0 0 1-2.021-7.01c0-7.26 5.943-13.182 13.255-13.182c3.542 0 6.865 1.38 9.365 3.88a13.06 13.06 0 0 1 3.88 9.323C29.328 23.078 23.39 29 16.088 29zM27.359 4.599C24.317 1.661 20.317 0 16.062 0C7.286 0 .14 7.115.135 15.859c0 2.792.729 5.516 2.125 7.927L0 32l8.448-2.203a16.1 16.1 0 0 0 7.615 1.932h.005c8.781 0 15.927-7.115 15.932-15.865c0-4.234-1.651-8.219-4.661-11.214z'
                />
              </svg>
            </Link>
            <Link
              target='_blank'
              rel='noreferal'
              to='https://www.instagram.com/homsleepsalon/'
              className=' text-white social-icon'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                className='md:size-[24px] size-[16px]'
                viewBox='0 0 32 32'
              >
                <path
                  fill='currentColor'
                  d='M16 0c-4.349 0-4.891.021-6.593.093c-1.709.084-2.865.349-3.885.745a7.85 7.85 0 0 0-2.833 1.849A7.8 7.8 0 0 0 .84 5.52C.444 6.54.179 7.696.095 9.405c-.077 1.703-.093 2.244-.093 6.593s.021 4.891.093 6.593c.084 1.704.349 2.865.745 3.885a7.85 7.85 0 0 0 1.849 2.833a7.8 7.8 0 0 0 2.833 1.849c1.02.391 2.181.661 3.885.745c1.703.077 2.244.093 6.593.093s4.891-.021 6.593-.093c1.704-.084 2.865-.355 3.885-.745a7.85 7.85 0 0 0 2.833-1.849a7.7 7.7 0 0 0 1.849-2.833c.391-1.02.661-2.181.745-3.885c.077-1.703.093-2.244.093-6.593s-.021-4.891-.093-6.593c-.084-1.704-.355-2.871-.745-3.885a7.85 7.85 0 0 0-1.849-2.833A7.7 7.7 0 0 0 26.478.838c-1.02-.396-2.181-.661-3.885-.745C20.89.016 20.349 0 16 0m0 2.88c4.271 0 4.781.021 6.469.093c1.557.073 2.405.333 2.968.553a5 5 0 0 1 1.844 1.197a4.9 4.9 0 0 1 1.192 1.839c.22.563.48 1.411.553 2.968c.072 1.688.093 2.199.093 6.469s-.021 4.781-.099 6.469c-.084 1.557-.344 2.405-.563 2.968c-.303.751-.641 1.276-1.199 1.844a5.05 5.05 0 0 1-1.844 1.192c-.556.22-1.416.48-2.979.553c-1.697.072-2.197.093-6.479.093s-4.781-.021-6.48-.099c-1.557-.084-2.416-.344-2.979-.563c-.76-.303-1.281-.641-1.839-1.199c-.563-.563-.921-1.099-1.197-1.844c-.224-.556-.48-1.416-.563-2.979c-.057-1.677-.084-2.197-.084-6.459c0-4.26.027-4.781.084-6.479c.083-1.563.339-2.421.563-2.979c.276-.761.635-1.281 1.197-1.844c.557-.557 1.079-.917 1.839-1.199c.563-.219 1.401-.479 2.964-.557c1.697-.061 2.197-.083 6.473-.083zm0 4.907A8.21 8.21 0 0 0 7.787 16A8.21 8.21 0 0 0 16 24.213A8.21 8.21 0 0 0 24.213 16A8.21 8.21 0 0 0 16 7.787m0 13.546c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333s5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333M26.464 7.459a1.923 1.923 0 0 1-1.923 1.921a1.919 1.919 0 1 1 0-3.838c1.057 0 1.923.86 1.923 1.917'
                />
              </svg>
            </Link>
            <Link
              target='_blank'
              rel='noreferal'
              to='tel:+66657479789'
              className=' text-white social-icon'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                className='md:size-[24px] size-[16px]'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M5 9.86a18.47 18.47 0 0 0 9.566 9.292l.68.303a3.5 3.5 0 0 0 4.33-1.247l.889-1.324a1 1 0 0 0-.203-1.335l-3.012-2.43a1 1 0 0 0-1.431.183l-.932 1.257a12.14 12.14 0 0 1-5.51-5.511l1.256-.932a1 1 0 0 0 .183-1.431l-2.43-3.012a1 1 0 0 0-1.335-.203l-1.333.894a3.5 3.5 0 0 0-1.237 4.355z'
                />
              </svg>
            </Link>
          </div>
        </div>
        {/* text hero */}
        <div className='w-full h-full absolute z-10 flex md:justify-center justify-end pb-5 flex-col'>
          <div className='box-container w-full'>
            <motion.h1
              {...SLIDE_UP}
              className='md:text-6xl text-4xl text-[var(--primary-color)]  max-w-[300px] font-thin merriweather'
            >
              Homsleepsalon
            </motion.h1>
            <motion.h3
              {...SLIDE_UP}
              className='md:text-3xl  text-white  md:max-w-[300px] max-w-[200px] font-thin duration-200'
            >
              {' '}
              Head Spa & Relaxation in Sukhumvit 22 & Sathorn rama 3
            </motion.h3>
          </div>
        </div>

        <AutoFadeImage
          className='md:block hidden'
          images={[
            '/images/hom2/hom2 (2).jpg',
            '/images/hom3/hom3 (17).jpg',
            '/images/hom3/hom3 (12).jpg',
            '/images/hom2/hom2 (19).jpg'
          ]}
          interval={4000}
          height={700}
        />
        <AutoFadeImage
          className='md:hidden'
          images={[
            '/images/544348_0.jpg',
            '/images/544351_0.jpg',
            '/images/hom1/hom1 (16).jpg',
            '/images/hom3/hom3 (13).jpg'
          ]}
          interval={4000}
          height={700}
        />
        <div className='w-full h-full bg-gradient-to-t from-black/40 to-black/10 absolute z-[9] top-0'>
          {' '}
        </div>
      </div>

      {/* What is homsleesalon */}
      <section className='md:h-screen md:max-h-[600px] overflow-hidden h-auto bg-[#FFF5DF] flex items-center pt-10 md:py-10'>
        <div className='box-container-md w-full grid md:grid-cols-2 gap-8 items-center'>
          {/* Text */}
          <div className='text-center md:text-left'>
            <motion.h2
              {...SLIDE_UP}
              className='header-1 mb-5 text-[var(--secondary-color)] font-bold'
            >
              {t('homeTitle')}
            </motion.h2>
            <motion.p
              {...SLIDE_UP}
              className='text-base text-[var(--secondary-color)] max-w-[400px] mx-auto md:mx-0'
            >
              {t('homeDes')}
            </motion.p>
          </div>
          {/* Image */}
          <div className='w-full h-[450px] md:h-auto md:translate-y-[200px] rounded-t-full md:rounded-full overflow-hidden'>
            <img
              src='/images/hom4/hom4 (26).jpg'
              className='h-full w-full object-cover'
              alt='homesleep bed'
            />
          </div>
        </div>
      </section>

      {/* About therapy */}
      <section className='md:h-screen md:max-h-[600px] overflow-hidden h-auto bg-[var(--secondary-color)] text-white flex items-center pt-10 md:py-10'>
        <div className='box-container-md w-full grid md:grid-cols-2 gap-8 items-center'>
          {/* Image */}
          <div
            className='w-full h-[450px] md:h-auto md:translate-y-[200px] rounded-t-full
           md:rounded-full overflow-hidden order-1 md:order-none'
          >
            <img
              src='/images/544315_0.jpg'
              className='h-full w-full object-cover'
              alt='homesleep bed'
            />
          </div>
          {/* Text */}
          <div className='text-center md:text-right md:justify-self-end'>
            <motion.h2
              {...SLIDE_UP}
              className='header-1 mb-5 font-bold max-w-[350px] mx-auto md:mx-0'
            >
              {t('homeTitle2')}
            </motion.h2>
            <motion.p
              {...SLIDE_UP}
              className='text-md max-w-[350px] mx-auto md:mx-0'
            >
              {t('homeDes2')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Videos */}

      <section className='py-10 bg-amber-50'>
        <div className='box-container grid md:grid-cols-3 gap-4'>
          {['1-eLOc2B9Kw', 'LfVYHlN5-0I', '8ezlnbREsCc','2JnOAvIy7mg',"inluGzjnrbw","OKqew-ijguM"].map(video => (
            <iframe
              key={video}
              width='auto'
              height='auto'
              className='w-full h-auto aspect-[9/16]'
              src={`https://www.youtube.com/embed/${video}`}
              title='Homsleepsalon hairwatch'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>
          ))}
        </div>
      </section>

      {/* Promotion */}

      <section
        className='md:h-screen  overflow-auto h-auto bg-[#FFF5DF]
        flex flex-col items-center justify-center py-10'
      >
        <div className='w-full box-container flex justify-between items-center'>
          <h2 className='header-1 mb-5 font-bold max-w-[350px] text-[var(--secondary-color)]'>
            {t('promotion')}
          </h2>
          {/*  */}

          <Link
            to='/promotion'
            className='group text-sm animated-slide-bg hover:text-white px-3 '
          >
            <span className='flex duration-200 items-center gap-2 font-bold'>
              {t('see more')}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                className='size-[36px]'
                viewBox='0 0 24 24'
              >
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 12h14m-4 4l4-4m-4-4l4 4'
                />
              </svg>
            </span>
          </Link>
        </div>
        {/* Carousel Promotion */}
        <HorizontalSwiper className=' box-container-md w-full items-center'>
          {ALL_PROMOTION?.map((item, index) => (
            <PromotionCard
              key={item.alt + index}
              src={item.src}
              href={item.line}
              whatsApp={item.whatsapp}
              className='md:w-[350px] w-[250px]'
              alt={`${item.alt} promotion`}
            />
          ))}
        </HorizontalSwiper>
      </section>

      {/* Hero Section */}

      <section className='relative  h-[800px] w-full'>
        <img
          src='/images/hom4/hom4 (28).jpg'
          className='w-full h-full object-cover'
          alt='hero section'
        />
        <div className='w-full h-full flex items-center flex-col justify-center text-white bg-black/60 absolute z-[9] top-0'>
          <motion.div {...SLIDE_UP} className=''>
            <img
              className='size-[64px] invert text-white'
              src='/icons/spa-svgrepo-com.svg'
              alt='spa icon'
            />
          </motion.div>
          <motion.h2
            {...SLIDE_UP}
            className='header-1 mb-5 font-bold text-center max-w-[350px] mx-auto md:mx-0'
          >
            {t('homeTitle2')}
          </motion.h2>
        </div>
      </section>

      {/* Homsleep gallery */}

      <section
        className='md:h-screen  overflow-auto h-auto bg-[#FFF5DF]
        flex flex-col items-center justify-center py-10'
      >
        <div className='w-full box-container flex justify-between items-center'>
          <h2 className='header-1 mb-5 font-bold  text-[var(--secondary-color)]'>
            {t('salonspace')}
          </h2>
          {/*  */}
        </div>
        {/* Carousel Gallery */}
        <PhotoProvider>
          <HorizontalSwiper className=' box-container-md w-full items-center'>
            {HOME_GALLERY?.map((item, index) => (
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

      {/* More Video */}

      <section className='relative h-[600px] w-full'>
        <img
          src='/images/hom4/hom4 (202).jpg'
          className='w-full h-full object-cover'
          alt='hero section'
        />
        <div className='w-full h-full flex items-center flex-col justify-center text-white bg-black/60 absolute z-[9] top-0'>
          <motion.div {...SLIDE_UP} className=''>
            <img
              className='size-[64px] invert text-white'
              src='/icons/spa-svgrepo-com.svg'
              alt='spa icon'
            />
          </motion.div>
          <motion.h2
            {...SLIDE_UP}
            className='header-1 mb-5 font-bold text-center max-w-[400px] mx-auto md:mx-0'
          >
            {t('homeSec2')}
          </motion.h2>
        </div>
      </section>

      {/* Homsleep Tiktok */}

      <section
        className='md:h-screen  overflow-auto h-auto bg-[#FFF5DF]
        flex flex-col items-center justify-center py-10'
      >
        {/* Carousel Tiktok */}

        <HorizontalSwiper className=' box-container-md w-full items-center'>
          {HOME_TIKTOK?.map((item, index) => (
            <motion.div
              {...SLIDE_UP}
              key={index}
              className='w-full mb-2 h-[400px]  md:h-[600px] select-none overflow-hidden rounded-2xl'
            >
              <TiktokVideo src={item.src} />
            </motion.div>
          ))}
        </HorizontalSwiper>
      </section>

      {/* shorts */}
        <div className="bg-[var(--secondary-color)]">
          <div className='box-container py-10  grid md:grid-cols-3 gap-4'>
            {ALL_SHORTS?.map(video => (
              <iframe
                key={video.src}
                width='auto'
                height='auto'
                className='w-full h-auto aspect-[9/16]'
                src={`https://www.youtube.com/embed/${video.src}`}
                title='Homsleepsalon hairwatch'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              ></iframe>
            ))}
          </div>
        </div>

      {/* call to action */}

      <section className='h-[600px] flex items-center justify-center bg-[var(--tertiary-color)]'>
        <div className='box-container w-full'>
          <div className='w-full h-[550px] relative  overflow-hidden rounded-3xl '>
            {/* Gradient overlay */}
            <div
              className='w-full h-full bg-gradient-to-t flex md:flex-row flex-col justify-center
             md:justify-around items-center from-black/90 to-black/10 absolute z-[9] top-0 left-0'
            >
              <motion.h2
                {...SLIDE_UP}
                className='header-1 mb-5 font-bold text-center max-w-[350px] text-white mx-auto md:mx-0'
              >
                {t('homCTA')}
              </motion.h2>

              <Link
                to='/reserve'
                className='font-medium group h-[40px] px-5 bg-[var(--primary-color)] 
            text-black/80 flex gap-2 items-center justify-center'
              >
                <div className=''>{t('reserve')}</div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  className='size-[24px] group-hover:translate-x-1 duration-150'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 12h14m-4 4l4-4m-4-4l4 4'
                  />
                </svg>
              </Link>
            </div>
            {/* Image */}
            <img
              src='/images/544341_0.jpg'
              loading='lazy'
              alt='homsleepsalon reverve spa'
              className='w-full h-full object-cover object-center'
            />
          </div>
        </div>
      </section>
    </main>
  )
}
