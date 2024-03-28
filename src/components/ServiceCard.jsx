import React from 'react';

function ServiceCard(props) {
  return (
    <div className=" color1 border-solid border-2 rounded-lg">
      <img className="p-4" src={props.src} alt=""></img>
      <h1 className="text-3xl p-4 ">{props.title}</h1>
      <p className="text-xl p-4">{props.text}</p>
    </div>
  );
}

export default ServiceCard;
