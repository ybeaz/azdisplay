import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class Modal extends React.PureComponent {
  constructor(props) {
    super(props)

  }

  render() {
    const { modalWindow, registration, farewell, handleActions } = this.props
    // console.info('Modal [0]', { registration, farewell, props: this.props })
    const actionClose = { type: 'closeModalRegistrationNavBar' }


    let modalClass
    if (modalWindow) {
      modalClass = 'Modal__show'
    }
    else {
      modalClass = 'Modal__hide'
    }

    return (
      <div className={`Modal modal ${modalClass}`}>
        <div className='modal-dialog'>
          <div className='modal-content'>
          
            {/* <!-- Modal Header --> */}
            <div className='modal-header'>
              <h4 className='modal-title'>
                Приносим извинения
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
            <div className='Modal__body modal-body'>
              <div className='Modal__message'>
                Сервис сейчас находится в разработке.
                Но вы можете оставить ваш email и
                получить бонус 500 руб. в момент запуска.
                Ждите новостей в ближайшем будущем
              </div>
              <div className='Modal__actionInputButtonRow'>
                <div className='Modal__actionInputCol'>
                  <input
                    className='Modal_actionInput'
                    placeholder='mail'
                  />
                </div>
                <div className='Modal__actionButtonCol'>
                  <button
                    type='button'
                    className='Modal_actionButton btn'
                    onClickCapture={e => handleActions(e, actionClose)}
                  >
                    Послать
                  </button>
                </div>
              </div>
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