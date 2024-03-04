import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import PostBody from "./post-body";

export default function PostHeader({
    title,
    coverImage,
    date,
    content,
}) {
    return (
        <>
            <div className="flex flex-col-reverse justify-between gap-4 lg:flex-row my-16 md:mb-16 sm:mx-0">
                <div className="flex flex-col justify-center lg:w-1/2 gap-2">
                    <PostTitle>{title}</PostTitle>
                    <Date dateString={date} />
                    <PostBody content={content} />
                </div>
                <div className="lg:w-1/3">
                    <CoverImage title={title} coverImage={coverImage} />
                </div>
            </div>
        </>
    );
}
