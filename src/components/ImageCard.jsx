import React from "react";

function ImageCard(props) {
    return (
        <div className="border-solid border-2 rounded-sm">
            <img src={props.src}></img>
        </div>
    );
}

export default ImageCard;