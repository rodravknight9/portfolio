import React from 'react'

export const Contact = () => {
    return (
        <div className='w-2/3 self-justify-center mx-auto py-10 flex flex-col items-center justify-center'>
            <form action="" className='w-1/2'>
                <div className='mx-3 my-2'>
                    <span className='text-white '>Full Name</span>
                    <input 
                        type="text" 
                        className='border-2 border-indigo-300 text-white px-3 py-2 w-full'
                        />
                </div>
                <div className='mx-3 my-2'>
                    <span>Email</span>
                    <input 
                        type="text" 
                        className='border-2 border-indigo-300 text-white px-3 py-2 w-full'
                        />
                </div>
                <div className='mx-3 my-2'>
                    <span>Message</span>
                    <textarea 
                        name="" 
                        id=""
                        className='border-2 border-indigo-300 text-white px-3 py-2 w-full h-40'
                    >

                    </textarea>
                </div>
                <div className='mx-3 my-2'>
                    <button 
                        type='submit' 
                        className='text-white  p-3 py-2 border-2 border-indigo-300 transition hover:cursor-pointer hover:bg-indigo-300 hover:text-gray-900'
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}
