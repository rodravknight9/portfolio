import React from 'react'

export const Resource = ({ href, icon }) => {
    return (
        <div>
            <a  
                href={href}
                target="_blank" 
                rel="noopener noreferrer" 
                className="mx-2 mt-4 inline-block text-3xl py-2 px-3 border-2 border-gray-900 transition delay-150 duration-300 ease-in-out hover:border-indigo-300 hover:cursor-pointer"
            >
                <i className={`${icon} text-lg font-light text-indigo-300 hover:text-indigo-300`}></i>
            </a>
        </div>
    )
}

