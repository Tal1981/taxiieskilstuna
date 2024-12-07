'use client'

import { Dispatch, SetStateAction, useState } from "react";
import Form from "../form/Form";

function Kontakt() {
    const [tabActive, setTabActive] : [string, Dispatch<SetStateAction<string>>] = useState<string>("Boka");

    return (
    <section id="" className="flex flex-col justify-center items-center h-fit pb-20 px-8 mt-0 pt-0"> 

        <p className="text-center text-xl tracking-widest">Boka & beställ taxi på telefon +46-762259996 eller här online</p>
        <p className=" text-center text-base tracking-widest mt-4">
            <a href="mailto:taxiieskilstuna@gmail.com?subject=Booking en taxi&body=Hej!">
                <mark className="relative py-1 px-3 rounded-full">taxiieskilstuna@gmail.com</mark>
            </a>
        </p>

        <div className="w-full mt-20">
            <div>
                <ul className="flex text-xl font-bold text-center  border-b border-gray-200 max-w-md mx-auto mb-6">
                    <li className="me-2" onClick={() => setTabActive("Boka")}>
                        <span  aria-current="page" className={`inline-block p-4 rounded-t-lg cursor-pointer ${tabActive === "Boka" ? "bg-orange-500 text-white":"hover:text-gray-600 hover:bg-gray-50"}`}>Boka taxi nu</span>
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