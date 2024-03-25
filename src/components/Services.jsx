import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
    return (
        <div className="bg-teal-600 min-h-screen">
            <h1 className=" text-xl py-5 text-center">Unsere Dienstleistungen</h1>
            <div className=" grid lg:grid-cols-3 text-center ">
                <div >
                    <ServiceCard 
                    title = "Technische Betriebsführung"
                    text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
                    />
                </div>
                <div>
                    <ServiceCard 
                    title = "Anlagenoptimierung"
                    text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
                    />
                </div>
                <div>
                    <ServiceCard 
                    title= "Zusatzleistungen"
                    text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
                    />
                </div>
                <div className="lg:col-span-3">
                    <ServiceCard 
                    title= "Zusatzleistungen"
                    text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
                    />
                </div>
            </div>

        </div>
    )
}

export default Services;