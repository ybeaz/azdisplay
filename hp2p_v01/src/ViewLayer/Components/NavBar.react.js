import React from 'react'
import PropTypes from 'prop-types'

import LogoElem from './LogoElem.react'

// eslint-disable-next-line react/prefer-stateless-function
class NavBar extends React.PureComponent {


  render() {
    const { propsScope } = this.props
    const { sid, login } = propsScope
    // console.info('NavBar->render() [10]',{});
    return (
      <div id={sid} className={sid}>
        <nav id='navbarNav' className='navbar navbar-expand-sm'>
          <a className='navbar-brand navbarBrend' href='#navbar'>
            <LogoElem />
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
            <a className='nav-link' href='#'>{login}</a>
          </li>
          <li className='nav-item has-lang-popup'>
            <a className='nav-link' href='#'>Язык</a>
          </li>
        </ul>

      </div>
    )
  }
}

NavBar.propTypes = {
}

export default NavBar
