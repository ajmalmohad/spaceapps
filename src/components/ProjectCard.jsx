import React from 'react';
import './ProjectCard.css'

//Demo Image
import Demo from '../assets/ProjectIconDemo-SolarEclipse.jpg';

function ProjectCard({ projectName, projectDescription, projectLink, imageSrc }) {
  return (
    <div className="ProjectCard">
      <img className='projectImage' src={Demo} alt="Project Icon" />
      <div className="project-info">
        <h2>{projectName}</h2>
        <p>{projectDescription}</p>
        <a href={projectLink}>Download</a>
      </div>
    </div>
  );
}

export default ProjectCard;
