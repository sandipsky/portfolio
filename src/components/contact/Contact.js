import React from "react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

import "./contact.css";
import swal from "sweetalert";

const Contact = () => {
  const initiaValues = {
    name: "",
    email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initiaValues);

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v3r3qmx",
        "template_1pfzpnj",
        form.current,
        "iEjauAfPzdzSM-eBE"
      )
      .then(
        (result) => {
          console.log(result.text);

          swal({
            title: "Message Sent !",
            text: "Thanks for messaging me.",
            type: "success",
          });

          setFormValues(initiaValues);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="container contact-container">
        {/* direct contact */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="your full name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="your email"
            required
            value={formValues.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            value={formValues.message}
            id="me"
            cols="30"
            rows="7"
            placeholder="your message..."
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;