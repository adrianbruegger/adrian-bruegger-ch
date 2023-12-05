import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../../components/container";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import { getAllPostsForHome } from "../../lib/api";

import Engagements from "../../components/engagement";


export default function Index({ activeEngagements: { edges: current }, pastEngagements: { edges: past }, preview }) {
    return (
        <Layout preview={preview}>
            <Head>
                <title>{`Engagements | Adrian Brügger`}</title>
            </Head>
            <Container>
                <Intro title={"Engagement"}
                    dataURL={"data:image/jpeg;base64,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"}
                    subtitle={"Mein aktuelles Engagement für das Toggenburg."} text={""} image={"/assets/stockberg.png"} gradient={""} />
                {current.length > 0 && <Engagements posts={current} title={""} moreButton={false} length={undefined} />}
                {past.length > 0 && <Engagements posts={past} title={"Meine vergangenen Engagements"} moreButton={false} length={undefined} />}
            </Container>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const activeEngagements = await getAllPostsForHome(preview, "Engagement");
    const pastEngagements = await getAllPostsForHome(preview, "Vergangene Engagement");

    return {
        props: { activeEngagements, pastEngagements, preview },
        revalidate: 10,
    };
};
