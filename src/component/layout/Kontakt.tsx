'use client'

import { Dispatch, SetStateAction, useState } from "react";
import Form from "../form/Form";

function Kontakt() {
    const [tabActive, setTabActive] : [string, Dispatch<SetStateAction<string>>] = useState<string>("Boka");

    return (
    <section id="" className="flex flex-col justify-center items-center h-fit pb-20 px-8 mt-0 pt-0"> 
        <a href="tel:+46731966669" className="z-50 mb-12">
            <button className="relative bg-black text-white text-lg font-bold w-fit py-1 px-4 rounded hover:bg-darkColor transition duration-300 pointer-events-auto border-b-4 border-orange-500 tracking-widest">
                <svg className="absolute -top-3 -left-3 h-6 w-6 bg-white p-1 rounded-full text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                +46 73 196 66 69
            </button>
        </a>

        <p className="text-center text-xl tracking-widest">Boka & beställ taxi på telefon +46731966669 eller här online</p>

        <div className="w-full mt-11">
            <div>
                <ul className="flex text-xl font-bold text-center text-gray-500 border-b border-gray-200 max-w-md mx-auto">
                    <li className="me-2" onClick={() => setTabActive("Boka")}>
                        <span  aria-current="page" className={`inline-block p-4 rounded-t-lg cursor-pointer ${tabActive === "Boka" ? "bg-orange-600 text-white":"hover:text-gray-600 hover:bg-gray-50"}`}>Boka taxi nu</span>
                    </li>
                    <li className="me-2" onClick={() => setTabActive("Kontakta")}>
                        <span className={`inline-block p-4 rounded-t-lg cursor-pointer ${tabActive === "Kontakta" ? "bg-orange-500 text-white":"hover:text-gray-600 hover:bg-gray-50"}`}>Kontakta oss</span>
                    </li>
                </ul>
            </div>

           <Form tabActive={tabActive}/>
            
        </div>

    </section>
    )
}

export default Kontakt;