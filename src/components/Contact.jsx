import React from 'react'

export const Contact = () => {
    return (
        <div className='w-2/3 self-justify-center mx-auto py-10 flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold mt-10 col-span-12 mb-12'>Contact</h1>
            <form action="" className='w-1/2'>
                <div className='mx-3 my-4'>
                    <span className='text-white '>Full Name</span>
                    <input 
                        type="text" 
                        className='border-2 border-gray-500 px-3 py-2 w-full focus:border-indigo-300 focus:outline-none'
                        />
                </div>
                <div className='mx-3 my-4'>
                    <span>Email</span>
                    <input 
                        type="text" 
                        className='border-2 border-gray-500 text-white px-3 py-2 w-full focus:border-indigo-300 focus:outline-none'
                        />
                </div>
                <div className='mx-3 my-4'>
                    <span>Message</span>
                    <textarea 
                        name="" 
                        id=""
                        className='border-2 border-gray-500 text-white px-3 py-2 w-full h-40 focus:border-indigo-300 focus:outline-none'
                    >
                    </textarea>
                </div>
                <div className='mx-3 my-4'>
                    <button 
                        type='submit' 
                        className='text-white  p-3 py-2 border-2 border-gray-500 transition hover:cursor-pointer hover:border-indigo-300'
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}
