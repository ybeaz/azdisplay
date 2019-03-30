import React from 'react'
import { IconsFa } from './IconsFa.react'

import * as Interfaces from '../../Shared/interfaces'

interface Props {
  readonly sid: string,
  readonly captureSection: string,
  readonly listArr: any,
  readonly handleActions: Function,
}
interface State {
}

export class IconCaptDesc extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  getIconCaptDesc = (listArr, sid) => {

    return listArr.map((item, i) => {
      const {
        imgSrc, iconFa, capture, details, reviewNum,
        reviewName, ratingNum, ratingIconFa,
      } = item
      const iconsFaProps = {
        num: ratingNum,
        iconFa: ratingIconFa,
      }

      let onClickCapture: any
      if (sid === 'UserReviews') {
        const data: any = { userPrifile: capture }
        const action: Interfaces.Action = { type: 'clickUserProfile', data }
        onClickCapture = (e: any): any => this.handleEvents(e, action)
      }

      return (
        <div key={i} className='IconCaptDesc__itemCell'>  
          <div className='IconCaptDesc__itemTopBlock'>
            <div className='IconCaptDesc__itemIcon'>
              { imgSrc
                ? <img src={imgSrc} alt={capture} />
                : null
              }
              { iconFa
                ? <i className={iconFa} />
                : null
              }
            </div>
            <div className='IconCaptDesc__itemCaptNumRatingWrapper'>
              {capture
                ? (
                  <div
                    className='IconCaptDesc__itemCapture'
                    onClickCapture={onClickCapture}
                  >
                    {capture}
                  </div>
                )
                : null
              }
              {reviewNum
                ? (
                  <div className='IconCaptDesc__itemNum'>
                    {`${reviewNum} ${reviewName}`}
                  </div>
                )
                : null
              }
              {ratingNum && ratingIconFa
                ? (
                  <div className='IconCaptDesc__itemRating'>
                    <IconsFa {...iconsFaProps} />
                  </div>
                )
                : null
              }
            </div>
          </div>
          { details
            ? (
              <div className='IconCaptDesc__itemDetails'>
                {details}
              </div>
            )
            : null
          }
        </div>
      )
    })
  }

  public handleEvents: Function = (e: any, action: Interfaces.Action): void => {
    const { sid, handleActions } = this.props

    switch (action.type) {

      case 'clickUserProfile':
      {
        let { data } = action
        data = { ...data, inception:  'userProfile' }
        const action03: Interfaces.Action = { type: 'updateUserFootprint', data }
        handleActions(e, action03)

        const action01: Interfaces.Action = { type: 'clickUserProfile' }
        handleActions(e, action01)
        // console.info(`${sid}->handleEvents() type: ${action.type}`, { action, e })
      }
      break

      default: {
        console.info(`${sid}->handleEvents unexpected action type: ${action.type}`, { action })
      }
    }
  }

  public render(): JSX.Element {
    const { sid, captureSection, listArr } = this.props
    const iconCaptDesc: JSX.Element = this.getIconCaptDesc(listArr, sid)

    return (
      <div id={sid} className={`container-fluid IconCaptDesc IconCaptDesc_${sid}`}>
        { captureSection
          ? (
            <div className='row IconCaptDesc__captureRow'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-12 IconCaptDesc__captureCol text-center'>
                <h2 className='IconCaptDesc__capture titleSection'>{captureSection}</h2>
              </div>
            </div>
          )
          : null
        }
        <div className='row IconCaptDesc__itemRow'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-12 IconCaptDesc__itemCol'>
            {iconCaptDesc}
          </div>
        </div>
      </div>
    )
  }
}
