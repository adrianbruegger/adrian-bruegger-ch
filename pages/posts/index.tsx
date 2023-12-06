import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";

import Layout from "../../components/layout";
import { getAllPostsForHome } from "../../lib/api";

import Intro from "../../components/intro";

export default function Index({ allPosts: { edges }, preview }) {
    const morePosts = edges;

    return (
        <Layout preview={preview}>
            <Head>
                <title>Aktuelles | Adrian Brügger</title>
            </Head>
            <Container>
                <Intro
                    title={"Aktuelles"}
                    alt={"Dekoratives Bild der Gräppelensee und des Wildhuser Schafberg zur Illustration der Aktuelles Seite von Adrian Brügger"}
                    dataURL={"data:image/jpeg;base64,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"}
                    subtitle={"Neuigkeiten meiner Engagements und politischen Tätigkeiten."}
                    text={""}
                    image={"/assets/graeppelensee.png"}
                    gradient={""}
                />
                {morePosts.length > 0 && (
                    <MoreStories
                        posts={morePosts}
                        moreButton={false}
                        title={false} length={undefined}                    />
                )}
            </Container>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const allPosts = await getAllPostsForHome(preview, "Aktuelles");

    return {
        props: { allPosts, preview },
        revalidate: 10,
    };
};
