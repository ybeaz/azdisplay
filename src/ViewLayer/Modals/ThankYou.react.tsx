import React from 'react'

import * as Interfaces from '../../Shared/interfaces'

interface Props {
  readonly sid: string,
  readonly capture: string,
  readonly imgSrc: string,
  readonly message01: string,
  readonly message02: string,
  readonly message03: string,
  readonly buttonFooter: string,
  readonly handleActions: Function,
}
interface State {}

export class ThankYou extends React.PureComponent<Props, State> {
  public static defaultProps: any = {

  }

  constructor(props: any) {
    super(props)

  }

  public render(): JSX.Element {
    const {
      sid, capture, imgSrc, message01, message02, message03, buttonFooter, handleActions,
    } = this.props

    // console.info('ThankYou-render() [0]', { props: this.props })
    const modalClass: string = 'Modal__show'
    const action: Interfaces.Action = { type: 'closeModalThankYou' }

    return (
      <div className={`modal Modal Modal_${sid} ${modalClass}`}>
        <div className='modal-dialog Modal__dialog'>
          <div className='modal-content Modal__content'>

            {/* <!-- Modal Header --> */}
            <div className='modal-header Modal__header'>
              <div className='Modal__headerColLeft'>
                <div className='modal-title Modal__headerCellLeft'>
                  {capture}
                </div>
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
                <img src={imgSrc} className='Modal__bodyRow01Img' />
              </div>
              <div className='Modal__bodyRow01'>
                {message01}
              </div>
              <div className='Modal__bodyRow02'>
                {message02}
              </div>
              <div className='Modal__bodyRow03'>
                {message03}
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
