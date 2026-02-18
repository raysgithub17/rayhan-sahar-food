import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AboutUs() {
  return (
    <div className="page-container">
      <Navbar />
      <main className="about-page">
        <div className="content-wrapper">
          <h1>About Ramadan Guide</h1>
          
          <section className="about-section">
            <h2>About This Platform</h2>
            <p>
              Ramadan Guide is a community service platform created to help Muslims in Chennai easily find 
              Sehri locations and prayer times during the blessed month of Ramadan. This platform provides 
              a comprehensive directory of free and paid Sehri providers across Chennai.
            </p>
          </section>

          <section className="about-section">
            <h2>Developer</h2>
            <p>
              This platform was developed by <strong>Mohamed Rayhan</strong>, a passionate developer committed 
              to serving the Muslim community in Chennai. The goal is to ensure no one misses their Sehri due 
              to lack of information about nearby providers.
            </p>
          </section>

          <section className="about-section">
            <h2>Features</h2>
            <ul>
              <li><strong>Sehri Locations:</strong> Comprehensive list of 100+ Sehri providers in Chennai</li>
              <li><strong>Prayer Times:</strong> Complete Ramadan prayer schedule for Chennai</li>
              <li><strong>Search & Filter:</strong> Easy search by location, name, or type (Free/Paid)</li>
              <li><strong>Contact Details:</strong> Direct access to provider information and timings</li>
            </ul>
          </section>

          <section className="about-section">
            <p className="arabic-text">رمضان مبارك</p>
            <p className="tagline">May Allah accept our fasting and prayers during this blessed month of Ramadan.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;
