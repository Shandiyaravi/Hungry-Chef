import React, { useState, useEffect } from 'react';
import MetaTags from '../components/MetaTags';

const CookieSettingsPage = () => {
  const [cookiesEnabled, setCookiesEnabled] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  useEffect(() => {
    const cookiePreference = localStorage.getItem('cookiesEnabled');
    setCookiesEnabled(cookiePreference === 'true');
  }, []);

  const handleSave = (enableCookies) => {
    localStorage.setItem('cookiesEnabled', enableCookies);
    setCookiesEnabled(enableCookies);
    const message = `Cookies have been ${
      enableCookies ? 'enabled' : 'disabled'
    }.`;
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className='container my-5 py-5' role='main'>
      <MetaTags
        title='Cookie Settings - Hungry Chef'
        description='Manage your cookie settings on Hungry Chef. Choose how you want us to use cookies to personalize your experience and respect your privacy.'
      />
      <h1>Cookie Settings</h1>

      <section>
        <h2>Privacy & Cookie Policy</h2>
        <p>
          Thank you for visiting our website. This Privacy and Cookie Policy
          outlines how we collect, use, and protect any information you provide
          to us, as well as the use of cookies on our website.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <p>
          When you visit our website, we may collect certain information about
          your visit, including but not limited to your IP address, browser
          type, referring/exit pages, and the date and time of your visit. We
          may also collect personal information that you voluntarily provide to
          us, such as your name, email address, or any other contact details.
        </p>
      </section>

      <section>
        <h2>Use of Cookies</h2>
        <p>
          Our website uses cookies to enhance your browsing experience and
          provide personalized content. Cookies are small text files that are
          stored on your computer or mobile device when you visit a website. We
          use cookies for various purposes, including analyzing traffic,
          improving website performance, and providing targeted advertising. By
          using our website, you consent to the use of cookies in accordance
          with this policy.
        </p>
        <p>
          You can change your cookie settings at any time by clicking the
          buttons here:
        </p>
        <div>
          <button
            onClick={() => handleSave(true)}
            className='btn btn-info me-2'
            aria-label='Enable Cookies'
          >
            Enable Cookies
          </button>
          <button
            onClick={() => handleSave(false)}
            className='btn btn-dark'
            aria-label='Disable Cookies'
          >
            Disable Cookies
          </button>
        </div>
      </section>

      {showNotification && (
        <div
          className='position-fixed p-3'
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'lightgreen',
          }}
          aria-live='assertive'
        >
          {notificationMessage}
        </div>
      )}
    </div>
  );
};

export default CookieSettingsPage;
