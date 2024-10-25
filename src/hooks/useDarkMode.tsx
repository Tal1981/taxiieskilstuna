import { Dispatch, SetStateAction, useEffect, useState } from "react";


const UseDarkMode = () => {
    const [darkMode, setDarkMode] : [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);

    useEffect(() => {
      const isDark : boolean = localStorage.getItem('dark-mode') === 'true';
       setDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
      }
      return () => {
        document.body.classList.remove('dark');
        document.documentElement.classList.remove('dark');
      };
    }, []);
  
    const toggleDarkMode : () => void = () => {
      setDarkMode(!darkMode);
      document.body.classList.toggle('dark');
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('dark-mode', `${!darkMode}`);
    };

    return {darkMode, toggleDarkMode};
}

export default UseDarkMode;