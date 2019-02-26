
import React from 'react'
import PropTypes from 'prop-types'
import * as serviceFunc from '../../Shared/serviceFunc'
import SearchForm from './SearchForm.react'
// eslint-disable-next-line react/prefer-stateless-function
class Descriptors extends React.PureComponent {

  componentDidMount() {
    setTimeout(() =>
      serviceFunc.updateTransition('descWrapper', 'transitionPrevDesc', 'transitionNextDesc'),
    0)
  }

  render() {
    // console.info('Descriptors->render() [10]',{});
    return (
      <div className='Descriptors'>
        <div className='descWrapper transitionPrevDesc'>
          <h1 className='descriptorRow1'>
            Воспользуйтесь знаниями специалистов
          </h1>
          <h2 className='descriptorRow2'>
            Совместно найдите решение вашего вопроса
          </h2>
        </div>
      </div>
    )
  }
}

Descriptors.propTypes = {
}

export default Descriptors
