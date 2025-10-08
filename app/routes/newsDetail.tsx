import { Link, useParams } from 'react-router'
import { BASE_URL } from '~/constant/app'
import type { NewsArticle } from '~/types/types'
import type { Route } from './+types/newsDetail'
import { ARTICLES } from '~/repositories/news'
import ReactMarkdown from 'react-markdown'

export function meta ({ params }: Route.MetaArgs) {
  const id = params.id
  const article: NewsArticle | undefined = ARTICLES.find(a => a.link === id)
  return [
    {
      title: `Homsleepsalon | ${article?.title}`
    },
    {
      name: 'description',
      content: `Homsleepsalon | ${article?.description}`
    },
    {
      name: 'keywords',
      content:
        'Homsleepsalon, Head Spa, สปาหู, สปาหน้า, สุขุมวิท 22 , สาทร รามา3, สปากรุงเทพ'
    },
    {
      property: 'og:title',
      content: `Homsleepsalon | ${article?.title}`
    },
    {
      property: 'og:description',
      content: `Homsleepsalon | ${article?.description}`
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${BASE_URL}` },
    { property: 'og:image', content: `${BASE_URL}/logo.png` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Homsleepsalon Head Spa & Relaxation' }
  ]
}

export default function NewsDetail () {
  const { id } = useParams<{ id: string }>()

  // Find article by id
  const article: NewsArticle | undefined = ARTICLES.find(a => a.link === id)

  if (!article) {
    return (
      <div className='flex items-center justify-center min-h-screen text-gray-500'>
        Article not found.
      </div>
    )
  }

  const { title, description, imageUrl, date, category } = article

  return (
    <main className='max-w-4xl mx-auto px-4 py-10 md:pt-32 pt-20'>
      {/* Back button */}
      <div className='mb-6'>
        <Link
          to='/news'
          className='text-[var(--secondary-color)] hover:underline text-sm'
        >
          &larr; Back to News
        </Link>
      </div>

      {/* Category */}
      {category && (
        <span className='inline-block bg-[var(--secondary-color)] text-white text-xs px-3 py-1 rounded-full mb-3'>
          {category}
        </span>
      )}

      {/* Title */}
      <h1 className='text-3xl md:text-4xl font-bold mb-4'>{title}</h1>

      {/* Date */}
      {date && (
        <p className='text-gray-400 text-sm mb-6'>
          {new Date(date).toLocaleDateString()}
        </p>
      )}

      {/* Image */}
      <div className='mb-6 overflow-hidden rounded-2xl'>
        <img
          src={imageUrl}
          alt={title}
          className='w-full h-auto object-cover'
        />
      </div>

      {/* Description / Content */}
      {/* <div className='prose prose-md max-w-full text-gray-700'>
        <p>{article?.detail ?? description}</p>
         
      </div> */}

      <article className='prose lg:prose-xl '>
          <ReactMarkdown>{article?.detail ?? description}</ReactMarkdown>
        </article>

      {/* Tags */}
      <div className='flex flex-wrap items-center gap-2 mt-4'>
        {article?.tags?.map(tag => (
          <span
            key={tag}
            className='px-3 py-1 text-sm font-medium bg-[var(--secondary-color)]
             text-[var(--primary-color)] rounded-full
              hover:text-white transition-colors duration-200'
          >
            #{tag}
          </span>
        ))}
      </div>
    </main>
  )
}
