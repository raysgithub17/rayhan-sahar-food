import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
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
    const formGuid = '47bad74a-28d8-499d-8ec1-2b1e3ad037dc';
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    const hubspotData = {
      fields: [
        { name: 'firstname', value: formData.firstname },
        { name: 'lastname', value: formData.lastname },
        { name: 'email', value: formData.email },
        { name: 'phone', value: formData.phone },
        { name: 'message', value: formData.message }
      ],
      context: {
        pageUri: window.location.href,
        pageName: 'Contact Us - Ramadan Guide'
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
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          message: ''
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
      <Navbar />
      <main className="contact-page">
        <div className="content-wrapper">
          <h1>Contact Us</h1>
          <p className="subtitle">Get in touch with us for any queries or suggestions</p>
          
          <div className="contact-intro">
            <p>
              We'd love to hear from you! Whether you have questions about Sehri locations, 
              want to register your service, or have suggestions to improve our platform, 
              please fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstname">First Name *</label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">Last Name *</label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ContactUs;
