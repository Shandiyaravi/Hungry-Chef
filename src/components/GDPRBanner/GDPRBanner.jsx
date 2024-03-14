import React, { useState, useEffect, useContext } from 'react';

import './GDPRBanner.css';

const GDPRBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesEnabled = localStorage.getItem('cookiesEnabled');
    if (cookiesEnabled === null) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesEnabled', 'true');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookiesEnabled', 'false');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      role='dialog'
      aria-labelledby='gdpr-banner-title'
      aria-describedby='gdpr-banner-description'
      className={`${'gdprbanner'} `}
    >
      <h2 id='gdpr-banner-title' className='text-muted'>
        Cookie Consent
      </h2>
      <p id='gdpr-banner-description' className='text-muted'>
        Your privacy matters to us. We use cookies to personalize content and
        analyze our traffic. By clicking &quot;Accept,&quot; you consent to the
        use of cookies for these purposes. You can learn more about it by
        reading our{' '}
        <a href='/privacy-policy' className='text-muted'>
          Privacy Policy
        </a>
        , and you can change your preferences at any time on our{' '}
        <a href='/cookie-settings' className='text-muted'>
          Cookie Settings
        </a>{' '}
        page.
      </p>
      <div role='group' aria-labelledby='gdpr-button-group-label'>
        <button
          onClick={handleAccept}
          className='btn btn-info me-2'
          aria-label='Accept Cookies'
        >
          Accept
        </button>
        <button
          onClick={handleReject}
          className='btn btn-dark'
          aria-label='Reject Cookies'
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default GDPRBanner;
