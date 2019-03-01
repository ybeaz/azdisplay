import React from 'react'
import PropTypes from 'prop-types'

const JumbotronWrapper = props => {
  const { classStyle, children } = props
  return (
    <div className={`container-fluid ${classStyle}`}>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
          {children}
        </div>
      </div>
    </div>
  )
}

JumbotronWrapper.propTypes = {
}

export default JumbotronWrapper
