import { AppProps } from 'next/app'
import '../styles/index.css'
import { Analytics } from '@vercel/analytics/react';


export const runtime = 'experimental-edge'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
    <Analytics />
  </>
}

export default MyApp
