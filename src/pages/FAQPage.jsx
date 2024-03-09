import React from 'react';
import MetaTags from '../components/MetaTags';

const FAQPage = () => {
  return (
    <main className='container my-5 py-5'>
      <MetaTags
        title='FAQ - Hungry Chef'
        description='Find answers to frequently asked questions about Hungry Chef, including tips on cooking, recipe selection, and how to use our website.'
      />

      <h1>Frequently Asked Questions</h1>

      <section>
        <h2>How can I find a recipe?</h2>
        <p>
          Use our search feature at the top of the page or browse recipes by
          category. You can also explore our latest and most popular recipes on
          the homepage.
        </p>
      </section>

      <section>
        <h2>Do I need an account to save recipes?</h2>
        <p>
          Yes, creating an account allows you to save your favorite recipes,
          create shopping lists, and more. Registration is free and easy.
        </p>
      </section>

      <section>
        <h2>Can I submit my own recipes?</h2>
        <p>
          Yes, we love to see your culinary creations! Please sign in to your
          account and visit the "Submit a Recipe" section. Follow the
          instructions to share your recipe with the Hungry Chef community.
        </p>
      </section>
    </main>
  );
};

export default FAQPage;
