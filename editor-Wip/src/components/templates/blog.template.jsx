import React from "react"
import { FieldContext } from "../form/context"
const BlogLayout = ({ children, upperImageHeader }) => {

    return (
        <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
            {
                upperImageHeader.enabled
                    ? <div class="bg-cover bg-center text-center overflow-hidden"
                        style={{
                            minHeight: "500px",
                            backgroundImage: `url('${upperImageHeader.value}')`
                        }}
                        title="Woman holding a mug">
                    </div>
                    : ""
            }

            <div class="max-w-3xl mx-auto">
                {children}
            </div>
        </div>
    )
}

const BlogTags = ({ tags, tagType }) => {
    const Type1 = ({ text }) => <a href="#"
        class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
        #{text}
    </a>
    const Type2 = ({ text }) => <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">{text}</button>
    const Type3 = ({ text }) => <a href="#" class="flex flex-row items-center hover:text-indigo-600"><span class="ml-1">{text}</span></a>
    const TagsType = {
        Type1, Type2, Type3
    }
    const Tag = TagsType[tagType]
    return tags.map((e) => {
        return <Tag text={e} />
    })
}

const BlogTitle = ({ BlogTitleType, downImageHeader }) => {
    const ImageHeader = () => downImageHeader.enabled
        ? <img class="sm:h-[34rem] mt-[8px] w-full object-contain" src={downImageHeader.value} alt="Featured Image" />
        : <></>
    const Type1 = () => (
        <div class="py-8">
            <h1 class="text-3xl font-bold mb-2">Blog post title</h1>
            <p class="text-gray-500 text-sm">Published on <time dateTime="2022-04-05">April 5, 2022</time></p>
            <ImageHeader />
        </div>
    )
    const Type2 = () => (
        <div class="bg-white relative top-0 -mt-32 p-5 sm:p-10 rounded-sm">
            <h1 href="#" class="text-gray-900 font-bold text-3xl mb-2">Revenge of the Never Trumpers</h1>
            <p class="text-gray-700 text-xs mt-2">Written By:
                <a href="#"
                    class="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                    Ahmad Sultani
                </a> In
                <a href="#"
                    class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                    Election
                </a>,
                <a href="#"
                    class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                    Politics
                </a>

            </p>
            <ImageHeader />
        </div>
    )
    const Type3 = () => (
        <div class="p-8">
            <a href="#" class="text-indigo-600 hover:text-gray-700 transition duration-500 ease-in-out text-sm">
                Election
            </a>
            <h1 href="#" class="text-gray-900 font-bold text-4xl">Portrait Photography In Early Days</h1>
            <div class="p-5 text-sm font-regular text-gray-900 flex">
                <span class="mr-3 flex flex-row items-center">
                    <svg class="text-indigo-600" fill="currentColor" height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g>
                        <g>
                            <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
		                   	c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path></g></g></svg>
                    <span class="ml-1">6 mins ago</span>
                </span>

                <a href="#" class="flex flex-row items-center hover:text-indigo-600  mr-3">
                    <svg class="text-indigo-600" fill="currentColor" height="16px" aria-hidden="true" role="img"
                        focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor"
                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
                        </path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                    <span class="ml-1">AliSher Azimi</span></a>


                <svg class="text-indigo-600" fill="currentColor" height="16px" aria-hidden="true" role="img"
                    focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                    <path fill=""
                        d="M15.4496399,8.42490555 L8.66109799,1.63636364 L1.63636364,1.63636364 L1.63636364,8.66081885 L8.42522727,15.44178 C8.57869221,15.5954158 8.78693789,15.6817418 9.00409091,15.6817418 C9.22124393,15.6817418 9.42948961,15.5954158 9.58327627,15.4414581 L15.4486339,9.57610048 C15.7651495,9.25692435 15.7649133,8.74206554 15.4496399,8.42490555 Z M16.6084423,10.7304545 L10.7406818,16.59822 C10.280287,17.0591273 9.65554997,17.3181054 9.00409091,17.3181054 C8.35263185,17.3181054 7.72789481,17.0591273 7.26815877,16.5988788 L0.239976954,9.57887876 C0.0863319284,9.4254126 0,9.21716044 0,9 L0,0.818181818 C0,0.366312477 0.366312477,0 0.818181818,0 L9,0 C9.21699531,0 9.42510306,0.0862010512 9.57854191,0.239639906 L16.6084423,7.26954545 C17.5601275,8.22691012 17.5601275,9.77308988 16.6084423,10.7304545 Z M5,6 C4.44771525,6 4,5.55228475 4,5 C4,4.44771525 4.44771525,4 5,4 C5.55228475,4 6,4.44771525 6,5 C6,5.55228475 5.55228475,6 5,6 Z">
                    </path>
                </svg>
                <BlogTags tags={["Marketing", "Branding", "Digital", "Identity"]} tagType={"Type3"} />
            </div>
            <ImageHeader />
        </div>
    )
    const Type4 = () => (
        <article>
            <header class="mx-auto max-w-screen-xl pt-28 text-center">
                <p class="text-gray-500">Published April 4, 2022</p>
                <h1 class="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">7 rules of effective marketing</h1>
                <p class="mt-6 text-lg text-gray-700">You're doing marketing the wrong way</p>
                <div class="mt-6 flex flex-wrap justify-center gap-2" aria-label="Tags">
                    <BlogTags tags={["Marketing", "Branding", "Digital", "Identity"]} tagType={"Type2"} />
                </div>
                <ImageHeader />
            </header>
        </article>
    )

    const Title = {
        Type1, Type2, Type3, Type4
    }
    return (
        Title[BlogTitleType]()
    );
}

