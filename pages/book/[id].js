import { getDatabase, getPage, getBlocks, getDatabaseFromSlug, getTags } from "../../lib/notion";
import { databaseId } from "../index.js";
import Layout from "../../components/layout.component";
import SideBar from "../../components/sidebar.component";
import { makeCategories, makeBooks  } from "../../utils";
import { ShareLinks } from "../../components/socialLinks.components";


export default function BookDetails(props) {
    const makeArticleBody = () =>{
        let text = [];
        let links = []
        props.blocks.forEach((block,index) => {
            const { type, id } = block;
            const value = block[type];
            if (value.rich_text[1]?.plain_text) {
                let name = value.rich_text[0].plain_text
                let link = value.rich_text[1].plain_text
                links = [...links, {name:name, link:link}]
            } else {
                text = [...text, value.rich_text[0].plain_text]
            }            
        });
        
        return [text,links]
    }
     return <Layout pageTitle={props.page.title}>
                <div className="flex flex-wrap">
                    <SideBar recentPosts={props.recentPosts} tags={props.tags}/>
                    <div className="w-full overflow-hidden lg:w-4/6 sm:p-8">
                        {
                            props.blocks 
                            ?<section className="container mx-auto border-b brutalist article  bg-white">
                                 {makeBooks(makeArticleBody(),props.page)}
                                <div className="max-w-2xl mx-auto px-4">
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
        return `/book/${row.properties.slug.rich_text[0].plain_text}`
    }),
    fallback: true
  }
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const database = await getDatabase(databaseId);
  const tags = await getTags(databaseId)
  const pageData = await getDatabaseFromSlug(databaseId,id)
  if (pageData.length <= 0) {
    return {
      notFound:true
    }
  }
  const pageId = pageData.find(t => t.properties.slug.rich_text[0].plain_text === id)
  const page = await getPage(pageId.id);
  const blocks = await getBlocks(pageId.id);

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
  const posts = database.length<=0 ? [] :database.map((post) => {
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
          cover: page.properties.cover.url
      },
      blocks: blocksWithChildren,
      recentPosts: posts,
      tags:tags[0].properties.tags.multi_select
    },
    revalidate: 1,
  };
};
