import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props)
    const { listArr } = this.props
    this.state = {
      listArr,
      toggle: 'Dropdown__dropdownMenu_hide',
    }
  }

  getDropdownItems = listArr => listArr.map((item, i) => {
    const { capture, iconFa, active, general, sourceClass, spritePosition } = item
    
    let icons
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

    const action = { type: 'selectDataItem', capture }

    return (
      <div
        key={i}
        className={`Dropdown__item dropdown-item ${activeClass}`}
        onClickCapture={e => this.handleEvent(e, action)}
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

  getFontAwsomeIcons = arr => {
    let iconHtml = null
    if (arr) {
      const icons = arr.map((item, i) => {
        return <i key={i} className={`iconFa ${item}`} />
      })
      iconHtml = <div className='d_i_b'>{icons}</div>
    }
    return iconHtml
  }

  getButtonFace = (displayBtnType, icons, capture) => {
    let buttonFace = icons
    if (displayBtnType === 'text') {
      buttonFace = <span>{capture}</span>
    }
    return buttonFace
  }

  handleEvent = (e, action) => {
    switch (action.type) {

      case 'selectDataItem': {
        // console.info( 'Dropdown->handleEvent() [1]', action)
        const { delay } = this.props
        const { listArr } = this.state
        const { capture: capturePayload } = action

        const listArrNext = listArr.map(item => {
          const { capture } = item
          let active = false
          if (capture === capturePayload) {
            active = true
          }
          return { ...item, active }
        })

        this.setState({ listArr: listArrNext })

        setTimeout(() => {
          this.setState({ toggle: 'Dropdown__dropdownMenu_hide' })
        }, delay)
      } break

      case 'toggleDropdownMenu': {
        const { toggle } = this.state
        let toggleNext = 'Dropdown__dropdownMenu_hide'
        if (toggle === toggleNext) {
          toggleNext = 'Dropdown__dropdownMenu_show'
        }
        this.setState({ toggle: toggleNext })
      } break

      default: {
        console.info( 'Dropdown->handleEvent() [10]','I have never heard of that ... ', action)
      } break
    }
  }

  render() {

    const { cid, sid, displayBtnType } = this.props
    const { listArr, toggle } = this.state
    const activeItem = listArr.filter(item => item.active === true)[0]
    const { iconFa, sourceClass, spritePosition } = activeItem

    let icons
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
    const action = { type: 'toggleDropdownMenu' }

    return (
      <div id={cid} className={`Dropdown dropdown ${sid}`}>
        <button
          type='button'
          className='btn dropdown-toggle Dropdown__button'
          onClickCapture={e => this.handleEvent(e, action)}
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

Dropdown.defaultProps = {
  cid: '',
  displayBtnType: 'icon',
  delay: 0,
}

/* eslint-disable indent */
Dropdown.propTypes = {
  sid: PropTypes.string.isRequired,
    // section class for Less(css)
  cid: PropTypes.string,
    // component id
  displayBtnType: PropTypes.string,
    // Possible values: 'icon', 'text'
  listArr: PropTypes.arrayOf(PropTypes.object).isRequired,
    /* Example
      [ 
        { capture: 'Все виды', iconFa: ['fas fa-video'], active: true },
        ...
      ],
    */
   delay: PropTypes.number,
}

export default Dropdown
