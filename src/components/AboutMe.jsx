import React from 'react'

const Link = ({ href, icon }) => {
    return (
        <div>
            <a href={href}
                target="_blank" 
                rel="noopener noreferrer" 
                className="mx-2 mt-4 inline-block text-3xl"
            >
                <i class={`{icon} text-white hover:text-indigo-300`}></i>
            </a>
        </div>
    )
}

const AboutMe = () => {
    return (
        <div className='justify-self-center w-3/5 py-20'>
            <h1 className='text-3xl font-bold mt-10 col-span-12 mb-12'>About Me</h1>
            <div className='flex flex-col gap-6 text-xl'>
                <h2>#OpenToWork</h2>
                <h2>Software Engineer</h2>
                <p>
                    I am a software developer with a strong focus on backend development and a comprehensive understanding of full-stack technologies, 
                    particularly specialized in Microsoft technologies. 
                    Proven leadership skills demonstrated through collaboration and support for team members. Actively engaged in mentoring and training, 
                    with a track record of contributing to the growth and success of team members. Adept at leading interviews and providing valuable 
                    insights into software development process.  
                </p>
                <div>
                   
                </div>
            </div>
        </div>
    )
}

export default AboutMe
//#A54DBB