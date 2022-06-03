import Head from "next/head";
import Link from "next/link";

export default function Header({ pageTitle, logoText, menu }) {
    return (
      <>
        <Head>
          <title>{pageTitle}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="text-gray-900">
        <div className="border-b py-2">
            <section className="max-w-screen-xl mx-auto p-3 sm:p-5 flex justify-center items-center" >
                <div className="flex justify-center items-center gap-8">
                    <img src="/Logo.svg" className="w-10 h-10" />
                    <a href="#" className="text-hover">Dragones y Naves Espaciales</a>
                </div>
            </section>
        </div>
        <nav className="text-sm px-4">
            <ul className="max-w-2xl mx-auto hidden sm:flex justify-between mt-4 uppercase">
            <li><a href="#" className="text-hover hover:underline decoration-pink-500">Todos los articulos</a></li>
            <li><a href="#" className="text-hover hover:underline decoration-pink-500">Categorias</a></li>
            <li><a href="#" className="text-hover hover:underline decoration-pink-500">Sobre Nosotros</a></li>
            </ul>
        </nav>
        </header>
        
      </>
    );
 }        
