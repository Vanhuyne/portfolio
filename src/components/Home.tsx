import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const avatar = require('../assets/avatar.png');

const useTypingEffect = (text: string, typingSpeed: number = 150) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [text, typingSpeed]);

  return displayedText;
};

export const Home: React.FC = () => {
  const typedText = useTypingEffect('Java Developer');

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full bg-background px-4 md:px-24">
      <div className="col-span-1 md:col-span-7 text-left pl-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">Hello, I'm Huy,</h2>
        <h1 className="text-4xl md:text-7xl font-bold text-navy-900 mb-4 h-20 mt-6">
          {typedText}
          <span className="animate-blink">|</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">based in Vietnam.</p>
        <Link to="/resume" className="bg-yellow-300 hover:bg-yellow-400 text-navy-900 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-lg md:text-xl inline-block mb-6">
          Resume
        </Link>
        <div className="flex space-x-6 mt-6">
          <a href="https://github.com/Vanhuyne" target="_blank" rel="noopener noreferrer" className="text-navy-900 hover:text-yellow-400 transition-colors duration-300">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/v%C4%83n-huy-0845161a1/" target="_blank" rel="noopener noreferrer" className="text-navy-900 hover:text-yellow-400 transition-colors duration-300">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://x.com/ThanVanHuy3" target="_blank" rel="noopener noreferrer" className="text-navy-900 hover:text-yellow-400 transition-colors duration-300">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </div>
      <div className="col-span-1 md:col-span-5 relative mt-8 md:mt-0 pr-10">
        <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] mx-auto">
          <div className="absolute inset-0 bg-main rounded-full "></div>
          <img 
            src={avatar} 
            alt="Huy" 
            className="absolute inset-0 w-full h-full object-cover rounded-full border-2 border-stroke"
          />
          <div className="absolute top-0 right-0 -mr-4 -mt-4 text-5xl text-tertiary">++</div>
          <div className="absolute bottom-0 left-0 -ml-6 -mb-6 text-5xl text-tertiary">//</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
