import React from 'react';
import MetaTags from '../components/MetaTags';

const AboutUsPage = () => {
  return (
    <div className='container my-5 py-5' style={{ minHeight: '55vh' }}>
      <MetaTags
        title='About Us - Hungry Chef'
        description='Learn more about Hungry Chef, our passion for global cuisine, and our mission to bring people together through the joy of cooking.'
      />

      <h1>About Hungry Chef</h1>

      <section>
        <p>
          Welcome to Hungry Chef Your ultimate destination for discovering
          delicious and easy-to-follow recipes from around the globe. Whether
          you're a seasoned chef or a kitchen novice, our platform is designed
          to inspire your culinary journey.
        </p>
      </section>

      <section>
        <h2>Our Story</h2>
        <p>
          Founded in 2024, Hungry Chef has grown into a vibrant community of
          food lovers. Our mission is to empower individuals to explore the
          world of cooking with confidence and joy.
        </p>
      </section>

      <section>
        <h2>Our Belief</h2>
        <p>
          From traditional dishes to modern cuisine, Hungry Chef is your partner
          in the kitchen. Let's cook something amazing together!
        </p>
      </section>
    </div>
  );
};

export default AboutUsPage;
