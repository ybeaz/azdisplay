import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class RegistrationButton extends React.PureComponent {


  render() {
    const { sid, login } = this.props
    // console.info('RegistrationButton->render() [10]', { })

    return (
      <div id={sid} className={`container-fluid form-group ${sid}`}>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center'>
            <button type='button' className='btn '>
              {login}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

RegistrationButton.propTypes = {
}

export default RegistrationButton
