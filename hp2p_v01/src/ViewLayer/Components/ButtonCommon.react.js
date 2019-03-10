import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class ButtonCommon extends React.PureComponent {


  render() {
    const { sid, capture, handleFunction, action } = this.props
    // console.info('RegistrationButton->render() [10]', { })

    return (
      <div id={sid} className={`container-fluid form-group ButtonCommon ${sid}`}>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-12 text-center'>
            <button 
              type='button'
              className='btn'
              onClick={e => handleFunction(e, action)}
            >
              {capture}
            </button>
          </div>
        </div>
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
