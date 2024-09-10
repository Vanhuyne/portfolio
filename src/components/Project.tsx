import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const imgProject1 = require('../assets/project-1.png');
interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  image: string;
}




const ProjectCard: React.FC<ProjectProps> = ({ title, description, technologies, githubLink, liveLink, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-stroke">
      <div className="relative pb-[60.25%]">
        <img 
          src={image} 
          alt={title} 
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-headline mb-2">{title}</h3>
        <p className="text-sm text-paragraph mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-3 ">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-gray-100 text-paragraph px-2 py-1 rounded-full text-xs ">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="bg-button text-button-text px-3 py-1 rounded-lg hover:bg-highlight transition-colors duration-300 text-sm">
            <FontAwesomeIcon icon={faGithub} className="mr-1" /> GitHub
          </a>
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="bg-button text-button-text px-3 py-1 rounded-lg hover:bg-highlight transition-colors duration-300 text-sm">
              <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-1" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Project: React.FC = () => {
  const projects = [
    {
      title: "📚 Book Store Application",
      description: "A full-stack e-commerce platform for an online book store, featuring a Spring Boot backend API and an Angular frontend.",
      technologies: ["Java", "Spring Boot", "Spring Security", "Angular", "MySQL", "JWT", "Stripe API", "Tailwind CSS" ,"Render" , "Vercel"],
      githubLink: "https://github.com/Vanhuyne/book-store",
      liveLink: "https://frontend-book-v2-vanhuys-projects.vercel.app/",
      image: imgProject1
    },
    {
      title: "SpringBoot-React-Keycloak Movie Recommendation System",
      description: "A microservices-based movie recommendation system integrating Spring Boot, React, and Keycloak. Features secure authentication, scalable architecture, and MongoDB for data storage.",
      technologies: ["React", "TypeScript", "Spring Boot", "Java 21", "MongoDB", "Keycloak", "Tailwind CSS", "Docker"],
      githubLink: "https://github.com/Vanhuyne/springboot-react-keycloak",
      image: "https://raw.githubusercontent.com/Vanhuyne/springboot-react-keycloak/main/screenshot/overview.png" // Update with actual image path
    },
    {
      title: "SYNCIO - Social Media Platform",
      description: "A comprehensive social media platform with features like user management, social interactions, content sharing, messaging, and admin tools. Built with a microservices architecture using Spring Boot, Angular, and various modern technologies.",
      technologies: ["Java 17", "Spring Boot 3", "Angular 16", "MySQL", "Redis", "RabbitMQ", "Docker", "Python", "JWT"],
      githubLink: "https://github.com/56duong/syncio-webapp",
      liveLink: "https://syncio.space/",
      image: "https://private-user-images.githubusercontent.com/77065902/361917041-a0a85af8-8163-43c9-828d-4884d368b3be.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU5MzE5OTAsIm5iZiI6MTcyNTkzMTY5MCwicGF0aCI6Ii83NzA2NTkwMi8zNjE5MTcwNDEtYTBhODVhZjgtODE2My00M2M5LTgyOGQtNDg4NGQzNjhiM2JlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTEwVDAxMjgxMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWVmNDI5ZGEwZGI4MDFiZWNkYTZiNGZjM2Y0MmYyMmFmODkxNGYzNjdhYTYwNTZlZTgwOGIyZGU5YWFkMWM3YTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.yjeur4Jq7YUIxah7ZLi4NDK2Bs0Homh8_HqWczQGLfM" // Home screenshot
    },
    // Add more projects as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-background">
      <h2 className="text-3xl font-bold text-headline mb-6">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Project;
