'use client'

import { useState, useEffect, Dispatch, SetStateAction } from "react";

const UseBtnUp = () => {
    const [isVisibleBtnUp, setIsVisibleBtnUp] : [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false)

    useEffect(() => {
        const handleVisibleBtnUp : () => void = () => {
            setIsVisibleBtnUp(window.scrollY >= 230);
        }

        window.addEventListener("scroll", handleVisibleBtnUp);

        return () => {
            window.removeEventListener("scroll", handleVisibleBtnUp);
        }
    },[]);

    return isVisibleBtnUp;
}

export default UseBtnUp;