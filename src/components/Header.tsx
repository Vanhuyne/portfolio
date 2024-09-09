import React from 'react';
import { NavLink } from 'react-router-dom';

const avatar = require('../assets/avatar-git.png');
const Header: React.FC = () => {
  return (
    <header className="bg-background text-paragraph py-4 w-20 fixed left-0 top-0 h-screen flex flex-col items-center border-r border-stroke">
      <div className="mb-8 mt-4">
        <img src={avatar} alt="Avatar" className="w-12 h-12 rounded-full border-2 border-highlight" />
      </div>
      <nav className="flex-grow">
        <ul className="space-y-8">
          <li>
            <NavLink to="/" className={({ isActive }) => 
              `block p-2 rounded-md ${isActive ? 'bg-highlight text-button-text' : 'hover:bg-main text-paragraph hover:text-button-text'}` 
            }>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => 
              `block p-2 rounded-md ${isActive ? 'bg-highlight text-button-text' : 'hover:bg-main text-paragraph hover:text-button-text'}` 
            }>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => 
              `block p-2 rounded-md ${isActive ? 'bg-highlight text-button-text' : 'hover:bg-main text-paragraph hover:text-button-text'}` 
            }>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;