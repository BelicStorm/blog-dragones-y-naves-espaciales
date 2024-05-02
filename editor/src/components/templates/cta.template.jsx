import React from "react";
import { FieldContext } from "../form/context";
import { getComponentHtml } from "../../utils/renderComponentsInHtml";

export default function CTA() {
    const context = React.useContext(FieldContext);

    function createMarkup() {
        return {
            __html: context.form.text.value
        };
    }
    const Template = (
        <div class={`flex flex-col overflow-hidden rounded-lg  sm:flex-row md:h-80`} style={{ backgroundColor: context.form.bg.value }}>
            <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
                <h2 class="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">{context.form.title.value}</h2>
                <p class="mb-8 max-w-md text-gray-400" dangerouslySetInnerHTML={createMarkup()} />
                <div class="mt-auto">
                    <a href="#" class="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none 
                                        ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">{context.form.cta.value}</a>
                </div>
            </div>
            <div class="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
                <img src={context.form.img.value} loading="lazy" alt="Photo by Dom Hill" class="h-full w-full object-cover object-center" />
            </div>

        </div>
    )

    const getHtml = () => {
        getComponentHtml("CTA", Template)
    }

    const createMD = ()=>{
        ///// Call to  the CTA md generator
    }
    return (
        
        <>

            <div className="controle">
                <button className="secondary" onClick={() => getHtml()}>Get Component</button>
                <button className="primary" onClick={createMD}>Save mocks</button>
            </div>
            <div className="preview">
                {Template}
            </div>

        </>
    )
}
