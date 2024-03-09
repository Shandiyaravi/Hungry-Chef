import React from 'react';
import MetaTags from '../components/MetaTags';
import MainContent from '../components/MainContent/MainContent';
import foodBackground from '../assets/foodBackground.webp';

const HomePage = () => {
  return (
    <div>
      <header>
        <MetaTags
          title='Home - Hungry Chef'
          description='Explore a world of flavors with Hungry Chef! Find easy-to-follow recipes from around the globe, perfect for every occasion and skill level. Start your culinary adventure today.'
        />
      </header>

      <main className='container col-xxl-16 px-4'>
        <section
          id='top'
          className='row flex-lg-row justify-content-evenly align-items-center g-5 py-5 mt-1'
        >
          <div className='col-10 col-sm-8 col-lg-6'>
            <img
              src={foodBackground}
              className='d-block mx-lg-auto img-fluid'
              alt='Welcome to Hungry Chef - Delicious Food'
              width={700}
              height={500}
              loading='lazy'
            />
          </div>
          <div className='col-lg-6'>
            <h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3'>
              Welcome to Hungry Chef
            </h1>
            <p className='lead' style={{ color: '#4c723b' }}>
              Your ultimate destination for easy and delicious recipes from
              around the globe! Whether you're a seasoned chef or a novice in
              the kitchen, our app is your go-to resource for satisfying your
              culinary cravings.
            </p>
            <a
              href='#recipe'
              className='px-4 me-md-2 text-info'
              aria-label='Check out our new recipes'
            >
              Check out our new recipes!
            </a>
          </div>
        </section>

        <section id='recipe'>
          <MainContent />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
