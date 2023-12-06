import Image from "next/image";

export default function Intro({ title, subtitle, text, image, gradient, dataURL, alt }) {
    return (
        <section className="flex-col-reverse lg:h-[500px] lg:flex-row flex overflow-visible items-start lg:items-center md:justify-between gap-8 lg:gap-0 mt-5 lg:mt-16 mb-16 md:mb-12 ">
            <div className="flex flex-col justify-start gap-1">

                <span className="w-full text-4xl font-syne md:text-7xl font-bold tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0e52a0] to-[#e8308a] md:pr-8">
                    {title}
                </span>
                <h1 className="text-xl w-fit -ml-3 rounded-lg text-[#0e52a0] px-3 mb-2 mr-1 py-2 bg-[#0e52a0]/10">
                    {subtitle}
                </h1>
                <div className="text-lg leading-relaxed lg:w-3/4">{text}</div>
            </div>
            <Image placeholder="blur" sizes="(min-width: 1024px) 450px, 100%"
                blurDataURL={dataURL} priority src={image} width={450} height={450} className={`${gradient} max-w-full lg:w-[450px] lg:h-[450px] rounded-3xl border aspect-square object-cover`} alt={alt} />
        </section>
    );
}
