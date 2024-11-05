import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "@/app/globals.css";

interface FormData {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message?: string | undefined;
}


const FormKontakta = ({tabActive}:{tabActive:string}) => {
    const [isLoading, setIsLoading] : [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);
    const [status, setStatus] : [string,  Dispatch<SetStateAction<string>>] = useState<string>("");
    const [captcha, setCaptcha] :  [string | null | undefined,  Dispatch<SetStateAction<string | null | undefined>>] = useState<string | null | undefined>();

    const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        if(captcha) {

            const form = event.currentTarget;

            const email = form.elements.namedItem('email') as HTMLInputElement;
            const firstName = form.elements.namedItem('first_name') as HTMLInputElement;
            const lastName = form.elements.namedItem('last_name') as HTMLInputElement;
            const phone = form.elements.namedItem('phone') as HTMLInputElement;
            const message = form.elements.namedItem('message') as HTMLTextAreaElement;


            const data : FormData =
            {
                email : String(email.value),
                firstName : String(firstName.value),
                lastName : String(lastName.value),
                phone : String(phone.value),
                message: String(message.value),
            };

            // Validation for all input fields.
            if( !message.value || !email.value || 
                !firstName.value || !lastName.value ||
                !phone.value ) 
            {
                setStatus("Vänligen fyll i alla fält");

            } else {

                try{
                    const response = await fetch('/api/message',{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body:  JSON.stringify(data),
                    })
        
                    if (!response.ok) {

                        setStatus("Could not send your message! try again.")
                        throw new Error('Network response was not ok');

                    }
        
                    const responseData = await response.json();

                    setStatus("Meddelandet har skickats")

                    console.log(responseData);

                    email.value = "";
                    firstName.value = "";
                    lastName.value = "";
                    phone.value = "";
                    message.value = "";
        
                } catch (error) {

                    setStatus("Could not send your message! try again.")
                    console.error('Error:', error);

                }
            }

        } else {

            setStatus("Markera kryssrutan (Jag är inte en robot)");

        }

        setTimeout(()=> {
            setIsLoading(false);
            setStatus("")
        }, 15000)
    }

    return(
        <form className={`max-w-md mx-auto mt-6 ${tabActive === "Kontakta" ? "block":"hidden"}`} onSubmit={handleSubmit} >
                
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="email" id="email" className="block py-2.5 px-1 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer active:outline-none" placeholder=" " pattern="[^@\s]+@[^@\s]+\.[^@\s]+" required />
                    <label htmlFor="email" className="tracking-wider peer-focus:font-medium  absolute text-sm leading-3 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="first_name" id="first_name" className="block py-2.5 px-1 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer active:outline-none" placeholder=" " required />
                        <label htmlFor="first_name" className="tracking-wider peer-focus:font-medium  absolute text-sm leading-3 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="last_name" id="last_name" className="block py-2.5 px-1 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer active:outline-none" placeholder=" " required />
                        <label htmlFor="last_name" className="tracking-wider peer-focus:font-medium  absolute text-sm leading-3 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
                </div>

                <div className="grid md:grid-cols-1 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="tel" pattern="[0-9]{10}|[0-9]{13}|^\+[0-9]{11}$" name="phone" id="phone" className="block py-2.5 px-1 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer active:outline-none" placeholder=" " required />
                        <label htmlFor="phone" className="tracking-wider peer-focus:font-medium  absolute text-sm leading-3 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (+46735889973)</label>
                    </div>
                </div>

                <div className="grid  md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <label htmlFor="message" className="text-sm tracking-wider">Skriv ditt meddelande</label>
                        <textarea  name="message" id="message" className="block py-2.5 px-1 w-full min-w-full min-h-28 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer active:outline-none"  placeholder=" Skriv här ..." required />
                    </div>
                </div>

                <div className="grid md:grid-cols-1 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <ReCAPTCHA sitekey="6LcZf2oqAAAAAAAML6BZCIWDU23u3I1vO4_sC1A0" onChange={setCaptcha} />
                        {/* {process.env.RECAPTCHA_SITE_KEY!} */}
                    </div>
                </div>

                <p className="h-5 text-wrap pb-5 text-orange-400 font-medium underline underline-offset-8 text-center">{ status }</p>

                <button disabled={ isLoading } type="submit" className={`tracking-wider shadowButton flex justify-center items-center gap-1 text-white text-lg mt-6 bg-orange-500 hover:bg-orange-600 focus:outline-none font-medium rounded-lg w-full sm:w-52 px-5 py-2.5 text-center active:border-0 active:border-none active:translate-y-1 focus:border-none focus:border-0 ${ isLoading? "translate-y-1 border-0 border-none": "border-b-4 border-orange-400"}`} >
                    <svg className="h-5 w-5 text-slate-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <line x1="22" y1="2" x2="11" y2="13" />  <polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                    <span>{ isLoading? "Loading..." : "Skicka" }</span>
                </button>
        </form> 
    )
};

export default FormKontakta;