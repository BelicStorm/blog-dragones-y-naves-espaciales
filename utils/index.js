import Link from "next/link"
import { BlogCard, BookCard, SmallCard } from "../components/cards.components"

const makeArticles= (posts,articleType)=>{
    let toReturn =  posts 
                        ? posts.length > 0
                            ? posts.map((e,index)=>{
                                return <BlogCard key={index} content={e} articleType={articleType}/>
                              })
                            : ""
                        : ""
    return toReturn
}
const makeBooks= (posts,moreProps)=>{
    let [author, title, pages, editorial ,sinopsis] = posts[0]
    let whereToBuy = posts[1]
    return <BookCard key={title} author={author} title={title} pages={pages} editorial={editorial} sinopsis={sinopsis} moreProps={moreProps} whereToBuy={whereToBuy}/>
}
const makePosts = (posts) => {
    let toReturn =  posts 
                        ? posts.length > 0
                            ? posts.map((e,index)=>{
                                return <li className="mb-3" key={e.title}>
                                            <SmallCard post={e}/>
                                        </li>
                              })
                            : ""
                        : ""
    return toReturn
}

const makeCategories= (identifier,Categories)=>{
    let toReturn =  Categories 
                        ? Categories.length > 0
                            ? Categories.map((e,index)=>{
                                const {name, color} = e
                                return  <Link key={`${identifier}-${e.name}`} href={`/tags/${name}`} className="text-gray-900 font-thin font-serif text-lg py-2 block">
                                          <span className={`text-sm px-4 py-1 leading-normal  brutalist bg-white cursor-pointer`}>{name}</span>
                                        </Link>
                              })
                            : ""
                        : ""
    return toReturn
}

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p key={`paragraph-${id}`}>
          {value.rich_text[0]?.plain_text}
        </p>
        <br/>
      );
    case "heading_1":
      return (
        <header key={`header1-${id}`} className="text-center px-3">
            <h1 className="text-3xl m-8 md:text-4xl font-semibold">
                {value.rich_text[0]?.plain_text}
            </h1>
        </header>
      );
    case "heading_2":
      return (
        <h2 key={`header2-${id}`} className="text-2xl md:text-3xl font-semibold">
                {value.rich_text[0]?.plain_text}
            </h2>
      );
    case "heading_3":
      return (
        <h3 key={`header3-${id}`} className="text-1xl md:text-2xl font-semibold">
                {value.rich_text[0]?.plain_text}
        </h3>
      );
    case "image":
      const src = value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure key={`image-${caption}-${id}`} className="flex justify-center flex-col">
            <img
            className="image my-16 rounded-lg"
                src={src} alt={caption}
                
            />
        </figure>
      );
    case "divider":
      return <hr key={`divider-${id}`} />;
    case "quote":
      return <span
      key={`quote-${id}`}
      className="float-left md:text-2xl md:text-black md:font-semibold md:border-l border-orange-600 md:border-l-2 md:pr-4 md:py-2  md:w-1/2 md:mr-8 md:mb-6 md:pl-6">Carry
        {value.rich_text[0]?.plain_text}
      </span>;
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

export {
    makeArticles, makePosts, makeCategories, renderBlock, makeBooks
}
