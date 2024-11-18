import Image from 'next/image';
import UseScroll from "@/hooks/UseScroll";
import MenuItem from "@/navigation/MenuItem";
import "@/app/globals.css";
import Img from "@/../public/logo.png"; 

function Navbar( {darkMode,toggleDarkMode }:{darkMode:boolean, toggleDarkMode: () => void} ) {

    const isTop : boolean = UseScroll();

    return (
        <section id="navbar" className={`fixed -mt-[8.1rem] top-[129px] left-0 z-40 p-2 ${isTop? 'opacity-100':'opacity-0 hover:opacity-100 transition-opacity duration-500'} flex flex-col flex-nowrap justify-around items-start h-fit w-full max-w-full text-white ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-transparent to-darkColor text-shadow'} `}>
            <div className={`flex justify-between items-center h-[60px] w-full px-4`}>
                <Image
                    src={Img}
                    height={72}
                    alt="TaxiIEskilstuna"
                    style={{ filter: 'drop-shadow(0px 0px 2px orange)' }}
                    sizes="max-width: 100%"
                    priority={true}
                />
                <button 
                    onClick={ toggleDarkMode } 
                    className={`h-fit w-fit rounded-full text-white border-hidden border-0 outline-none outline-0`}
                > {darkMode ?
                  <svg className="h-8 w-8 text-slate-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="5" />  <line x1="12" y1="1" x2="12" y2="3" />  <line x1="12" y1="21" x2="12" y2="23" />  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />  <line x1="1" y1="12" x2="3" y2="12" />  <line x1="21" y1="12" x2="23" y2="12" />  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                 :
                  <svg className="h-8 w-8 text-slate-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                  }
                </button>
            </div>
            <div className={`flex justify-end items-center gap-8 h-auto w-full font-thin pt-1 px-8`}>
                <MenuItem title={"PRIS"} />
                <MenuItem title={"SHOWCASE"} />
                <MenuItem title={"KONTAKT"} />
            </div>
        </section>
    )
}

export default Navbar;