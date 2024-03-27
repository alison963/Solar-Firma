import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="grid lg:grid-cols-2 text-center p-5">
      <div>
        <Link
          to="/home"
          className="font-serif text-center text-teal-600 text-4xl"
        >
          SolarEnergie
        </Link>
      </div>
      <div>
        <Link
          to="/contact"
          className="font-serif text-center text-teal-600 text-4xl"
        >
          Kontakt
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
