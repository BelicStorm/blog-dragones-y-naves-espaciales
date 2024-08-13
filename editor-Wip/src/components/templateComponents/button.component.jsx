import React from "react"
const Button = ({type, text}) => {
    console.log({type, text});
    const ButtonComponent = {
        Primary:<a href="#" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none 
        ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">{text}</a>,
        Ghost:<a href="#" class="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none 
        ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-base">{text}</a>
    }

    return ( 
        ButtonComponent[type]
     );
}
 
export default Button;