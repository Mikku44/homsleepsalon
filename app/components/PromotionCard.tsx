import React from 'react'
import { motion } from 'motion/react'
import { SLIDE_UP } from '~/constant/app'
import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'

interface PromotionCardProps {
  src: string
  alt: string
  href?: string
  aspectRatio?: string // e.g., "0.71/1"
  overlay?: boolean // show dark overlay on hover
  className?: string
  whatsApp?: string
}

const PromotionCard: React.FC<PromotionCardProps> = ({
  src,
  alt,
  href = '#',
  aspectRatio = '0.71/1',
  overlay = true,
  className = '',
  whatsApp = '#'
}) => {
  const { t } = useTranslation()
  return (
    <motion.div
      {...SLIDE_UP}
      draggable={false}
      className={` aspect-[${aspectRatio}] overflow-hidden cursor-pointer relative group ${className}`}
    >
      {overlay && (
        <div
          className='absolute inset-0 bg-gradient-to-t 
          flex flex-col justify-end gap-0
          from-[var(--primary-color)]/80 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200'
        >
          <div
            className='text-[var(--secondary-color)] md:text-xl text-sm px-4 capitalize 
            duration-200
            group-hover:translate-y-0 translate-y-2'
          >
            Promotion
          </div>
          <div
            className='text-[var(--secondary-color)] md:text-xl text-sm font-medium pb-5 px-4 capitalize 
            duration-200
            group-hover:translate-y-0 translate-y-2'
          >
            {alt?.replace('HomeSleepSalon', '')}
          </div>

          {/* CTA */}
          <div className='pb-5 px-4 capitalize flex gap-2'>
            {t('reserve')}
            <Link to={href}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                className='md:size-[24px] size-[16px] hover:text-green-500 duration-150'
                viewBox='0 0 32 32'
              >
                <path
                  fill='currentColor'
                  d='M25.817 13.151a.842.842 0 1 1 0 1.683h-2.339v1.5h2.339a.84.84 0 1 1 0 1.678H22.64a.84.84 0 0 1-.837-.839v-6.36c0-.463.375-.843.837-.843h3.183a.842.842 0 0 1-.005 1.682h-2.339v1.5zm-5.134 4.021a.845.845 0 0 1-.844.838a.85.85 0 0 1-.683-.333l-3.255-4.427v3.921a.839.839 0 1 1-1.678 0v-6.36c0-.359.235-.681.573-.796a.8.8 0 0 1 .26-.043c.26 0 .5.141.661.339l3.281 4.437v-3.937c0-.463.375-.843.839-.843s.844.38.844.843zm-7.656 0a.843.843 0 0 1-.844.839a.84.84 0 0 1-.833-.839v-6.36c0-.463.375-.843.839-.843s.839.38.839.843zm-3.287.839H6.557a.846.846 0 0 1-.844-.839v-6.36c0-.463.38-.843.844-.843s.839.38.839.843v5.521H9.74a.839.839 0 1 1 0 1.678M32 13.749C32 6.588 24.817.76 16 .76S0 6.588 0 13.749c0 6.417 5.693 11.792 13.38 12.813c.521.109 1.229.344 1.412.787c.161.4.104 1.02.052 1.443l-.219 1.359c-.063.401-.323 1.579 1.396.86c1.724-.719 9.224-5.437 12.583-9.303C30.901 19.193 32 16.609 32 13.749'
                />
              </svg>
            </Link>
            <Link to={whatsApp}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                className='md:size-[24px] size-[16px] hover:text-green-500 duration-150'
                viewBox='0 0 32 32'
              >
                <path
                  fill='currentColor'
                  d='M23.328 19.177c-.401-.203-2.354-1.156-2.719-1.292c-.365-.13-.63-.198-.896.203c-.26.391-1.026 1.286-1.26 1.547s-.464.281-.859.104c-.401-.203-1.682-.62-3.203-1.984c-1.188-1.057-1.979-2.359-2.214-2.76c-.234-.396-.026-.62.172-.818c.182-.182.401-.458.604-.698c.193-.24.255-.401.396-.661c.13-.281.063-.5-.036-.698s-.896-2.161-1.229-2.943c-.318-.776-.651-.677-.896-.677c-.229-.021-.495-.021-.76-.021s-.698.099-1.063.479c-.365.401-1.396 1.359-1.396 3.297c0 1.943 1.427 3.823 1.625 4.104c.203.26 2.807 4.26 6.802 5.979c.953.401 1.693.641 2.271.839c.953.302 1.823.26 2.51.161c.76-.125 2.354-.964 2.688-1.901c.339-.943.339-1.724.24-1.901c-.099-.182-.359-.281-.76-.458zM16.083 29h-.021c-2.365 0-4.703-.641-6.745-1.839l-.479-.286l-5 1.302l1.344-4.865l-.323-.5a13.17 13.17 0 0 1-2.021-7.01c0-7.26 5.943-13.182 13.255-13.182c3.542 0 6.865 1.38 9.365 3.88a13.06 13.06 0 0 1 3.88 9.323C29.328 23.078 23.39 29 16.088 29zM27.359 4.599C24.317 1.661 20.317 0 16.062 0C7.286 0 .14 7.115.135 15.859c0 2.792.729 5.516 2.125 7.927L0 32l8.448-2.203a16.1 16.1 0 0 0 7.615 1.932h.005c8.781 0 15.927-7.115 15.932-15.865c0-4.234-1.651-8.219-4.661-11.214z'
                />
              </svg>
            </Link>
          </div>
        </div>
      )}
      <img
        draggable={false}
        loading='lazy'
        className='select-none w-full h-full object-cover'
        src={src}
        alt={alt}
      />
    </motion.div>
  )
}

export default PromotionCard
