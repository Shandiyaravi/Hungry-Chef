import React from 'react';
import MetaTags from '../components/MetaTags';

const AccessibilityStatementPage = () => {
  return (
    <div
      className='container my-5 py-5'
      style={{ minHeight: '55vh' }}
      role='main'
    >
      <MetaTags
        title='Accessibility Statement - Hungry Chef'
        description='Read our Accessibility Statement to learn how Hungry Chef is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.'
      />

      <h1>Accessibility Statement</h1>

      <section>
        <p>
          At Hungry Chef, we are committed to ensuring digital accessibility for
          people with disabilities. We are continually improving the user
          experience for everyone and applying the relevant accessibility
          standards.
        </p>
      </section>

      <section>
        <h2>Efforts to Support Accessibility</h2>
        <ul>
          <li>
            Using semantic HTML to provide better structure for assistive
            technologies.
          </li>
          <li>
            Ensuring that all site functionality is available via keyboard
            navigation.
          </li>
          <li>
            Providing alternative text descriptions for images to convey their
            purpose.
          </li>
          <li>
            Continuously training our team on accessibility practices and
            guidelines.
          </li>
        </ul>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          We welcome your feedback on the accessibility of Hungry Chef. Please
          let us know if you encounter any barriers:{' '}
          <a
            href='mailto:Fed25Team6@hyperisland.se'
            aria-label='Send email to Fed25Team6@hyperisland.se'
          >
            Fed25Team6@hyperisland.se
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default AccessibilityStatementPage;
