import "../css/tailwind.css"
function MyApp({ Component, pageProps }) {
    return <div className="body">
        <Component {...pageProps} />
    </div>
}
  
  
export default MyApp