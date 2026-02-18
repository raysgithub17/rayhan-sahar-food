function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🕌 Ramadan Guide</h3>
            <p>Your comprehensive guide to Sehri locations and prayer times in Chennai during the holy month of Ramadan.</p>
            <p className="arabic-text">رمضان مبارك</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/prayer-times">Prayer Times</a></li>
              <li><a href="/duas">Duas</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="/disclaimer">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Ramadan Guide Chennai. All rights reserved.</p>
          <p>Built with ❤️ by Mohamed Rayhan for the Muslim community of Chennai</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
