import React, { useContext, useState } from 'react';
import { BsBrightnessHigh, BsFillMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../hooks/themeContext';
import { NavLink, useNavigate } from 'react-router-dom';
import { subscribeContext } from '../hooks/subscribeContext';
import { foodContext } from '../hooks/foodContext';

const Header = () => {
  const { darkMode, handleToggle, bgColorclassName } = useContext(ThemeContext);
  const { setSearchInput } = useContext(foodContext);
  const [foodSearch, setFoodSearch] = useState('');
  const { toggleSubscribe } = useContext(subscribeContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFoodSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(foodSearch);
    navigate('/recipe-index');
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    toggleSubscribe();
  };

  return (
    <header className={`mb-4 fixed-top ${bgColorclassName}`}>
      <nav
        className='navbar navbar-expand-lg'
        style={{ width: '100%', backgroundColor: '#fff2d5' }}
      >
        <div className='container-fluid d-flex justify-content-between'>
          <NavLink className='navbar-brand' to='/' aria-label='Go to Home'>
            <h1 className='display-5 lh-1 mb-3' style={{ color: '#4c723b' }}>
              Hungry Chef
            </h1>
          </NavLink>
          <div>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='nav-item'>
              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
              >
                <ul className='navbar-nav'>
                  <li>
                    <NavLink
                      to='/'
                      className='nav-link'
                      aria-label='Go to Home'
                    >
                      <button className='btn btn-dark'>Home</button>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/recipe-index'
                      className='nav-link'
                      aria-label='Go to Recipes'
                    >
                      <button className='btn btn-dark'>Recipes</button>
                    </NavLink>
                  </li>
                </ul>
                <button
                  onClick={handleSubscribe}
                  className='btn btn-info me-2'
                  type='submit'
                  aria-label='Subscribe to Newsletter'
                >
                  subscribe
                </button>
                <form
                  className='d-flex align-items-center'
                  role='search'
                  onSubmit={handleSearch}
                  aria-label='Search for Recipes'
                >
                  <input
                    className='form-control me-2'
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                    id='searchInput'
                    onChange={handleInputChange}
                    autoComplete='off'
                    style={{ maxWidth: '120px' }}
                  />
                  <button className='btn btn-dark' type='submit'>
                    Search
                  </button>
                </form>
                <div className='d-block px-3'>
                  {darkMode ? (
                    <BsBrightnessHigh
                      className='text-success'
                      onClick={handleToggle}
                      aria-label='Toggle Light Mode'
                    />
                  ) : (
                    <BsFillMoonFill
                      onClick={handleToggle}
                      aria-label='Toggle Dark Mode'
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
