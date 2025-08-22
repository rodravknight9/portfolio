import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export const Contact = () => {

    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(form)
        console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID)
        const options = {
            publicKey: import.meta.env.VITE_EMAILJS_USER_ID
        }
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID, 
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
            form.current, options)
            .then(
                (res) => setIsLoading(false),
                (err) => console.log(err)
            );
    }


    return (
        <div className='w-full sm:w-2/3 self-justify-center mx-auto py-10 flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold mt-10 col-span-12 mb-12'>Contact</h1>
            <form action="POST" className='w-6/7 lg:w-1/2' ref={form} onSubmit={sendEmail}>
                <div className='mx-3 my-4'>
                    <span className='text-white '>Full Name</span>
                    <input 
                        type="text" 
                        name='full_name'
                        id='full_name'
                        className='border-2 border-gray-500 px-3 py-2 w-full focus:border-indigo-300 focus:outline-none'
                        />
                </div>
                 <div className='mx-3 my-4'>
                    <span className='text-white '>Subject</span>
                    <input 
                        type="text" 
                        name='subject'
                        id='subject'
                        className='border-2 border-gray-500 px-3 py-2 w-full focus:border-indigo-300 focus:outline-none'
                        />
                </div>
                <div className='mx-3 my-4'>
                    <span>Email</span>
                    <input 
                        type="text" 
                        name='email'
                        id='email'
                        className='border-2 border-gray-500 text-white px-3 py-2 w-full focus:border-indigo-300 focus:outline-none'
                        />
                </div>
                <div className='mx-3 my-4'>
                    <span>Message</span>
                    <textarea 
                        name="message" 
                        id="message"
                        className='border-2 border-gray-500 text-white px-3 py-2 w-full h-40 focus:border-indigo-300 focus:outline-none'
                    >
                    </textarea>
                </div>
                <div className='mx-3 my-4'>
                    <button 
                        type='submit' 
                        className='text-white  p-3 py-2 border-2 border-gray-500 transition hover:cursor-pointer hover:border-indigo-300'
                    >
                       { isLoading ? 'Sending...' : 'Send' }
                    </button>
                </div>
            </form>
        </div>
    )
}
