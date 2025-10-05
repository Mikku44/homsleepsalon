import { useRef, type ReactNode } from 'react'
import useScrollOnDrag from 'react-scroll-ondrag'

interface DraggableScrollProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  scrollAmount?: number // pixels to scroll when clicking buttons
}

const DraggableScroll: React.FC<DraggableScrollProps> = ({
  children,
  className,
  style,
  scrollAmount = 200 // default scroll per click
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { events } = useScrollOnDrag(ref)

  const scrollLeft = () => {
    if (ref.current) {
      ref.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (ref.current) {
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className='relative'>
      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className='absolute left-0 mx-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/60 border-white/70 text-white border 
        backdrop-blur-md rounded-full shadow hover:bg-white/80'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          className='size-[32px]'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M14.121 17.243a1 1 0 0 1-.707-.293l-4.242-4.243a1 1 0 0 1 0-1.414l4.242-4.243a1 1 0 0 1 1.414 1.414L11.293 12l3.535 3.536a1 1 0 0 1-.707 1.707'
          />
        </svg>
      </button>

      {/* Scrollable Container */}
      <div
        {...events}
        ref={ref}
        className={className}
        style={{ overflowX: 'auto', cursor: 'grab', ...style }}
      >
        {children}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className='absolute right-0 mx-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/60 border-white/70 text-white border 
        backdrop-blur-md rounded-full shadow hover:bg-white/80'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          className='size-[32px]'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M9.172 18.657a1 1 0 0 1-.707-1.707l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.656 5.657a1 1 0 0 1 0 1.414L9.88 18.364a1 1 0 0 1-.707.293Z'
          />
        </svg>
      </button>
    </div>
  )
}

export default DraggableScroll
