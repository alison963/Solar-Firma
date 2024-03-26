import React from "react";

function ServiceCard(props) {
    return (
        <div className=" bg-teal-100 border-solid border-2 rounded-lg">
            <h1 className= "text-3xl p-4" >{props.title}</h1>
            <p className="text-xl p-4" >{props.text}</p>
            <button className= "text-2xl p-4 mb-3 bg-teal-500 rounded-lg " >Kontakt aufnehmen</button>
        </div>
    );
}

export default ServiceCard;