import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRotateRight, faFireFlameSimple} from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NumberGuessing() {
  const [guess, setGuess] = useState("");
  const [number, setNumber] = useState(0);
  const [hint, setHint] = useState("");
  const [haveGuessed, setHaveGuessed] = useState(false);
  const [noGuess, setNoGuess] = useState(0);

  const navigate = useNavigate();

  const generateRandomInteger = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min + 1)) + min

    return result;
  }

  // Generate a new number
  useEffect(() => {
    setNumber(generateRandomInteger(1, 100));
  }, [])
  

  const handleSubmit = (e) => {
    if (guess === "") {
      setHint("Enter a Guess...");
    }

    if (parseInt(guess) === number) {
      setHint("AYOOOO");
      setHaveGuessed(true);
      setNoGuess(prev => prev + 1);
    }
    else if (parseInt(guess) < number) {
      setHint("Higher");
      setNoGuess(prev => prev + 1);
    }
    else if (parseInt(guess) > number) {
      setHint("Lower");
      setNoGuess(prev => prev + 1);
    }
    
    e.preventDefault();
  }

  const handleReset = () => {
    setGuess("");
    setHaveGuessed(false);
    setHint("");
    setNoGuess(0);

    setNumber(generateRandomInteger(1, 100));
  }

  return (
    <section className="h-screen bg-white-bg flex justify-center items-center">
      <div className="">
        
        {/* Title */}
        <h1 className="text-3xl text-center text-charcoal font-outfit font-medium">
          Guess the Number
          <br />
          <span className="font-normal text-2xl">
            1 - 100
          </span>
        </h1>

        {/* Inputs */}
        <form onSubmit={handleSubmit} className="mt-10">
          <input 
            type="number" 
            placeholder="Enter a number..." 
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="w-full h-10 p-2 text-center text-charcoal font-outfit border-2 border-charcoal rounded-lg"/>

          <button type="submit" className="w-full bg-charcoal text-white font-outfit p-2 mt-3 rounded-lg cursor-pointer transition ease-in-out hover:bg-gray-600 active:scale-95">
            Enter
          </button>
        </form>

        {/* Hint */}
        {!haveGuessed && <h1 className="text-3xl text-charcoal text-center font-outfit font-medium mt-10">
          {hint}
        </h1>}

        {/* Congratulation Message */}
        {
          haveGuessed && <div className="mt-10 text-center">
            <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500 font-outfit font-medium">
              Congratulations!
            </h1>

            <p className="text-charcoal text-lg font-outfit mt-3">
              The Number is <span className="font-medium">{number}</span>

              <br />
              
              Number of Guesses is <span className="font-medium">{noGuess}</span>
            </p>
            
            <button onClick={handleReset} className="bg-charcoal h-13 w-13 mt-5 rounded-lg text-white text-xl cursor-pointer transition ease-in-out hover:bg-gray-600 active:scale-95">
              <FontAwesomeIcon icon={faRotateRight} />
            </button>
          </div>
        }
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