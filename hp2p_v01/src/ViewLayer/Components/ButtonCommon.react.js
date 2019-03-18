import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class ButtonCommon extends React.PureComponent {


  render() {
    const { sid, capture, handleFunction, action } = this.props
    // console.info('RegistrationButton->render() [10]', { })

    return (
      <div id={sid} className={`ButtonCommon ${sid}`}>
        <button
          type='button'
          className='btn'
          onClick={e => handleFunction(e, action)}
        >
          {capture}
        </button>
      </div>
    )
  }
}


ButtonCommon.defaultProps = {
  capture: '',
  handleFunction: () => {},
  action: {},
}

/* eslint-disable indent */
ButtonCommon.propTypes = {
  sid: PropTypes.string.isRequired,
    // section id
  action: PropTypes.objectOf(PropTypes.any),
    // Action to pass handle function
}

export default ButtonCommon
