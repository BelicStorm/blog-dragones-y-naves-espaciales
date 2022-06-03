import Footer from "./footer.component";
import Header from "./header.component";


export default function Layout({ pageTitle, children }) {
    const menu = [{text:"Item1", url:"/"}, {text:"Item2", url:"/"}]
    return  <>
                <Header pageTitle={pageTitle} logoText="Test" menu={menu}/>
                    <main className="max-w-1xl mx-auto pb-10 pt-10">
                        {children}
                    </main>
                <Footer logoText="test" menu={menu}/>
            </>

}