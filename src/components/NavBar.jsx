import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faFireFlameSimple, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'

import { useNavigate } from 'react-router-dom';

export default function NavBar() {

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  }

  return (
    <nav className='flex justify-between items-center bg-light-matcha px-5 py-2 sm:px-15 md:px-30 lg:px-40 xl:px-50 2xl:px-70'>
      {/* Logo */}
      <div onClick={handleLogoClick} className='flex justify-center items-center gap-2 cursor-pointer'>
        <FontAwesomeIcon icon={faFireFlameSimple} className='text-2xl text-white'/>
        
        <h1 className='text-3xl text-white font-outfit font-medium'>
          lonian
        </h1>
      </div>

      {/* Links */}
      <div className='flex gap-8'>
        <a href="https://github.com/aurickwilliam" target='_blank'>
          <FontAwesomeIcon icon={faGithubAlt} className='text-2xl text-white cursor-pointer'/>
        </a>
        <FontAwesomeIcon icon={faCircleHalfStroke} className='text-2xl text-white cursor-pointer'/>
      </div>
    </nav>
  );
}
