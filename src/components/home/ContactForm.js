import React, { useEffect, useRef, useState } from 'react'

const ContactForm = ({ sendFeedback }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const formMsgRef = useRef()

  useEffect(() => {
    let charts = document.querySelectorAll('.chart');

    Array.from(charts).forEach((chart, index) => {
      chart.firstChild.addEventListener('focus', () => {
        Array.from(charts).forEach((chart, index) => chart.lastChild.style.width = "0");
        chart.lastChild.style.width = "100%";
      });
    });
  });

  const isName = new RegExp(/^[a-z ,.'-]+$/i).test(name)
  const isEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)

  useEffect(() => {
    if (isName && isEmail) {
      formMsgRef.current.innerHTML = ""
    }
  }, [isName, isEmail])

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      if (!isName || !isEmail) throw new Error()

      await sendFeedback({
        toEmail: "sobrero.ludovic@gmail.com",
        fromName: name,
        fromEmail: email,
        subject,
        message
      })
    } catch (err) {
      if (!isName) {
        formMsgRef.current.innerHTML = "Erreur ! Nom invalide."
      }
      if (!isEmail) {
        formMsgRef.current.innerHTML = "Erreur ! Email invalide."
      }
    }
  }

  return (
    <form className="contact-form" id="contact-form">
      <div className="form-content">
        <div className="chart">
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            value={name}
          />
          <div className="input-al" />
        </div>
        <div className="chart">
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            value={email}
          />
          <div className="input-al" />
        </div>
        <div className="chart">
          <input
            type="text"
            id="subject"
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            value={subject}
            autoComplete="off"
          />
          <div className="input-al" />
        </div>
        <div className="chart">
          <textarea
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            value={message}
          />
          <div className="input-al" />
        </div>
      </div>
      <div className="form-footer">
        <button className="btn" onClick={handleSubmit}> Send </button>
        <div className="form-message" ref={formMsgRef} />
        <span> 0 / 500 </span>
      </div>
    </form>
  )
}

export default ContactForm