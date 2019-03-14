import React from 'react'
import PropTypes from 'prop-types'
import IconsFa from './IconsFa.react'


// eslint-disable-next-line react/prefer-stateless-function
class IconCaptDesc extends React.PureComponent {

  getIconCaptDesc = listArr => {

    return listArr.map((item, i) => {
      const { imgSrc, iconFa, capture, details, reviewNum, reviewName, ratingNum, ratingIconFa } = item
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
                  <div className='IconCaptDesc__itemCapture'>
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
    const iconCaptDesc = this.getIconCaptDesc(listArr)

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

IconCaptDesc.propTypes = {
}

export default IconCaptDesc
