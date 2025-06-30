import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameSimple, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Calculator() {
  const navigate = useNavigate();

  const [display, setDisplay] = useState("0");

  const appendToDisplay = (value) => {
    if (display === "0") {
      setDisplay(value);
    }
    else {
      setDisplay(prev => prev + value);
    }
  };

  const clearDisplay = () => {
    setDisplay("0");
  }

  const deleteDisplay = () => {
    if (display.length === 1) {
      setDisplay("0");
    }
    else if (display !== "0") {
      let values = display.split("");
      values.pop();
      setDisplay(values.join(""));
    }
  }

  const computeDisplay = () => {
    try {
      setDisplay(eval(display));
    }
    catch (err) {
      setDisplay("Syntax Error!");
    }
  }

  return (
    <section className="h-screen bg-white-bg flex justify-center items-center">
      <div className="bg-black w-90 mx-5 p-3 rounded-xl">
        {/* Display */}
        <div className="bg-[#696969] p-3 h-25 rounded-lg flex items-center">
          <input type="text"
            className="w-full text-right text-5xl text-white font-roboto border-0 outline-0"
            value={display}
            readOnly />
        </div>

        {/* Buttons */}
        <div className="w-full mt-5 grid grid-cols-4 grid-rows-5 gap-2">
          <button onClick={clearDisplay} className="h-20 bg-[#B8B5B5] text-4xl text-charcoal font-roboto rounded-full hover:bg-[#a5a3a3] transition ease-in-out active:scale-95">
            C
          </button>
          <button onClick={() => appendToDisplay("00")} className="h-20 bg-[#B8B5B5] text-4xl text-charcoal font-roboto rounded-full hover:bg-[#a5a3a3] transition ease-in-out active:scale-95">
            00
          </button>
          <button onClick={deleteDisplay} className="h-20 bg-[#B8B5B5] text-4xl text-charcoal font-roboto rounded-full hover:bg-[#a5a3a3] transition ease-in-out active:scale-95">
            <FontAwesomeIcon icon={faDeleteLeft} />
          </button>
          <button onClick={() => appendToDisplay("/")} className="h-20 bg-[#FE9505] text-5xl text-white font-roboto rounded-full hover:bg-[#dd860b] transition ease-in-out active:scale-95">
            ÷
          </button>

          <button onClick={() => appendToDisplay("7")} className="h-20 bg-[#424242] text-4xl text-white font-roboto rounded-full hover:bg-[#4d4d4d] transition ease-in-out active:scale-95">
            7
          </button>
          <button onClick={() => appendToDisplay("8")} className="h-20 bg-[#424242] text-4xl text-white font-roboto rounded-full hover:bg-[#4d4d4d] transition ease-in-out active:scale-95">
            8
          </button>
          <button onClick={() => appendToDisplay("9")} className="h-20 bg-[#424242] text-4xl text-white font-roboto rounded-full hover:bg-[#4d4d4d] transition ease-in-out active:scale-95">
            9
          </button>
          <button onClick={() => appendToDisplay("*")} className="h-20 bg-[#FE9505] text-5xl text-white font-roboto rounded-full hover:bg-[#dd860b] transition ease-in-out active:scale-95">
            ×
          </button>

          <button onClick={() => appendToDisplay("4")} className="h-20 bg-[#424242] text-4xl text-white font-roboto rounded-full hover:bg-[#4d4d4d] transition ease-in-out active:scale-95">
            4
          </button>
          <button onClick={() => appendToDisplay("5")} className="h-20 bg-[#424242] text-4xl text-white font-roboto rounded-full hover:bg-[#4d4d4d] transition ease-in-out active:scale-95">
            5
          </button>
          <button onClick={() => appendToDisplay("6")} className="h-20 bg-[#424242] text-4xl text-white font-roboto rounded-full hover:bg-[#4d4d4d] transition ease-in-out active:scale-95">
            6
          </button>
          <button onClick={() => appendToDisplay("-")} className="h-20 bg-[#FE9505] text-5xl text-white font-roboto rounded-full hover:bg-[#dd860b] transition ease-in-out active:scale-95">
            -
          </button>

          <button onClick={() => appendToDisplay("1")} className="h-20 bg-[#424242] text-4xl text-white font-roboto rounded-full hover:bg-[#4d4d4d] transition ease-in-out active:scale-95">
            1
          </button>
          <button onClick={() => appendToDisplay("2")} className="h-20 bg-[#424242] text-4xl text-white font-roboto rounded-full hover:bg-[#4d4d4d] transition ease-in-out active:scale-95">
            2
          </button>
          <button onClick={() => appendToDisplay("3")} className="h-20 bg-[#424242] text-4xl text-white font-roboto rounded-full hover:bg-[#4d4d4d] transition ease-in-out active:scale-95">
            3
          </button>
          <button onClick={() => appendToDisplay("+")} className="h-20 bg-[#FE9505] text-5xl text-white font-roboto rounded-full hover:bg-[#dd860b] transition ease-in-out active:scale-95">
            +
          </button>

          <button onClick={() => appendToDisplay("0")} className="col-span-2 h-20 pl-7 bg-[#424242] text-4xl text-white text-left font-roboto rounded-full hover:bg-[#4d4d4d] transition ease-in-out active:scale-95">
            0
          </button>
          <button onClick={() => appendToDisplay(".")} className="h-20 bg-[#424242] text-4xl text-white font-roboto rounded-full hover:bg-[#4d4d4d] transition ease-in-out active:scale-95">
            .
          </button>
          <button onClick={computeDisplay} className="h-20 bg-[#FE9505] text-5xl text-white font-roboto rounded-full hover:bg-[#dd860b] transition ease-in-out active:scale-95">
            =
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
  );
}