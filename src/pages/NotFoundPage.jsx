import { useContext } from 'react';

import MetaTags from '../components/MetaTags';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className={`container h-full `}>
      <MetaTags
        title='Page Not Found - Hungry Chef'
        description="Oops! The page you're looking for cannot be found. Explore Hungry Chef for recipes, cooking tips, and culinary inspiration."
      />

      <h1 className='mx-auto p-2' style={{ width: '400px' }}>
        404: Page Not Found
      </h1>
      <p className='text-center'>
        We're sorry, but the page you are looking for might have been removed,
        had its name changed, or is temporarily unavailable.
      </p>

      <p className='text-center'>
        <Link to='/' className='text-success' aria-label='Return to Home'>
          Return to Home
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
