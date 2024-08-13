import React from "react";
import { FieldContext } from "../form/context";
import { Button, Logo, Menu } from "../templateComponents";
import { getComponentHtml } from "../../utils/renderComponentsInHtml";

const AuthSection = ({ items }) => {
    const SelectedItems = items["AuthType"].value.split("-")
    const LoginButtonData = {
        type: items["AuthType-LoginButton"].value,
    }
    const SignUpButtonData = {
        type: items["AuthType-SignUp"].value
    }

    console.log(items["AuthType-LoginButton"]);

    const ProfileIcons = <div class="hidden xl:flex items-center space-x-5">
        <a class="hover:text-gray-200" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        </a>
        <a class="flex items-center hover:text-gray-200" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="flex absolute -mt-5 ml-4">
                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
            </span>
        </a>
        <a class="flex items-center hover:text-gray-200" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </a>

    </div>

    const components = {
        LoginButton:<Button type={LoginButtonData.type} text={"Login"}/>,
        SignUp:<Button type={SignUpButtonData.type} text={"SignUp"}/>,
        Icons:<></>,
        Empty:<></>
    }

    return <div class="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
        {SelectedItems.map((element)=>{
            return components[element]
        })}
    </div>

}
export default function Header() {
    const context = React.useContext(FieldContext);
    const selectedMenuItems = context.form.CenterSide.items.Menu.items.MenuItems.value.split("-").map((element) => {
        console.log([element, context.form.CenterSide.items.Menu.items["MenuItems-" + element].value])
        return [element, context.form.CenterSide.items.Menu.items["MenuItems-" + element].value]
    })

    console.log(context.form.RigthSide);

    const Template = (
        <div class="bg-white w-[100%]" >
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                <header class="flex items-center justify-between py-4">

                    {
                        context.form.LeftSide.items.Logo.items.LogoText.enabled ||
                            context.form.LeftSide.items.Logo.items.LogoImg.enabled
                            ? <Logo
                                LogoImg={context.form.LeftSide.items.Logo.items.LogoImg}
                                LogoText={context.form.LeftSide.items.Logo.items.LogoText}
                            ></Logo>
                            : ""
                    }
                    <nav class="hidden gap-12 lg:flex">
                        {context.form.CenterSide.items.Menu.items.MenuItems.enabled
                            ? <Menu menu={selectedMenuItems}></Menu>
                            : ""
                        }
                    </nav>

                    {
                        context.form.RigthSide.items.AuthSection.items.AuthType.enabled
                            ? <AuthSection items={context.form.RigthSide.items.AuthSection.items} />
                            : ""
                    }


                    <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>

                        Menu
                    </button>

                </header>
            </div>
        </div>
    )

    const getHtml = () => {
        getComponentHtml("Blog", Template)
    }

    return (

        <>

            <div className="controle">
                <button className="secondary" onClick={() => getHtml()}>Get Component</button>
            </div>
            <div className="preview">
                {Template}
            </div>

        </>
    )
}
