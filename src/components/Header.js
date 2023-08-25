import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='bg-gray-900 p-4 sticky top-0 z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-white text-2xl font-semibold mb-4 md:mb-0 hover:text-yellow-500'>
          Saboo Detailing
        </div>
        <button
          className='md:hidden text-white text-2xl focus:outline-none'
          onClick={toggleMenu}
        >
          &#9776;
        </button>
        <nav
          className={`md:flex ${
            menuOpen ? 'flex' : 'hidden'
          } md:items-center justify-center md:flex-grow`}
        >
          <ul
            className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 ${
              menuOpen ? 'md:space-x-0 md:space-y-6' : ''
            }`}
          >
            <li>
              <a
                href='/#'
                className='text-white hover:text-yellow-500 block md:inline-block md:text-center'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='/services'
                className='text-white hover:text-yellow-500 block md:inline-block md:text-center'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='/#'
                className='text-white hover:text-yellow-500 block md:inline-block md:text-center'
              >
                Team
              </a>
            </li>
            <li>
              <a
                href='/projects'
                className='text-white hover:text-yellow-500 block md:inline-block md:text-center'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='/#'
                className='text-white hover:text-yellow-500 block md:inline-block md:text-center'
              >
                Signature Cars
              </a>
            </li>
            <li>
              <a
                href='/#'
                className='text-white hover:text-yellow-500 block md:inline-block md:text-center'
              >
                Jobs
              </a>
            </li>
            <li>
              <a
                href='/#'
                className='text-white hover:text-yellow-500 block md:inline-block md:text-center'
              >
                News
              </a>
            </li>
            <li>
              <a
                href='/#'
                className='text-white hover:text-yellow-500 block md:inline-block md:text-center'
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
