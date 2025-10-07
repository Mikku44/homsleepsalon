import { Link } from "react-router"
import type { NewsArticle } from "~/types/types"

interface NewsCardProps {
  article: NewsArticle
}

export default function NewsCard({ article }: NewsCardProps) {
  const { id, title, description, imageUrl, date, category, link } = article

  return (
    <Link
      to={link || `/news/${id}`}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="overflow-hidden h-[220px] md:h-[260px] relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {category && (
          <span className="absolute top-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[var(--secondary-color)] line-clamp-2 mb-1">
          {title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-3 flex-grow">{description}</p>
        {date && (
          <span className="text-xs text-gray-400 mt-2">
            {new Date(date).toLocaleDateString()}
          </span>
        )}
      </div>
    </Link>
  )
}
