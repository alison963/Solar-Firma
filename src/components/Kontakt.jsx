import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

export const Kontakt = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ffghgbc', 'template_hnn70oo', form.current, {
        publicKey: 'ObVjI5rBgon6IHCRA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="ContainerForm">
      <Navbar />
      <Home />
      <h1 className=" text-2xl text-center">
        _______________________
      </h1>
      <h1 className=" text-2xl text-center">Kontakt</h1>
      <form ref={form} onSubmit={sendEmail} className="form">
        <input
          placeholder="Name"
          type="text"
          name="from_name"
          className="eingabe"
        />

        <input
          placeholder="Email"
          type="email"
          name="from_email"
          className="eingabe"
        />

        <textarea
          placeholder="Nachricht"
          name="message"
          className="eingabe"
        />
        <input
          type="submit"
          value="Send"
          className="eingabe button text-2xl p-4 mb-3 rounded-lg "
        />
      </form>
      <Footer />
    </div>
  );
};
export default Kontakt;
