import Link from "next/link";
import PostPreview from "./post-preview";
import { ChevronRight } from "lucide-react";

export default function MoreStories({
    posts,
    moreButton = true,
    title = true,
    length
}) {
    posts = posts.slice(0, length);
    return (
        <section className="">
            {title && (
                <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                    Aktuelles
                </h2>
            )}
            <div className="flex flex-col justify-start xl:gap-x-8 gap-y-16 lg:gap-y-8 mb-8">
                {posts.map(({ node }) => (
                    <PostPreview
                        key={node.slug}
                        title={node.title}
                        coverImage={node.featuredImage}
                        date={node.date}
                        author={node.author}
                        slug={node.slug}
                        link={node.externalLink}
                        excerpt={node.excerpt}
                    />
                ))}
            </div>
            {moreButton && (
                <Link
                    className="flex items-center font-bold text-3xl text-gray-900 hover:text-gray-700"
                    href="/posts"
                >
                    <ChevronRight className="w-8 h-8" />
                    Alles Aktuelle
                </Link>
            )}
        </section>
    );
}
