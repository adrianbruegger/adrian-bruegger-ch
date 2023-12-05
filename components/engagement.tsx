import Link from "next/link";
import EngagementPreview from "./engagement-preview";
import { ChevronRight } from "lucide-react";

export default function Engagements({ posts, moreButton = true, title = "Mein Engagement", length}) {
    posts = posts.slice(0, length);
    return (
        <section className="pb-32">
            {title && (
                <h2 className=" font-syne mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                    {title}
                </h2>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-8 mb-8">
                {posts.map(({ node }, index: number) => (
                    <EngagementPreview
                        key={node.slug}
                        title={node.title}
                        coverImage={node.featuredImage}
                        slug={node.slug}
                        excerpt={node.excerpt}
                        zeitraum={node.zeitraum}
                        link={node.externalLink}
                        className={ index === 3 && length && "lg:hidden 2xl:block"}
                    />
                ))}
            </div>
            {moreButton && (
                <Link
                    className="flex items-center font-bold text-3xl font-syne text-gray-900 hover:text-gray-700"
                    href="/engagement"
                >
                    <ChevronRight className="w-8 h-8" />
                    Alle Engagements
                </Link>
            )}
        </section>
    );
}
