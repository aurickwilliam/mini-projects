import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFireFlameSimple } from "@fortawesome/free-solid-svg-icons"

import { useNavigate } from "react-router-dom"
import { useState } from "react";

export default function TemperatureConversion() {
  const navigate = useNavigate();

  const listOfTemp = ["°C", "°F", "K"];
  
  const [typeFrom, setTypeFrom] = useState(listOfTemp[0]);
  const [valueFrom, setValueFrom] = useState(0);
  const [typeTo, setTypeTo] = useState(listOfTemp[0]);
  const [valueTo, setValueTo] = useState(0);

  const handleConversion = (e) => {
    let from = typeFrom.split("").length == 2 ? typeFrom.split("")[1] : typeFrom.split("")[0];
    let to = typeTo.split("").length == 2 ? typeTo.split("")[1] : typeTo.split("")[0];
    let temp = parseInt(valueFrom);
    
    if (from === "C" && to === "F") {
      setValueTo(celsiusToFahrenheit(temp));
    }
    else if (from === "C" && to === "K") {
      setValueTo(celsiusToKelvin(temp));
    }
    else if (from === "F" && to === "C") {
      setValueTo(fahrenheitToCelsius(temp));
    }
    else if (from === "F" && to === "K") {
      setValueTo(fahrenheitToKelvin(temp));
    }
    else if (from === "K" && to === "C") {
      setValueTo(kelvinToCelsius(temp));
    }
    else if (from === "K" && to === "F") {
      setValueTo(kelvinToFahrenheit(temp));
    }
    else if (from === to) {
      setValueTo(valueFrom);
    }

    e.preventDefault();
  }

  const celsiusToFahrenheit = (celsius) => {
    return (celsius * (9/5)) + 32;
  }

  const celsiusToKelvin = (celsius) => {
    console.log(typeof celsius);
    
    return (celsius + 273.15);
  }

  const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * (5/9);
  }

  const fahrenheitToKelvin = (fahrenheit) => {
    return fahrenheitToCelsius(fahrenheit) + 273.15;  
  }

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  }

  const kelvinToFahrenheit = (kelvin) => {
    return celsiusToFahrenheit(kelvinToCelsius(kelvin));
  }

  return (
    <section className="h-screen bg-white-bg flex justify-center items-center">
      <div className="mx-5 p-5 bg-white border-1 border-grey rounded-xl">
        <h1 className="text-xl text-charcoal text-center font-outfit font-medium">
          Temperature Conversion
        </h1>

        <form onSubmit={handleConversion} className="mt-10">
          {/* Input Field */}
          <div>
            <p className="text-charcoal text-lg font-outfit font-medium">From:</p>

            <div className="mt-2 flex gap-2">
              <select value={typeFrom} onChange={(e) => setTypeFrom(e.target.value)} className="bg-charcoal p-1 rounded-md text-white text-center text-lg font-outfit cursor-pointer">
                {
                  listOfTemp.map((value, index) => {
                    return <option value={value} key={index} className="bg-white text-charcoal">
                      {value}
                    </option>
                  })
                }
              </select> 

              <input type="number"
                value={valueFrom}
                onChange={(e) => setValueFrom(e.target.value)}
                className="p-1 pl-2 text-charcoal text-lg font-outfit border-1 border-grey outline-0 rounded-md focus:border-2 focus:border-charcoal" />
            </div>
          </div>

          {/* Output Field */}
          <div className="mt-5">
            <p className="text-charcoal text-lg font-outfit font-medium">To:</p>

            <div className="mt-2 flex gap-2">
              <select value={typeTo} onChange={(e) => setTypeTo(e.target.value)} className="bg-charcoal p-1 rounded-md text-white text-center text-lg font-outfit cursor-pointer">
                {
                  listOfTemp.map((value, index) => {
                    return <option value={value} key={index} className="bg-white text-charcoal">
                      {value}
                    </option>
                  })
                }
              </select> 

              <input type="number"
                value={valueTo}
                readOnly
                onChange={(e) => setValueTo(e.target.value)}
                className="p-1 pl-2 text-charcoal text-lg font-outfit border-1 border-grey outline-0 rounded-md" />
            </div>
          </div>

          <button type="submit" className="w-full h-10 mt-5 font-outfit text-lg transition ease-in-out hover:bg-gray-600 active:scale-95">
            Convert
          </button>
        </form>
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