import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props)
    const { listArr } = this.props
    this.state = {
      listArr,
      toggle: `Dropdown__dropdownMenu_hide`,
    }
  }

  getDropdownItems = arr => arr.map((item, i) => {
    const { capture, classNameArr, active } = item
    
    let icons = this.getFontAwsomeIcons(classNameArr)

    if (i === 0) {
      icons = null
    }

    let activeClass = 'Dropdown__item_notSelected'
    if (active === true) {
      activeClass = 'Dropdown__item_selected'
    }

    const payload = { capture }
    const action = { type: 'selectDataItem', payload }

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

        const { listArr } = this.state
        const { payload } = action
        const { capture: capturePayload } = payload

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
        }, 1000)
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

    const { cid, prefix, displayBtnType } = this.props
    const { listArr, toggle } = this.state
    const activeItem = listArr.filter(item => item.active === true)[0]
    const { classNameArr } = activeItem

    const icons = this.getFontAwsomeIcons(classNameArr)
    const { capture } = activeItem
    const buttonFace = this.getButtonFace(displayBtnType, icons, capture)

    // console.info('Dropdown->render()', { cid, activeItem, listArr })

    const dropdownItems = this.getDropdownItems(listArr)
    const action = { type: 'toggleDropdownMenu' }

    return (
      <div id={cid} className={`Dropdown dropdown ${prefix}`}>
        <button
          type='button'
          className='btn btn-success dropdown-toggle Dropdown__button'
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
  prefix: '',
  displayBtnType: 'icon',
}

/* eslint-disable indent */
Dropdown.propTypes = {
  cid: PropTypes.string,
    // component id
  prefix: PropTypes.string,
    // For each prefix styles tree can be created in Dropdown.less file
  displayBtnType: PropTypes.string,
    // Possible values: 'icon', 'text'
  listArr: PropTypes.arrayOf(PropTypes.object).isRequired,
    /* Example
      [ 
        { capture: 'Все виды', classNameArr: ['fas fa-video'], active: true },
        ...
      ],
    */
}

export default Dropdown
