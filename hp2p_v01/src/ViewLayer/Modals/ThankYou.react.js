import React from 'react'
import PropTypes from 'prop-types'

import { getModalKeyToRender } from '../../Shared/serviceFunc'


// eslint-disable-next-line react/prefer-stateless-function
class ThankYou extends React.PureComponent {
  constructor(props) {
    super(props)

  }

  render() {
    const { reduxState, registration, farewell, handleActions } = this.props
    const { modalWindows, actionLog } = reduxState
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
    if (modalWindows) {
      modalClass = 'Modal__show'
    }
    else {
      modalClass = 'Modal__hide'
    }

    return (
      <div className={`modal ${sid} ${modalClass}`}>
        <div className='modal-dialog'>
          <div className='modal-content'>
          
            {/* <!-- Modal Header --> */}
            <div className='modal-header'>
              <h4 className='modal-title'>
                Thank you {'capture'}
              </h4>
                <button
                  type='button'
                  className='close'
                  onClickCapture={e => handleActions(e, actionClose)}
                >
                  &times;
                </button>

            </div>
            
            {/* <!-- Modal body --> */}
            <div className='ThankYou__body modal-body'>
              <div className='ThankYou__message'>
                {'message'}
              </div>
                <div className='ThankYou__actionInputButtonRow'>
                  <div className='ThankYou__actionInputCol'>
                    <input
                      className='ThankYou__actionInput'
                      placeholder={'inputPlaceHolder'}
                    />
                  </div>
                  <div className='ThankYou__actionButtonCol'>
                    <button
                      type='button'
                      className='ThankYou__actionButton btn'
                      onClickCapture={e => handleActions(e, actionClose)}
                    >
                      {'buttonCapture'}
                    </button>
                  </div>
                </div>
            </div>

            {/* <!-- Modal footer --> */}
            <div className='ThankYou__footer modal-footer'>
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

ThankYou.defaultProps = {

}

ThankYou.propTypes = {

}

export default ThankYou
