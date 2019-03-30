import React from 'react'

import * as Interfaces from '../../Shared/interfaces'

interface ListObj {
  capture: string, iconFa?: [], active: boolean, general?: boolean,
  sourceClass?: string, spritePosition?: [], 
}

interface Props {
  readonly sid: string,
    // section class for Less(css)
  readonly cid: string,
    // component id
  readonly displayBtnType: string,
    // Possible values: 'icon', 'text'
  readonly listArr: any,
  readonly delay: number,
    // Delay for assigning value to the button after option clicked
  readonly parentHandleEvents: Function,
  readonly parentActionCase: string,
  readonly language: string,
}
interface State {
  listArr: ListObj[],
  toggle: string,
}

export class Dropdown extends React.PureComponent<Props, State> {
  public static defaultProps = {
    cid: '',
    displayBtnType: 'icon',
    delay: 0,
    parentHandleEvents: (): void => {},
  }

  constructor(props: any) {
    super(props)
    const { listArr } = this.props
    // console.info('Dropdown->constructor()', { props: this.props })
    this.state = {
      listArr,
      toggle: 'Dropdown__dropdownMenu_hide',
    }
  }

  public componentDidMount(): void {
    const { listArr } = this.state
    const item: any = listArr.filter((itemFilter: any) => itemFilter.active === true)[0]
    const { capture } = item
    // console.info('Dropdown->componentDidMount()', { capture, item })
    const action: Interfaces.Action = { type: 'selectItem', capture }
    this.handleEvents({}, action)
  }

  public componentDidUpdate(prevProps: any, prevState: any, snapshot: any): void {
    const { listArr, language } = this.props
    // console.info('Dropdown->componentDidUpdate()', { props: this.props, state: this.state })
    if (JSON.stringify(prevProps.language) !== JSON.stringify(language)) {
      this.setState({ listArr })
    }
  }

  public getDropdownItems = (listArr: ListObj[]) => listArr.map((item: ListObj, i: number) => {
    const { capture, iconFa, active, general, sourceClass, spritePosition } = item

    let icons: any
    if (iconFa) {
      icons = this.getFontAwsomeIcons(iconFa)
    }
    else if (sourceClass && spritePosition) {
      icons = this.getSpriteElement(sourceClass, spritePosition, 'Dropdown__spriteImgItem')
    }

    if (general && general === true) {
      icons = null
    }

    let activeClass = 'Dropdown__item_notSelected'
    if (active === true) {
      activeClass = 'Dropdown__item_selected'
    }

    const action: Interfaces.Action = { type: 'selectItem', capture }

    return (
      <div
        key={i}
        className={`Dropdown__item dropdown-item ${activeClass}`}
        onClickCapture={(e: React.MouseEvent<HTMLDivElement>) => this.handleEvents(e, action)}
      >
        {icons}
        <span>{capture}</span>
      </div>
    )
  })

  public getSpriteElement = (sourceClass, spritePosition, elementClass) => {

    return (
      <div
        className={`${elementClass} ${sourceClass}`}
        style={{ backgroundPosition: spritePosition }}
      />
    )
  }

  public getFontAwsomeIcons = (arr: []) => {
    let iconHtml = null
    if (arr) {
      const icons = arr.map((item: string, i) => {
        return <i key={i} className={`iconFa ${item}`} />
      })
      iconHtml = <div className='d_i_b'>{icons}</div>
    }
    return iconHtml
  }

  public getButtonFace = (displayBtnType: string, icons, capture: string) => {
    let buttonFace = icons
    if (displayBtnType === 'text') {
      buttonFace = <span>{capture}</span>
    }
    return buttonFace
  }

  public handleEvents = (e: any, action: Interfaces.Action): void => {
    const { delay, parentHandleEvents, parentActionCase } = this.props

    switch (action.type) {

      case 'selectItem':
      {
        // console.info( 'Dropdown->handleEvents() [1]', action)
        let { listArr } = this.state
        const { capture: capturePayload } = action

        listArr = listArr.map((item: ListObj) => {
          const { capture } = item
          let active = false
          if (capture === capturePayload) {
            active = true
          }

          return { ...item, active }
        })

        // console.info(`Dropdown->handleEvents() type: ${action.type}`, { parentHandleEvents, listArr, action, e })
        const action01: Interfaces.Action = { type: parentActionCase, data: listArr }
        parentHandleEvents(e, action01)

        setTimeout(() => {
          this.setState({ listArr, toggle: 'Dropdown__dropdownMenu_hide' })
        }, delay)
      }
      break

      case 'toggleDropdownMenu': {
        const { toggle } = this.state
        let toggleNext = 'Dropdown__dropdownMenu_hide'
        if (toggle === toggleNext) {
          toggleNext = 'Dropdown__dropdownMenu_show'
        }
        this.setState({ toggle: toggleNext })
      } break

      default: {
        console.info( 'Dropdown->handleEvents() [10]','I have never heard of that ... ', action)
      } break
    }
  }

  public render(): JSX.Element {

    const { cid, sid, displayBtnType } = this.props
    const { listArr, toggle } = this.state
    const activeItem = listArr.filter(item => item.active === true)[0]
    const { iconFa, sourceClass, spritePosition } = activeItem

    let icons: any
    if (iconFa) {
      icons = this.getFontAwsomeIcons(iconFa)
    }
    else if (sourceClass && spritePosition) {
      icons = this.getSpriteElement(sourceClass, spritePosition, 'Dropdown__spriteImgButtonFace')
    }

    const { capture } = activeItem
    const buttonFace = this.getButtonFace(displayBtnType, icons, capture)

    // console.info('Dropdown->render()', { cid, activeItem, listArr })

    const dropdownItems = this.getDropdownItems(listArr)
    const action: Interfaces.Action = { type: 'toggleDropdownMenu' }

    return (
      <div id={cid} className={`Dropdown dropdown ${sid}`}>
        <button
          type='button'
          className='btn Dropdown__toggle Dropdown__button'
          onClickCapture={e => this.handleEvents(e, action)}
        >
          {buttonFace}
        </button>
        <div className={`Dropdown__dropdownMenu dropdown-menu dropdown-menu-right ${toggle}`}>
          {dropdownItems}
        </div>
      </div>
    )
  }
}
