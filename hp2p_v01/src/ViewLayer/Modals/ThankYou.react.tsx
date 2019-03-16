import React from 'react'

interface Props {
  readonly sid: string, 
  readonly capture: string,
  readonly handleActions: Function, 
}
interface State {

}

// eslint-disable-next-line react/prefer-stateless-function
class ThankYou extends React.PureComponent<Props, State> {
  public static defaultProps = {

  }

  constructor(props) {
    super(props)

  }

  render() {
    const {
      sid, capture, handleActions,
    } = this.props

    // console.info('ThankYou-render() [0]', { props: this.props })
    const modalClass: string = 'Modal__show'
    const action = { type: 'closeModalThankYou' }

    return (
      <div className={`modal Modal Modal_${sid} ${modalClass}`}>
        <div className='modal-dialog'>
          <div className='modal-content'>

            {/* <!-- Modal Header --> */}
            <div className='modal-header Modal__header'>
              <h4 className='modal-title Modal__title'>
                {capture}
              </h4>
              <button
                type='button'
                className='close Modal_upperLeftCloseButton'
                onClickCapture={e => handleActions(e, action)}
              >
                &times;
              </button>
            </div>
            
            {/* <!-- Modal body --> */}
            <div className='modal-body Modal__body'>
              <div className='Modal__message'>
                {'ThankYou'}
              </div>

            </div>

            {/* <!-- Modal footer --> */}
            <div className='modal-footer Modal__footer'>
              <button
                type='button'
                className='btn Modal__footerButton'
                onClickCapture={e => handleActions(e, action)}
              >
                Ok
              </button>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default ThankYou
