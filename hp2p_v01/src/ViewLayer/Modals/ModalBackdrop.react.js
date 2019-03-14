import React from 'react'
import PropTypes from 'prop-types'

import { getModalKeyToRender } from '../../Shared/serviceFunc'

const ModalBackdrop = ({ ...props }) => {

  // console.info('ModalBackdrop [0]', { ...props })

  const { reduxState, registration, farewell } = { ...props }
  const { modalWindow, actionLog } = reduxState

  const modalKeyToRender = getModalKeyToRender(actionLog)
  const modalDataToRender = { ...props }[modalKeyToRender]
  const { sid } = modalDataToRender

  let modalBackdropClass
  if (modalWindow) {
    modalBackdropClass = 'ModalBackdrop__show'
  }
  else {
    modalBackdropClass = 'ModalBackdrop__hide'
  }

  return (
    <div className={`ModalBackdrop ModalBackdrop_${sid} ${modalBackdropClass}`} />
  )
}

ModalBackdrop.defaultProps = {

}

ModalBackdrop.propTypes = {

}

export default ModalBackdrop
