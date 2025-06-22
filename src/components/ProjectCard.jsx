import { useNavigate } from 'react-router-dom'

export default function ProjectCard({project}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(project.destination);
  }

  return (
    <div onClick={handleClick} className="group bg-white h-80 w-full rounded-3xl drop-shadow-sm overflow-clip cursor-pointer transition ease-in-out hover:scale-105 hover:bg-light-matcha">
      <div className='h-[60%] w-full'>
        <img src={project.coverImg} alt="project-img" className='h-full w-full object-cover'/>
      </div>

      <div className='w-full h-[40%] p-5 flex flex-col gap-2'>
        <h1 className='text-2xl text-charcoal font-outfit font-medium truncate group-hover:text-white'>
          {project.title}
        </h1>
        <p className='text-md text-gray-500 font-inter group-hover:text-gray-100'>
          {project.description}
        </p>
      </div>
    </div>
  )
}