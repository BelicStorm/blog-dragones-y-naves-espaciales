import Link from "next/link";
import { useRouter } from "next/router";
import { databaseId } from ".";
import Layout from "../components/layout.component";
import SideBar from "../components/sidebar.component"
import { getDatabase, getPaginatedDatabase, getTags,   } from "../lib/notion";
import { makeArticles } from "../utils";

export default function AllArticles({ posts,recentPosts, tags, paginationProps }) {
  const router = useRouter()
  return <Layout pageTitle="Todos los articulos">
            <div className="flex flex-wrap"> 
                <SideBar recentPosts={recentPosts} tags={tags}/>
                <div className="w-full overflow-hidden  lg:w-4/6 md:mt-8">
                    <div  style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
                        <h2 className="text-2xl m-8 md:text-4xl font-semibold my-5">Todos los articulos</h2>        
                        <div className="article-row">
                            {
                              makeArticles(posts,"article")
                            }                           
                        </div>
                        
                    </div>
                    <div className="text-center" style={{padding:"8px"}}> 
                        {
                             paginationProps.firstPage
                                    ?""
                                    :<button onClick={() => router.back()} className="bg-white brutalist m-2 tracking-widest text-sm uppercase font-medium">Atras</button>
                         }
                         {
                             paginationProps.hasMore 
                                ?<Link href={`/allArticles?page=${paginationProps.nextCursor}`}> 
                                    <button className=" bg-white brutalist m-2 tracking-widest text-sm uppercase font-medium">Siguiente</button>
                                </Link> 
                                :""
                         }
                    </div>
                </div>
            </div>
        </Layout>
}



export const getServerSideProps = async ({query}) => {
  const dbPosts = await getPaginatedDatabase(databaseId,4,query.page);
  const dbRecentPosts = await getDatabase (databaseId);
  const tags = await getTags(databaseId)
  const posts  = dbPosts.results.length<=0 ? [] :dbPosts.results.map((post) => {
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
  const recentPosts  = dbRecentPosts.length<=0 ? [] :dbRecentPosts.map((post) => {
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
  return {
    props: {
      posts:posts,
      recentPosts: recentPosts,
      tags: tags[0].properties.tags.multi_select,
      paginationProps:{
          hasMore: dbPosts.has_more ? true : false,
          nextCursor: dbPosts.next_cursor ? dbPosts.next_cursor :"",
          firstPage:query.page?false:true,
      }
    }
  };
}



