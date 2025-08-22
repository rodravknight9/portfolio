import { resources } from '../data';
import { Resource } from './Resource';

export const AboutMe = () => {
    return (
        <div className='justify-self-center w-6/7 md:w-3/5 py-20'>
            <h1 className='text-3xl font-bold mt-10 col-span-12 mb-2'>About Me</h1>
            <div className='flex flex-col gap-3 text-xl'>
                <h2 className='text-indigo-300 font-bold'>#OpenToWork</h2>
                <h2 className='font-bold'>Software Engineer</h2>
                <p className='text-sm md:text-xl'>
                    I am a <b>Software developer</b> with a strong foundation on backend engineering and a proven expertise accross the <b>full-stack spectrum</b>. 
                    Experienced in building scalable, maintainable, and high-performance applications using a range of modern technologies, inclusing .NET, JavaScript/TypeScript, and cloud-based solutions.
                    Beyond technical skills, I actively contribute to team growth through <b>mentorship, training, and leadership</b>. My focus is not only on writing code but also on driving best practices, 
                    fostering collaboration, and enabling teams to deliver impactful software solutions.
                </p>
                <div className='flex flex-row gap-4'>
                   {resources.map((resource, index) => (
                        <Resource key={index} href={resource.url} icon={resource.icon} />
                    ))}
                </div>
            </div>
        </div>
    )
}