import React from 'react'
import PropTypes from 'prop-types'

import { getModalKeyToRender } from '../../Shared/serviceFunc'


// eslint-disable-next-line react/prefer-stateless-function
class CommentForm extends React.PureComponent {
  constructor(props) {
    super(props)

  }

  render() {
    const { sid, handleActions } = this.props
    console.info('CommentForm [0]', { props: this.props })
    const modalClass = 'Modal__show'
    const action = { type: 'pressOkInSelectRole', modalNext: 'ThankYou' }

    return (
      <div className={`modal ${sid} ${modalClass}`}>
        <div className='modal-dialog'>
          <div className='modal-content'>
          
            {/* <!-- Modal Header --> */}
            <div className='modal-header'>
              <h4 className='modal-title'>
                {'capture'}
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
            <div className='CommentForm__body modal-body'>
              <div className='CommentForm__message'>
                {'message'}
              </div>
              <div className='CommentForm__actionInputButtonRow'>
                <div className='CommentForm__actionInputCol'>
                  <input
                    className='CommentForm__actionInput'
                    placeholder={'inputPlaceHolder'}
                  />
                </div>
                <div className='CommentForm__actionButtonCol'>
                  <button
                    type='button'
                    className='CommentForm__actionButton btn'
                    onClickCapture={e => handleActions(e, action)}
                  >
                    {'buttonCapture'}
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Modal footer --> */}
            <div className='CommentForm__footer modal-footer'>
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

CommentForm.defaultProps = {

}

CommentForm.propTypes = {

}

export default CommentForm
