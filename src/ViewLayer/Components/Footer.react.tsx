import React from 'react'
import { Link } from 'react-router-dom'

import * as Interfaces from '../../Shared/interfaces'
import * as serviceFunc from '../../Shared/serviceFunc'
import { CommonContainer } from '../Containers/CommonContainer.react'

import { LogoElem } from './LogoElem.react'

interface Props {
  readonly path: string,
  readonly reduxState: any,
  readonly handleActions: Function,
}
interface State {
}
interface FooterClass {
  footer: any,
  sid: string,
  listArr: any,
  copyRight: string,
}

class FooterClass extends React.PureComponent<Props, State, FooterClass> {
  public static defaultProps: any = {
  }

  constructor(props: any) {
    super(props)

    const { path, reduxState } = this.props
    const { treeData, language } = reduxState
    const { routes} = treeData.router
    const { modeProdDev } = treeData

    const project: {}[] | [] = routes
      .filter((item: { path: string, [propName: string]: any }) =>
        !!item[language] && item.path === path)

    if (project.length > 0 && project[0][language]) {
      this.footer = project[0][language].footer
      this.sid = this.footer.sid
      this.listArr = this.footer.listArr
      this.copyRight = this.footer.copyRight
    }

  }


  getListItems = arr => arr.map((item, i) => {

    const { sid, capture, path, level01 } = item
    const Sid = serviceFunc.getFirstCharUpperCase(sid)

    const action: Interfaces.Action = { type: `clickFooter${Sid}` }
    // console.info('Footer->getListItems', { ...item, type: `clickFooter${Sid}`, Sid, action })

    let listItemslevel01 = null
    if (level01 && level01.length > 0) {
      listItemslevel01 = level01.map((itemLevel01, iLevel01) => {
        const { capture: captureLevel01 } = itemLevel01

        return (
          <div key={iLevel01} className='Footer__itemLevel1Cell'>
            {captureLevel01}
          </div>
        )
      })
    }

    return (
      <div key={i} className='Footer__colItem'>

        <Link to={path} onClickCapture={e => this.handleEvents(e, action)}>
          <div className={`Footer__capture Footer__capture${Sid}`}>
            {capture}
          </div>
        </Link>

        { level01 && level01.length > 0
          ? (
            <div className='Footer__colItemLevel1'>
              {listItemslevel01}
            </div>
          )
          : null
        }
      </div>
    )
  })

  public handleEvents: Function = (e: any, action: Interfaces.Action): void => {
    const { handleActions } = this.props
    const { sid } = this.footer

    let data: any

    switch (action.type) {

      case 'clickFooterToSpecialists':
      {
        const action01: Interfaces.Action = { type: 'clickFooterToSpecialists' }
        handleActions(e, action01)
        // console.info(`Footer->handleEvents type->${action.type} [10]`, { props: this.props, action, e })
      }
      break

      case 'clickFooterContacts':
      {
        const action01: Interfaces.Action = { type: 'clickFooterContacts' }
        handleActions(e, action01)
        // console.info(`Footer->handleEvents type->${action.type} [10]`, { props: this.props, action, e })
      }
      break

      case 'clickFooterAboutUs':
      {
        const action01: Interfaces.Action = { type: 'clickFooterAboutUs' }
        handleActions(e, action01)
        // console.info(`Footer->handleEvents type->${action.type} [10]`, { props: this.props, action, e })
      }
      break

      case 'clickFooterEnter':
      {
        // console.info(`Footer->handleEvents type->${action.type}`, { props: this.props, action, e })

        data = { inception: 'registrationFooter' }
        const action02: Interfaces.Action = { type: 'updateUserFootprint', data }
        handleActions(e, action02)

        const action01: Interfaces.Action = { type: 'openModalRegistrationFooter' }
        handleActions(e, action01)
        // console.info(`Footer->handleEvents type->${action.type} [10]`, { props: this.props, action, e })
      }
      break

      default: {
        console.info(`${sid}->handleEvents unexpected action type: ${action.type}`, { action })
      }
    }
  }

  public render(): JSX.Element {
    //console.info('Footer->render() [10]',{ footer: this.footer, props: this.props });

    const inverted: boolean = true
    // console.info('Footer->render() [10]', { captureSection, listArr })

    const listItems = this.getListItems(this.listArr)

    return (
      <div id={this.sid} className={`Footer ${this.sid}`}>
        <div className='Footer__rowMain '>
          <div className='Footer__colLogo'>
            <LogoElem inverted={inverted} />
          </div>
          <div className='Footer__colItems'>
            {listItems}
          </div>
        </div>
        <div className='Footer__rowCopyRight'>
          <div className='Footer_colCopyRight'>
            {this.copyRight}
          </div>
        </div>
      </div>
    )
  }
}

export const Footer = CommonContainer(FooterClass)
