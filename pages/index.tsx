import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Engagements from "../components/engagement";
import Standpunkte from "../components/standpunkte";
import Link from "next/link";

export default function Index({ engagement, aktuelles, preview }) {
    const engagements = engagement.edges;
    const posts = aktuelles.edges;

    return (
        <Layout preview={preview}>
            <Head>
                <title>Adrian Brügger | Unternehmer und FDP-Kantonsratskandidat aus dem Toggenburg</title>
            </Head>
            <Container>
                <Intro
                    title={<p>Grüezi, <br />ich bin Adrian Brügger.</p>}
                    subtitle={"Unternehmer und FDP-Kantonsratskandidat aus dem Toggenburg"}
                    alt={"Adrian Brügger"}
                    text={
                        <div>
                            Mein Name ist Adrian Brügger. Ich wohne in <b>Neu St. Johann</b> im schönen Toggenburg und kandidiere für den Kantonsrat für die FDP. Vielen Dank
                            für Ihr Interesse an meiner Tätigkeit. Hier erfahren Sie mehr über meine <Link href={"/engagement"}><b>Engagements</b></Link>, <Link href={"/posts"}><b>Aktuelles</b></Link> und <Link href={"//ueber-mich"}><b>meine
                                Person</b></Link>.
                        </div>
                    }
                    dataURL={"data:image/jpeg;base64,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"}
                    image={"/assets/adrian-bruegger.png"}
                    gradient={"bg-gradient-to-br from-[#0e52a0] to-[#e8308a]"}
                />
                <Standpunkte />
                {engagements.length > 0 && <Engagements posts={engagements} length={4} />}
                {posts.length > 0 && <MoreStories posts={posts} length={3} />}
            </Container>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const engagement = await getAllPostsForHome(preview, "Engagement");
    const aktuelles = await getAllPostsForHome(preview, "Aktuelles");

    return {
        props: { engagement, aktuelles, preview },
        revalidate: 10,
    };
};
