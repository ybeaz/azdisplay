import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class UserReviews extends React.PureComponent {

  getUserReviews = arr => {

    return arr.map((item, i) => {
      const { imgClass, capture, details } = item
      return (
        <div key={i} className='col-lg-3 col-md-3 col-sm-3 col-12'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-6 col-6'>
                <div className='UserReviews__imgWrapper' >
                  <div className={`UserReviews__img ${imgClass}`} />
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6 col-6 UserReviews__capture'>
                {capture}
              </div>
            </div>
            <div className='row UserReviews__underscoreTop'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-12 UserReviews__details'>
                {details}
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    const { sid, listArr } = this.props
    const userReviews = this.getUserReviews(listArr)

    return (
      <div id={sid} className={`container-fluid ${sid}`}>
        <div className='row'>
          {userReviews}
        </div>
      </div>
    )
  }
}

UserReviews.propTypes = {
}

export default UserReviews
