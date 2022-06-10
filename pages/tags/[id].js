import Link from "next/link";
import { useRouter } from "next/router";
import { databaseId } from "../";
import Layout from "../../components/layout.component";
import SideBar from "../../components/sidebar.component"
import { getDatabase, getTags, getDatabaseFromCategories,  } from "../../lib/notion";
import { makeArticles } from "../../utils";

export default function SearchedTags({ posts, recentPosts, tags, tag,paginationProps }) {
  const router = useRouter()
  return <Layout>
            <div className="flex flex-wrap"> 
                <SideBar recentPosts={recentPosts} tags={tags}/>
                <div className="w-full overflow-hidden  lg:w-4/6 md:mt-8">
                    <div  style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
                        <h2 className="text-2xl m-8 md:text-4xl font-semibold my-5">Articulos Y Libros con el tag: {tag}</h2>        
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
                                    :<button onClick={() => router.back()} className="brutalist m-2 tracking-widest text-sm uppercase font-medium">Atras</button>
                         }
                         {
                             paginationProps.hasMore 
                                ?<Link href={`/tags/${tag}?page=${paginationProps.nextCursor}`}> 
                                    <button className="brutalist m-2 tracking-widest text-sm uppercase font-medium bg-white">Siguiente</button>
                                </Link> 
                                :""
                         }
                    </div>
                </div>
            </div>
        </Layout>
}



export const getServerSideProps = async ({params,query}) => {
  const { id } = params;
  const page = query?.page
  const dbPostFromTags = await getDatabaseFromCategories(databaseId,id,4,page)
  const dbRecentPosts = await getDatabase(databaseId);
  const tags = await getTags(databaseId)
  const TagPosts  = dbPostFromTags.results.length<=0 ? [] :dbPostFromTags.results.map((post) => {
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
  const posts  = dbRecentPosts.length<=0 ? [] :dbRecentPosts.map((post) => {
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
      recentPosts: posts,
      posts: TagPosts,
      tags: tags[0].properties.tags.multi_select,
      tag: id,
      paginationProps:{
        hasMore: dbPostFromTags.has_more,
        nextCursor: dbPostFromTags.next_cursor,
        firstPage:query?.page?false:true,
    }
    }
  };
}



