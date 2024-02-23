import React, { useContext } from 'react';
import { foodContext } from '../hooks/foodContext';
import { Link } from 'react-router-dom';

const CarouselItem = React.memo(({ item, index }) => (
  <div
    className={`carousel-item ${index === 0 ? 'active' : ''}`}
    key={item.idMeal}
  >
    <div className='container d-flex justify-content-between align-items-center'>
      <img
        src={item.strMealThumb}
        className='d-block shadow-lg'
        alt={item.strMeal}
        style={{
          maxHeight: '450px',
          maxWidth: '100%',
          objectFit: 'cover',
        }}
      />
      <div className='ms-5' style={{ width: '50%' }}>
        <h1 className='display-4 fst-italic'>{item.strMeal}</h1>
        <p className='text-muted' style={{ fontSize: '1.5rem' }}>
          <strong>Feast on the Flavors:</strong> Dive into the heart of{' '}
          {item.strCategory} cuisine, a culinary journey that promises to
          delight your taste buds.
        </p>
        <p className='text-muted' style={{ fontSize: '1.5rem' }}>
          <strong>Discover the Origin:</strong> Savor the authentic tastes
          originating from {item.strArea}, where tradition meets taste.
        </p>
        <Link to={`/recipe/${item.idMeal}`}>View Recipe</Link>
      </div>
    </div>
  </div>
));

const MainContent = () => {
  const { food } = useContext(foodContext);

  if (!food || food.length === 0) {
    return (
      <div
        className='d-flex justify-content-center align-items-center text-xxl bg-white'
        style={{ height: '100vh' }}
      >
        <h2>No meals found.</h2>
      </div>
    );
  }

  return (
    <div>
      <hr
        className='featurette-divider'
        style={{ borderColor: '#666666', borderWidth: '0.2rem' }}
      />
      <div
        id='myCarousel'
        className='carousel slide mb-6 my-5'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          {food.map((_, index) => (
            <button
              key={index}
              type='button'
              data-bs-target='#myCarousel'
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className='carousel-inner'>
          {food.map((item, index) => (
            <CarouselItem key={item.idMeal} item={item} index={index} />
          ))}
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#myCarousel'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#myCarousel'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
      <hr
        className='featurette-divider'
        style={{ borderColor: '#666666', borderWidth: '0.2rem' }}
      />
      <div className='container marketing'>
        <div className='row m-5'>
          {food.slice(3, 6).map((item) => (
            <div
              key={item.idMeal}
              className='col-lg-4 justify-content-center align-items-center text-center'
            >
              <img
                src={item.strMealThumb}
                className='bd-placeholder-img rounded-circle my-3 shadow-lg'
                width='200'
                height='200'
                alt={item.strMeal}
              />
              <h2 className='fw-normal my-3'>{item.strMeal}</h2>
              <p className='my-3 text-muted'>
                Discover the taste of {item.strArea} cuisine with our{' '}
                {item.strCategory} recipe, {item.strMeal}. Perfect for any
                occasion!
              </p>
              <p>
                <Link
                  to={`/recipe/${item.idMeal}`}
                  className='text-primary'
                  style={{ textDecoration: 'underline' }}
                >
                  Discover More »
                </Link>
              </p>
            </div>
          ))}
        </div>

        <hr
          className='featurette-divider'
          style={{ borderColor: '#666666', borderWidth: '0.2rem' }}
        />

        {food.slice(6, 9).map((item, index) => (
          <div
            key={item.idMeal}
            className={`row featurette ${
              index % 2 === 0 ? '' : 'flex-row-reverse'
            } align-items-center justify-content-center`}
          >
            <div className='col-md-7'>
              <h2 className='featurette-heading'>{item.strMeal} </h2>
              <h3>
                <span className='text-muted'>{item.strArea} Cuisine.</span>
              </h3>
              <p className='text-muted'>
                {`${item.strInstructions.slice(0, 400)} ... `}
                <Link
                  to={`/recipe/${item.idMeal}`}
                  className='text-primary'
                  style={{ textDecoration: 'underline' }}
                >
                  Learn More
                </Link>
              </p>
            </div>
            <div className='col-md-5 my-5'>
              <img
                src={item.strMealThumb}
                className='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto'
                width='500'
                height='500'
                alt={item.strMeal}
                style={{ objectFit: 'cover' }}
              />
            </div>
            {/* <hr
              className='featurette-divider'
              style={{ borderColor: '#666666', borderWidth: '0.2rem' }}
            /> */}
          </div>
        ))}
      </div>{' '}
    </div>
  );
};

export default MainContent;
