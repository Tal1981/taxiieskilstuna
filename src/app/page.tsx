'use client'

import UseDarkMode from "@/hooks/useDarkMode";
import Footer from "@/component/layout/Footer";
import Hero from "@/component/layout/Hero";
import Navbar from "@/component/layout/Navbar";
import Priser from "@/component/layout/Priser";
import Kontakt from "@/component/layout/Kontakt";
import Btn_up from '@/component/utilities/Btn_up';
import "./globals.css";
import Showcase from "@/component/layout/Showcase";

export default function Home() {

  const  { darkMode, toggleDarkMode } = UseDarkMode();
  
  return(
    <>
      <Btn_up/>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero darkMode={darkMode}/>
      <Priser/>
      <Showcase darkMode={darkMode}/>
      <Kontakt/>
      <Footer darkMode={darkMode}/>
    </>
  )
  
}
