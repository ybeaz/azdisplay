import React from 'react'

import * as Interfaces from '../../Shared/interfaces'

interface Props {
  readonly sid: string,
  readonly message: string,
  readonly placeholder: string,
  readonly buttonFooter: string,
  readonly handleActions: Function,
}
interface State {}

export class CommentForm extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  constructor(props: Props) {
    super(props)

  }

  public handleEvents: Function = (e: any, action: Interfaces.Action): void => {
    const { sid, handleActions } = this.props
    let data: any

    switch (action.type) {

      case 'updateUserFootprint':
      {
        //data = { ...dataTemp, inception }
        //const action03: Interfaces.Action = { type: 'updateUserFootprint', data }
        //handleActions(e, action03)
        // console.info(`${sid}->handleEvents() type: ${action.type}`, { props: this.props, action, e })
      }
      break

      default: {
        console.info(`${sid}->handleEvents unexpected action type: ${action.type}`, { action })
      }
    }
  }

  public render(): JSX.Element {
    const {
      sid, message, placeholder, buttonFooter, handleActions,
    } = this.props

    // console.info('CommentForm->render() [0]', { props: this.props })
    const modalClass: string = 'Modal__show'
    const actionSend: Interfaces.Action = { type: 'sendCommentForm' }
    const actionClose: Interfaces.Action = { type: 'closeModalCommentForm' }

    return (
      <div className={`modal Modal Modal_${sid} ${modalClass}`}>
        <div className='modal-dialog Modal__dialog'>
          <div className='modal-content Modal__content'>

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
                {buttonFooter}
              </button>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

