import React from 'react'
import PropTypes from 'prop-types'

const ModalBackdrop = ({ ...props }) => {

  // console.info('ModalBackdrop [0]', { ...props })

  const { modalWindow } = { ...props }
  let modalBackdropClass
  if (modalWindow) {
    modalBackdropClass = 'ModalBackdrop__show'
  }
  else {
    modalBackdropClass = 'ModalBackdrop__hide'
  }

  return (
    <div className={`ModalBackdrop ${modalBackdropClass}`} />
  )
}

ModalBackdrop.defaultProps = {

}

ModalBackdrop.propTypes = {

}

export default ModalBackdrop
