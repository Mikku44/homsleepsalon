import { useRef, useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useToast } from '~/components/Toast'
import { useTranslation } from 'react-i18next'
import { SLIDE_UP } from '~/constant/app'
import { motion } from 'framer-motion'
import { Link } from 'react-router'

export function meta () {
  return [
    {
      title:
        'Reserve at Homsleepsalon | Head Spa & Premium Relaxation Sukhumvit 22 & Sathorn'
    },
    {
      name: 'description',
      content:
        'จองบริการ Head Spa, นวดผ่อนคลาย, สปาหน้า และทำเล็บที่ Homsleepsalon สุขุมวิท 22 และสาทร รามา 3 พร้อมเทอราพิสผู้เชี่ยวชาญในบรรยากาศผ่อนคลาย ใกล้ BTS พร้อมพงษ์'
    }
  ]
}

// Zod schema
const reserveSchema = z.object({
  name: z.string().min(2, 'กรุณากรอกชื่อของคุณ'),
  phone: z.string().regex(/^0\d{8,9}$/, 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง'),
  date: z.string().nonempty('กรุณาเลือกวันที่'),
  time: z.string().nonempty('กรุณาเลือกเวลา'),
  guests: z
    .number({ invalid_type_error: 'กรุณากรอกจำนวนคน' })
    .min(1, 'ต้องมีอย่างน้อย 1 คน')
    .max(10, 'จำนวนคนเกินไป')
})

type ReserveFormData = z.infer<typeof reserveSchema>

export default function Reserve () {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ReserveFormData>({
    resolver: zodResolver(reserveSchema),
    defaultValues: {
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: 1
    }
  })

  const toast = useToast()
  const scrollRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  function handleScroll () {
    if (scrollRef?.current) {
      scrollRef.current.scrollIntoView()
    }
  }
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (data: ReserveFormData) => {
    toast('Success!', 'Your action was successful.')
    console.log('Reserve Data:', data)
    setSubmitted(true)
    reset()
  }

  return (
    <main className='bg-white text-black'>
      {/* hero */}
      <section
        className='relative flex items-center justify-center text-white bg-[var(--secondary-color)]
       overflow-hidden min-h-[600px] md:h-[600px]'
      >
        {/* Background image */}
        <div className='absolute inset-0'>
          <img
            src='/images/hom4/hom4 (26).jpg'
            alt='homesleep bed'
            className='w-full h-full object-cover object-center'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-black/20' />
        </div>

        {/* Text Content */}
        <div className='relative z-10 w-full px-5 md:px-0'>
          <div className='box-container text-center md:text-left max-w-3xl mx-auto md:mx-0'>
            <motion.h2
              {...SLIDE_UP}
              className='header-1 mb-5  font-bold text-3xl sm:text-4xl md:text-5xl'
            >
              {t('reserve')}
            </motion.h2>
            <motion.p
              {...SLIDE_UP}
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
        <div className='' ref={scrollRef}></div>
      </section>

      {/* Reserve Form Section */}
      <div className='w-full flex justify-between md:flex-row flex-col'>
        <section className='box-container w-full flex items-center flex-col py-12'>
          <h2 className='text-2xl md:text-3xl font-semibold mb-6'>
            {t('Book Your Reservation')}
          </h2>
          {submitted && (
            <p className='mb-6 text-green-600'>
              Thank you! Your reservation has been submitted.
            </p>
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl'
          >
            {/* Name */}
            <div className='flex flex-col'>
              <label className='font-medium mb-1'>Name</label>
              <input
                {...register('name')}
                placeholder='Your Name'
                className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]'
              />
              {errors.name && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* Phone */}
            <div className='flex flex-col'>
              <label className='font-medium mb-1'>Phone</label>
              <input
                {...register('phone')}
                placeholder='0812345678'
                className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]'
              />
              {errors.phone && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.phone.message}
                </p>
              )}
            </div>
            {/* Date */}
            <div className='flex flex-col'>
              <label className='font-medium mb-1'>Date</label>
              <input
                {...register('date')}
                type='date'
                className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]'
              />
              {errors.date && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.date.message}
                </p>
              )}
            </div>
            {/* Time */}
            <div className='flex flex-col'>
              <label className='font-medium mb-1'>Time</label>
              <input
                {...register('time')}
                type='time'
                className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]'
              />
              {errors.time && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.time.message}
                </p>
              )}
            </div>
            {/* Guests */}
            <div className='flex flex-col'>
              <label className='font-medium mb-1'>Guests</label>
              <input
                {...register('guests', { valueAsNumber: true })}
                type='number'
                min={1}
                max={10}
                className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]'
              />
              {errors.guests && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.guests.message}
                </p>
              )}
            </div>
            {/* Submit Button */}
            <div className='md:col-span-2'>
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-[var(--primary-color)] text-black py-3 rounded font-medium hover:opacity-90 transition'
              >
                {isSubmitting ? 'Submitting...' : t('Reserve Now')}
              </button>
            </div>

            {/* button */}

            <div className='text-center w-full md:col-span-2'>{t("Other way")}</div>
            <div className='flex gap-2  justify-center md:col-span-2'>
            
              <Link
                target='_blank'
                rel='noreferal'
                to='https://lin.ee/5KgYgyx'
                className=' border-2 bg-[var(--secondary-color)] p-2 rounded-sm flex justify-center'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  className='size-[28px] md:size-[32px] text-white'
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
                className=' border-2 bg-[var(--secondary-color)] p-2 rounded-sm flex justify-center'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  className='size-[28px] md:size-[32px] text-white'
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
                to='tel:+66657479789'
                className=' border-2 bg-[var(--secondary-color)] p-2 rounded-sm flex justify-center'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  className='size-[28px] md:size-[32px] text-white'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M5 9.86a18.47 18.47 0 0 0 9.566 9.292l.68.303a3.5 3.5 0 0 0 4.33-1.247l.889-1.324a1 1 0 0 0-.203-1.335l-3.012-2.43a1 1 0 0 0-1.431.183l-.932 1.257a12.14 12.14 0 0 1-5.51-5.511l1.256-.932a1 1 0 0 0 .183-1.431l-2.43-3.012a1 1 0 0 0-1.335-.203l-1.333.894a3.5 3.5 0 0 0-1.237 4.355z'
                  />
                </svg>
              </Link>
            </div>
          </form>
        </section>
        {/* map */}
        <section>
          <img src='/promotions/sukumvit-map.jpg' alt='sukumvit branch map' />
        </section>
      </div>
    </main>
  )
}
