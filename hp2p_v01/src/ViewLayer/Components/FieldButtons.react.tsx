import React from 'react'
import uuidv4 from 'uuid/v4'

import * as Interfaces from '../../Shared/interfaces'

interface Props {
  sid: string,
    // section class for Less(css)
  cid: string,
    // component id
  classNames: string,
    // affect the "main button"
  displayBtnType: string,
    // Possible values: 'icon', 'text'
  listArr: object[],
    /* Example
      [ 
        { capture: 'Все виды', classNameArr: ['fas fa-video'], active: true },
        ...
      ],
    */
  isGenaralShowAlways: boolean,
  isGeneralShowPhone: boolean,
  parentHandleEvents: Function,
}
interface State {
  listArr: object[],
}


export class FieldButtons extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
    cid: '',
    classNames: '',
    displayBtnType: 'icon',
  }

  constructor(props: any) {
    super(props)
    const { listArr } = this.props
    this.state = {
      listArr,
    }
  }

  public componentDidMount(): void {
    /*
    const { listArr } = this.state
    const item = listArr.filter((itemFilter: any) => itemFilter.active === true)[0]
    const action: Interfaces.Action = { type: 'selectItem', ...item }
    this.handleEvents({}, action)
    */
  }

  public getFieldButtons: Function = (
    listArr: any, isGenaralShowAlways: boolean, isGeneralShowPhone: boolean,
  ): JSX.Element => listArr
    .map(item => {
      const { capture, active, general } = item
      let classDisplayNone: string = ''

      if (general && isGenaralShowAlways === false) {
        classDisplayNone = 'd_n'
      }
      else if (general && isGeneralShowPhone === false) {
        classDisplayNone = 'd_n_phone'
      }

      let activeClass: string = ''
      if (active === true) {
        activeClass = 'FieldButtons__button_active'
      }
      const eid = `FieldButtons__button-${uuidv4()}`
      const action: Interfaces.Action = { type: 'selectItem', ...item }

      return (
        <button
          id={eid}
          key={eid}
          type='button'
          className={`btn btn-success FieldButtons__button ${activeClass} ${classDisplayNone}`}
          onClickCapture={e => this.handleEvents(e, action)}
        >
          {capture}
        </button>
      )
  })

  public handleEvents: Function = (e: any, action: Interfaces.Action ) => {
    switch (action.type)
    {
      case 'selectItem': {
        const { parentHandleEvents } = this.props

        const { listArr } = this.state
        const { capture: capturePayload, general: generalPayload } = action

        const listArrNext: any = listArr.map((item: any) => {
          const { capture, active, general } = item
          let activeNext: any

          if (generalPayload) {
            activeNext = false
            if (capture === capturePayload) {
              activeNext = true
            }
          }
          else {
            activeNext = active
            if (general) {
              activeNext = false
            }
            else if (capture === capturePayload) {
              activeNext = !active
            }
          }

          return { ...item, active: activeNext }
        })


        const action01: Interfaces.Action = { type: 'onClickSearchCategory', data: listArrNext}
        parentHandleEvents({}, action01)
        // console.info(`FieldButtons->handleEvents() type: ${action.type}`, { listArrNext, listArr, action, e })
        this.setState({ listArr: listArrNext })
      }
      break

      default: {
        console.info('FieldButtons->handleEvents() [10]','I have never heard of that ... ', action)
      } break
    }
  }

  public render(): JSX.Element {
    const { sid, isGenaralShowAlways, isGeneralShowPhone } = this.props
    const { listArr } = this.state
    const fieldButtons = this.getFieldButtons(listArr, isGenaralShowAlways, isGeneralShowPhone )

    return (
      <div className={`FieldButtons ${sid}`}>
        {fieldButtons}
      </div>
    )
  }
}
