import Card from "../utilities/Card";
import "@/app/globals.css";

function Priser({darkMode}:{darkMode:boolean}) {

    return (
        <section className="flex flex-col items-center justify-center px-4">
            <div className="text-3xl mb-8 flex justify-center font-medium text-center border-b-4 border-orange-400">
                <h1 className="px-4 pb-2 bg-darkColor tracking-widest text-white">
                    Prislista
                </h1>
            </div>
            <div className="text-3xl mb-8 flex justify-center font-medium text-center">
                <span className="animateWavingHand">👋🏻</span>
                <h1 className="">
                    Hej, Vi kör dig hem tryggt och säkert
                </h1>
            </div>
            <div className="flex flex-wrap justify-center items-center flex-row-reverse h-fit p-4 gap-4">
                <Card destination="Arlanda flygplats" prise="1899" old_prise="2300" delay="300" darkMode={darkMode} />
                <Card destination="Skavsta flygplats" prise="1399" old_prise="1900" delay="900" darkMode={darkMode} />
                <Card destination="Västerås flygplats" prise="999" old_prise="1400" delay="1500" darkMode={darkMode} />
                <Card destination="Stockholm C" prise="1799" old_prise="2300" delay="2100" darkMode={darkMode} />
            </div>
        </section>
    )
}

export default Priser;