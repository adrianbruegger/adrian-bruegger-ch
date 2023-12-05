import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  link,
}) {
  return (
    <div className='lg:flex lg:flex-row items-center gap-8'>
      {coverImage && (
        <div className="mb-5 w-fit">
          <CoverImage title={title} coverImage={coverImage} slug={slug} engagement={false} link={link} />
        </div>
      )}
      <div className='xl:w-3/4 w-full'>
        <h3 className="text-3xl mb-1">
          {link ? (
            <>
              <a
                href={link}
                className="hover:underline"
                target="_blank" // Add target="_blank" to open link in new window
                dangerouslySetInnerHTML={{ __html: title }}
              ></a>
              <ExternalLink className="w-6 h-6 inline-block ml-2 mb-2" />

            </>
          ) : (
            <Link
              href={`/posts/${slug}`}
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          )}
        </h3>
        <div className="text-lg mb-2 italic">
          <Date dateString={date} />
        </div>
        <div
          className="text-lg leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </div>
    </div>
  )
}
