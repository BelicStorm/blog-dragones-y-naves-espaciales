import { makePosts } from "../../utils";

const RecentPostsSection = ({posts}) =>{
    
    return <div className="mt-10 brutalist bg-white hidden lg:block">
                <h2 className="font-light text-xl mb-5 text-gray-900 text-center">Articulos recientes</h2>
                <ul>
                    {makePosts(posts)}
                </ul>
            </div>
}

export default RecentPostsSection