'use client'

import { useState, useEffect, Dispatch, SetStateAction } from "react";

const useParallex = () : boolean => {
    const [parallex, setParallex] : [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);
    const [iteration, setIteration] : [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(true);

    console.log("parallex = " + parallex)

    useEffect(() => {
            const handleParallex : () => void = () => {
                if(iteration) {
                    setParallex(window.scrollY >= 700);
                    console.log("window.scrollY >= 700 /  parallex = " + parallex)
                }
                setIteration(false);
            }
    
            window.addEventListener("scroll", handleParallex);
    
            return () => {
                window.removeEventListener("scroll", handleParallex);
            }
    },[]);

    return parallex;
}

export default useParallex;