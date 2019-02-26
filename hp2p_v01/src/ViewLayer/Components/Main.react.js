
import React from 'react'
import PropTypes from 'prop-types'
import * as serviceFunc from '../../Shared/serviceFunc'
import SearchForm from './SearchForm.react'
import CatalogTags from './CatalogTags.react'

// eslint-disable-next-line react/prefer-stateless-function
class Main extends React.PureComponent {

  componentDidMount() {
    serviceFunc.updateTransition('titleWrapper', 'transitionPrevMain', 'transitionNextMain')
  }

  render() {
    // console.info('Main->render() [10]',{});
    return (
      <div className='container-fluid Main'>
        <div className='row newSection'>
          <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' />
          <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8'>
            <div className='titleWrapper transitionPrevMain'>
              <h1 className='descriptorRow1'>
                Воспользуйтесь знаниями специалистов
              </h1>
              <h2 className='descriptorRow2'>
                Совместно найдите решение вашего вопроса
              </h2>
            </div>
            <SearchForm />
          </div>
          <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' />
        </div>
        <div className='row newSection grey'>
          <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' />
          <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8'>

          </div>
          <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' />
        </div>
      </div>
    )
  }
}

Main.propTypes = {
}

export default Main
