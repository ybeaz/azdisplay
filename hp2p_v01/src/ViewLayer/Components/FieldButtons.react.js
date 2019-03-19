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

  getFieldButtons = (listArr, isGenaralShowAlways, isGeneralShowPhone) => listArr
    .map(item => {
      const { capture, active, general } = item
      let classDisplayNone = ''
      
      if (general && isGenaralShowAlways === false) {
        classDisplayNone = 'd_n'
      }
      else if (general && isGeneralShowPhone === false) {
        classDisplayNone = 'd_n_phone'
      }

      let activeClass = ''
      if (active === true) {
        activeClass = 'FieldButtons__button_active'
      }
      const eid = `FieldButtons__button-${uuidv4()}`
      const action = { type: 'selectItem', ...item, eid }
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

  handleEvents = (e, action) => {
    switch (action.type) {
      case 'selectItem': {

        const { listArr } = this.state
        const { capture: capturePayload, general: generalPayload } = action

        const listArrNext = listArr.map(item => {
          const { capture, active, general } = item
          let activeNext

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

        this.setState({ listArr: listArrNext })
      } break

      default: {
        console.info( 'FieldButtons->handleEvents() [10]','I have never heard of that ... ', action)
      } break
    }
  }

  render() {
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


FieldButtons.defaultProps = {
  cid: '',
  classNames: '',
  displayBtnType: 'icon',
}

/* eslint-disable indent */
FieldButtons.propTypes = {
  sid: PropTypes.string.isRequired,
    // section class for Less(css)
  cid: PropTypes.string,
    // component id
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
