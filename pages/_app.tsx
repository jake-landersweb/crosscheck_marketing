import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import Head from 'next/head'
import * as env from '../components/analytics/.env.js'
import { useRouter } from 'next/router'
import * as ga from '../components/analytics/analytics'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // some browsers (like safari) may require a timeout to delay calling this
    // function after a page has loaded; otherwise, it may not update the position
    window.scrollTo(0, 0);
    console.log(router);

    // log google analytics
    const handleRouteChange = (url: string) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events]);

  return <>
    <Head>
      <title>Crosscheck Sports</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="A fully customizable team management engine. Create teams, seasons, events, games and more. Along with chat and stat tracking, Crosscheck Sports allows you to create a powerful environment for your team members to interact with the schedule and each other" />
      <meta name="author" content="Landersweb" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Crosscheck Sports" />
      <meta property="og:description" content="A fully customizable team management engine. Create teams, seasons, events, games and more. Along with chat and stat tracking, Crosscheck Sports allows you to create a powerful environment for your team members to interact with the schedule and each other" />
      <meta property="og:site_name" content="Crosscheck Sports" />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${env.GOOGLEALAYTICS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${env.GOOGLEALAYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }} />
    </Head>
    <div className="text-txt bg-bgdk-900">
      <div className="grid place-items-center">
        <div className="fixed top-0 z-50">
          <Header />
        </div>
        <div className="relative min-h-screen max-w-[1500px] w-full py-[120px] px-5 lg:px-20 md:px-10">
          <Component {...pageProps} />
        </div>
        <div className="bg-bgdk-800 p-8 w-full grid place-items-center">
          <span>Powered by <a href="https://landersweb.com" target="_blank" rel="noreferrer" className="underline hover:opacity-50">Landersweb</a></span>
        </div>
      </div>
    </div>
  </>
}

export default MyApp
