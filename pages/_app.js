import { DefaultSeo } from "next-seo"
import "../css/tailwind.css"
function MyApp({ Component, pageProps }) {
    return <div className="body">
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