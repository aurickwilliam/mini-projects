import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faRotateRight } from "@fortawesome/free-solid-svg-icons"

import { useState } from 'react';

export default function CounterProgram() {
  const [value, setValue] = useState(0);

  const handleDecreaseClick = () => {
    setValue(prev => prev - 1);
  };

  const handleIncreaseClick = () => {
    setValue(prev => prev + 1);
  };

  const handleResetClick = () => {
    setValue(0);
  };

  return (
    <>
      <section className="h-screen flex justify-center items-center bg-[#ffe97f]">
        <div className="flex flex-col gap-10 items-center">
          {/* Display Value */}
          <h1 className="text-8xl text-charcoal font-outfit font-medium">
            {value}
          </h1>
          
          {/* Buttons */}
          <div className='flex gap-10'>
            <button onClick={handleDecreaseClick} className='bg-charcoal h-15 w-15 rounded-lg cursor-pointer transition ease-in-out hover:bg-gray-600 active:scale-90'>
              <FontAwesomeIcon icon={faMinus} className='text-white text-lg' />
            </button>

            <button onClick={handleResetClick} className='bg-charcoal h-15 w-15 rounded-lg cursor-pointer transition ease-in-out hover:bg-gray-600 active:scale-90'>
              <FontAwesomeIcon icon={faRotateRight} className='text-white text-lg' />
            </button>

            <button onClick={handleIncreaseClick} className='bg-charcoal h-15 w-15 rounded-lg cursor-pointer transition ease-in-out hover:bg-gray-600 active:scale-90'>
              <FontAwesomeIcon icon={faPlus} className='text-white text-lg' />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}