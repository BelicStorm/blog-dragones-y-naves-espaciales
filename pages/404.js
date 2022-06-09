import { databaseId } from ".";
import Layout from "../components/layout.component";
import SideBar from "../components/sidebar.component";
import { getDatabase } from "../lib/notion";

export default function Custom404({recentPosts}) {
    return <Layout pageTitle="404">
                <div className="flex flex-wrap"> 
                        <SideBar recentPosts={recentPosts}/>
                        <div className="w-full overflow-hidden  lg:w-4/6 md:mt-8">
                            <div className="flex justify-center align-center p-12"> 
                                <h1>404 - Page Not Found</h1>
                            </div>
                        </div>
                    </div>
                
            </Layout>
}

export const getStaticProps = async (context) => {
    const database = await getDatabase(databaseId);
    
    const posts  = database.length<=0 ? [] : database.map((post) => {
      const {date, slug, status, summary, tags, title } = post.properties
      const summaryToUse = summary.rich_text[0]?summary.rich_text[0].plain_text:""
      return {
        id:post.id,
        date:date.date, 
        slug:slug.rich_text[0].plain_text, 
        status:status.select, 
        summary:summaryToUse, 
        tags:tags.multi_select, 
        title:title.title[0].plain_text }
    })
    
    return {
      props: {
        recentPosts: posts
      },
      revalidate: 1,
    };
  };