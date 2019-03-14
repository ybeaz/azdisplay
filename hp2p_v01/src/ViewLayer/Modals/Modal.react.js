import React from 'react'
import PropTypes from 'prop-types'

import { getModalKeyToRender } from '../../Shared/serviceFunc'


// eslint-disable-next-line react/prefer-stateless-function
class Modal extends React.PureComponent {
  constructor(props) {
    super(props)

  }

  render() {
    const { reduxState, registration, farewell, handleActions } = this.props
    const { modalWindow, actionLog } = reduxState
    // console.info('Modal [0]', { actionLog, registration, farewell, props: this.props })
    const actionClose = { type: 'closeModalRegistrationNavBar' }

    const modalKeyToRender = getModalKeyToRender(actionLog)
    const modalDataToRender = this.props[modalKeyToRender]

    const {
      sid,
      capture,
      message,
      inputPlaceHolder,
      buttonCapture,
    } = modalDataToRender

    let modalClass
    if (modalWindow) {
      modalClass = 'Modal__show'
    }
    else {
      modalClass = 'Modal__hide'
    }

    return (
      <div className={`modal Modal Modal_${sid} ${modalClass}`}>
        <div className='modal-dialog'>
          <div className='modal-content'>
          
            {/* <!-- Modal Header --> */}
            <div className='modal-header'>
              <h4 className='modal-title'>
                {capture}
              </h4>
              { modalKeyToRender === 'registration'
                ? (
                  <button
                    type='button'
                    className='close'
                    onClickCapture={e => handleActions(e, actionClose)}
                  >
                    &times;
                  </button>
                )
                : null
              }

            </div>
            
            {/* <!-- Modal body --> */}
            <div className='Modal__body modal-body'>
              <div className='Modal__message'>
                {message}
              </div>
              { modalKeyToRender === 'registration'
                ? (
                  <div className='Modal__actionInputButtonRow'>
                    <div className='Modal__actionInputCol'>
                      <input
                        className='Modal_actionInput'
                        placeholder={inputPlaceHolder}
                      />
                    </div>
                    <div className='Modal__actionButtonCol'>
                      <button
                        type='button'
                        className='Modal_actionButton btn'
                        onClickCapture={e => handleActions(e, actionClose)}
                      >
                        {buttonCapture}
                      </button>
                    </div>
                  </div>
                )
                : null
              }
            </div>

            {/* <!-- Modal footer --> */}
            <div className='Modal__footer modal-footer'>
              <button
                type='button'
                className='btn'
                onClickCapture={e => handleActions(e, actionClose)}
              >
                Close
              </button>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

Modal.defaultProps = {

}

Modal.propTypes = {

}

export default Modal