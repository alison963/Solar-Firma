import React from 'react';
import ServiceCard from './ServiceCard';

function Services() {
  return (
    <div>
      <h1 className=" text-2xl text-center">
        _______________________
      </h1>
      <h1 className=" text-2xl text-center">
        Unsere Dienstleistungen
      </h1>
      <div className="ServiceCards  ">
        <div className="items">
          <ServiceCard
            title="Technische Betriebsführung"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
          />
        </div>
        <div className="items">
          <ServiceCard
            title="Anlagenoptimierung"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
          />
        </div>
        <div className="items">
          <ServiceCard
            title="Zusatzleistungen"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
          />
        </div>
        <div className="items">
          <ServiceCard
            title="Zusatzleistungen"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
