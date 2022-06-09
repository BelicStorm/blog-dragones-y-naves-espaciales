import Link from "next/link";
import Layout from "../components/layout.component";
import SideBar from "../components/sidebar.component"
import { getDatabase,getBooks, getTags } from "../lib/notion";
import { makeArticles } from "../utils";


export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts, books, tags }) {
  return <Layout>
            <div className="flex flex-wrap"> 
                <SideBar recentPosts={posts} tags={tags}/>
                <div className="w-full overflow-hidden  lg:w-4/6 md:mt-8">
                    <div  style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
                        <h2 className="text-2xl m-8 md:text-4xl font-semibold my-5">Articulos Recientes</h2>        
                        <div className="article-row">
                            {
                              makeArticles(posts,"article")
                            }                           
                        </div>
                        
                    </div>
                    <div className="text-center" style={{padding:"8px"}}>
                        <Link href={`/allArticles`}> 
                              <button className="brutalist bg-white m-2 tracking-widest text-sm uppercase font-medium">Ver todos los articulos</button>
                        </Link> 
                    </div>
                    <div  style={{display: "flex", flexDirection:"column", alignItems:"center", marginTop:"2em"}}>
                        <h2 className="text-2xl m-8 md:text-4xl font-semibold my-5">Libros Recientes</h2>        
                        <div className="article-row">
                            {
                              makeArticles(books,"book")
                            }                           
                        </div>
                        
                    </div>
                    <div className="text-center" style={{padding:"8px"}}>
                        <Link href={`/estanteria`}> 
                              <button className="brutalist m-2 bg-white tracking-widest text-sm uppercase font-medium">Ver todos los libros</button>
                          </Link> 
                    </div>
                </div>
            </div>
        </Layout>
}



export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  const dbbooks = await getBooks(databaseId);
  const tags = await getTags(databaseId)
  const posts  = database.length<=0 ? [] :database.map((post) => {
    const {date, slug, status, summary, tags, title, cover } = post.properties
    const summaryToUse = summary.rich_text[0]?summary.rich_text[0].plain_text:""
    return {
      id:post.id,
      date:date.date, 
      slug:slug.rich_text[0].plain_text, 
      status:status.select, 
      summary:summaryToUse, 
      tags:tags.multi_select, 
      title:title.title[0].plain_text,
      cover:cover.url
     }
  })
  const books = dbbooks.length<=0 ? [] : dbbooks.map((post) => {
    const {date, slug, status, summary, cover, tags, title } = post.properties
    const summaryToUse = summary.rich_text[0]?summary.rich_text[0].plain_text:""
    return {
      id:post.id,
      date:date.date, 
      slug:slug.rich_text[0].plain_text, 
      status:status.select, 
      summary:summaryToUse, 
      tags:tags.multi_select, 
      title:title.title[0].plain_text,
      cover:cover.url
    }
  })
  return {
    props: {
      posts: posts,
      books: books,
      tags: tags[0].properties.tags.multi_select
    },
    revalidate: 1,
  };
}
