import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { handleActions } from '../../DataLayer/reduces/handleActions'
import * as serviceFunc from '../../Shared/serviceFunc'

import { LogoElem } from './LogoElem.react'

interface Props {
  readonly sid: string,
  readonly listArr: any,
  readonly copyRight: string,
}
interface State {
}

export class Footer extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  getListItems = arr => arr.map((item, i) => {

    const { sid, capture, path, level01 } = item
    const Sid = serviceFunc.getFirstCharUpperCase(sid)

    const action = { type: `clickFooter${Sid}` }
    // console.info('Footer->getListItems', { ...item, Sid, action })


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

  handleEvents = (e, action) => {
    switch (action.type) {
      case 'clickFooterEnter': {
        const action01 = { type: 'openModalRegistrationFooter' }
        handleActions(e, action01)
        // console.info(`Footer->handleEvents type->${action.type}`, { e, action })
      } break

      default: {
        console.info('Footer->handleEvents unexpected action', { action })
      }
    }
  }

  render() {
    const { sid, listArr, copyRight } = this.props
    // console.info('Footer->render() [10]', { captureSection, listArr })

    const listItems = this.getListItems(listArr)

    return (
      <div id={sid} className={`Footer ${sid}`}>
        <div className='Footer__rowMain '>
          <div className='Footer__colLogo'>
            <LogoElem inverted />
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
