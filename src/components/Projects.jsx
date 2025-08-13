import { projects } from '../data'

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-gray-950 p-12 my-6 border-2 border-gray-800 transition delay-150 duration-300 ease-in-out hover:border-indigo-900">
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-2/5 h-80 object-cover justify-self-center border-2 border-indigo-900 " 
                />
            <h1 className="text-2xl font-semibold mt-4 justify-self-center">{project.title}</h1>
            <div className='my-6 px-3'>
                <h2 className='text-2xl'>Description</h2>
                <p className="text-gray-200 mt-2">{project.description}</p>
            </div>
            <div className='my-6 px-3'>
                <h2 className='text-2xl'>Technologies</h2>
                <p className="text-gray-100 mt-1">{project.technologies}</p>
            </div>
            {project.githubLink && (
                <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mx-2 mt-4 inline-block text-3xl"
                >
                    <i class="fa-brands fa-github text-white hover:text-indigo-300"></i>
                </a>
            )}
        </div>
    )
}

export const Projects = () => {
    return (
        <div className='justify-self-center py-10 w-2/3'>
             <h1 className='text-4xl mt-10 mb-12 font-semibold justify-self-center'>Projects</h1>
             {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />))}
        </div>
    )
}
