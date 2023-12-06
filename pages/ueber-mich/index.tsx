import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../../components/container";

import Layout from "../../components/layout";
import { getAllPostsForHome } from "../../lib/api";

import Intro from "../../components/intro";
import Timeline from "../../components/timeline";

import { LazyMotion, domAnimation } from "framer-motion"


export default function Index({ timeline, preview }) {
    const posts = timeline.edges;

    return (
        <Layout preview={preview}>
            <Head>
                <title>Über mich | Adrian Brügger</title>
            </Head>
            <Container>
                <Intro
                    alt={"Dekoratives Bild der Churfirsten zur Illustration der Über mich Seite von Adrian Brügger"}
                    title={"Über mich"}
                    dataURL={"data:image/jpeg;base64,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"}
                    subtitle={"Erfahren Sie mehr über meine Person."}
                    text={
                        <div>
                            Ich bin 1995 geboren und in Unterwasser im Toggenburg aufgewachsen. Gerne lerne ich neue Menschen kennen und freue mich über jeden geselligen Anlass. Zur Ruhe komme ich in den Bergen, wo ich gerne wandere und die Natur geniesse.
                        </div>
                    }
                    image={"/assets/churfirsten.png"}
                    gradient={""}


                />
                <div className="flex flex-col pb-48 ">
                    <h2 className=" justify-center text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center">
                        Meine Zeitleiste
                    </h2>
                    <LazyMotion features={domAnimation}>
                        <Timeline posts={posts} />
                    </LazyMotion>

                </div>
            </Container>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const timeline = await getAllPostsForHome(preview, "Timeline");

    return {
        props: { timeline, preview },
        revalidate: 10,
    };
};
