import { Link, useLocation, useNavigation } from 'react-router'
import { MENU } from '~/constant/app'
import LangSelector from './LangSelector'
import Drawer from './Drawer'
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'motion/react';


export default function Navigator() {
  const { t } = useTranslation();
  const location = useLocation()

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <header className='fixed  z-[99]  w-[95vw] mx-auto border-white/20 border left-[2vw] md:mt-5 mt-2 md:rounded-full bg-black/20 backdrop-blur-xl'>

      {isLoading && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-end justify-center pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mb-6 flex items-center gap-3 rounded-full border border-zinc-200 bg-white/90 px-5 py-3 shadow-sm backdrop-blur"
            >
              {/* Dots */}
              <div className="flex items-center gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="size-1.5 rounded-full bg-zinc-400"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              <span className="text-sm font-medium tracking-wide text-zinc-600">
                กำลังโหลด
              </span>
            </motion.div>
          </motion.div>
        </AnimatePresence>

      )}
      <nav className='box-container py-2 flex justify-between w-full'>
        {/* logo */}
        <div className='md:w-[60px] w-[40px]'>
          <Link to="/"><img src='/logo.png' alt='homsleepsalon logo' /></Link>
        </div>
        {/* menu */}
        <div className='md:flex hidden mc-hd items-center gap-5 text-sm'>
          <div className="flex gap-6 nav-item items-center text-white">
            {MENU.map((menu) => {
              const isActive =
                location.pathname === menu.href ||
                menu.subMenu?.some((sub) => location.pathname === sub.href)

              return (
                <div key={menu.label} className="relative group">
                  {/* Main menu */}
                  <Link
                    to={menu.href}
                    className={isActive ? "nav-lnk-active" : "nav-lnk"}
                  >
                    {t(menu.label)}
                  </Link>

                  {/* Submenu */}
                  {menu.subMenu && (
                    <div
                      className="
              absolute left-1/2 top-full mt-4 -translate-x-1/2
              w-[320px]
              rounded-2xl
              bg-black/30 backdrop-blur-xl
              border border-white/20
              shadow-2xl
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-700 ease-out
              translate-y-3 group-hover:translate-y-0
              z-50
            "
                    >
                      <ul className="p-4 space-y-2">
                        {menu.subMenu.map((sub) => {
                          const Icon = sub.icon
                          const isSubActive = location.pathname === sub.href

                          return (
                            <li key={sub.label}>
                              <Link
                                to={sub.href}
                                className="
                        group/item
                        flex items-start gap-4
                        rounded-xl p-3
                        hover:bg-white/20
                        transition
                      "
                              >
                                {/* Icon */}
                                <div
                                  className="
                          flex items-center justify-center
                          size-10 min-w-10 rounded-full
                          bg-white/25
                          text-white
                          group-hover/item:scale-110
                          transition-transform
                        "
                                >
                                  <Icon className="text-lg" />
                                </div>

                                {/* Text */}
                                <div className="leading-tight">
                                  <div
                                    className={`text-sm font-medium ${isSubActive ? "text-white" : "text-white/90"
                                      }`}
                                  >
                                    {t(sub.label)}
                                  </div>
                                  <div className="text-xs text-white/70">
                                    {sub.desc}
                                  </div>
                                </div>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          {/* Lang */}
          <div className='rounded-full size-[40px] bg-[var(--primary-color)] '>
            <LangSelector />

          </div>
          {/* CTA */}
          <Link to="/reserve"
            className='font-medium h-[40px] w-[100px] bg-[var(--primary-color)] 
            text-black/80 flex items-center justify-center'
          >
            {t("reserve")}
          </Link>


        </div>
        <Drawer />
      </nav>
    </header>
  )
}
