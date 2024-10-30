'use client'

import { useState, useEffect, Dispatch, SetStateAction } from "react";

const useParallex = () : boolean => {
    const [parallex, setParallex] : [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);

    useEffect(() => {
            const handleParallex : () => void = () => {
                setParallex(window.scrollY >= 670);
            }
    
            window.addEventListener("scroll", handleParallex);
    
            return () => {
                window.removeEventListener("scroll", handleParallex);
            }
    },[]);

    return parallex;
}

export default useParallex;