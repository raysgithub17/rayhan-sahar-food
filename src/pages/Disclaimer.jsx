import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Disclaimer() {
  return (
    <div className="page-container">
      <Navbar />
      <main className="disclaimer-page">
        <div className="content-wrapper">
          <h1>Disclaimer</h1>
          
          <section className="disclaimer-section">
            <p>
              https://ramadansehrichennai.netlify.app/ is a not-for-profit community initiative created solely to help connect Masjids, 
              Organizations, Food Providers, and Individuals with those seeking Sehri and Iftar support during Ramadan.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>Our Purpose</h2>
            <p>
              The primary purpose of this platform is to ensure that no one misses their Sehri or Iftar due to lack 
              of awareness or access to food resources.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>What We Are NOT</h2>
            <p>
              We are NOT a commercial platform, agency, broker, delivery service, or food supplier.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>Provider Responsibility</h2>
            <p>
              All Providers listed register voluntarily and are solely responsible for the accuracy and legality of 
              their information. https://ramadansehrichennai.netlify.app/ does NOT verify, guarantee, endorse, or certify any Provider, 
              Masjid, Organization, or individual listed.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>No Guarantees</h2>
            <p>We do not guarantee:</p>
            <ul>
              <li>Food availability</li>
              <li>Quality or hygiene standards</li>
              <li>Timeliness of service</li>
              <li>Accuracy of listed details</li>
              <li>Safety of interactions</li>
            </ul>
            <p>Any interaction is done at the user's own discretion and risk.</p>
          </section>

          <section className="disclaimer-section">
            <h2>Limitation of Liability</h2>
            <p>https://ramadansehrichennai.netlify.app/ shall not be held liable for:</p>
            <ul>
              <li>Disputes between parties</li>
              <li>Financial transactions</li>
              <li>Damages or losses</li>
              <li>Misconduct or negligence</li>
              <li>Food safety or health issues</li>
            </ul>
          </section>

          <section className="disclaimer-section">
            <h2>User Responsibility</h2>
            <p>
              Users are advised to conduct their own due diligence and verification before engaging with any provider.
            </p>
          </section>

          <section className="disclaimer-section disclaimer-footer">
            <p>
              <strong>By using this website, you acknowledge that we function strictly as a facilitator of connections only.</strong>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Disclaimer;
