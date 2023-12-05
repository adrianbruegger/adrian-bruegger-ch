import { Html, Head, Main, NextScript } from 'next/document'
import { TailwindIndicator } from '../components/tailwind-indicator'

export default function Document() {
  //const vercelUrl = `https://${process.env.VERCEL_URL}` || "https://www.adrian-bruegger.ch/";
  const vercelUrl = "https://adrian-bruegger-ch.vercel.app";
  return (
    <Html lang="de">
      <Head />
      <body>
        <Main />
        <NextScript />
        <TailwindIndicator />
      </body>
    </Html>
  )
}
