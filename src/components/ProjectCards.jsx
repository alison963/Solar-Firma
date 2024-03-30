import React from 'react';

function ProjectCard(props) {
  return (
    <div className=" color1 border-solid border-2">
      <img className="p-4" src={props.src} alt=""></img>
      <h1 className="text-3xl p-4 text-left">{props.title}</h1>
      <p className="text-xl p-4 text-left">{props.text}</p>
      <button className=" button text-2xl p-4 mb-3 rounded-lg ">
        Kontakt aufnehmen
      </button>
    </div>
  );
}

export default ProjectCard;
