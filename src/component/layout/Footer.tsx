import Image from 'next/image';
import Img from "@/../public/logo.png";

function Footer({darkMode}:{darkMode:boolean}) {

    const filter = darkMode ? "invert(1)":"";

    return(
        <section className="w-full">
            <div id="footer" className="relative h-fit p-4 bg-gold flex justify-between items-center">
                <Image
                    src={Img}
                    height={48}
                    alt="TaxiIEskilstuna logo"
                    style={{ filter: 'grayscale(0.7)' }}
                    sizes="max-width: 100%"
                />
                <div className="w-fit bg-gray-950 px-2 py-1 text-sm rounded-md border-b-4 border-red-600 drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">
                    <code> 
                        <span className="text-cyan-300">Developed by...</span>
                        <span className="text-green-300"> taltek</span>  
                    </code>
                </div>
                <div className="absolute inset-0 bg-cover bg-center opacity-20"  style={{ backgroundImage: "url('../../transition/bkg_hero.jpg')", filter:filter }}></div>
            </div>
        </section> 
    )
}

export default Footer;