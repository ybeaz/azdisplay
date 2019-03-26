import React from 'react'

import { LogoElem } from './LogoElem.react'
import { Dropdown } from './Dropdown.react'

interface Props {
  sid: string,
  login: string,
  langs: any,
  handleActions: Function,
}
interface State {
}

export class NavBar extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  render() {
    const { sid, login, langs, handleActions } = this.props
    // console.info('NavBar->render() [10]',{ langs });
    const action = { type: 'openModalRegistrationNavBar' }


    return (
      <div id={sid} className={`Navbar ${sid}`}>
        <nav id='navbarNav' className='navbar navbar-expand-sm'>
          <div className='navbar-brand NavbarBrend'>
            <LogoElem />
          </div>
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
            <div
              className='nav-link NavBar__loginLink'
              onClickCapture={e => handleActions(e, action)}
            >
              {login}
            </div>
          </li>
          <li className='nav-item has-lang-popup'>
            <Dropdown {...langs} />
          </li>
        </ul>
      </div>
    )
  }
}
