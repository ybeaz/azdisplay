import React from 'react'

interface Props {
  readonly sid: string,
  readonly capture: string,
  readonly button01: string,
  readonly button02: string,
  readonly button03: string,
  readonly inputPlaceHolder: string,
  readonly handleActions: Function, 
}
interface State {

}

// eslint-disable-next-line react/prefer-stateless-function
class SelectRole extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  constructor(props: any) {
    super(props)
  }

  public render(): JSX.Element {
    const {
      sid, capture, button01, button02, button03, inputPlaceHolder,
      handleActions,
    } = this.props

    // console.info('SelectRole->render() [0]', { props: this.props })
    const modalClass = 'Modal__show'
    const action = { type: 'pressOkInSelectRole' }

    return (
      <div className={`modal Modal Modal_${sid} ${modalClass}`}>
        <div className='modal-dialog'>
          <div className='modal-content'>

            {/* <!-- Modal Header --> */}
            <div className='modal-header Modal__header'>
              <div className='Modal__headerLeftCol'>
                <input className='Modal__headerEmailInput'
                  placeholder={inputPlaceHolder} />
                <h4 className='modal-title Modal__title'>
                  {capture}
                </h4>
              </div>
              <div className='Modal__headerRightCol'>
                <button
                  type='button'
                  className='close Modal_upperLeftCloseButton'
                  onClickCapture={e => handleActions(e, action)}
                >
                  &times;
                </button>
              </div>
            </div>
            
            {/* <!-- Modal body --> */}
            <div className='modal-body Modal__body'>
              <div className='Modal__bodyFirstRow'>
                <div className='Modal__bodyLeftCol'>
                  <button>{button01}</button>
                </div>
                <div className='Modal__bodyRightCol'>
                <button>{button02}</button>
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
                {button03}
              </button>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default SelectRole
