
import React from 'react'
import PropTypes from 'prop-types'
import * as serviceFunc from '../../Shared/serviceFunc'

// eslint-disable-next-line react/prefer-stateless-function
class SearchForm extends React.PureComponent {

  componentDidMount() {
    setTimeout(() => {
      serviceFunc.updateTransition('.searchRow.transitionPrevSearch', 'transitionNextSearch')
      serviceFunc.updateTransition('.categoryRow.transitionPrevSearch', 'transitionNextSearch')  
    }, 0)
  }

  render() {
    // console.info('SearchForm->render() [10]',{});
    return (
      <div id='SearchForm' className='container-fluid form-group SearchForm'>
        <div className='row searchRow transitionPrevSearch'>
          <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
            <input type='text' className='form-control' placeholder='Сфера в которой нужен профессионал...' />
          </div>
          <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
            <button type='submit' className='btn searchButton'>Найти</button>
          </div>
        </div>
        <div className='row categoryRow transitionPrevSearch'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <button type='button' className='btn categoryButton' autoFocus={true}>Все</button>
            <button type='button' className='btn categoryButton'>Консультация</button>
            <button type='button' className='btn categoryButton'>Обучение</button>
            <button type='button' className='btn categoryButton'>Фриланс</button>
          </div>
        </div>
      </div>
    )
  }
}

SearchForm.propTypes = {
}

export default SearchForm
