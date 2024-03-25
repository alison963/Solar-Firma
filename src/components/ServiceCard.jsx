import React from "react";

function ServiceCard(props) {
    return (
        <div className="m-5 p-5 bg-teal-100 border-solid border-2 rounded-lg">
            <h1 className="p-3 font-medium" >
                {props.title}</h1>
            <p>{props.text}</p>
        </div>
    );
}

export default ServiceCard;