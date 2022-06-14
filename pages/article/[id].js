import { getDatabase, getPage, getBlocks, getDatabaseFromSlug, getTags } from "../../lib/notion";
import { databaseId } from "../index.js";
import Layout from "../../components/layout.component";
import SideBar from "../../components/sidebar.component";
import { makeCategories, makePosts, renderBlock } from "../../utils";
import Link from "next/link";
import { ShareLinks } from "../../components/socialLinks.components";


export default function ArticleDetails(props) {
    const makeArticleBody = () =>{
        let to_return = [];
        props.blocks.forEach((block,index) => {
            if (![0,1].includes(index)) {
                to_return = [...to_return, renderBlock(block)]
            }
            
        });
        return to_return
    }
     return <Layout pageTitle={props?.page?.title}>
                <div className="flex flex-wrap">
                    <SideBar recentPosts={props.recentPosts} tags={props.tags}/>
                    <div className="w-full overflow-hidden lg:w-4/6 sm:px-8 py-8">
                        {
                            props.blocks 
                            ?<section className="container mx-auto border-b brutalist article  bg-white">
                                <div className="mx-auto w-20 border-b border-orange-600"></div>
                                    {renderBlock(props?.blocks[0])}
                                    <figure key={`image-${props.page.title}`} className="flex justify-center flex-col">
                                            <img
                                            className="image my-16 rounded-lg"
                                                src={props.page.cover} alt={`${props.page.title} image cover`}
                                                onError={(e)=>{e.target.onerror = null; e.target.src=""; e.target.alt=""}}
                                            />
                                        </figure>
                                <div className="max-w-3xl mx-auto px-4">
                                    <div className="text-left leading-relaxed text-gray-600 content">
                                    {makeArticleBody()}
                                    </div>
                                    
                                    <article className="mt-8 p-8" >
                                      <h2 className="text-1xl md:text-2xl font-semibold">Articulos o libros relacionados</h2>
                                        <ul className="list-disc">
                                          {
                                            props.page.related.map(({name})=>{
                                                const [type, title, slug] = name.split(":")
                                                const url = type !== "Article" ?`/book/${slug}` :`/article/${slug}` 
                                                return <li className="p-2 hover:bg-green-100" key={name}> <Link href={url}><span className="cursor-pointer"> {title} </span></Link></li>
                                            })
                                          }
                                        </ul>
                                      </article>
                                    <article className="flex mt-8 mb-6 m px-8 md:mx-8 py-6 justify-between text-gray-900 text-xs" >
                                        
                                        {makeCategories(props.page.title,props.page.tags)}

                                        <ShareLinks title={props.page.title}/>
                                    </article>
                                </div>
                            </section>
                            : "Loading ..."
                        }
                        
                    </div>
                </div>
            </Layout>
}


export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  return {
    paths: database.map(row => {
        return `/article/${row.properties.slug.rich_text[0].plain_text}`
    }),
    fallback: true
  }
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const database = await getDatabase(databaseId);
  const pageData = await getDatabaseFromSlug(databaseId,id)
  if (pageData.length <= 0) {
    return {
      notFound:true
    }
  }
  const pageId = pageData.find(t => t.properties.slug.rich_text[0].plain_text === id)
  const page = await getPage(pageId.id);
  const blocks = await getBlocks(pageId.id);
  const tags = await getTags(databaseId)
  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });
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
  const summaryToUse = page.properties.summary.rich_text[0] ? page.properties.summary.rich_text[0].plain_text : ""
  const related = page.properties.Related.multi_select[0] ? page.properties.Related.multi_select :""
  return {
    props: {
      page:{
          title:page.properties.title.title[0].plain_text,
          summary:summaryToUse, 
          tags:page.properties.tags.multi_select, 
          related: related,
          cover:page.properties.cover.url
      },
      recentPosts: posts,
      blocks: blocksWithChildren,
      tags:tags[0].properties.tags.multi_select
    },
    revalidate: 1,
  };
};
