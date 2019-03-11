import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class IconCaptDesc extends React.PureComponent {

  getIconCaptDesc = listArr => {

    return listArr.map((item, i) => {
      const { imgSrc, iconFa, capture, details } = item
      return (
        <div key={i} className='IconCaptDesc__itemCell'>  
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
          {capture
            ? (
              <div className='IconCaptDesc__itemCapture'>
                {capture}
              </div>
            )
            : null
          }
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
