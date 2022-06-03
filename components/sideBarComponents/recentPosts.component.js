import { makePosts } from "../../utils";

const RecentPostsSection = () =>{
    
    return <div className="mt-10 brutalist bg-white hidden lg:block">
                <h2 className="font-light text-xl mb-5 text-gray-900 text-center">Recent Posts</h2>
                <ul>
                    {makePosts(["","","",""])}
                </ul>
            </div>
}

export default RecentPostsSection