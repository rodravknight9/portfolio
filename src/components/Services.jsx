import React from 'react'
import { services } from '../data'

const ServiceCard = (service) => {
    return (
        <div className='w-1/4 bg-gray-950 p-12 my-6 border-2 border-gray-800 transition delay-150 duration-300 ease-in-out hover:border-indigo-900'>
            <h3 className='text-xl font-bold mb-3'>{service.name}</h3>
            <p>{service.description}</p>
        </div>
    )
}


export const Services = () => {
    return (
        <div className='w-3/5 justify-self-center mx-auto py-10'>
            <h1 className='text-3xl font-bold mt-10 col-span-12 mb-12'>Services</h1>
            <div className='flex flex-row gap-6 flex-wrap self-justify-center justify-center'>
            {
                services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))
            }
            </div>
        </div>
    )
}
