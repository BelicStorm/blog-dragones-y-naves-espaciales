import Link from "next/link"
import {RSSLinks} from "../socialLinks.components"

const HeroSection = () =>{
    return <div style={{display:"flex"}}className="mt-20 sm:mt-0 flex-col items-center text-center brutalist bg-white lg:block ">
               <img src="/Logo.svg" className="w-10 h-10" />
              <h2 className="font-light text-xl my-5"><Link href="/" className="text-hover">Dragones y Naves Espaciales</Link></h2>                
              <RSSLinks></RSSLinks>   
            </div>
}

export default HeroSection