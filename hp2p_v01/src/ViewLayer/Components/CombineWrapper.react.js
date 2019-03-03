import React from 'react'
import PropTypes from 'prop-types'

const CombineWrapper = props => {
  const { classStyle, children } = props
  return (
    <div className={`container-fluid ${classStyle}`}>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 column'>
          {children}
        </div>
      </div>
    </div>
  )
}

CombineWrapper.propTypes = {
}

export default CombineWrapper
