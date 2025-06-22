import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFireFlameSimple} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RandomNumber() {
  const navigate = useNavigate();

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [number, setNumber] = useState(0);

  const generateNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    return result;
  }

  const handleGenerateClick = (e) => {
    if (max <= min) {
      alert("Invalid Input!\nMaximum should not be less than or equal to Minimum.");
      e.preventDefault();
      return;
    }

    setNumber(generateNumber(min, max));
  }

  return (
    <section className="h-screen bg-white-bg flex justify-center items-center">
      
      <div className="flex flex-col text-center mx-5 max-w-lg">
        <h1 className="text-2xl text-charcoal font-outfit font-medium lg:text-3xl">
          Random Number Generator
        </h1>

        <h1 className="text-5xl text-charcoal font-outfit font-medium mt-5">
          {number}
        </h1>

        <div className="bg-charcoal p-3 mt-10 rounded-lg flex gap-1">
          <input type="number" value={min} onChange={(e) => setMin(e.target.value)} className="bg-white w-3/12 h-10 p-1 rounded-md text-center text-charcoal text-xl font-outfit focus:outline-0" />
          <button onClick={handleGenerateClick} className="w-6/12 h-10 text-xl font-outfit transition ease-in-out hover:bg-gray-600 active:scale-95">
            Generate
          </button>
          <input type="number" value={max} onChange={(e) => setMax(e.target.value)} className="bg-white w-3/12 h-10 p-1 rounded-md text-center text-charcoal text-xl font-outfit focus:outline-0" />
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