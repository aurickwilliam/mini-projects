import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFireFlameSimple} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function DigitalClock() {
  const navigate = useNavigate();
  const [time, setTime] = useState("00:00");

  setInterval(() => {
    const date = new Date();

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    setTime(`${hours}:${minutes}`);
  }, 1000);

  return (
    <section className="bg-white-bg h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        {/* Button at the top */}
        <div className="w-40 h-2 bg-[#595959] rounded-t-lg lg:w-50 2xl:w-80"></div>

        {/* Clock Container */}
        <div className="bg-[#393939] mx-5 w-70 h-30 rounded-xl p-3 lg:w-80 lg:h-40 lg:rounded-2xl 2xl:w-lg 2xl:h-50 2xl:rounded-3xl">
          <div className="bg-[#494949] h-full rounded-lg flex justify-center items-center border-5 border-[#000000] lg:border-8 lg:rounded-xl 2xl:rounded-2xl 2xl:border-10">
            <h1 className="text-center text-[#2FF1B5] text-7xl font-outfit font-medium w-full h-full flex items-center justify-center lg:text-8xl 2xl:text-9xl">
              {time}
            </h1>
          </div>
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