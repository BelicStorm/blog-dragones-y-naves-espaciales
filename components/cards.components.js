import Link from "next/link"
import { makeCategories } from "../utils"

const SmallCard = ({post}) =>{
    const {id,date, slug, status, summary, tags, title } = post
    return <Link href={`/article/${slug}`}>
          <article className="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-sm brutalist card cursor-pointer ">
              <div className="p-10 my-auto bg-white">
                  <h2 className="text-md font-semibold text-gray-800">{title}</h2>
                  <h3 className="text-sm text-gray-300">{date.start}</h3>
              </div>
          </article>                          
    </Link>
}
const BlogCard = ({content,articleType}) =>{
    const {id,date, slug, status,cover, summary, tags, title } = content
    const url = articleType === "book" || tags.some(({name})=>name==="Book")
                    ?`/book/${slug}` 
                    :`/article/${slug}` 
    return <article className="relative max-w-sm cursor-pointer brutalist card bg-white">
                <Link href={url}>
                  <img className="w-auto h-9/12" style={{    padding: "4em 4em 0em"}} src={cover} alt={`${title} article cover`}
                    onError={(e)=>{e.target.onerror = null; e.target.src="/Logo.svg"}}
                  />
                </Link>
                <div className="absolute right-4 top-4 flex flex-col">
                  {makeCategories(title,tags)}
                </div>
                <Link href={url}>
                  <div className="p-7 my-auto pb-10 bg-white ">
                    <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
                    {
                      articleType === "book" ?"" :<h3 className="text-md  font-semibold text-gray-600">{date.start}</h3>
                    }
                    <p className="text-base text-gray-400 mt-2">
                        {summary}
                    </p>
                </div></Link>
              </article>
            
}
const BookCard = ({title, author, pages, sinopsis, editorial, moreProps, whereToBuy})=>{
    return  <div className="container px-8 py-8 mx-auto" style={{cursor: "auto"}}>
    <div className="mx-auto flex flex-wrap justify-center">
      <img alt="ecommerce" className="w-150 h-auto object-cover object-center rounded" src={moreProps.cover} style={{cursor: "auto"}}/>
      <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style={{cursor: "auto"}}>
        <h2 className="text-sm title-font text-gray-500 tracking-widest" style={{cursor: "auto"}}>{author} - {editorial} </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1" style={{cursor: "auto"}}>{title}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <span className="text-gray-600">Paginas: {pages}</span>
          </span>
         
        </div>
        <h2 className="text-sm title-font text-gray-500 tracking-widest" style={{cursor: "auto"}}>Sinopsis</h2>
        <p className="leading-relaxed">
          {sinopsis}
        </p>
        <div className="mt-6">
           <h2 className="text-sm title-font text-gray-500 tracking-widest" style={{cursor: "auto"}}>Articulos en los que lo nombramos:</h2>
      <ul className="list-disc p-8">
        {
          moreProps.related.map(({name})=>{
              const [type, title, slug] = name.split(":")
              const url = type !== "Article" ?`/book/${slug}` :`/article/${slug}` 
              return <li className="p-2 hover:bg-green-100"  key={name}>
                <Link href={url}><span className="cursor-pointer"> {title} </span></Link>
              </li>
          })
        }
      </ul>
        </div>
        <h2 className="text-sm mb-4 title-font text-gray-500 tracking-widest" style={{cursor: "auto"}}>Obtener en:</h2>
        <div className="flex flex-wrap justify-start gap-1">
          {
            whereToBuy.map(({name,link})=>{
              return <a key={name} href={link} title={`Link de compra de ${title} en ${name}`}> 
                <span className={`text-sm m-2 px-4 py-1 leading-normal  brutalist bg-white cursor-pointer`}>{name}</span>
              </a>
            })
          }
          
        </div>
      </div>
    </div>
  </div>
}

export {
    SmallCard, BlogCard, BookCard
}
