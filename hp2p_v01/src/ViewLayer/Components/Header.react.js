
import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.PureComponent {


  render() {
    // console.info('Header->render() [10]',{});
    return (
      <div id='Header' className='Header'>
        <nav id='navbar' className='navbar navbar-expand-sm initial'>
          <a className='navbar-brand navbarBrend' href='#navbar'>
            <div className='logoNav iconLogo' />
          </a>
          {/*
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>link 1</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Link 2</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Link 3</a>
            </li>
          </ul>
          */}
        </nav>

        <ul className='nav-actions'>
          <li className='nav-item has-auth-popup'>
            <a className='nav-link' href='#'>Регистрация и вход</a>
          </li>
          <li className='nav-item has-lang-popup'>
            <a className='nav-link' href='#'>Язык</a>
          </li>
        </ul>

      </div>
    )
  }
}

Header.propTypes = {
}

export default Header
