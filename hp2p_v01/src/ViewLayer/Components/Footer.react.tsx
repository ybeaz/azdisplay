import React from 'react'
import { Link } from 'react-router-dom'

import * as Interfaces from '../../Shared/interfaces'
import * as serviceFunc from '../../Shared/serviceFunc'
import { CommonContainer } from '../Containers/CommonContainer.react'

import { LogoElem } from './LogoElem.react'

interface Props {
  readonly reduxState: any,
  readonly handleActions: Function,

  readonly sid: string,
  readonly listArr: any,
  readonly copyRight: string,
}
interface State {
}

class FooterClass extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
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

        <Link to={path}>
          <div
            className={`Footer__capture Footer__capture${Sid}`}
            onClickCapture={e => this.handleEvents(e, action)}
          >
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
    const { reduxState, handleActions } = this.props
    const { treeData, language } = reduxState
    const { footer } = treeData[language]
    const { sid } = footer

    let data: any

    switch (action.type) {

      case 'clickFooterEnter': {
        // console.info(`Footer->handleEvents type->${action.type}`, { props: this.props, action, e })

        data = { inception: 'registrationFooter' }
        const action02: Interfaces.Action = { type: 'updateUserFootprint', data }
        handleActions(e, action02)

        const action01: Interfaces.Action = { type: 'openModalRegistrationFooter' }
        handleActions(e, action01)
        // console.info(`Footer->handleEvents type->${action.type} [10]`, { props: this.props, action, e })
      } break

      default: {
        console.info(`${sid}->handleEvents unexpected action type: ${action.type}`, { action })
      }
    }
  }

  public render(): JSX.Element {
    const { reduxState } = this.props
    const { treeData, language } = reduxState
    const { footer } = treeData[language]
    const { sid, listArr, copyRight } = footer

    const inverted: boolean = true
    // console.info('Footer->render() [10]', { captureSection, listArr })

    const listItems = this.getListItems(listArr)

    return (
      <div id={sid} className={`Footer ${sid}`}>
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
            {copyRight}
          </div>
        </div>
      </div>
    )
  }
}

export const Footer = CommonContainer(FooterClass)
