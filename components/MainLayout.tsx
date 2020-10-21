import Head from 'next/head'
import {Header} from "./Header";
import {Footer} from "./Footer";
import {useEffect, useRef} from "react";
import {useSetClientHeight} from "../redux/hooks";

export function MainLayout({children}) {
  const ref = useRef()
  // const isShowMenu = useSelector(state => state.hamburger.isOpen)
  const setClientHeight = useSetClientHeight()
  // if (typeof window != "undefined") {
  useEffect(() => {
    function screenTest() {
      setClientHeight(window?.innerHeight)
      console.log('useEffect', {
        clientHeight: window?.innerHeight,
      })
    }

    if (typeof window === "object") {
      screenTest()
      // @ts-ignore
      window?.addEventListener("resize", screenTest)


      console.log(typeof window)

      // @ts-ignore
      return () => window?.removeListener("resize", screenTest)
    }
    // setClientHeight(window.innerHeight)

  })
  // }
  console.log("----")

  return (
    <div ref={ref} className="flex-around">
      <Head>
        <title>Website development and IT security | M-INTEGRATION</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="M-integration Full Cycle Digital Agency | "/>
        <meta charSet="utf-8"/>
      </Head>

      <Header/>

      <main className="main">
        <div className="container">
          {children}
        </div>
      </main>

      <Footer/>
    </div>
  )
}