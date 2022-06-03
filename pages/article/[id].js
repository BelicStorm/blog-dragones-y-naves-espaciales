import { getDatabase, getPage, getBlocks, getDatabaseFromSlug } from "../../lib/notion";
import { databaseId } from "../index.js";
import Layout from "../../components/layout.component";
import SideBar from "../../components/sidebar.component";
import { makeCategories, makePosts, renderBlock } from "../../utils";


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
     return <Layout pageTitle="Article Test">
                <div className="flex flex-wrap">
                    <SideBar/>
                    <div className="w-full overflow-hidden lg:w-4/6 sm:p-8">
                        {
                            props.blocks 
                            ?<section className="container mx-auto border-b brutalist article  bg-white">
                                <div className="mx-auto w-20 border-b border-orange-600"></div>
                                    {renderBlock(props.blocks[0])}
                                    {renderBlock(props.blocks[1])}
                                <div className="max-w-2xl mx-auto px-4">
                                    <div className="text-left leading-relaxed text-gray-600 content">
                                    {makeArticleBody()}
                                    </div>

                                    <article className="flex mt-8 mb-6 m px-8 md:mx-8 py-6 justify-between text-gray-900 text-xs" >
                                        
                                        {makeCategories(props.page.title,props.page.tags)}

                                        <a href="#" className="inline-flex items-center">
                                            <i className="icon ion-logo-googleplus text-sm"></i>
                                            <span className="ml-1">51</span>
                                        </a>
                                        <a href="#" className="inline-flex items-center">
                                            <i className="icon ion-logo-pinterest text-sm"></i>
                                            <span className="ml-1">28</span>
                                        </a>
                                        <a href="#" className="inline-flex items-center">
                                            <i className="icon ion-md-share text-sm"></i>
                                            <span className="ml-1">SHARE</span>
                                        </a>
                                    </article>
                                </div>
                            </section>
                            : "Loading ..."
                        }
                        
                        <section className="container mt-8 mx-auto brutalist  bg-white">
                            <h2 className="text-center font-bold text-xl text-3xl m-8">
                            Related Articles
                            </h2>

                            <ul className="flex list-none justify-center gap-8 flex-wrap">
                                {makePosts([[],[],[]])}
                            </ul>
                        </section>
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
  const pageData = await getDatabaseFromSlug(databaseId,id)
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
  return {
    props: {
      page:{
          title:page.properties.title.title[0].plain_text,
          summary:page.properties.summary?.rich_text[0].plain_text, 
          tags:page.properties.tags.multi_select, 
      },
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};
