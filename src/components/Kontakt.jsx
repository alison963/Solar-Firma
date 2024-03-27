import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

function Kontakt() {
  return (
    <div className="ContainerForm">
      <Navbar />
      <Home />
      <h1 className=" text-2xl text-center">
        _______________________
      </h1>
      <h1 className=" text-2xl text-center">Kontakt</h1>
      <div className="form">
        <input className="eingabe" placeholder="Name"></input>

        <input className="eingabe" placeholder="Nachname"></input>

        <input className="eingabe" placeholder="Telefon"></input>

        <input className="eingabe" placeholder="PLZ"></input>

        <textarea
          className="eingabe"
          id="subject"
          name="subject"
          placeholder="Verfasse eine Nachricht"
        ></textarea>
        <button className="Submit text-2xl p-4 mb-3 bg-teal-500 rounded-lg ">
          Senden
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Kontakt;
