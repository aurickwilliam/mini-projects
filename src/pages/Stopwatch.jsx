import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFireFlameSimple, faPlay, faRotate, faStop } from "@fortawesome/free-solid-svg-icons"

import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react";

export default function Stopwatch() {
  const navigate = useNavigate();

  const [time, setTime] = useState("00:00:00:00");
  
  let timerId = useRef(null);
  let isRunning = useRef(false);
  let startTime = useRef(0);
  let elapsedTime = useRef(0);

  const handleStartClick = () => {    
    if (!isRunning.current) {
      startTime.current = Date.now() - elapsedTime.current;

      timerId.current = setInterval(updateTime, 10);
      isRunning.current = true;
    }
    console.log(isRunning.current);
    
  }

  const handleStopClick = () => {
    if (isRunning.current) {
      clearInterval(timerId.current);
      elapsedTime.current = Date.now() - startTime.current;
      isRunning.current = false;
    }

    console.log(isRunning.current);
  }

  const handleResetClick = () => {
    clearInterval(timerId.current);
    isRunning.current = false;
    startTime.current = 0;
    elapsedTime.current = 0;
    setTime("00:00:00:00");
  }

  const updateTime = () => {
    let currentTime = Date.now();

    elapsedTime.current = currentTime - startTime.current;

    // Converting the elapsed time
    const MS = 1000; // Milliseconds
    const S = 60; // Seconds
    const M = 60; // Minutes
    

    let hours = Math.floor(elapsedTime.current / (MS * S * M));
    let minutes = Math.floor(elapsedTime.current / (MS * S) % 60);
    let seconds = Math.floor(elapsedTime.current / (MS) % 60);
    let milliseconds = Math.floor(elapsedTime.current % 1000 / 10);

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    milliseconds = milliseconds.toString().padStart(2, "0");

    let _time = `${hours}:${minutes}:${seconds}:${milliseconds}`;    
    setTime(_time);
  }

  return (
    <section className="h-screen bg-white-bg flex justify-center items-center">
      <div className="mx-5 flex flex-col justify-center items-center gap-10">
        <h1 className="text-charcoal text-6xl font-roboto font-medium lg:text-7xl xl:text-8xl">
          {time}
        </h1>

        {/* Buttons */}
        <div className="w-full flex justify-between lg:justify-evenly">
          <button onClick={handleStartClick} className="w-20 h-10 text-lg font-outfit transition ease-in-out hover:bg-gray-600 active:scale-95">
            <FontAwesomeIcon icon={faPlay} />
          </button>

          <button onClick={handleResetClick} className="w-20 h-10 text-lg font-outfit transition ease-in-out hover:bg-gray-600 active:scale-95">
            <FontAwesomeIcon icon={faRotate} />
          </button>

          <button onClick={handleStopClick} className="w-20 h-10 text-lg font-outfit transition ease-in-out hover:bg-gray-600 active:scale-95">
            <FontAwesomeIcon icon={faStop} />
          </button>
        </div>
      </div>

      <div onClick={() => navigate("/")} className='absolute right-0 bottom-0 bg-white-bg m-5 p-3 flex items-center justify-center gap-2 rounded-4xl shadow-sm cursor-pointer'>
        <FontAwesomeIcon icon={faFireFlameSimple} className='text-xl text-charcoal'/>
        <h1 className='text-xl text-charcoal font-outfit font-medium'>
          lonian
        </h1>
      </div>
    </section>
  )
}