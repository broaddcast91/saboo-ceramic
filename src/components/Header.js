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
          Saboo Pro
        </div>
        <button className='md:hidden text-white text-2xl' onClick={toggleMenu}>
          &#9776;
        </button>
        <nav
          className={`md:flex ${
            menuOpen ? 'flex' : 'hidden'
          } md:items-center justify-center  md:flex-grow`}
        >
          <ul
            className={`flex flex-col md:flex-row space-y-6 text-sm  md:space-y-0 md:space-x-6 ${
              menuOpen ? 'text-center' : ''
            }`}
          >
            <li>
              <a
                href='/#'
                className='text-white hover:text-yellow-500'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='/services'
                className='text-white hover:text-yellow-500'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='/#'
                className='text-white hover:text-yellow-500'
              >
                Team
              </a>
            </li>
            <li>
              <a
                href='/#'
                className='text-white hover:text-yellow-500'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='/#'
                className='text-white hover:text-yellow-500'
              >
                Signature Cars
              </a>
            </li>
            <li>
              <a
                href='/#'
                className='text-white hover:text-yellow-500'
              >
                Jobs
              </a>
            </li>
            <li>
              <a
                href='/#'
                className='text-white hover:text-yellow-500'
              >
                News
              </a>
            </li>
            <li>
              <a
                href='/#'
                className='text-white hover:text-yellow-500'
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
