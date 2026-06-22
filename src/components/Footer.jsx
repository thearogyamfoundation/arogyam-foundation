import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Arogyam Foundation</div>
            <p className="footer-tagline">"Sukham Sampadam" — Wellness is Wealth</p>
            <p className="footer-desc">Empowering underserved communities through holistic mental and physical wellness programs across India.</p>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/initiatives">Initiatives</Link></li>
              <li><Link to="/impact">Impact</Link></li>
              <li><Link to="/get-involved">Get Involved</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Connect</h4>
            <ul className="footer-links">
              <li><a href="https://www.instagram.com/arogyamfoundation/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="tel:+917051721421">+91 70517 21421</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Arogyam Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;