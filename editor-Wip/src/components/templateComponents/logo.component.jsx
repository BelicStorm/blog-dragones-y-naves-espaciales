import React from "react"

const Logo = ({LogoImg, LogoText}) => {
    console.log({LogoImg, LogoText});
    const {value:logoTextValue} = LogoText
    const {value:logoImgtValue} = LogoImg
    return (
        <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
            {
                logoImgtValue ? <img src={logoImgtValue} alt={LogoText} class="w-[42px] h-auto" /> : ""
            }
            {logoTextValue} 
        </a>
    );
}

export default Logo;