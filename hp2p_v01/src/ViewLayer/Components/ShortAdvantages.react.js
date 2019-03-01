import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class ShortAdvantages extends React.PureComponent {

  getShortAdvantagesList = arr => {

    return arr.map((item, i) => {
      const { imgClass, capture } = item
      return (
        <div key={i} className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center'>
                <div className={`ShortAdvantages__img ${imgClass}`} />
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center ShortAdvantages__capture titleSection'>
                {capture}
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {

    const { propsScope } = this.props
    const { sid, shortAdvantagesArr } = propsScope
    const shortAdvantages = this.getShortAdvantagesList(shortAdvantagesArr)

    return (
      <div id={sid} className={`container-fluid ${sid}`}>
        <div className='row'>
          {shortAdvantages}
        </div>
      </div>
    )
  }
}

ShortAdvantages.propTypes = {
}

export default ShortAdvantages
