import Footer from "./footer.component";
import Header from "./header.component";


export default function Layout({ pageTitle, children }) {
    const menu = [{text:"Todos los articulos", url:"/allArticles"}, {text:"Estante de libros", url:"/estanteria"},/* {text:"Conocenos", url:"/aboutUs"} */]
    return  <>
                <Header pageTitle={pageTitle} logoText="Test" menu={menu}/>
                    <main className="max-w-1xl mx-auto pb-10" style={{maxWidth: "1406px"}}>
                        {children}
                    </main>
                <Footer logoText="test"/>
            </>

}