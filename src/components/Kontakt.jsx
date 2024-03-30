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
    <div>
      <Navbar />
      <Home />
      <h1 className="text-2xl text-center">
        _______________________
      </h1>
      <h1 className=" text-4xl text-center">Kontakt</h1>
      <div className='formGrid '>
        <div className='formItems para '>
            <p className='text-3xl font-serif '>Öffnungszeiten:</p>
            <p className="text-2xl font-serif ">
            Montag - Freitag: 9:00 - 18:00 Uhr <br /> 
            Samstag: 10:00 - 14:00 Uhr
            </p>
            <h1 className='text-2xl font-serif '>
            Wir freuen uns über Ihr Interesse und stehen Ihnen gerne für Fragen,
            Anregungen oder Feedback zur Verfügung.
            Unser Team ist bemüht,  weiterzuhelfen.</h1>
          </div>
        <form ref={form} onSubmit={sendEmail} className="form formItems">
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
      </div>
      <Footer />
    </div>
  );
};
export default Kontakt;
