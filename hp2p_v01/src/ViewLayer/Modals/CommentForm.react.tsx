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

  private readonly textareaRef01: React.RefObject<HTMLTextAreaElement>

  constructor(props: Props) {
    super(props)
    this.textareaRef01 = React.createRef()
  }

  public componentDidMount(): void {
    setTimeout(
      () => {
        if (this.textareaRef01.current !== null) {
          this.textareaRef01.current.focus()
          this.textareaRef01.current.select()
        }
      },
      500,
    )
  }

  public getData = (): any => {
    const msg: string = this.textareaRef01.current.value

    return { msg }
  }

  public handleEvents: Function = (e: any, action: Interfaces.Action): void => {
    const { sid, handleActions } = this.props
    let data: any

    switch (action.type) {

      case 'sendCommentForm':
      {
        data = this.getData()
        const action03: Interfaces.Action = { type: 'updateUserFootprint', data }
        setTimeout(() => handleActions(e, action03), 0)

        const action01: Interfaces.Action = { type: 'sendCommentForm' }
        setTimeout(() => handleActions(e, action01), 0)
        // console.info(`${sid}->handleEvents() type: ${action.type}`, { data, action, e })
      }
      break

      case 'closeModalCommentForm':
      {
        data = this.getData()
        const action03: Interfaces.Action = { type: 'updateUserFootprint', data }
        handleActions(e, action03)

        const action01: Interfaces.Action = { type: 'closeModalCommentForm' }
        handleActions(e, action01)
      }
      break

      default: {
        console.info(`${sid}->handleEvents unexpected action type: ${action.type}`, { action })
      }
    }
  }

  public render(): JSX.Element {
    const { sid, message, placeholder, buttonFooter } = this.props

    // console.info('CommentForm->render() [0]', { props: this.props })
    const modalClass: string = 'Modal__show'

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
                  onClickCapture={e => this.handleEvents(e, { type: 'closeModalCommentForm' })}
                >
                  &times;
                </button>
              </div>
            </div>

            {/* <!-- Modal body --> */}
            <div className='modal-body Modal__body'>
              <div className='Modal__bodyRow'>
                <textarea
                  className='Modal__bodyTextArea'
                  placeholder={placeholder}
                  ref={this.textareaRef01}
                />
              </div>
            </div>

            {/* <!-- Modal footer --> */}
            <div className='modal-footer Modal__footer'>
              <button
                type='button'
                className='btn Modal__footerButton'
                onClickCapture={e => this.handleEvents(e, { type: 'sendCommentForm' })}
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

