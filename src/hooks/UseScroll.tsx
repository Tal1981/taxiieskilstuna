'use client'

import { useState, useEffect, Dispatch, SetStateAction } from "react";

const UseScroll = () => {
    const [isTop, setIsTop] : [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(true)

    useEffect(() => {
        const handleScroll : () => void = () => {
            setIsTop(window.scrollY <= 200);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[]);

    return isTop;
}

export default UseScroll;