import { BlogCard } from "../components/cards.components";
import Layout from "../components/layout.component";
import SideBar from "../components/sidebar.component"
import { getDatabase } from "../lib/notion";
import { makeArticles } from "../utils";


export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return <Layout pageTitle="Home">
            <div className="flex flex-wrap"> 
                <SideBar/>
                <div className="w-full overflow-hidden  lg:w-4/6 ">
                    <div  style={{display: "flex","justifyContent": "center"}}>
                        <div className="article-row">
                            {
                              makeArticles(posts)
                            }                           
                        </div>
                        
                    </div>
                    <div className="text-center" style={{padding:"8px"}}>
                        <button className="brutalist bg-green-400 hover:bg-green-600 text-white tracking-widest text-sm uppercase font-medium ">Load more articles</button>
                    </div>
                </div>
            </div>
        </Layout>
}



export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  const posts  = database.map((post) => {
    const {date, slug, status, summary, tags, title } = post.properties
    return {
      id:post.id,
      date:date.date, 
      slug:slug.rich_text[0].plain_text, 
      status:status.select, 
      summary:summary.rich_text[0].plain_text, 
      tags:tags.multi_select, 
      title:title.title[0].plain_text }
  })
  return {
    props: {
      posts: posts,
    },
    revalidate: 1,
  };
}

