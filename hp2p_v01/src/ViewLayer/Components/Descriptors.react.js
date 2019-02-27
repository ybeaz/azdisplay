
import React from 'react'
import PropTypes from 'prop-types'
import * as serviceFunc from '../../Shared/serviceFunc'
import SearchForm from './SearchForm.react'
// eslint-disable-next-line react/prefer-stateless-function
class Descriptors extends React.PureComponent {

  componentDidMount() {
    setTimeout(() =>
      serviceFunc.updateTransition('.descWrapper.transitionPrevDesc', 'transitionNextDesc'),
    0)
  }

  render() {
    const { propsScope } = this.props
    const { h1, h2 } = propsScope
    // console.info('Descriptors->render() [10]',{});
    return (
      <div className='Descriptors'>
        <div className='descWrapper transitionPrevDesc'>
          <h1 className='descriptorRow1'>{h1}</h1>
          <h2 className='descriptorRow2'>{h2}</h2>
        </div>
      </div>
    )
  }
}

Descriptors.propTypes = {
}

export default Descriptors
