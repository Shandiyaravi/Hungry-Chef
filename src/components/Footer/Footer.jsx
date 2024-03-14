import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <footer className='row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-3 mt-4 border-top footer-container'>
          <div className='col mb-3'>
            <h2 className='text-muted'>PRIVACY</h2>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <Link
                  to='/cookie-settings'
                  className='nav-link p-0 text-body-secondary'
                  aria-label='Go to Cookie Settings'
                >
                  Cookie settings
                </Link>
              </li>
              <li className='nav-item mb-2'>
                <Link
                  to='/privacy-policy'
                  className='nav-link p-0 text-body-secondary'
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className='col mb-3'>
            <h2 className='text-muted'>About</h2>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <Link
                  to='/contact'
                  className='nav-link p-0 text-body-secondary'
                >
                  About Us
                </Link>
              </li>
              <li className='nav-item mb-2'>
                <Link
                  to='/accessibility-statement'
                  className='nav-link p-0 text-body-secondary'
                >
                  Accessibility
                </Link>
              </li>
              <li className='nav-item mb-2'>
                <Link to='/faq' className='nav-link p-0 text-body-secondary'>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className='col mb-3'>
            <h2 className='text-muted'>Share Us</h2>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <a
                  href='https://www.facebook.com/sharer/sharer.php?u=https://recipe-alex-test.netlify.app/'
                  target='_blank'
                  className='nav-link p-0 text-body-secondary'
                  aria-label='Share on Facebook'
                  rel='noreferrer'
                >
                  Share on Facebook
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/intent/tweet?text=Not%20sure%20what%20to%20cook%3F%20Come%20check%20out%20Hungry%20Chef%20for%20some%20culinary%20inspiration!&url=recipe-alex-test.netlify.app/'
                  target='_blank'
                  className='nav-link p-0 text-body-secondary'
                  aria-label='Share on Twitter'
                  rel='noreferrer'
                >
                  Share on Twitter
                </a>
              </li>
            </ul>
          </div>

          <div className='col mb-3'>
            <h2 className='text-muted'>Follow Us</h2>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <a
                  href='https://github.com/shandiya94/Team6-collaborative-work/tree/main'
                  className='nav-link p-0 text-body-secondary'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>
              </li>
            </ul>
          </div>

          <div className='col mb-3'>
            <h2 className='text-muted'>Contact Information</h2>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2 text-body-secondary'>
                <address>
                  Virkesvägen 2, 12030, Stockholm <br />
                  <a
                    href='mailto:Fed25Team6@hyperisland.se'
                    className='nav-link p-0 text-body-secondary'
                  >
                    Fed25Team6@hyperisland.se
                  </a>
                </address>
              </li>
            </ul>
          </div>

          <hr className='footer-hr' />

          <div className='d-flex justify-content-between w-100'>
            <div className='col'>
              <p className='text-body-secondary footer-team'>TEAM 6</p>
            </div>
            <div className='col mb-3'>
              <svg className='bi me-2' width='40' height='32'>
                <use xlinkHref='#bootstrap'></use>
              </svg>
              <p className='text-body-secondary footer-copyright'>
                Copyright ©2024 Hungry Chef, Inc or related companies. All
                rights reserved, including rights for text and data mining and
                training of artificial technologies or similar technologies.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