/* 

// const renderNestedList = (block) => {
//   const { type } = block;
//   const value = block[type];
//   if (!value) return null;

//   const isNumberedList = value.children[0].type === 'numbered_list_item'

//   if (isNumberedList) {
//     return (
//       <ol>
//         {value.children.map((block) => renderBlock(block))}
//       </ol>
//     )
//   }
//   return (
//     <ul>
//       {value.children.map((block) => renderBlock(block))}
//     </ul>
//   )
// }

// const renderBlock = (block) => {
//   const { type, id } = block;
//   const value = block[type];

//   switch (type) {
//     case "paragraph":
//       return (
//         <p>
//           <Text text={value.text} />
//         </p>
//       );
//     case "heading_1":
//       return (
//         <h1>
//           <Text text={value.text} />
//         </h1>
//       );
//     case "heading_2":
//       return (
//         <h2>
//           <Text text={value.text} />
//         </h2>
//       );
//     case "heading_3":
//       return (
//         <h3>
//           <Text text={value.text} />
//         </h3>
//       );
//     case "bulleted_list_item":
//     case "numbered_list_item":
//       return (
//         <li>
//           <Text text={value.text} />
//           {!!value.children && renderNestedList(block)}
//         </li>
//       );
//     case "to_do":
//       return (
//         <div>
//           <label htmlFor={id}>
//             <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
//             <Text text={value.text} />
//           </label>
//         </div>
//       );
//     case "toggle":
//       return (
//         <details>
//           <summary>
//             <Text text={value.text} />
//           </summary>
//           {value.children?.map((block) => (
//             <Fragment key={block.id}>{renderBlock(block)}</Fragment>
//           ))}
//         </details>
//       );
//     case "child_page":
//       return <p>{value.title}</p>;
//     case "image":
//       const src =
//         value.type === "external" ? value.external.url : value.file.url;
//       const caption = value.caption ? value.caption[0]?.plain_text : "";
//       return (
//         <figure>
//           <img src={src} alt={caption} />
//           {caption && <figcaption>{caption}</figcaption>}
//         </figure>
//       );
//     case "divider":
//       return <hr key={id} />;
//     case "quote":
//       return <blockquote key={id}>{value.text[0].plain_text}</blockquote>;
//     case "code":
//       return (
//         <pre className={styles.pre}>
//           <code className={styles.code_block} key={id}>
//             {value.text[0].plain_text}
//           </code>
//         </pre>
//       );
//     case "file":
//       const src_file =
//         value.type === "external" ? value.external.url : value.file.url;
//       const splitSourceArray = src_file.split("/");
//       const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
//       const caption_file = value.caption ? value.caption[0]?.plain_text : "";
//       return (
//         <figure>
//           <div className={styles.file}>
//             📎{" "}
//             <Link href={src_file} passHref>
//               {lastElementInArray.split("?")[0]}
//             </Link>
//           </div>
//           {caption_file && <figcaption>{caption_file}</figcaption>}
//         </figure>
//       );
//     case "bookmark":
//       const href = value.url
//       return (
//         <a href={ href } target="_brank" className={styles.bookmark}>
//           { href }
//         </a>
//       );
//     default:
//       return `❌ Unsupported block (${
//         type === "unsupported" ? "unsupported by Notion API" : type
//       })`;
//   }
// };

// export default function Post({ page, blocks }) {
//   if (!page || !blocks) {
//     return <div />;
//   }

//   return (
//     <div>
//       <Head>
//         <title>{page.properties.title.title[0].plain_text}</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <article className={styles.container}>
//         <h1 className={styles.name}>
//           <Text text={page.properties.title.title[0].plain_text} />
//         </h1>
//         <section>
//           {blocks.map((block) => (
//             <Fragment key={block.id}>{renderBlock(block)}</Fragment>
//           ))}
//           <Link href="/">
//             <a className={styles.back}>← Go home</a>
//           </Link>
//         </section>
//       </article>
//     </div>
//   );
// }

// export const getStaticPaths = async () => {
//   const database = await getDatabase(databaseId);
//   return {
//     paths: database.map((page) => ({ params: { id: page.id } })),
//     fallback: true,
//   };
// };

// export const getStaticProps = async (context) => {
//   const { id } = context.params;
//   const page = await getPage(id);
//   const blocks = await getBlocks(id);

//   // Retrieve block children for nested blocks (one level deep), for example toggle blocks
//   // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
//   const childBlocks = await Promise.all(
//     blocks
//       .filter((block) => block.has_children)
//       .map(async (block) => {
//         return {
//           id: block.id,
//           children: await getBlocks(block.id),
//         };
//       })
//   );
//   const blocksWithChildren = blocks.map((block) => {
//     // Add child blocks if the block should contain children but none exists
//     if (block.has_children && !block[block.type].children) {
//       block[block.type]["children"] = childBlocks.find(
//         (x) => x.id === block.id
//       )?.children;
//     }
//     return block;
//   });

//   return {
//     props: {
//       page,
//       blocks: blocksWithChildren,
//     },
//     revalidate: 1,
//   };
// };

<main >
        <header>
          <div>
            <svg
              height="80"
              width="80"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="12 0.18999999999999906 487.619 510.941"
            >
              <path
                d="M96.085 91.118c15.81 12.845 21.741 11.865 51.43 9.884l279.888-16.806c5.936 0 1-5.922-.98-6.906L379.94 43.686c-8.907-6.915-20.773-14.834-43.516-12.853L65.408 50.6c-9.884.98-11.858 5.922-7.922 9.883zm16.804 65.228v294.491c0 15.827 7.909 21.748 25.71 20.769l307.597-17.799c17.81-.979 19.794-11.865 19.794-24.722V136.57c0-12.836-4.938-19.758-15.84-18.77l-321.442 18.77c-11.863.997-15.82 6.931-15.82 19.776zm303.659 15.797c1.972 8.903 0 17.798-8.92 18.799l-14.82 2.953v217.412c-12.868 6.916-24.734 10.87-34.622 10.87-15.831 0-19.796-4.945-31.654-19.76l-96.944-152.19v147.248l30.677 6.922s0 17.78-24.75 17.78l-68.23 3.958c-1.982-3.958 0-13.832 6.921-15.81l17.805-4.935V210.7l-24.721-1.981c-1.983-8.903 2.955-21.74 16.812-22.736l73.195-4.934 100.889 154.171V198.836l-25.723-2.952c-1.974-10.884 5.927-18.787 15.819-19.767zM42.653 23.919l281.9-20.76c34.618-2.969 43.525-.98 65.283 14.825l89.986 63.247c14.848 10.876 19.797 13.837 19.797 25.693v346.883c0 21.74-7.92 34.597-35.608 36.564L136.64 510.14c-20.785.991-30.677-1.971-41.562-15.815l-66.267-85.978C16.938 392.52 12 380.68 12 366.828V58.495c0-17.778 7.922-32.608 30.653-34.576z"
                fillRule="evenodd"
                fill="currentColor"
              />
            </svg>
            <span>+</span>
            <svg
              width="133px"
              height="80px"
              viewBox="0 0 512 309"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                d="M120.81043,80.5613102 L217.378325,80.5613102 L217.378325,88.2366589 L129.662487,88.2366589 L129.662487,146.003758 L212.147564,146.003758 L212.147564,153.679106 L129.662487,153.679106 L129.662487,217.101725 L218.384241,217.101725 L218.384241,224.777073 L120.81043,224.777073 L120.81043,80.5613102 Z M226.0292,80.5613102 L236.289538,80.5613102 L281.756922,143.983929 L328.230222,80.5613102 L391.441486,0 L287.591232,150.649363 L341.105941,224.777073 L330.443237,224.777073 L281.756922,157.314798 L232.869425,224.777073 L222.407904,224.777073 L276.324978,150.649363 L226.0292,80.5613102 Z M344.928421,88.2366588 L344.928421,80.5613102 L454.975585,80.5613102 L454.975585,88.2366589 L404.27744,88.2366589 L404.27744,224.777073 L395.425382,224.777073 L395.425382,88.2366589 L344.928421,88.2366588 Z M1.42108547e-14,80.5613102 L11.0650714,80.5613102 L163.64593,308.884007 L100.591558,224.777073 L9.25442331,91.4683847 L8.85205708,224.777073 L1.42108547e-14,224.777073 L1.42108547e-14,80.5613102 Z M454.083705,214.785469 C452.275167,214.785469 450.918762,213.38418 450.918762,211.573285 C450.918762,209.762388 452.275167,208.361099 454.083705,208.361099 C455.913774,208.361099 457.248648,209.762388 457.248648,211.573285 C457.248648,213.38418 455.913774,214.785469 454.083705,214.785469 Z M462.781915,206.334618 L467.518563,206.334618 C467.583153,208.900055 469.456284,210.624719 472.212151,210.624719 C475.290972,210.624719 477.03492,208.770705 477.03492,205.29982 L477.03492,183.310363 L481.85769,183.310363 L481.85769,205.321379 C481.85769,211.573285 478.240613,215.173518 472.255212,215.173518 C466.635824,215.173518 462.781915,211.681076 462.781915,206.334618 Z M488.166045,206.054362 L492.945754,206.054362 C493.354828,209.007848 496.239878,210.883419 500.395211,210.883419 C504.270652,210.883419 507.11264,208.878498 507.11264,206.119036 C507.11264,203.747625 505.304102,202.324777 501.191828,201.354653 L497.187209,200.384531 C491.56782,199.069474 489.005723,196.353129 489.005723,191.782772 C489.005723,186.24229 493.527071,182.555823 500.30909,182.555823 C506.617445,182.555823 511.224912,186.24229 511.504805,191.480955 L506.811217,191.480955 C506.359083,188.613703 503.861576,186.824365 500.244499,186.824365 C496.43365,186.824365 493.893085,188.656819 493.893085,191.459398 C493.893085,193.679901 495.52938,194.95184 499.577063,195.900406 L503.000368,196.741178 C509.373314,198.228702 512,200.815695 512,205.493846 C512,211.443935 507.392533,215.173518 500.029197,215.173518 C493.139526,215.173518 488.51053,211.6164 488.166045,206.054362 Z"
                fill="currentColor"
                fillRule="nonzero"
              ></path>
            </g>
          </svg>
        </div>
        <h1>Next.js blog powered by Notion API</h1>
        <p>
          This is an example of a Next.js blog with data fetched with Notions
          API. The data comes from{" "}
          <a href={`https://www.notion.so/${databaseId}`}>this table</a>. Get
          the source code on{" "}
          <a href="https://github.com/samuelkraft/notion-blog-nextjs">
            Github
          </a>{" "}
          or read{" "}
          <a href="https://samuelkraft.com/blog/building-a-notion-blog-with-public-api">
            my blogpost
          </a>{" "}
          on building your own.
        </p>
      </header>

      <h2 classNameNameName={styles.heading}>All Posts</h2>
      <ol classNameNameName={styles.posts}>
      {posts.map((post) => {
          const {date, slug, status, summary, tags, title } = post.properties
          return <li key={post.id} classNameNameName={styles.post}>
          <h3 classNameNameName={styles.postTitle}>
            <Link href={`/${post.id}`}>
              <a>
                <Text text={title.title[0].plain_text} />
              </a>
            </Link>
          </h3>

          <Link href={`/${post.id}`}>
            <a> Read post →</a>
          </Link>
        </li>
        })}
      </ol>
    </main>
*/