import Link from "next/link"
import { makeCategories } from "../utils"

const SmallCard = () =>{
    return <div className="mx-auto  w-full shadow-lg brutalist card overflow-hidden">
                <div className="px-6 py-4 flex items-center">
                    <img src="http://source.unsplash.com/100x100" className="block mx-auto mb-0 rounded-lg mr-4"/>
                    <div className="text-center text-left sm:flex-grow">
                        <div className="mb-4">
                        <p className="text-xl leading-tight">姓名</p>
                        <p className="text-sm leading-tight text-gray-dark">职位职称</p>
                        </div>
                        <div>
                            <span className="rounded-lg bg-blue-400 text-white text-sm px-4 py-1 leading-normal shadow-md hover:bg-blue-500 ">Leer Más</span>
                        </div>
                    </div>
                </div>
            </div>
}

const BlogCard = ({content}) =>{
    const {id,date, slug, status, summary, tags, title } = content
    return <div className="max-w-sm  overflow-hidden shadow-lg mx-auto my-8 brutalist card">
                <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                    <div className="font-medium text-xl mb-2">{title}</div>
                    <div className="flex">
                        {makeCategories(title,tags)}
                    </div>
                    <p className="text-gray-600 text-base">
                       {summary}
                    </p>
                </div>
                
                <div className="text-center" style={{padding:"8px"}}>
                    <Link 
                        href={`./article/${slug}`}
                        ><button className="rounded-lg bg-blue-400 text-white px-4 py-3 font-regular text-lg leading-tight shadow-md hover:bg-blue-500 ">
                            Leer Más
                        </button>
                    </Link>
                    
                </div>
            </div>
}

export {
    SmallCard, BlogCard
}