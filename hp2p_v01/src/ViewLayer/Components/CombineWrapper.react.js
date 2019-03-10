import React from 'react'
import PropTypes from 'prop-types'

const CombineWrapper = props => {
  const { classStyle, children } = props
  return (
    <div className={`${classStyle}`}>
      {children}
    </div>
  )
}

CombineWrapper.propTypes = {
}

export default CombineWrapper
