import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props)
    const { typeMedia } = this.props
    this.prefix = 'Dropdown'
    this.state = {
      typeMedia,
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
    const action = { type: 'selectTypeMedia', payload }

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
    const icons = arr.map((item, i) => {
      return <i key={i} className={`iconFa ${item}`} />
    })
    return <div className='d_i_b'>{icons}</div>
  }

  eventHandle = (e, action) => {
    switch (action.type) {

      case 'selectTypeMedia': {
        // console.info( 'Dropdown->eventHandle() [1]', action)

        const { typeMedia } = this.state
        const { payload } = action
        const { capture: capturePayload } = payload

        const typeMediaNext = typeMedia.map(item => {
          const { capture } = item
          let autoFocus = false
          if (capture === capturePayload) {
            autoFocus = true
          }
          return { ...item, autoFocus }
        })

        this.setState({ typeMedia: typeMediaNext })

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

    const { cid, classNames } = this.props
    const { typeMedia, toggle } = this.state
    const activeItem = typeMedia.filter(item => item.autoFocus === true)[0]
    const { classNameArr } = activeItem

    const icons = this.getFontAwsomeIcons(classNameArr)
    // console.info('Dropdown->render()', { cid, activeItem, classNames, typeMedia })

    const dropdownItems = this.getDropdownItems(typeMedia, this.prefix)
    const action = { type: 'toggleDropdownMenu' }

    return (
      <div className={`${this.prefix} dropdown ${cid} ${classNames}`}>
        <button
          type='button'
          className='btn btn-success dropdown-toggle Dropdown__button'
          onClickCapture={e => this.eventHandle(e, action)}
        >
          {icons}
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
  typeMedia: [],
}

Dropdown.propTypes = {
  cid: PropTypes.string,
  classNames: PropTypes.string,
  typeMedia: PropTypes.arrayOf(PropTypes.object),
}

export default Dropdown
