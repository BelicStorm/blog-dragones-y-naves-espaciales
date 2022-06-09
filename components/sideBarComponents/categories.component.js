import { makeCategories } from "../../utils"

const CategoriesSection = ({tags}) =>{

    return <div className="mt-10 brutalist bg-white hidden lg:block">
                <h2 className="font-light text-xl mb-5 text-gray-900 text-center">Etiquetas</h2>
                <div className="mt-8 flex flex-wrap gap-2">
                    {makeCategories("categorySection",tags)}
                </div>
            </div>
}
export default CategoriesSection