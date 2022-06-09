import {SearchSection,HeroSection,CategoriesSection,RecentPostsSection, SubscribeSection} from "./sideBarComponents/"

const SideBar = ({recentPosts, tags})=>{
    return <div className="w-full lg:w-2/6 sm:p-8">
    <div className="ml-2 lg mr-2 max-w-screen-lg:w-32" style={{
          position: "sticky",
          top: "1em"
    }}>
        <HeroSection/>
        <SubscribeSection/>
        <CategoriesSection tags={tags}/>
        <SearchSection/>
        <RecentPostsSection posts={recentPosts}/>
    </div>
</div>
}
export default SideBar