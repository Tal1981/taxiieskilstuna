import { TypeAnimation } from "react-type-animation";

const Typing = () => {
    
    return (
        <TypeAnimation
            sequence={[
                'Till & Från Eskilstuna',
                2000,
                'Lågt Pris',
                500,
                'Bra Service',
                500,
                'Bästa Taxibolaget',
                500,
                'Maximal Komfort',
                500,
                'Punktlig och Säker',
                500,
            ]}
            wrapper="span"
            speed={10}
            preRenderFirstString={true}
            repeat={Infinity}
            style={{marginLeft:'5px', background:'white', padding: '10px', textAlign:'left', color:'#2b3435', fontWeight:'bold', display: 'inline-block', width: 'fit-content'}}
            className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl opacity-90 text-nowrap"
        />
    )
}

export default Typing;