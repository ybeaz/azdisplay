import React from 'react'
import * as interfaces from '../../Shared/interfaces'

interface Props {
  readonly sid: string,
  readonly message: string,
  readonly placeholder: string,
  readonly button: string,
  readonly handleActions: Function,
}
interface State {}

// eslint-disable-next-line react/prefer-stateless-function
class CommentForm extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  constructor(props: Props) {
    super(props)

  }

  public render(): JSX.Element {
    const {
      sid, message, placeholder, button, handleActions,
    } = this.props

    // console.info('CommentForm->render() [0]', { props: this.props })
    const modalClass: string = 'Modal__show'
    const actionSend: interfaces.Action = { type: 'sendCommentForm' }
    const actionClose: interfaces.Action = { type: 'closeCommentForm' }

    return (
      <div className={`modal Modal Modal_${sid} ${modalClass}`}>
        <div className='modal-dialog'>
          <div className='modal-content'>

            {/* <!-- Modal Header --> */}
            <div className='modal-header Modal__header'>
              <div className='Modal__headerColLeft'>
                <div className='modal-title Modal__headerCellLeft'>
                  {message}
                </div>
              </div>
              <div className='Modal__headerColRight'>
                <button
                  type='button'
                  className='close Modal_headerButtonUpperLeft'
                  onClickCapture={e => handleActions(e, actionClose)}
                >
                  &times;
                </button>
              </div>
            </div>
            
            {/* <!-- Modal body --> */}
            <div className='modal-body Modal__body'>
              <div className='Modal__bodyRow'>
                <textarea className='Modal__bodyTextArea' />
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
