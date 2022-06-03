import { makeCategories } from "../../utils"

const CategoriesSection = () =>{

    return <div className="mt-10 brutalist bg-white hidden lg:block">
                <h2 className="font-light text-xl mb-5 text-gray-900 text-center">Categories</h2>
                <div className="flex flex-wrap">
                    {makeCategories("categorySection",[{name:"test1"},{name:"test2"},{name:"test4"},{name:"test3"}])}
                </div>
            </div>
}

export default CategoriesSection