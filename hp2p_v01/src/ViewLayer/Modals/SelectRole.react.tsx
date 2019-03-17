import React from 'react'

import * as Interfaces from '../../Shared/interfaces'

interface Props {
  readonly sid: string,
  readonly capture: string,
  readonly button01: string,
  readonly button02: string,
  readonly buttonFooter: string,
  readonly inputPlaceHolder: string,
  readonly handleActions: Function,
}
interface State {

}

class SelectRole extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  private readonly inputRef01: React.RefObject<HTMLInputElement>

  constructor(props: any) {
    super(props)
    this.inputRef01 = React.createRef()
  }

  public componentDidMount(): void {
    setTimeout(
      () => {
        if (this.inputRef01.current !== null) {
          this.inputRef01.current.focus()
          this.inputRef01.current.select()
        }
      },
      1000,
    )
  }

  public render(): JSX.Element {
    const {
      sid, capture, button01, button02, buttonFooter, inputPlaceHolder,
      handleActions,
    } = this.props

    // console.info('SelectRole->render() [0]', { props: this.props })
    const modalClass: string = 'Modal__show'
    const action: Interfaces.Action = { type: 'pressOkInSelectRole' }

    return (
      <div className={`modal Modal Modal_${sid} ${modalClass}`}>
        <div className='modal-dialog Modal__dialog'>
          <div className='modal-content Modal__content'>

            {/* <!-- Modal Header --> */}
            <div className='modal-header Modal__header'>
              <div className='Modal__headerColLeft'>
                <input type='email' className='Modal__headerEmailInput'
                  placeholder={inputPlaceHolder} ref={this.inputRef01} />
              </div>
              <div className='Modal__headerColRight'>
                <button
                  type='button'
                  className='close Modal_headerButtonUpperLeft'
                  onClickCapture={e => handleActions(e, action)}
                >
                  &times;
                </button>
              </div>
            </div>
            
            {/* <!-- Modal body --> */}
            <div className='modal-body Modal__body'>
              <div className='Modal__bodyRow'>
                {capture}
              </div>
              <div className='Modal__bodyRow01'>
                <div className='Modal__bodyRowColLeft'>
                  <button className='Modal__bodyRowColLeftButton'>{button01}</button>
                </div>
                <div className='Modal__bodyRowColRight'>
                <button className='Modal__bodyRowColRightButton'>{button02}</button>
                </div>
              </div>
            </div>

            {/* <!-- Modal footer --> */}
            <div className='modal-footer Modal__footer'>
              <button
                type='button'
                className='btn Modal__footerButton'
                onClickCapture={e => handleActions(e, action)}
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

export default SelectRole
