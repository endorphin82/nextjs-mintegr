import Head from 'next/head'
import {Navigation} from "./Navigation";

export function MainLayout({children}) {
  return (
    <>
      <Head>
        <title>Website development and IT security | M-INTEGRATION</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="M-integration Full Cycle Digital Agency | "/>
        <meta charSet="utf-8"/>
      </Head>

      <Navigation/>

      <main className="main">
        <div className="container">
          {children}
        </div>
      </main>

    </>
  )
}