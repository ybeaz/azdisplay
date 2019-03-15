import React from 'react'
import PropTypes from 'prop-types'

import { getModalKeyToRender } from '../../Shared/serviceFunc'


// eslint-disable-next-line react/prefer-stateless-function
class SelectRole extends React.PureComponent {
  constructor(props) {
    super(props)

  }

  render() {
    const {
      sid, capture, button01, button02, button03,
      message, inputPlaceHolder, handleActions,
    } = this.props

    console.info('Modal [0]', { props: this.props })
    const modalClass = 'Modal__show'
    const action = { type: 'pressOkInSelectRole', modalNext: 'CommentForm' }

    return (
      <div className={`modal ${sid} ${modalClass}`}>
        <div className='modal-dialog'>
          <div className='modal-content'>
          
            {/* <!-- Modal Header --> */}
            <div className='modal-header'>
              <h4 className='modal-title'>
                {capture}
              </h4>
                <button
                  type='button'
                  className='close'
                  onClickCapture={e => handleActions(e, action)}
                >
                  &times;
                </button>
            </div>
            
            {/* <!-- Modal body --> */}
            <div className='SelectRole__body modal-body'>
              <div className='SelectRole__message'>
                SelectRole {'message'}
              </div>
                  <div className='SelectRole__actionInputButtonRow'>
                    <div className='SelectRole__actionInputCol'>
                      <input
                        className='Modal_actionInput'
                        placeholder={'inputPlaceHolder'}
                      />
                    </div>
                    <div className='Modal__actionButtonCol'>
                      <button
                        type='button'
                        className='Modal__actionButton btn'
                        onClickCapture={e => handleActions(e, action)}
                      >
                        {'buttonCapture'}
                      </button>
                    </div>
                  </div>
            </div>

            {/* <!-- Modal footer --> */}
            <div className='SelectRole__footer modal-footer'>
              <button
                type='button'
                className='btn'
                onClickCapture={e => handleActions(e, action)}
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

SelectRole.defaultProps = {

}

SelectRole.propTypes = {

}

export default SelectRole
