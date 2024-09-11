import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const imgProject1 = require('../assets/project-1.png');
const imgProject2 = require('../assets/project-2.png');
interface ProjectProps {
  title: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  image: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, technologies, githubLink, liveLink, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 flex flex-col">
      <div className="relative aspect-[4/3]">
        <img 
          src={image} 
          alt={title} 
          className="absolute top-0 left-0 w-full h-full object-cover object-center p-2 rounded-lg"
        />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <h3 className="text-lg font-bold text-headline mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-gray-100 text-paragraph px-2 py-1 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-2 flex justify-center space-x-3  mt-auto">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="bg-button text-button-text px-3 py-1 rounded-lg hover:bg-highlight transition-colors duration-300 text-sm">
            <FontAwesomeIcon icon={faGithub} className="mr-1" /> GitHub
          </a>
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="bg-button text-button-text px-3 py-1 rounded-lg hover:bg-highlight transition-colors duration-300 text-sm">
              <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-1" /> Live
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
      technologies: ["Java", "Spring Boot", "Spring Security", "Angular", "MySQL", "JWT", "Stripe API", "Tailwind CSS" ,"Render" , "Vercel"],
      githubLink: "https://github.com/Vanhuyne/book-store",
      liveLink: "https://frontend-book-v2-vanhuys-projects.vercel.app/",
      image: imgProject1
    },
    {
      title: "SpringBoot-React-Keycloak Movie Recommendation System",
      technologies: ["React", "TypeScript", "Spring Boot", "Java 21", "MongoDB", "Keycloak", "Tailwind CSS", "Docker"],
      githubLink: "https://github.com/Vanhuyne/springboot-react-keycloak",
      image: "https://raw.githubusercontent.com/Vanhuyne/springboot-react-keycloak/main/screenshot/overview.png" // Update with actual image path
    },
    {
      title: "SYNCIO - Social Media Platform",
      technologies: ["Java 17", "Spring Boot 3", "Angular 16", "MySQL", "Redis", "RabbitMQ", "Docker", "Python", "JWT"],
      githubLink: "https://github.com/56duong/syncio-webapp",
      liveLink: "https://syncio.space/",
      image: imgProject2
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
