import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="container mx-auto px-2 sm:px-6 lg:px-8 py-12 bg-background max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-headline">My Resume</h2>
        <a 
          href="/resume.pdf" 
          download 
          className="bg-button hover:bg-yellow-400 text-button-text font-bold py-2 px-4 rounded"
        >
          Download PDF
        </a>
      </div>
      <div className="w-full h-[1000px]">
        <object
          data="/resume.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>It appears you don't have a PDF plugin for this browser. 
             You can <a href="/resume.pdf">click here to download the PDF file.</a>
          </p>
        </object>
      </div>
    </div>
  );
};

export default Resume;
