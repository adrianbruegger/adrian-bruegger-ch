import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  title: string
  coverImage: {
    node: {
      sourceUrl: string
    }
  }
  slug?: string
  engagement?: boolean
  link?: string
}

export default function CoverImage({ title, coverImage, slug, engagement, link }: Props) {
  const image = (
    <Image
      width={500} 
      height={333}
      alt={`Cover Image for ${title}`}
      src={coverImage?.node.sourceUrl}
      quality={75}
      className={cn('shadow-small rounded-lg bg-white aspect-[6/4] object-cover object-top ', {
        'hover:shadow-medium transition-shadow duration-200': slug,
        '!object-contain !object-center p-4': engagement || !slug && !link && engagement,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {link ? (
        <>
          <a
            href={link}
            className="hover:underline"
            target="_blank" // Add target="_blank" to open link in new window
          >{image}</a>
        </>
      ) : (
        <>
          {slug ? (
            <Link href={engagement ? `/engagement/${slug}` : `/posts/${slug}`} aria-label={title}>
              {image}
            </Link>
          ) : (
            image
          )}
        </>
      )}
    </div>
  )
}
