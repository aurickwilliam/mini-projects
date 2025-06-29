import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faFireFlameSimple} from "@fortawesome/free-solid-svg-icons";

import hanni from "../assets/photocards/hanni.jpg";
import minji from "../assets/photocards/minji.jpg";
import dani from "../assets/photocards/dani.jpg";
import haerin from "../assets/photocards/haerin.jpg";
import hyein from "../assets/photocards/hyein.jpg";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ImageSlider() {
  const navigate = useNavigate();
  
  const [slideNo, setSlideNo] = useState(0);
  const [imgPath, setImgPath] = useState("");

  const images = [
    {url: hanni, caption: "Pham Hanni"},
    {url: minji, caption: "Kim Minji"},
    {url: dani, caption: "Marsh Danielle"},
    {url: haerin, caption: "Kang Haerin"},
    {url: hyein, caption: "Lee Hyein"},
  ];

  useEffect(() => {
    setImgPath(images[slideNo].url);
  },[slideNo]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideNo(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleLeftClick = () => {
    if (slideNo === 0) {
      setSlideNo(images.length - 1);
    }
    else {
      setSlideNo(prev => prev - 1);
    }
  }
  
  const handleRightClick = () => {
    if (slideNo === images.length - 1) {
      setSlideNo(0);
    }
    else {
      setSlideNo(prev => prev + 1);
    }
  }

  return (
    <section className="h-screen bg-white-bg flex justify-center items-center">
      <div className="flex justify-center items-center gap-5 mx-5">
        {/* Left Button */}
        <button onClick={handleLeftClick} className="w-10 h-10 rounded-full transition ease-in-out hover:bg-zinc-600 active:scale-95">
          <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
        </button>

        {/* Image Container */}
        <div className="h-96 w-60 rounded-2xl overflow-clip">
          <img src={images[slideNo].url} alt="Kpop" className="w-full h-full object-cover"/>
        </div>

        {/* Right Button */}
        <button onClick={handleRightClick} className="w-10 h-10 rounded-full transition ease-in-out hover:bg-zinc-600 active:scale-95">
          <FontAwesomeIcon icon={faArrowRight} className="text-lg"/>
        </button>
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