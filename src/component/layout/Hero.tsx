import Image from 'next/image';
import Typing from "@/static/typing";
import Img from '@/../public/eskilstuna_image.png';
import "@/app/globals.css";

function Hero({darkMode}:{darkMode:boolean}) {

    const filter : string = darkMode ? "invert(1)":"";
    const transition : string = darkMode ? "/transition/gray-1.svg":"/transition/yellow-1.svg"

    return (
        <section className="w-full" >
            <div id="hero" className="min-h-fit px-8 sm:px-12 md:px-20 pt-[10rem] pb-7 bg-gold relative flex  flex-col  sm:flex-row justify-center sm:justify-between items-center gap-2">
                <div className="w-full md:w-2/5 flex flex-col items-center z-20 pointer-events-none mt-7 sm:-mt-2 gap-4">
                    <Typing/>
                    <button className="relative bg-black text-white font-bold w-fit py-2 px-5 rounded hover:bg-darkColor transition duration-300 pointer-events-auto border-b-4 border-orange-500">
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-gold">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-50 opacity-70"></span>
                        </span>
                        <a href='#KONTAKT'>
                            &nbsp;Boka En Taxi Nu
                        </a>
                    </button>
                </div>
                <div className='relative w-full md:w-2/5 mt-8 sm:mt-1 z-20'>
                    <Image
                        src={Img}
                        height={250}
                        alt="Eskilstuna photo"
                        className="w-full z-35"
                        sizes="max-width: 100%" 
                    />
                </div>
                <div className="absolute inset-0 bg-cover bg-center opacity-10 w-full max-w-full"  style={{ backgroundImage: "url('../../transition/bkg_hero.jpg')", filter:filter }}></div>
                <div className="absolute inset-0 bg-cover bg-center opacity-10 map w-full max-w-full"  style={{ backgroundImage: "url('../karta.png')", filter:filter }}></div>
            </div>
            <Image id="PRISER" className="w-full max-w-full h-auto mb-0 lg:-mb-24 md:-mb-20 sm:-mb-9" src={ transition } alt="transition" height={250} width={400}/>
        </section>
    )

}

export default Hero;