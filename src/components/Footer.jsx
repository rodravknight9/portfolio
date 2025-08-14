import React from 'react'
import { resources } from '../data'
import { Resource } from './Resource'


const sections = [
    {
        sectionName: 'About Me',
        sectionLink: '#about-me'
    },
    {        
        sectionName: 'Experience',
        sectionLink: '#experience'
    },
    {   
        sectionName: 'Projects',
        sectionLink: '#projects'
    },
    {   
        sectionName: 'Services',
        sectionLink: '#services'
    },
    {   
        sectionName: 'Contact',
        sectionLink: '#contact'
    }
]

const Section = ({ sectionName, sectionLink }) => {
    return (
        <a 
            href={sectionLink}
            className='px-2 '
        >
            <p 
                className='text-white text-lg hover:text-indigo-300 border-b-2 border-transparent hover:border-indigo-300 transition duration-300 ease-in-out'
            >
                {sectionName
            }</p>
        </a>
    )
}

export const Footer = () => {
    return (
        <div className='w-1/3 flex flex-col items-center justify-center mx-auto py-10'>
            <div className='flex flex-row gap-4 text-2xl'>
                {resources.map((resource, index) => (
                    <Resource key={index} href={resource.href} icon={resource.icon} />
                ))}
            </div>
            <div className='flex flex-row gap-4 text-2xl mt-8'>
                {sections.map((section, index) => (
                    <Section 
                        key={index}
                        sectionName={section.sectionName}
                        sectionLink={section.sectionLink}
                    />))}
            </div>
             <div className='flex flex-row gap-4 text-2xl mt-8'>
                <p className='text-lg'>Inspired by the Forrest Knight portfolio | Made in React</p>
            </div>
        </div>
    )
}
