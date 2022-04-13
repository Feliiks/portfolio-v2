import React, { useState } from 'react'
import ContactForm from './ContactForm'
import emailjs from '@emailjs/browser'

import ContactDeco from "../../assets/contact-deco.png"

const SectionContact = () => {
  const [sent, setSent] = useState(false)

  const sendFeedback = async (variables) => {
    try {
      await emailjs.send(
        "service_h4ih047",
        "template_vpmw3ha",
        variables,
        "user_ebmtquP9MWrfdCKIl3rHx"
      )

      setSent(true)
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="row section-contact">
      <div className="row title">
        <h2> CONTACT ME </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="row">
        <div className="col-6">
          { sent ? <p style={{color: "green"}}> Merci! Votre message a bien été envoyé. </p> : <ContactForm sendFeedback={sendFeedback} />}
        </div>
        <div className="contact-deco col-6">
          <img src={ContactDeco} alt="contact-deco" />
        </div>
      </div>
    </div>
  )
}

export default SectionContact