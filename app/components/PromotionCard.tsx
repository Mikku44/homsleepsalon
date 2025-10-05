import React from 'react'
import { motion } from 'motion/react'
import { SLIDE_UP } from '~/constant/app'

interface PromotionCardProps {
  src: string
  alt: string
  href?: string
  aspectRatio?: string // e.g., "0.71/1"
  overlay?: boolean // show dark overlay on hover
  className?: string
}

const PromotionCard: React.FC<PromotionCardProps> = ({
  src,
  alt,
  href = '#',
  aspectRatio = '0.71/1',
  overlay = true,
  className = ''
}) => {
  return (
    <motion.a
      href={href}
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
            className='text-[var(--secondary-color)] text-xl px-4 capitalize 
            duration-200
            group-hover:translate-y-0 translate-y-2'
          >
            Promotion
          </div>
          <div
            className='text-[var(--secondary-color)] text-xl font-medium pb-5 px-4 capitalize 
            duration-200
            group-hover:translate-y-0 translate-y-2'
          >
            {alt?.replace('HomeSleepSalon', '')}
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
    </motion.a>
  )
}

export default PromotionCard
