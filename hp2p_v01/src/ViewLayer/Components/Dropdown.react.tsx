import React from 'react'

import * as Interfaces from '../../Shared/interfaces'

interface ListObj {
  capture: string, iconFa?: [], active: boolean, general?: boolean,
  sourceClass?: string, spritePosition?: [], 
}

interface Props {
  sid: string,
    // section class for Less(css)
  cid: string,
    // component id
  displayBtnType: string,
    // Possible values: 'icon', 'text'
  readonly listArr: ListObj[],
  delay: number,
    // Delay for assigning value to the button after option clicked
  parentHandleEvents: Function,
}
interface State {
  listArr: ListObj[],
  toggle: string,
}

class Dropdown extends React.PureComponent<Props, State> {
  public static defaultProps = {
    cid: '',
    displayBtnType: 'icon',
    delay: 0,
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

  getDropdownItems = (listArr: ListObj[]) => listArr.map((item: ListObj, i: number) => {
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

    const action: Interfaces.Action = { type: 'selectDataItem', capture }

    return (
      <div
        key={i}
        className={`Dropdown__item dropdown-item ${activeClass}`}
        onClickCapture={e => this.handleEvents(e, action)}
      >
        {icons}
        <span>{capture}</span>
      </div>
    )
  })

  getSpriteElement = (sourceClass, spritePosition, elementClass) => {

    return (
      <div
        className={`${elementClass} ${sourceClass}`}
        style={{ backgroundPosition: spritePosition }}
      />
    )
  }

  getFontAwsomeIcons = (arr: []) => {
    let iconHtml = null
    if (arr) {
      const icons = arr.map((item: string, i) => {
        return <i key={i} className={`iconFa ${item}`} />
      })
      iconHtml = <div className='d_i_b'>{icons}</div>
    }
    return iconHtml
  }

  getButtonFace = (displayBtnType: string, icons, capture: string) => {
    let buttonFace = icons
    if (displayBtnType === 'text') {
      buttonFace = <span>{capture}</span>
    }
    return buttonFace
  }

  handleEvents = (e: object, action: Interfaces.Action) => {
    switch (action.type) {

      case 'selectDataItem':
      {
        // console.info( 'Dropdown->handleEvents() [1]', action)
        const { delay, parentHandleEvents } = this.props
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

        const action01: Interfaces.Action = { type: 'onClickSearchMedia', data: listArr }
        parentHandleEvents({}, action01)
        this.setState({ listArr })

        setTimeout(() => {
          this.setState({ toggle: 'Dropdown__dropdownMenu_hide' })
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

  render() {

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
          className='btn dropdown-toggle Dropdown__button'
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

export default Dropdown
