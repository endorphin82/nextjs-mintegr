import Head from 'next/head'
import {Header} from "../Header";
import {Footer} from "../Footer";

import {MobileNavigation} from "../Navigation/MobileNavigation";

export function MainLayout({children}) {
  // TODO: https://usehooks.com/useWindowSize/
  // const isShowMenu = useSelector(state => state.hamburger.isOpen)
  // const setClientHeight = useSetClientHeight()
  // if (typeof window != "undefined") {
  // useEffect(() => {
  //   function screenTest() {
  //     setClientHeight(window?.innerHeight)
  //     console.log('useEffect', {
  //       clientHeight: window?.innerHeight,
  //     })
  //   }
  //
  //   screenTest()
  //
  //   window?.addEventListener("resize", screenTest)
  //
  //   return () => window?.removeEventListener("resize", screenTest)
  //
  // })

  return (
    <div className="flex-around">
      <Head>
        <title>Website development and IT security | M-INTEGRATION</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="M-integration Full Cycle Digital Agency | "/>
        <meta charSet="utf-8"/>
      </Head>
      <MobileNavigation/>
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