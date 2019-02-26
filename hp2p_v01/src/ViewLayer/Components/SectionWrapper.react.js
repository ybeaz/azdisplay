import React from 'react'
import PropTypes from 'prop-types'

const SectionWrapper = props => {
  const { classStyle, children } = props
  return (
    <div className={`container-fluid ${classStyle}`}>
      <div className='row'>
        <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' />
        <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8'>
          {children}
        </div>
        <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' />
      </div>
    </div>
  )
}

SectionWrapper.propTypes = {
}

export default SectionWrapper
