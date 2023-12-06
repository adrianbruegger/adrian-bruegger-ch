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

            <h3 className="text-xl font-bold leading-snug">
                {link ? (
                    <>
                        <a
                            href={link}
                            className="hover:underline"
                            target="_blank" // Add target="_blank" to open link in new window
                            dangerouslySetInnerHTML={{ __html: title }}
                        ></a>
                        <ExternalLink className="w-5 h-4 inline-block ml-1 mb-2" />

                    </>
                ) : (
                    <Link
                        href={`/engagement/${slug}`}
                        className="hover:underline"
                        dangerouslySetInnerHTML={{ __html: title }}
                    ></Link>
                )}
            </h3>
            <p className="italic my-1">
                {zeitraum}
            </p>
            <div
            className=" leading-relaxed"
                dangerouslySetInnerHTML={{ __html: excerpt }}
            />
        </div>
    );
}
