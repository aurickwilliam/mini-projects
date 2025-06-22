import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameSimple, faCopy } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PasswordGenerator() {
  const navigate = useNavigate();

  const [length, setLength] = useState(8);
  const [isLowerChecked, setIsLowerChecked] = useState(true);
  const [isUpperChecked, setIsUpperChecked] = useState(true);
  const [isNumberChecked, setIsNumberChecked] = useState(false);
  const [isSymbolChecked, setIsSymbolChecked] = useState(false);
  const [password, setPassword] = useState("");

  // Characters
  const lowercase = "qwertyuiopasdfghjklzxcvbnm";
  const uppercase = lowercase.toUpperCase();
  const numbers = "0123456789";
  const symbols = "~!@#$%^&*()_-+=[]{}\\|;:'\",<.>/?";

  const handleGeneratePassword = (e) => {
    let characters = "";
    let result = "";

    characters += isLowerChecked ? lowercase : "";
    characters += isUpperChecked ? uppercase : "";
    characters += isNumberChecked ? numbers : "";
    characters += isSymbolChecked ? symbols : "";

    console.log(isLowerChecked);
    console.log(isUpperChecked);
    

    if (characters === "") {
      alert("Please select atleast 1 option below...");
      e.preventDefault();
      return;
    }

    for (let index = 0; index < length; index++) {
      let letter = characters[Math.floor(Math.random() * characters.length)];
      result += letter;
    }

    setPassword(result);
    
    e.preventDefault();
  };

  const copyPassword = async () => {
    try {
      navigator.clipboard.writeText(password);
    }
    catch(e) {
      console.error("Failed to Copy Password!", e);
    }
  }

  return (
    <section className="h-screen bg-white-bg flex flex-col justify-center items-center">
      <div className="bg-white w-80 mx-5 p-5 border-1 border-grey rounded-xl lg:w-md">
        <h1 className="text-2xl text-center text-charcoal font-outfit font-medium lg:text-3xl">
          Password Generator
        </h1>

        <form onSubmit={handleGeneratePassword} className="mt-10">
          <label className="text-charcoal text-lg font-outfit">
            Length:
            <br />
            <input type="number" 
              name="length" 
              value={length} 
              onChange={(e) => setLength(e.target.value)}
              className="p-1 pl-2 w-full border-1 border-grey outline-0 rounded-md"/>
          </label>

          <p className="mt-5 text-lg text-charcoal font-outfit">
            Options:
          </p>
          <div className="w-full h-0.5 my-1 bg-grey rounded-full"></div>

          <label className="text-charcoal text-lg font-outfit flex items-center gap-2">
            <input type="checkbox"
              name="lower"
              checked={isLowerChecked}
              onChange={() => setIsLowerChecked(!isLowerChecked)} 
              className="w-4 h-4 accent-charcoal"/>
            Lowercase
          </label>

          <label className="text-charcoal text-lg font-outfit flex items-center gap-2">
            <input type="checkbox"
              name="upper"
              checked={isUpperChecked}
              onChange={() => setIsUpperChecked(!isUpperChecked)} 
              className="w-4 h-4 accent-charcoal"/>
            Uppercase
          </label>

          <label className="text-charcoal text-lg font-outfit flex items-center gap-2">
            <input type="checkbox"
              name="number"
              checked={isNumberChecked}
              onChange={() => setIsNumberChecked(!isNumberChecked)} 
              className="w-4 h-4 accent-charcoal"/>
            Numbers 
          </label>

          <label className="text-charcoal text-lg font-outfit flex items-center gap-2">
            <input type="checkbox"
              name="symbol"
              checked={isSymbolChecked}
              onChange={() => setIsSymbolChecked(!isSymbolChecked)} 
              className="w-4 h-4 accent-charcoal"/>
            Symbols
          </label>

          <br />

          <button type="submit" className="w-full h-10 text-lg font-outfit transistion ease-in-out hover:bg-gray-600 active:scale-95">
            Generate
          </button>
        </form>
      </div>

      {
        password && <div className="mt-5 w-80 p-5 bg-white border-1 border-grey rounded-xl flex items-center gap-2 lg:w-md">
          <input type="text" 
            readOnly
            value={password}
            className="p-1 pl-2 text-charcoal font-outfit border-1 border-grey outline-0 rounded-md flex-9/12"/>

            <button onClick={copyPassword} className="h-full flex-3/12 transition ease-in-out hover:bg-gray-600 active:scale-95">
              <FontAwesomeIcon icon={faCopy} />
            </button>
        </div>
      }

      <div onClick={() => navigate("/")} className='absolute right-0 bottom-0 bg-white-bg m-5 p-3 flex items-center justify-center gap-2 rounded-4xl shadow-sm cursor-pointer'>
        <FontAwesomeIcon icon={faFireFlameSimple} className='text-xl text-charcoal'/>
        <h1 className='text-xl text-charcoal font-outfit font-medium'>
          lonian
        </h1>
      </div>
    </section>    
  )
}