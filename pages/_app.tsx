import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
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
          <span>Powered by <a href="https://landersweb.com" target="_blank" className="underline hover:opacity-50">Landersweb</a></span>
        </div>
      </div>
    </div>
  </>
}

export default MyApp
