import { Link, useLocation } from 'react-router'
import { MENU } from '~/constant/app'
import LangSelector from './LangSelector'
import Drawer from './Drawer'
import { useTranslation } from 'react-i18next';


export default function Navigator () {
  const { t } = useTranslation();
   const location = useLocation()
  return (
    <header className='fixed  z-[99]  w-[95vw] mx-auto border-white/20 border left-[2vw] md:mt-5 mt-2 md:rounded-full bg-black/20 backdrop-blur-sm'>
      <nav className='box-container py-2 flex justify-between w-full'>
        {/* logo */}
        <div className='md:w-[60px] w-[40px]'>
          <Link to="/"><img src='/logo.png' alt='homsleepsalon logo' /></Link>
        </div>
        {/* menu */}
        <div className='md:flex hidden mc-hd items-center gap-5 text-sm'>
          <div className='flex gap-5 nav-item items-center text-white'>
            {MENU.map(menu =>  location.pathname === menu.href ? (
              <Link to={menu.href} className='nav-lnk-active' key={menu.label}> {t(menu.label)}</Link>
            ) : 
            (
              <Link to={menu.href} className='nav-lnk ' key={menu.label}> {t(menu.label)}</Link>
            )
          )}
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
