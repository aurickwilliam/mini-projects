import NavBar from "../components/NavBar"
import ProjectCard from "../components/ProjectCard"
import counterCover from "../assets/cover-img/counter-cover.png"
import numberGuessingCover from "../assets/cover-img/number-guessing-cover.png"
import randomNumberCover from "../assets/cover-img/random-number-cover.png"
import digitalClockCover from "../assets/cover-img/digital-clock-cover.png"
import passwordGeneratorCover from "../assets/cover-img/password-generator-cover.png"
import temperatureConversionCover from "../assets/cover-img/temperature-conversion-cover.png"

export default function Home() {

  const listProjects = [
    {
      title: "Counter Program",
      description: "Simple counter that can add, delete, and reset",
      destination: "/counter-program",
      coverImg: counterCover,
    },
    {
      title: "Number-Guessing Game",
      description: "Simple game where the user need to guess the number from 1 - 100",
      destination: "/number-guessing",
      coverImg: numberGuessingCover,
    },
    {
      title: "Random-Number Generator",
      description: "Simple number generator from X to X",
      destination: "/random-number",
      coverImg: randomNumberCover,
    },
    {
      title: "Digital Clock",
      description: "Digital Clock that displays the current time",
      destination: "/digital-clock",
      coverImg: digitalClockCover,
    },
    {
      title: "Password Generator",
      description: "Generates a unique and strong password based on user preferences.",
      destination: "/password-generator",
      coverImg: passwordGeneratorCover,
    },
    {
      title: "Temperature Conversion",
      description: "Simply converts the temperature to any measurement.",
      destination: "/temperature-conversion",
      coverImg: temperatureConversionCover,
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
            listProjects.map((project, index) => <ProjectCard project={project} key={index}/>)
          }
        </div>
      </section>
    </>
  )
}