import React from 'react'

interface Props {
  readonly sid: string, 
  readonly capture: string,
  readonly handleActions: Function, 
}
interface State {

}

// eslint-disable-next-line react/prefer-stateless-function
class CommentForm extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  constructor(props: Props) {
    super(props)

  }

  public render(): JSX.Element {
    const {
      sid, capture, handleActions,
    } = this.props

    // console.info('CommentForm->render() [0]', { props: this.props })
    const modalClass = 'Modal__show'
    const actionSend = { type: 'sendCommentForm' }
    const actionClose = { type: 'closeCommentForm' }

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
                onClickCapture={e => handleActions(e, actionClose)}
              >
                &times;
              </button>
            </div>
            
            {/* <!-- Modal body --> */}
            <div className='modal-body Modal__body'>
              <div className='Modal__message'>
                {'CommentForm'}
              </div>

            </div>

            {/* <!-- Modal footer --> */}
            <div className='modal-footer Modal__footer'>
              <button
                type='button'
                className='btn Modal__footerButton'
                onClickCapture={e => handleActions(e, actionSend)}
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

export default CommentForm
