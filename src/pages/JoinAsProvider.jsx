import { useState } from 'react';
import HelloBar from '../components/HelloBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function JoinAsProvider() {
  const [formData, setFormData] = useState({
    vendor_name: '',
    type: '',
    area_name: '',
    full_address: '',
    vendor_contact_number: '',
    vendor_contact_name: '',
    time: '',
    email: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const portalId = '245234841';
    const formGuid = '6ce3f8f6-e22c-464d-9511-53efa381d7fa';
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    const generatedEmail = formData.email || 
      `${formData.vendor_name.toLowerCase().replace(/\s+/g, '')}@novmail.com`;

    const hubspotData = {
      fields: [
        { name: 'email', value: generatedEmail },
        { name: 'vendor_name', value: formData.vendor_name },
        { name: 'type', value: formData.type },
        { name: 'area_name', value: formData.area_name },
        { name: 'full_address', value: formData.full_address },
        { name: 'vendor_contact_number', value: formData.vendor_contact_number },
        { name: 'vendor_contact_name', value: formData.vendor_contact_name },
        { name: 'time', value: formData.time }
      ],
      context: {
        pageUri: window.location.href,
        pageName: 'Join as Provider - Ramadan Guide'
      }
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hubspotData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          vendor_name: '',
          type: '',
          area_name: '',
          full_address: '',
          vendor_contact_number: '',
          vendor_contact_name: '',
          time: '',
          email: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      <HelloBar />
      <Navbar />
      
      <main className="contact-page">
        <div className="content-wrapper">
          <h1>Join as a Provider</h1>
          <p className="subtitle">Register your masjid, trust, hotel, or restaurant to help the community</p>
          <p className="text-center text-sm text-gray-500" style={{ marginBottom: '2rem' }}>
            Any questions?{' '}
            <a href="/contact" className="text-green-600 hover:text-green-700 font-medium">
              Contact us
            </a>
          </p>
          
          <div className="form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="vendor_name">Vendor Name *</label>
                <input
                  type="text"
                  id="vendor_name"
                  name="vendor_name"
                  value={formData.vendor_name}
                  onChange={handleChange}
                  placeholder="e.g., Al-Madina Masjid or Hotel bismillah"
                  required
                />
              </div>

              <div className="form-group">
                <label>Type *</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="type"
                      value="Free"
                      checked={formData.type === 'Free'}
                      onChange={handleChange}
                      required
                    />
                    <span>Free</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="type"
                      value="Paid"
                      checked={formData.type === 'Paid'}
                      onChange={handleChange}
                      required
                    />
                    <span>Paid</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="area_name">Area Name *</label>
                <input
                  type="text"
                  id="area_name"
                  name="area_name"
                  value={formData.area_name}
                  onChange={handleChange}
                  placeholder="e.g., T. Nagar, Adyar, Velachery"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="full_address">Full Address *</label>
                <textarea
                  id="full_address"
                  name="full_address"
                  rows="3"
                  value={formData.full_address}
                  onChange={handleChange}
                  placeholder="Enter complete address with landmarks"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="vendor_contact_number">Vendor Contact Number *</label>
                <input
                  type="tel"
                  id="vendor_contact_number"
                  name="vendor_contact_number"
                  value={formData.vendor_contact_number}
                  onChange={handleChange}
                  placeholder="e.g., 9123456789"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="vendor_contact_name">Vendor Contact Name *</label>
                <input
                  type="text"
                  id="vendor_contact_name"
                  name="vendor_contact_name"
                  value={formData.vendor_contact_name}
                  onChange={handleChange}
                  placeholder="Contact person name eg: Mohamed Rayhan"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input
                  type="text"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  placeholder="e.g., 3:00 AM - 4:30 AM"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com (Optional)"
                />
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  Thank you! Your registration has been submitted successfully. We'll review and add your listing soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  Oops! Something went wrong. Please try again later or contact us directly.
                </div>
              )}
            </form>
          </div>

          <div className="info-card" style={{ marginTop: '2rem' }}>
            <h2>Why Join Our Platform?</h2>
            <ul className="benefits-list">
              <li>
                <strong>Reach More People:</strong> Connect with thousands of Muslims looking for Sahar food in Chennai during Ramadan.
              </li>
              <li>
                <strong>Free Listing:</strong> Get listed on our platform at no cost with your location, timings, and contact details.
              </li>
              <li>
                <strong>Help the Community:</strong> Make it easier for people to find Sahar/Sehri food during the blessed month.
              </li>
              <li>
                <strong>Visibility:</strong> Appear in search results when people look for Sahar food in your area.
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default JoinAsProvider;
