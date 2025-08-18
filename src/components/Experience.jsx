import { useState } from 'react'
import { experience } from '../data'

const ExperienceTitle = ({ isActive, experience, onClick }) => {
    return (
        <ul
            onClick={onClick} 
            className={`py-5 px-10 text-xl cursor-pointer ${isActive ? 'border-l-4 border-indigo-300 text-indigo-300' : ''}`}
        >
            { experience.title }
        </ul>
    )
}

const ExperienceDescription = ({ experience }) => {
    return (
        <div className="grid grid-cols-4 grid-rows-[2fr,3fr]">
            <p className="col-span-3 font-bold text-2xl pb-5">{experience.title}</p>
            <p className='justify-self-end text-xl'>{experience.duration}</p>
            <p className='col-span-4 text-xl bg text-indigo-300 font-bold pb-7'>{experience.companyName}</p>
            <p className='col-span-4 text-xl bg-'>{experience.description}</p>
        </div>
    )
}

export const Experience = () => {

    const [selectedExperience, setSetselectedExperience] = useState(experience[0]);

    return (
        <div className='justify-self-center w-2/3 py-10'>
            <div className='grid grid-cols-13 p-10 gap-5'>
                <h1 className='text-3xl font-bold mt-10 col-span-12 mb-12'>Experience</h1>
                <li className='list-none col-span-4 bg-slate-950 py-3'>
                    {experience.map((exp, index) => (
                        <ExperienceTitle 
                            key={index} 
                            isActive={selectedExperience === exp} 
                            experience={exp}
                            onClick={() => setSetselectedExperience(exp)}
                        />
                    ))}
                </li>
                <div className="col-span-9">
                    <ExperienceDescription experience={selectedExperience} />
                </div>
            </div>
        </div>
    )
}
