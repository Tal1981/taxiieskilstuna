import "@/app/globals.css";
import useParallex from "@/hooks/useParallex";

const Card = (children: { destination: string, prise: string, old_prise: string, delay: string, darkMode: boolean }) :JSX.Element => {

    const parallex : boolean = useParallex();

    return (
        <div className={`w-full max-w-sm p-3 border-2 border-orange-300 rounded-lg shadow sm:p-8 transition duration-[2000ms] ease-in-out ${children.darkMode? 'bg-[darkColor]':'white'} ${parallex? 'translate-x-0 opacity-100':'translate-x-[-400px] opacity-0'}`} style={{transitionDelay:`${children.delay}ms`}} >
            <h5 className="mb-4 text-xl font-medium text-nowrap m-0 p-0">Eskilstuna ⇔ {children.destination}</h5>
            <div className="flex items-baseline">
                <span className="prise text-5xl font-extrabold tracking-tight">{children.prise}</span>
                <span className="text-xl font-normal ms-1">SEK</span>
            </div>
            <ul role="list" className="space-y-5 my-7">
                <li className="flex items-center">
                    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span className="text-base font-normal leading-tight ms-3">Ett lågt pris</span>
                </li>
                <li className="flex">
                    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span className="text-base font-normal leading-tight ms-3">En bekväm resa</span>
                </li>
                <li className="flex">
                    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span className="text-base font-normal leading-tight ms-3">En punktlig och säker resa.</span>
                </li>
                <li className="flex">
                    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span className="text-base font-normal leading-tight ms-3">1-4 personer.</span>
                </li>
                <li className="flex">
                    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span className="text-base font-normal leading-tight ms-3">Pris före rabatt {children.old_prise}sek</span>
                </li>
            </ul>
        </div>
    )

}

export default Card;