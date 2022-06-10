import { DefaultSeo } from "next-seo"
import Head from "next/head"
import "../css/tailwind.css"
function MyApp({ Component, pageProps }) {
    return <div className="body">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
        <DefaultSeo
        defaultTitle="Dragones y Naves Espaciales"
        description="Blog de ciencia ficción y fantasía donde exploramos todos los mundos posibles y hablamos sobre nuestra experiencia porque el espacio está lleno de dragones."
        canonical=""
        twitter={{
          handle: "@DragonesYNaves",
          site: "@DragonesYNaves",
          cardType: "summary_large_image",
        }}
      />
        <Component {...pageProps} />
    </div>
}
  
  
export default MyApp