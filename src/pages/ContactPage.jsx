import { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    const mailtoLink = `mailto:venkatreddydairy@gmail.com?subject=New Inquiry from ${name}&body=
Name: ${name}%0D%0A
Email: ${email}%0D%0A
Phone: ${phone}%0D%0A
Message: ${message}`;

    window.location.href = mailtoLink;

    setFormData({ name: "", email: "", phone: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const deliveryLocations = [
    "Godumakunta",
    "Bandlaguda",
    "Rampally",
    "Chakripuram",
    "Nagaram",
    "ECIL",
    "Kushaiguda",
    "Anandbagh",
    "Tarnaka",
    "Lalapet",
  ];

  return (
    <div className="contact-page">
      <section className="hero-section">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Have questions or want to place an order? Reach out to us using the
            form below or our contact details.
          </p>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="contact-container">
          <div className="info-box">
            <h2>Contact Information</h2>
            <div className="info-block">
              <h3>Address</h3>
              <p>Samala Venkat Reddy Dairy Farm</p>
              <p>
                Hanuman Temple FJRX+92W, Godumakunta, Secunderabad, Telangana
                501301
              </p>
            </div>
            <div className="info-block">
              <h3>Phone</h3>
              <p>
                <a href="tel:+919848654545" className="contact-link">
                  +91 9848654545
                </a>
              </p>
            </div>
            <div className="info-block">
              <h3>WhatsApp</h3>
              <p>
                <a
                  href="https://wa.me/919848654545"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  +91 9848654545
                </a>
              </p>
            </div>
            <div className="info-block">
              <h3>Email</h3>
              <p>
                <a
                  href="mailto:venkatreddydairy@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  venkatreddydairy@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="form-box">
            <h2>Send Us a Message</h2>
            {submitted && (
              <div className="success-message">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <label>
                Your Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Your Message
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </label>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <section className="delivery-locations-section">
        <div className="container">
          <h2>Milk Delivery Locations</h2>
          <p>
            We deliver fresh milk daily to the following areas in Hyderabad:
          </p>
          <div className="locations-grid">
            {deliveryLocations.map((location, index) => (
              <div key={index} className="location-item">
                {location}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hours-section">
        <div className="container small">
          <h2>Business Hours</h2>
          <div className="hours-grid">
            <div>
              <h3>Weekdays</h3>
              <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
            </div>
            <div>
              <h3>Weekends</h3>
              <p>Saturday - Sunday: 7:00 AM - 7:00 PM</p>
            </div>
          </div>
          <p className="note">
            <strong>Note:</strong> Milk delivery timings may vary. Please
            contact us for specific delivery times in your area.
          </p>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-placeholder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1749269086267!6m8!1m7!1semY3SFySDLbi-jYXYFtpVQ!2m2!1d17.49075120987888!2d78.64840244743374!3f63.75130880610586!4f0!5f0.7820865974627469"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="map-note">
            Visit our dairy farm to see our operations and the care we take in
            producing quality milk.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
