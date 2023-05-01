import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form=useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mfb9jbv','template_fk6w4xc', form.current, 'PHEhetHdw_fE8oA-a')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    };
  return (
    <section className="contact container section" id="contact">
        <h2 className="section__title">Get In Touch</h2>
        <div className="contact__container grid">
            <div className="contact__info">
                <h3 className="contact__title">I'm at your services</h3>
                <p className="contact__details">my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            </div>
            <form ref={form} onSubmit={sendEmail} action="" className="contact__form">
                <div className="contact__form-group">
                    <div className="contact__form-div">
                        <input type="text" className="contact__form-input" name='user__name' placeholder='Insert your name' />
                    </div>

                    <div className="contact__form-div">
                        <input type="email" className="contact__form-input" name='user__email' placeholder='Insert your email' required/>
                    </div>
                </div>
                <div className="contact__form-div">
                        <input type="text" className="contact__form-input" name='subject' placeholder='Insert your subject' required/>
                </div>
                <div className="contact__form-div contact__form-area">
                    <textarea name="message" cols="30" rows="10" className='contact__form-input' placeholder='Write your message' required></textarea>
                </div>
                <button type='submit' className="btn message">Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact