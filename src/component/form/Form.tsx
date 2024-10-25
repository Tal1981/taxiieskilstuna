'use client'

import FormBoka from "./FormBoka";
import FormKontakta from "./FormKontakta";



const Form = (children : {tabActive: string}) => {

        
    return (<div className="mb-28">

                <FormBoka tabActive={children.tabActive} />

                <FormKontakta tabActive={children.tabActive} />

        </div>)
}   

export default Form;