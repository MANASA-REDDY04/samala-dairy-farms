import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div>
            <h3>Samala Venkat Reddy Dairy</h3>
            <p>Providing fresh and pure dairy products since establishment.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3>Contact Information</h3>
            <p>
              <strong>Phone:</strong> 9848654545
            </p>
            <p>
              <strong>WhatsApp:</strong> 9848654545
            </p>
            <p>
              <strong>Email:</strong> venkatreddydairy@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Samala Venkat Reddy Dairy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
