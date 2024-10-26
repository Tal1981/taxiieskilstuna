import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import FlatpickrComp from "./FlatpickrComp";
import ReCAPTCHA from "react-google-recaptcha";
import "@/app/globals.css";

interface FormData {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    source?: string;
    destination?: string;
    date?: string | undefined;
    message?: string | undefined;
}

const FormBoka = ( {tabActive}:{tabActive:string} ) => {

    const [isLoading, setIsLoading] : [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);
    const [status, setStatus] : [string | undefined,  Dispatch<SetStateAction<string | undefined>>] = useState<string|undefined>("");
    const [captcha, setCaptcha] : [string | null | undefined,  Dispatch<SetStateAction<string | null| undefined>>] = useState<string | null| undefined>();

    const handleSubmit = async( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        setIsLoading(true);

        if(captcha) {

            const form = event.currentTarget;

            const email = form.elements.namedItem('email') as HTMLInputElement;
            const firstName = form.elements.namedItem('first_name') as HTMLInputElement;
            const lastName = form.elements.namedItem('last_name') as HTMLInputElement;
            const phone = form.elements.namedItem('phone') as HTMLInputElement;
            const source = form.elements.namedItem('source') as HTMLTextAreaElement;
            const destination = form.elements.namedItem('destination') as HTMLInputElement;
            const date = form.elements.namedItem('date') as HTMLTextAreaElement;
            const message = form.elements.namedItem('message') as HTMLTextAreaElement;

            const data : FormData =
            {
                email : String(email.value),
                firstName : String(firstName.value),
                lastName : String(lastName.value),
                source: String(source.value),
                destination: String(destination.value),
                phone : String(phone.value),
                date: String(date.value),
                message: String(message.value),
            };

            // Validation for all input fields.
            if( !date.value || !email.value || 
                !firstName.value || !lastName.value ||
                !source.value || !destination.value ||
                !phone.value ) 
            {
                setStatus("Vänligen fyll i alla fält");

            } else {

                try{
                    const response = await fetch('/api/contact',{
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

                    setStatus("Meddelandet har skickats");

                    console.log(responseData);

                    email.value = "";
                    firstName.value = "";
                    lastName.value = "";
                    source.value = "";
                    destination.value = "";
                    phone.value = "";
                    date.value = "";
                    message.value = "";
        
                } catch (error) {

                    setStatus("Could not send your message! try again.")
                    console.error('Error:', error); 
                }
            }

        } else {

            setStatus("Markera kryssrutan ( Jag är inte en robot )");

        }

        setIsLoading(false);

        setTimeout(()=> {
            setStatus("")
        }, 15000)
    }

    return(
        <form className={`max-w-md mx-auto mt-6 ${tabActive === "Boka" ? "block":"hidden"}`} onSubmit={handleSubmit} >

            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="email" id="email" className="block py-2.5 px-1 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer active:outline-none" placeholder=" " pattern="[^@\s]+@[^@\s]+\.[^@\s]+" required />
                <label htmlFor="email" className="tracking-wide peer-focus:font-medium absolute text-sm leading-3 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="first_name" id="first_name" className="block py-2.5 px-1 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer active:outline-none" placeholder=" " required />
                    <label htmlFor="first_name" className="tracking-wide peer-focus:font-medium absolute text-sm leading-3 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="last_name" id="last_name" className="block py-2.5 px-1 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer active:outline-none" placeholder=" " required />
                    <label htmlFor="last_name" className="tracking-wide peer-focus:font-medium absolute text-sm leading-3 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="source" id="source" className="block py-2.5 px-1 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer active:outline-none" placeholder=" " required />
                    <label htmlFor="source" className="tracking-wide peer-focus:font-medium absolute text-sm leading-3 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Från</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="destination" id="destination" className="block py-2.5 px-1 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer active:outline-none" placeholder=" " required />
                    <label htmlFor="destination" className="tracking-wide peer-focus:font-medium absolute text-sm leading-3 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Till</label>
                </div>
            </div>

            <div className="grid md:grid-cols-1 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="tel" pattern="[0-9]{10}|[0-9]{13}|^\+[0-9]{11}$" name="phone" id="phone" className="block py-2.5 px-1 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer active:outline-none" placeholder=" " required />
                    <label htmlFor="phone" className="tracking-wide peer-focus:font-medium absolute text-sm leading-3 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (+46735889973)</label>
                </div>
            </div>

            <div className="grid md:grid-cols-1">
                <label htmlFor="datetime" className="text-sm mb-1 tracking-wide block">Bokningstid</label>
                <div className="relative z-0 w-full mb-5 group h-10   flex flex-col justify-between items-start overflow-hidden py-2.5 px-1 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer active:outline-none">
                    <FlatpickrComp/>
                </div>
            </div>

            <div className="grid  md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <label htmlFor="message" className="text-sm tracking-wide">Beskrivning ( valfri )</label>
                    <textarea  name="message" id="message" className="block py-2.5 px-1 w-full min-w-full min-h-28 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer active:outline-none"  placeholder=" Skriv här ..." />
                </div>
            </div>

            <div className="grid md:grid-cols-1 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <ReCAPTCHA sitekey="6LcZf2oqAAAAAAAML6BZCIWDU23u3I1vO4_sC1A0" onChange={setCaptcha} />
                    {/* {process.env.RECAPTCHA_SITE_KEY!} */}
                </div>
            </div>

            <p className="h-5 text-wrap pb-5 text-orange-500 font-bold underline underline-offset-8 text-center">{ status }</p>

            <button disabled={ isLoading } type="submit" className={`tracking-wide shadowButton flex justify-center items-center gap-1 text-white text-lg mt-6 bg-orange-500 hover:bg-orange-600 focus:outline-none font-medium rounded-lg w-full sm:w-52 px-5 py-2.5 text-center active:border-0 active:border-none active:translate-y-1 focus:border-none focus:border-0 ${ isLoading? "translate-y-1 border-0 border-none": "border-b-4 border-orange-400"}`} >
                <svg className="h-5 w-5 text-slate-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />  <line x1="16" y1="2" x2="16" y2="6" />  <line x1="8" y1="2" x2="8" y2="6" />  <line x1="3" y1="10" x2="21" y2="10" /></svg>
                <span>{ isLoading? "Loading..." : "Boka" }</span>
            </button>

        </form>
    )
}

export default FormBoka;