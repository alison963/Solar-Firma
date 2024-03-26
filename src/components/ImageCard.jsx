import React from "react";

function ImageCard(props) {
    return (
        <div className="rounded-sm pb-4">
            <img width={300}  src={props.src}></img>
        </div>
    );
}

export default ImageCard;