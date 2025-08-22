export const Contact = () => {

    // well better to use getform.io lol forget about emailjs, is not really safe :(

    return (
        <div className='w-full sm:w-2/3 self-justify-center mx-auto py-10 flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold mt-10 col-span-12 mb-12'>Contact</h1>
            <form className='w-6/7 lg:w-1/2' action="https://getform.io/f/ajjrmwka" method="POST">
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
                       { 'Send' }
                    </button>
                </div>
            </form>
        </div>
    )
}