const BodyType = () => {
    const Type1 = (
        <div class="bg-white relative top-0 -mt-32 p-5 sm:p-10">
            test
        </div>
    )


}

const PostCards1 = () => {
    return (
        <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <a href="#" class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                <img src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200" />
            </a>

            <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">April 2, 2022</span>

                <h2 class="text-xl font-bold text-gray-800">
                    <a href="#" class="active:text-rose-600 transition duration-100 hover:text-rose-500">The Pines and the Mountains</a>
                </h2>

                <p class="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>

                <div>
                    <a href="#" class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600">Read more</a>
                </div>
            </div>
        </article>
    )
}
const PostCards2 = () => {
    return <article class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
        <a href="#">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcnRuZXJzaGlwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="h-56 w-full object-cover" alt="" />
            <div class="flex-auto px-6 py-5">
                <span class="mb-2 flex items-center text-sm font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                    Branding
                </span>
                <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">How to perform NPS Surveys</h3>
                <p class="mb-4 text-base font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam tempore officiis. Lorem, ipsum dolor.</p>
                <span class="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">Read Now</span>
            </div>
        </a>
    </article>

}
{/* <div class="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-8 md:grid-cols-3"> */ }
const RecentPosts = ({amountOfCards = 4}) => {
    const testType = "type2"
    const cardTypes = {
        type1: PostCards1,
        type2: PostCards2
    }
    const makeCards = ()=>{
        const cards = []
        const Card = cardTypes[testType]
        for (let index = 0; index < amountOfCards; index++) {
            cards.push(<Card/>)            
        }
        return cards
    }
    return (
        <aside aria-label="Recent Posts" class="mx-auto mt-10 max-w-screen-xl py-20">
            <div class="mx-auto max-w-screen-xl px-4 md:px-8">

                <div class="mb-10 md:mb-16">
                    <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Most Recent Posts</h2>
                    <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>
                </div>

                <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
                    {makeCards()}
                </div>
            </div>
        </aside>
    )

}

const BlogFooter = () => {
    const TagsType1 = <a href="#"
        class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
        #Election
    </a>
    const TagType2 = <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Marketing</button>

    return (
        <>

        </>
    )
}

const Blog = () => {
    const context = React.useContext(FieldContext);
    console.log(context);
    const BlogType = context.form.Test.value
    const upperImage = context.form.UpperImage.items.ImageSelector.items.img
    const downImage = context.form.DownImage.items.ImageSelector.items.img
    return (
        <BlogLayout upperImageHeader={upperImage} >
            <BlogTitle BlogTitleType={BlogType} downImageHeader={downImage} />
            {context.form}
            <BlogFooter />
        </BlogLayout>
    );
}

export default Blog;