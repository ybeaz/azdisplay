import React from 'react'

import { handleActions } from '../../DataLayer/reduces/handleActions'
import * as Interfaces from '../../Shared/interfaces'
import { Dropdown } from './Dropdown.react'
import { LogoElem } from './LogoElem.react'

interface Props {
  sid: string,
  login: string,
  langs: any,
}
interface State {
}

export class NavBar extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  public handleEvents: Function = (e: any, action: Interfaces.Action): void => {
    const { sid } = this.props
    let data: any

    switch (action.type) {

      case 'openModalRegistrationNavBar':
      {
        data = { inception: 'registrationNavBar' }
        const action01: Interfaces.Action = { type: 'updateUserFootprint', data }
        handleActions(e, action01)

        const action02: Interfaces.Action = { type: 'openModalRegistrationNavBar' }
        handleActions(e, action02)
        // console.info(`${sid}->handleEvents() type: ${action.type}`, { props: this.props, action, e })
      }
      break

      default: {
        console.info(`${sid}->handleEvents unexpected action type: ${action.type}`, { action })
      }
    }
  }

  public render(): JSX.Element {
    const { sid, login, langs } = this.props
    // console.info('NavBar->render() [10]',{ langs });

    const action: Interfaces.Action = { type: 'openModalRegistrationNavBar' }

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
              onClickCapture={e => this.handleEvents(e, action)}
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
