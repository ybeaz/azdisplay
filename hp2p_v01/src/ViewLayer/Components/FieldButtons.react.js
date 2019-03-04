import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuidv4'

// eslint-disable-next-line react/prefer-stateless-function
class FieldButtons extends React.PureComponent {
  constructor(props) {
    super(props)
    const { typeRequest } = this.props
    this.state = {
      typeRequest,
    }
  }


  eventHandle = (e, action) => {
    switch (action.type) {
      case 'changeTypeRequest': {

        const { typeRequest } = this.state
        const { payload } = action
        const { capture: capturePayload } = payload
        // console.info(`action.type ${action.type}`, { action, state: this.state })

        const typeRequestNext = typeRequest.map(item => {
          const { capture } = item
          let autoFocus = false
          if (capture === capturePayload) {
            autoFocus = true
          }
          return { ...item, autoFocus }
        })

        this.setState({ typeRequest: typeRequestNext })
      } break

      default: {
        console.info( 'FieldButtons->eventHandle() [10]','I have never heard of that ... ', action)
      } break
    }
  }

  getFieldButtons = arr => arr.map((item, i) => {
    const { capture, autoFocus } = item
    let autoFocusClass = ''
    if (autoFocus === true) {
      autoFocusClass = 'FieldButtons__button_active'
    }
    const eid = `FieldButtons__button-${uuid()}`
    const payload = { eid, capture }
    const action = { type: 'changeTypeRequest', payload }
    return (
      <button
        id={eid}
        key={eid}
        type='button'
        className={`btn btn-success FieldButtons__button ${autoFocusClass}`}
        onClickCapture={e => this.eventHandle(e, action)}
      >
        {capture}
      </button>
    )
  })

  render() {

    const { typeRequest } = this.state
    const fieldButtons = this.getFieldButtons(typeRequest)

    return (
      <div className='FieldButtons'>
        {fieldButtons}
      </div>
    )
  }
}

FieldButtons.propTypes = {
}

export default FieldButtons
