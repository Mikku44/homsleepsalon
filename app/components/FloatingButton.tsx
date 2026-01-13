import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function FloatingSocialButtons() {
  const [open, setOpen] = useState(false)

  const socials = [
    {
      href: 'https://www.youtube.com/@Homsleepsalon',
      icon: (
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
      ),
      color: 'bg-red-600'
    },
    {
      href: 'https://www.tiktok.com/@homsleepsalon',
      icon: (
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
      ),
      color: 'bg-black'
    },
    {
      href: 'https://www.facebook.com/Homsleepsalon/',
      icon: (
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
      ),
      color: 'bg-blue-600'
    },
    {
      href: 'https://lin.ee/5KgYgyx',
      icon: (
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
      ),
      color: 'bg-green-500'
    },
    {
      href: 'https://wa.me/66657479789',
      icon: (
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
      ),
      color: 'bg-green-500'
    },
    {
      href: 'tel:+66657479789',
      icon: (
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
      ),
      color: 'bg-amber-500'
    }
  ]

  const { t } = useTranslation();
  return (
    <div className='fixed bottom-5 right-5  z-50 flex flex-col items-center'>
      {/* Buttons */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className='flex flex-col items-center gap-3 mb-3'
          >
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target='_blank'
                rel='noreferrer'
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`text-white ${s.color} p-3 rounded-full shadow-lg hover:shadow-xl transition-all`}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        initial={false}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        className="
    relative flex items-center gap-2
    px-5 py-2.5
    rounded-full
    bg-[var(--secondary-color)]
    text-white
    border border-white/30
    shadow-lg hover:shadow-2xl
    overflow-hidden
  "
      >
        {/* PULSE BACKGROUND */}
        {!open && (
          <motion.span
            className="
        absolute inset-0
        rounded-full
        bg-white/20
        blur-md
      "
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.25, 0.05, 0.25],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Hover glow */}
        <motion.span
          className="absolute inset-0 bg-white/10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* ICON */}
        <motion.span
          key={open ? "close-icon" : "open-icon"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="relative z-10"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 12h16M12 4v16" />
            </svg>
          )}
        </motion.span>

        {/* TEXT */}
        <motion.span
          key={open ? "close-text" : "contact-text"}
          initial={{ opacity: 0, x: -4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 text-sm font-medium"
        >
          {open ? t("close") : t("contact")}
        </motion.span>
      </motion.button>

    </div>
  )
}
