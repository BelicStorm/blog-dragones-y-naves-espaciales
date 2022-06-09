import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";

const seoObject =(pageTitle) => {
    switch (pageTitle) {
      case "404":
      case "500":
        return {noidex:true}
    
      default:
        return {title:pageTitle}
    }
}

export default function Header({ pageTitle, logoText, menu }) {
    const router = useRouter()
    return (
      <header className="p-12">
       <NextSeo {...seoObject(pageTitle)} />

        <div className="text-gray-900 brutalist bg-white ">
          <nav className="text-sm p-4">
              <ul className="max-w-2xl mx-auto hidden sm:flex justify-between  uppercase">
                {
                  menu.map((menuItem)=>{
                    const linkClass = router.pathname === menuItem.url ?"border-black" :"text-hover border-white hover:border-black"
                      return <li key={menuItem.text} className={`border-2 p-2 ${linkClass}`}><Link href={menuItem.url}>{menuItem.text}</Link></li>
                  })
                }
              </ul>
          </nav>
        </div>
        
      </header>
    );
 }        
