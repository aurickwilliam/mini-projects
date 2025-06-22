import NavBar from "../components/NavBar"
import ProjectCard from "../components/ProjectCard"
import counterCover from "../assets/cover-img/counter-cover.png"

export default function Home() {

  const listProjects = [
    {
      title: "Counter Program",
      description: "Simple counter that can add, delete, and reset",
      destination: "/counter-program",
      coverImg: counterCover,
    }
  ]

  return (
    <>
      <NavBar />

      <section className="mt-10 margin">
        <div>
          <h1 className="text-3xl text-charcoal font-outfit font-medium xl:text-4xl 2xl:text-5xl">
            List of Projects
          </h1>
        </div>

        {/* Divider */}
        <div className="bg-grey rounded-4xl w-full h-1 mt-3"></div>

        <div className="my-5 flex flex-col gap-5 md:grid grid-cols-2 xl:grid-cols-3">
          {
            listProjects.map((project) => <ProjectCard project={project}/>)
          }
        </div>
      </section>
    </>
  )
}