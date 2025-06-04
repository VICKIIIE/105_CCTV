import React from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import whatsapp_icon from '../../assets/Whatsapp_icon.jpg'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "bf80685b-03ff-400d-9a69-edeffa75cb4a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("❌ " + data.message);
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Send Us a Message</h2>
          <p>
            Feel free to reach out through the contact form or find our contact information below.<br/>Your feedback, questions, and suggestions are important to us.
          </p>
        <ul className="contact-details">
  <li>
    <img src={mail_icon} alt="Email" />
    <a href="emailto:105entertainment2019@gmail.com">105entertainment2019@gmail.com</a>
  </li>
  <li>
    <img src={phone_icon} alt="Phone" />
    <a href="tel:+254716925919">+254 716 925 919</a>
  </li>
  <li>
    <img src={whatsapp_icon} alt="WhatsApp" />
    <a href="https://wa.me/254716925919" target="_blank" rel="noopener noreferrer">
      WhatsApp Chat
    </a>
  </li>
  <li>
    <img src={location_icon} alt="Location" />
    <span>30100, Moi's Bridge, Eldoret<br />MA 00, Kenya</span>
  </li>
</ul>

        </div>

        <div className="contact-form">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" required />

            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              inputMode="numeric"
              pattern="[0-9]*"
              required
            />

            <label>Your Message</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>

            <button type="submit" className="btn-dark">
              Submit Now <img src={white_arrow} alt="Arrow" />
            </button>
          </form>
          <span className="form-status">{result}</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
