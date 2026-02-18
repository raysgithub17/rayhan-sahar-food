import { useState } from 'react';
import { Link } from 'react-router-dom';

function HelloBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="hello-bar">
      <div className="hello-bar-content">
        <div className="hello-bar-icon">🌙 Hello Muslim Community!</div>
        <div className="hello-bar-text">
          <span className="hello-bar-message">
            Organizing Sehri in Chennai?{' '}
            <Link to="/join-provider" className="hello-bar-link">
              Register your masjid or area with us.
            </Link>{' '}
            May Allah reward you for your service.
          </span>
        </div>
        <button 
          className="hello-bar-close" 
          onClick={() => setIsVisible(false)}
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default HelloBar;
