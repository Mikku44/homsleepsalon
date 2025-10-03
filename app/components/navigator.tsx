import { Link } from 'react-router'
import { MENU } from '~/constant/app'
import LangSelector from './LangSelector'


export default function Navigator () {
  return (
    <header className='fixed z-[99] w-full'>
      <nav className='box-container py-2 flex justify-between w-full'>
        {/* logo */}
        <div className='md:w-[60px] w-[40px]'>
          <Link to="/"><img src='/logo.png' alt='homsleepsalon logo' /></Link>
        </div>
        {/* menu */}
        <div className='md:flex hidden mc-hd items-center gap-5 text-sm'>
          <div className='flex gap-5 nav-item items-center text-white'>
            {MENU.map(menu => (
              <Link to={menu.href} className='nav-lnk ' key={menu.label}>{menu.label}</Link>
            ))}
          </div>
          {/* Lang */}
          <div className='rounded-full size-[40px] bg-[var(--primary-color)] '>
            <LangSelector />
          </div>
          {/* CTA */}
          <Link to="/reserve"
            className='rounded-full h-[40px] w-[100px] bg-[var(--primary-color)] 
            text-black flex items-center justify-center'
          >
            Reserve
          </Link>
        </div>
      </nav>
    </header>
  )
}
