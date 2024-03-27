import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ServiceCard(props) {
  return (
    <div className=" color1 border-solid border-2 rounded-lg">
      <img className="float-left p-4" src={props.src} alt=""></img>
      <h1 className="text-3xl p-4">{props.title}</h1>
      <p className="text-xl p-4">{props.text}</p>
      <button className="text-2xl p-4 mb-3 bg-teal-500 rounded-lg ">
        Kontakt aufnehmen
      </button>
      <FontAwesomeIcon
        className="bg-yellow-200"
        icon="fa-solid fa-solar-panel"
      />
    </div>
  );
}

export default ServiceCard;
