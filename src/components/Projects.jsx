import React from "react";
import ImageCard from "./ImageCard";
import ServiceCard from "./ServiceCard";


function Projects( ) {
    return (
        <div className="bg-teal-600 min-h-full">
            <h1 className="text-xl text-center">Unsere Projekte</h1>
            <div className="rounded-sm grid lg:grid-cols-3 mx-10 my-10 gap-5">
                <div className="lg:col-span-2">
                    <ImageCard
                        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </div>
                <div className="lg:col-span-1">
                    <ServiceCard
                        title= "Gifhorn"
                        text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
                    />
                </div>
                <div className="lg:col-span-2">
                    <ImageCard
                        src="https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </div>
                <div className="lg:col-span-1">
                    <ServiceCard
                        title= "Braunschweig"
                        text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects;    