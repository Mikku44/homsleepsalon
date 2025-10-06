import { useTranslation } from "react-i18next"

export default function News() {
  const {t} = useTranslation();
  return (
    <main>
        <section
        className='md:h-screen h-[500px] overflow-hidden 
       bg-amber-100 flex justify-center items-center relative'
      >
        

        {/* text */}
        <div className='box-container-md w-full flex  text-right flex-col gap-5 justify-center items-center'>
          <div className=''>
            <h1 className='header-0 font-bold max-w-[350px]'>{t('news')}</h1>

            <h2 className='text-lg max-w-[350px] '>{t('galleryHeader')}</h2>
          </div>
        </div>
      </section>
    </main>
  )
}
