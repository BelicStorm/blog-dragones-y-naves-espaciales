import React from "react"

const Menu = ({ menu }) => {
    
    return (
        <>
            {menu.map((menuItem) => {
                return menuItem[0] !== "Search"
                    ? <a href="#" class={` flex justify-center items-center text-lg font-semibold text-gray-600 transition duration-100
                                         hover:text-indigo-500 active:text-indigo-500`}>
                        {menuItem[1]}
                    </a>
                    :  <input name="search" placeholder="Buscar" class="w-full rounded border bg-gray-50 px-3 py-2 
                        text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                        
            })}
        </>
    );
}

export default Menu;