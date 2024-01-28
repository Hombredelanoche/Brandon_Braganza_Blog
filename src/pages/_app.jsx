import "@/styles/globals.css"
import Header from "@/web/components/Header"

const App = ({ Component, pageProps }) => {
  return (
    <>
      <div className="flex flex-col">
        <Header />
        <section>
          <div>
            <Component {...pageProps} />
          </div>
        </section>
      </div>
    </>
  )
}

export default App
