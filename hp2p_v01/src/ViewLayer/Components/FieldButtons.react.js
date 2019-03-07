import React from 'react'
import PropTypes from 'prop-types'
import uuidv4 from 'uuid/v4'

// eslint-disable-next-line react/prefer-stateless-function
class FieldButtons extends React.PureComponent {
  constructor(props) {
    super(props)
    const { listArr } = this.props
    this.state = {
      listArr,
    }
  }


  handleEvent = (e, action) => {
    switch (action.type) {
      case 'changeDataItem': {

        const { listArr } = this.state
        const { payload } = action
        const { capture: capturePayload } = payload
        // console.info(`action.type ${action.type}`, { action, state: this.state })

        const listArrNext = listArr.map(item => {
          const { capture } = item
          let active = false
          if (capture === capturePayload) {
            active = true
          }
          return { ...item, active }
        })

        this.setState({ listArr: listArrNext })
      } break

      default: {
        console.info( 'FieldButtons->handleEvent() [10]','I have never heard of that ... ', action)
      } break
    }
  }

  getFieldButtons = arr => arr.map((item, i) => {
    const { capture, active } = item
    let activeClass = ''
    if (active === true) {
      activeClass = 'FieldButtons__button_active'
    }
    const eid = `FieldButtons__button-${uuidv4()}`
    const payload = { eid, capture }
    const action = { type: 'changeDataItem', payload }
    return (
      <button
        id={eid}
        key={eid}
        type='button'
        className={`btn btn-success FieldButtons__button ${activeClass}`}
        onClickCapture={e => this.handleEvent(e, action)}
      >
        {capture}
      </button>
    )
  })

  render() {
    const { prefix } = this.props
    const { listArr } = this.state
    const fieldButtons = this.getFieldButtons(listArr)

    return (
      <div className={`FieldButtons ${prefix}`}>
        {fieldButtons}
      </div>
    )
  }
}


FieldButtons.defaultProps = {
  cid: '',
  classNames: '',
  displayBtnType: 'icon',
}

/* eslint-disable indent */
FieldButtons.propTypes = {
  cid: PropTypes.string,
    // component id
  prefix: PropTypes.string,
    // For each prefix styles tree can be created in Dropdown.less file
  classNames: PropTypes.string,
    // affect the "main button"
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

export default FieldButtons
