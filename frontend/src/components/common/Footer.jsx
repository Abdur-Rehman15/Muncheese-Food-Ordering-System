import { Link } from 'react-router-dom'
import '../../styles/components/common/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🍕</span>
              <span className="logo-text">Mun<span>cheese</span></span>
            </div>
            <p className="footer-description">
              Your favorite food delivery service. Fast, reliable, and delicious meals delivered to your doorstep.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📷</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/">Become a Partner</Link></li>
              <li><Link to="/">FAQs</Link></li>
              <li><Link to="/">Blog</Link></li>
              <li><Link to="/">Careers</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h3 className="footer-heading">Support</h3>
            <ul className="footer-links">
              <li><Link to="/">Help Center</Link></li>
              <li><Link to="/">Contact Us</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Terms of Service</Link></li>
              <li><Link to="/">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <p>Valencia Town, Lahore, Pakistan</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <p>+92 300 1234567</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <p>support@muncheese.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; 2025 Muncheese. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/">Privacy</Link>
            <Link to="/">Terms</Link>
            <Link to="/">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

