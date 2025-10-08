import { useTranslation } from 'react-i18next'
import NewsCard from '~/components/NewsCard'
import { ARTICLES } from '~/repositories/news'


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

export default function News () {
  const { t } = useTranslation()
  return (
    <main>
      <section
        className=' h-[500px] overflow-hidden 
       bg-amber-100 flex justify-center items-center relative'
      >
        {/* text */}
        <div className='box-container-md w-full flex  text-right flex-col gap-5 justify-center items-center'>
          <div className=''>
            <h1 className='header-0 font-bold max-w-[350px]'>{t('news')}</h1>
            <h2 className='text-lg max-w-[350px] '>{t('newsDes')}</h2>
          </div>
        </div>
      </section>
      {/* News */}
      <section
        className='flex justify-center
         items-center py-10 overflow-hidden 
       bg-amber-50 relative '
      >
        {/* text */}
        <div className='box-container-md grid gap-5  h-full w-full md:grid-cols-3 grid-cols-2'>
          {ARTICLES?.map((item) =><NewsCard key={item.id} article={item} />)}
        </div>
      </section>
    </main>
  )
}
