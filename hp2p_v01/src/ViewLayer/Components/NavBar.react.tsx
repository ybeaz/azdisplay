import React from 'react'

import * as Interfaces from '../../Shared/interfaces'
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

  public handleEvents: Function = (e: any, action: Interfaces.Action): void => {
    const { sid, handleActions } = this.props
    let data: any

    switch (action.type) {

      case 'updateUserFootprint':
      {
        //data = { ...dataTemp, inception }
        //const action03: Interfaces.Action = { type: 'updateUserFootprint', data }
        //handleActions(e, action03)
        // console.info(`${sid}->handleEvents() type: ${action.type}`, { props: this.props, action, e })
      }
      break

      default: {
        console.info(`${sid}->handleEvents unexpected action type: ${action.type}`, { action })
      }
    }
  }

  render() {
    const { sid, login, langs, handleActions } = this.props
    // console.info('NavBar->render() [10]',{ langs });
    const action: any = { type: 'openModalRegistrationNavBar' }


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
