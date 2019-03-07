import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuidv4'

// eslint-disable-next-line react/prefer-stateless-function
class FieldButtons extends React.PureComponent {
  constructor(props) {
    super(props)
    const { dataArr } = this.props
    this.state = {
      dataArr,
    }
  }


  eventHandle = (e, action) => {
    switch (action.type) {
      case 'changeDataItem': {

        const { dataArr } = this.state
        const { payload } = action
        const { capture: capturePayload } = payload
        // console.info(`action.type ${action.type}`, { action, state: this.state })

        const dataArrNext = dataArr.map(item => {
          const { capture } = item
          let active = false
          if (capture === capturePayload) {
            active = true
          }
          return { ...item, active }
        })

        this.setState({ dataArr: dataArrNext })
      } break

      default: {
        console.info( 'FieldButtons->eventHandle() [10]','I have never heard of that ... ', action)
      } break
    }
  }

  getFieldButtons = arr => arr.map((item, i) => {
    const { capture, active } = item
    let activeClass = ''
    if (active === true) {
      activeClass = 'FieldButtons__button_active'
    }
    const eid = `FieldButtons__button-${uuid()}`
    const payload = { eid, capture }
    const action = { type: 'changeDataItem', payload }
    return (
      <button
        id={eid}
        key={eid}
        type='button'
        className={`btn btn-success FieldButtons__button ${activeClass}`}
        onClickCapture={e => this.eventHandle(e, action)}
      >
        {capture}
      </button>
    )
  })

  render() {
    const { prefix } = this.props
    const { dataArr } = this.state
    const fieldButtons = this.getFieldButtons(dataArr)

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
  dataArr: PropTypes.arrayOf(PropTypes.object).isRequired,
    /* Example
      [ 
        { capture: 'Все виды', classNameArr: ['fas fa-video'], active: true },
        ...
      ],
    */
}

export default FieldButtons
