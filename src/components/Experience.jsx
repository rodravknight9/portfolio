import { useState, useEffect } from 'react'
import { experience } from '../data'

const ExperienceTitle = ({ isActive, experience, onClick, isMobile }) => {

    if(isMobile)
    {
        return (
            <ul
                onClick={onClick} 
                className={`py-5 px-10 text-sm font-bold cursor-pointer justify-self-center text-indigo-300`}
            >
                <p className='justify-self-center'>
                    { experience.companyName }
                </p>
                <p className='text-white justify-self-center font-normal'>{ experience.title} | { experience.duration}</p>
            </ul>
        )
    }
    else
    {
        return (
            <ul
                onClick={onClick} 
                className={`py-5 px-10 text-xl cursor-pointer ${isActive ? 'border-l-4 border-indigo-300 text-indigo-300' : ''}`}
            >
                { experience.title }
            </ul>
        )
    }

    
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className='justify-self-center sm:w-3/3 lg:w-2/3 py-10'>
            <div className='grid grid-cols-13 p-10 gap-5'>
                <h1 className='text-3xl font-bold mt-10 col-span-12 mb-12'>Experience</h1>

                <li className='list-none sm:col-span-4 col-span-12 bg-slate-950 py-3'>
                    {experience.map((exp, index) => (
                        <ExperienceTitle 
                            isMobile={isMobile}
                            key={index} 
                            isActive={selectedExperience === exp} 
                            experience={exp}
                            onClick={() => setSetselectedExperience(exp)}
                        />
                    ))}
                </li>

                {
                    !isMobile &&
                    <div className="col-span-12 sm:col-span-9">
                        <ExperienceDescription experience={selectedExperience} />
                    </div>
                }
            </div>
        </div>
    )
}
