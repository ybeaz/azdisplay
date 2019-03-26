import React from 'react'
import { IconsFa } from './IconsFa.react'

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

    let onClickCapture = null
    if (sid === 'UserReviews') {
      const { handleActions } = this.props
      const action = { type: 'clickUserProfile' }
      onClickCapture = e => handleActions(e, action)
    }

    return listArr.map((item, i) => {
      const {
        imgSrc, iconFa, capture, details, reviewNum,
        reviewName, ratingNum, ratingIconFa,
      } = item
      const iconsFaProps = {
        num: ratingNum,
        iconFa: ratingIconFa,
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

  render() {
    const { sid, captureSection, listArr } = this.props
    const iconCaptDesc = this.getIconCaptDesc(listArr, sid)

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
