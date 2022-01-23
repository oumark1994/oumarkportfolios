import React,{useState} from 'react';
import './contact.css';
import axios from 'axios'
import contactImg from "./img/im5.JPG"
import {useRef} from 'react'
import emailjs  from 'emailjs-com'
function Contact() {
    const [done,setDone] = useState(false)
   
     
  const formRef = useRef()
  const handleSubmit = (e)=>{
      
      e.preventDefault();
      emailjs.sendForm('service_pddi0dw', 'template_za5e9se', formRef.current, 'user_gwH6NxrAEhvpnHGFeieoT')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }
    return (
        <div className="contact component__space" id="Contact">
        <div className="row">
            <div className="col__2">
                <div className="contact__box"> 
                    <div className="contact__meta">
                        <h1 className="hire__text">Hire Me.</h1>
                        <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p>
                       <p className="hire__text white"><strong>+233238842788</strong> or email <strong>oumarfilston@gmail.com</strong></p>
                    </div>
                    
                    <div className="input__box">
                        <form  ref={formRef} onSubmit={handleSubmit}>
                       <input type="text" className="contact name" name='user_name' placeholder="Your name *" />
                       <input type="text" className="contact email" name='user_email' placeholder="Your Email *" />
                       <input type="text" className="contact subject" name='user_subject'  placeholder="Write a Subject" />
                       <textarea name="message" id="message" name='message' placeholder="Write Your message"></textarea>
                       <button className="btn contact pointer" type="submit">Submit</button>
                       {done && <h2 style={{color:'white'}}>Thank you for contacting us</h2>}
                       </form>
                    </div>
                </div>
            </div>
            <div className="col__2">
                <img src={contactImg} style={{height:'550px'}} alt="" className="contact__img" />
            </div>
        </div>
    </div>
    )
}

export default Contact
