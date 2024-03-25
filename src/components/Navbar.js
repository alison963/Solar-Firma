import React from "react";

function Navbar()  {
    return ( 
        <div className="grid lg:grid-cols-2 text-center bg-teal-600 p-5">
            <div>
                <h1 className="font-serif text-center text-teal-100 text-4xl">SolarEnergie</h1>  
            </div>
            <div >  
                <h2 className="font-serif text-center text-teal-100 text-4xl">Kontakt</h2>
            </div>
        </div>
     );
}
 
export default Navbar;