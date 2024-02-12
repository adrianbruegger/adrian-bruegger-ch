import { Variants, m } from "framer-motion";

import CoverImage from "./cover-image";

const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -2,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

export default function Timeline({ posts }) {
    return posts.map(({ node }) => (
        <m.div
            className="mx-auto max-w-sm sm:max-w-full sm:w-full mt-8"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            key={node.slug}
        >
            <div className="" />
            <m.div
                className="text-[164px] w-[300px] sm:w-full flex-col sm:flex-row h-[430px] gap-4 sm:h-fit flex items-center justify-start bg-white rounded-2xl shadow-md p-8"
                variants={cardVariants}
                dragConstraints={{
                    left: -10,
                    right: 10,
                    top: -10,
                    bottom: 20,
                }}
                drag
                whileTap={{ rotate: -10, scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
            >


                {node.featuredImage && (
                    <div className="mb-5 sm:w-1/2">
                        <CoverImage
                            title={node.title}
                            coverImage={node.featuredImage} />
                    </div>
                )}

                <div className="sm:w-1/2">
                    <h3
                        className="text-2xl mb-3 leading-snug"
                        dangerouslySetInnerHTML={{ __html: node.title }}
                    ></h3>
                    <div className="text-lg mb-4">
                        {node.zeitraum && (
                            <p className="italic">
                                {node.zeitraum}
                            </p>
                        )}
                    </div>
                    <div
                        className="text-lg leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{ __html: node.excerpt }}
                    />
                </div>
            </m.div>
        </m.div>
    ));
}
