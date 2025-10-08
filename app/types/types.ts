export interface NewsArticle {
  id: string
  title: string
  description: string
  detail? : string
  imageUrl: string
  date?: string
  category?: string
  link?: string
  tags? : string[]
}