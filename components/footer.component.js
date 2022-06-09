import {RSSLinks} from "./socialLinks.components";

export default function Footer({ logoText }) {
    return (
       <footer className="p-10">
            <div className="p-10 bg-footer brutalist bg-white">
                
                <RSSLinks></RSSLinks>
                <div className="py-2"></div>
                <div className="text-center text-black">
                    El espacio exterior está lleno de dragones.
                </div>
                
                <div className="py-2"></div>
                <div className="text-center">
                    <span className="text-gray-500">Created by</span> <span>Cristian Pardo</span>
                </div>
            </div>
        </footer>
    );
}