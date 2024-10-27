import Image from 'next/image';

function Showcase({darkMode}:{darkMode:boolean}) {
    
    // const filter = darkMode ? "invert(1)":"";
    const transition_2 = darkMode ? "/transition/gray-2.svg":"/transition/yellow-2.svg"
    const transition_3 = darkMode ? "/transition/gray-3.svg":"/transition/yellow-3.svg"

    return (
        <section id="" className="w-full">
            <Image className="w-full max-w-full h-auto -mb-9" src={transition_2} alt="transition" width={400} height={250} />
            <Image
                id="SHOWCASE"
                src={'/logo_animated.gif'}
                height={250}
                width={400}
                alt="taxi i eskilstuna animated photo"
                className="relative w-full"
                style={{border:' 4px solid #7c7246'}}
                sizes="max-width: 100%"
                unoptimized={true}          
            />
            <Image id="KONTAKT" className="w-full max-w-full h-auto" src={transition_3} alt="transition" width={400} height={250} />
        </section>
    )
}

export default Showcase;