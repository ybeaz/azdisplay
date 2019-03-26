import React from 'react'

import * as Interfaces from '../../Shared/interfaces'

interface Props {
  readonly modeProdDev: Interfaces.ModeProdDev,
  readonly sid: string,
  readonly capture: string,
  readonly button01: string,
  readonly button02: string,
  readonly buttonFooter: string,
  readonly inputPlaceHolder: string,
  readonly warnNotCheckingRole: string,
  readonly warnNotCorrectEmail: string,
  readonly handleActions: Function,
}
interface State {
  readonly user: boolean,
  readonly specialist: boolean,
}

export class SelectRole extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  private readonly inputRef01: React.RefObject<HTMLInputElement>

  constructor(props: any) {
    super(props)
    this.inputRef01 = React.createRef()
    this.state = {
      user: false,
      specialist: false,
    }
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

  getDisplayClass = status => {

    let displayClass = 'd_n'
    if (status) {
      displayClass = 'd_i_f'
    }

    return displayClass
  }

  public handleEvents = (e: any, action: Interfaces.Action) => {
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

      case 'nextModal':
      {
        const {
          modeProdDev, warnNotCheckingRole, warnNotCorrectEmail, handleActions,
        } = this.props
        const { checkEnterEmail, checkSelectRole } = modeProdDev
        const { user, specialist } = this.state
        // console.info('SelectRole->handleEvents [5]', { email: this.inputRef01.current.value })
        
        if (checkEnterEmail === true &&
          this.inputRef01.current.value.match(/^([\S]{1,})@([\S]{1,})([\.]{1,1})([^.]{2,})$/gi) === null
        ) {
          alert(warnNotCorrectEmail)

          return
        }
        else if (checkSelectRole === true && user === false && specialist === false) {
          alert(warnNotCheckingRole)

          return
        }

        // console.info('SelectRole->handleEvents [10]', { email: this.inputRef01.current.value })
        const action01: Interfaces.Action = { type: 'pressOkInSelectRole' }
        handleActions(e, action01)
      }
      break
      case 'togglekUser':
      {
        let { user } = this.state
        user = !user
        this.setState({ user })
      }
      break
      case 'toggleSpecialist':
      {
        let { specialist } = this.state
        specialist = !specialist
        this.setState({ specialist })
      }
      break
      default:
      {
        console.info('SelectRole->handleEvents unexpected action', { action })
      }
    }



  }

  public render(): JSX.Element {
    const {
      sid, capture, button01, button02, buttonFooter, inputPlaceHolder, handleActions,
    } = this.props
    const { user, specialist } = this.state

    // console.info('SelectRole->render() [0]', { user, specialist, props: this.props })
    const modalClass: string = 'Modal__show'

    const userCheck = this.getDisplayClass(user)
    const specialistCheck = this.getDisplayClass(specialist)

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
                  onClickCapture={e => handleActions(e, {type: 'closeModalSelectRole'})}
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
                  <button
                    className='Modal__bodyRowColLeftButton'
                    onClickCapture={e => this.handleEvents(e, {type: 'togglekUser'})}
                  >
                    {button01}
                  </button>
                  <i className={`fas fa-check-circle Modal__bodyRowColLeftFaCheck ${userCheck}`} />
                </div>
                <div className='Modal__bodyRowColRight'>
                  <button
                    className='Modal__bodyRowColRightButton'
                    onClickCapture={e => this.handleEvents(e, {type: 'toggleSpecialist'})}
                  >
                    {button02}
                  </button>
                  <i className={`fas fa-check-circle Modal__bodyRowColRightFaCheck ${specialistCheck}`} />
                </div>
              </div>
            </div>

            {/* <!-- Modal footer --> */}
            <div className='modal-footer Modal__footer'>
              <button
                type='button'
                className='btn Modal__footerButton'
                onClickCapture={e => this.handleEvents(e, {type: 'nextModal'})}
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

