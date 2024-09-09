import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-yellow-50 text-navy-900 py-4">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex justify-between items-center">
        <p>&copy; 2024 Van Huy. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-navy-900 hover:text-yellow-600">GitHub</a>
          <a href="#" className="text-navy-900 hover:text-yellow-600">LinkedIn</a>
          <a href="#" className="text-navy-900 hover:text-yellow-600">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;