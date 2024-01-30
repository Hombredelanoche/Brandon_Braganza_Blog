import "@/styles/globals.css"
import "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

import Footer from "@/web/components/Footer"
import Header from "@/web/components/Header"
import { config } from "dotenv"

const App = ({ Component, pageProps }) => {
  return (
    <>
      <div className="flex flex-col">
        <Header />
        <main className="h-screen p-10">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
