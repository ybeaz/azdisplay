import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props)
    const { dataArr } = this.props
    this.prefix = 'Dropdown'
    this.state = {
      dataArr,
      toggle: `${this.prefix}__dropdownMenu_hide`,
    }
  }

  getDropdownItems = (arr, prefix) => arr.map((item, i) => {
    const { capture, classNameArr, autoFocus } = item
    
    const prefixNext = `${prefix}__item_icon`
    let icons = this.getFontAwsomeIcons(classNameArr, prefixNext)

    if (i === 0) {
      icons = null
    }

    let autoFocusClass = 'Dropdown__item_notSelected'
    if (autoFocus === true) {
      autoFocusClass = 'Dropdown__item_selected'
    }

    const payload = { capture }
    const action = { type: 'selectDataItem', payload }

    return (
      <div
        key={i}
        className={`${prefix}__item dropdown-item ${autoFocusClass}`}
        onClickCapture={e => this.eventHandle(e, action)}
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

  getButtonFace = (displayType, icons, capture) => {
    let buttonFace = icons
    if (displayType === 'text') {
      buttonFace = <span>{capture}</span>
    }
    return buttonFace
  }

  eventHandle = (e, action) => {
    switch (action.type) {

      case 'selectDataItem': {
        // console.info( 'Dropdown->eventHandle() [1]', action)

        const { dataArr } = this.state
        const { payload } = action
        const { capture: capturePayload } = payload

        const dataArrNext = dataArr.map(item => {
          const { capture } = item
          let autoFocus = false
          if (capture === capturePayload) {
            autoFocus = true
          }
          return { ...item, autoFocus }
        })

        this.setState({ dataArr: dataArrNext })

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
        console.info( 'Dropdown->eventHandle() [10]','I have never heard of that ... ', action)
      } break

    }
  }

  render() {

    const { cid, classNames, displayType } = this.props
    const { dataArr, toggle } = this.state
    const activeItem = dataArr.filter(item => item.autoFocus === true)[0]
    const { classNameArr } = activeItem

    const icons = this.getFontAwsomeIcons(classNameArr)
    const { capture } = activeItem
    const buttonFace = this.getButtonFace(displayType, icons, capture)

    // console.info('Dropdown->render()', { cid, activeItem, classNames, dataArr })

    const dropdownItems = this.getDropdownItems(dataArr, this.prefix)
    const action = { type: 'toggleDropdownMenu' }

    return (
      <div className={`${this.prefix} dropdown ${cid} ${classNames}`}>
        <button
          type='button'
          className='btn btn-success dropdown-toggle Dropdown__button'
          onClickCapture={e => this.eventHandle(e, action)}
        >
          {buttonFace}
        </button>
        <div className={`${this.prefix}__dropdownMenu dropdown-menu dropdown-menu-right ${toggle}`}>
          {dropdownItems}
        </div>
      </div>
    )
  }
}

Dropdown.defaultProps = {
  cid: '',
  classNames: '',
  dataArr: [],
}

Dropdown.propTypes = {
  cid: PropTypes.string,
  classNames: PropTypes.string,
  dataArr: PropTypes.arrayOf(PropTypes.object),
}

export default Dropdown
