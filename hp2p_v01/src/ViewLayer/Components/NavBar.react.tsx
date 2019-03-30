import React from 'react'

import * as Interfaces from '../../Shared/interfaces'
import { CommonContainer } from '../Containers/CommonContainer.react'
import { Dropdown } from './Dropdown.react'
import { LogoElem } from './LogoElem.react'

interface Props {
  readonly reduxState: any,
  readonly handleActions: Function,
}
interface State {
}

class NavBarClass extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  public handleEvents: Function = (e: any, action: Interfaces.Action): void => {
    const { reduxState, handleActions } = this.props
    const { treeData, language } = reduxState
    const { navBar } = treeData[language]
    const { sid } = navBar
    let data: any

    switch (action.type) {

      case 'selectLanguage':
      {
        /*
        data = { inception: 'registrationNavBar' }
        const action01: Interfaces.Action = { type: 'updateUserFootprint', data }
        handleActions(e, action01)
        */

        data = action.data
        const lang: any  = data.filter((item: any) => item.active === true)
          .map((item: any) => item.nameShort)[0]

        data = { lang }
        const action03: Interfaces.Action = { type: 'selectLanguage', data }
        handleActions(e, action03)

        // console.info(`${sid}->handleEvents() type: ${action.type}`, { lang, props: this.props, action, e })
      }
      break

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
    const { reduxState } = this.props
    const { treeData, language } = reduxState
    const { modeProdDev, navBar } = treeData[language]
    const { languageSelect } = modeProdDev
    const { sid, login, langs } = navBar
    // console.info('NavBar->render() [10]',{ props: this.props });

    const action: Interfaces.Action = { type: 'openModalRegistrationNavBar' }

    const cid: string = ''
    const classNames: string = ''
    const parentActionCase: string = 'selectLanguage'
    const langProps: any = {
      ...langs, cid, displayBtnType: 'icon', classNames,
      parentHandleEvents: this.handleEvents, parentActionCase,
    }

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
          { !languageSelect
            ? (<li className='nav-item has-lang-popup'>
              <Dropdown {...langProps} />
            </li>)
            : undefined
          }
        </ul>
      </div>
    )
  }
}

export const NavBar = CommonContainer(NavBarClass)
