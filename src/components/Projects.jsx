import React from 'react';
import ServiceCard from './ServiceCard';
import ProjectCard from './ProjectCards';

function Projects() {
  return (
    <div className="ContainerService ">
      <h1 className="text-2xl text-center">
        _______________________
      </h1>
      <h1 className="text-2xl text-center">Unsere Projekte</h1>
      <div className="ServiceCards">
        <div className="items ">
          <ProjectCard
            title="Gifhorn"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="items ">
          <ProjectCard
            title="Braunschweig"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
            src="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
