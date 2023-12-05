import { ExternalLink } from "lucide-react";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function EngagementPreview({
    title,
    coverImage,
    excerpt,
    slug,
    zeitraum,
    className,
    link
}) {
    return (
        <div className={className}>
            <div className="mb-5">
                {coverImage && (
                    <CoverImage
                        title={title}
                        coverImage={coverImage}
                        slug={slug}
                        link={link}
                        engagement={true}
                    />
                )}
            </div>
            <p className="italic">
                {zeitraum}
            </p>
            <h3 className="text-3xl mb-3 leading-snug">
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
                        href={`/engagement/${slug}`}
                        className="hover:underline"
                        dangerouslySetInnerHTML={{ __html: title }}
                    ></Link>
                )}
            </h3>

            <div
                className="text-lg leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: excerpt }}
            />
        </div>
    );
}
