import "@/styles/globals.css"
import "@fortawesome/fontawesome-svg-core"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
config.autoAddCss = false

import Footer from "@/web/components/Footer"
import Header from "@/web/components/Header"
import { config } from "dotenv"

const client = new QueryClient()
const App = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={client}>
      <div className="flex flex-col">
        <Header />
        <main className="h-screen p-10">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default App
