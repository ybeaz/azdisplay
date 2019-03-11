import React from 'react'
import PropTypes from 'prop-types'

const SectionWrapper = props => {
  const { classStyle, children } = props
  return (
    <div className={`SectionWrapper ${classStyle}`}>

      <div className='SectionWrapper__colLeft' />
      <div className='SectionWrapper__colMain'>
        {children}
      </div>
      <div className='SectionWrapper__colRight' />

    </div>
  )
}

SectionWrapper.propTypes = {
}

export default SectionWrapper
