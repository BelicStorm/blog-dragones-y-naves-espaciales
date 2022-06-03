import {SearchSection,HeroSection,CategoriesSection,RecentPostsSection} from "./sideBarComponents/"

const SideBar = ()=>{
    return <div className="w-full lg:w-2/6 sm:p-8">
    <div className="ml-2 lg mr-2 max-w-screen-lg:w-32" style={{
          position: "sticky",
          top: "1em"
    }}>
        <HeroSection/>
        <CategoriesSection/>
        <SearchSection/>
        <RecentPostsSection/>
    </div>
</div>
}
export default SideBar