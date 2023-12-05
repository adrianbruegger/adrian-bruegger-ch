import Head from 'next/head'


export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content="Unternehmer & Kantonsratskandidat 2024 aus Neu St. Johann SG im Toggenburg. Ich setze mich für eine freie Wirtschaft und die Digitalisierung ein." />
      { /* Facebook Meta Tags */}
      <meta property="og:url" content="http://adrian-bruegger.ch/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Adrian Brügger | Unternehmer und Kantonsratskandidat aus dem Toggenburg" />
      <meta property="og:description" content="Unternehmer & Kantonsratskandidat 2024 aus Neu St. Johann SG im Toggenburg. Ich setze mich für eine freie Wirtschaft und die Digitalisierung ein." />
      <meta property="og:image" content="http://adrian-bruegger.ch/assets/og-image.png" />
      { /* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="adrian-bruegger.ch" />
      <meta property="twitter:url" content="http://adrian-bruegger.ch/" />
      <meta name="twitter:title" content="Adrian Brügger | Unternehmer und Kantonsratskandidat aus dem Toggenburg" />
      <meta name="twitter:description" content="Unternehmer & Kantonsratskandidat 2024 aus Neu St. Johann SG im Toggenburg. Ich setze mich für eine freie Wirtschaft und die Digitalisierung ein." />
      <meta name="twitter:image" content="http://adrian-bruegger.ch/assets/og-image.png" />
    </Head>
  )
}
