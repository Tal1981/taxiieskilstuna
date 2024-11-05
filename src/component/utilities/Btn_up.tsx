import UseBtnUp from "@/hooks/UseBtnUp";
import "@/app/globals.css";

function Btn_up() {

    const isVisibleBtnUp : boolean = UseBtnUp();

    const handleScrollToUp : () => void = () => {
        window.scrollTo(0, 0);
    }
    
    return (
            <button 
                disabled ={ !isVisibleBtnUp }
                id="btn_up" 
                onClick={ handleScrollToUp } 
                className={`flex justify-center items-center w-14 h-14 rounded-full bg-black text-orange-300 fixed top-3/4 right-2 z-50 transition-opacity duration-500 ${isVisibleBtnUp? 'opacity-70 hover:opacity-80':'opacity-0'}`}
                >

                <svg className="h-12 w-12 text-slate-100"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="8" y2="12" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="16" y1="12" x2="12" y2="8" /></svg>
            
            </button> 

    )
}

export default Btn_up;