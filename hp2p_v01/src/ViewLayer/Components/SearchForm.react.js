import React from 'react'
import PropTypes from 'prop-types'
import uuidv4 from 'uuid/v4'
import * as serviceFunc from '../../Shared/serviceFunc'

import FieldButtons from './FieldButtons.react'
import Dropdown from './Dropdown.react'

// eslint-disable-next-line react/prefer-stateless-function
class SearchForm extends React.PureComponent {
  constructor(props) {
    super(props)
    const { propsScope } = this.props
    const { sid } = propsScope
    this.cid = `${sid}-${uuidv4()}`
  }

  componentDidMount() {
    setTimeout(() => {
      let selector = `#${this.cid} > div.row.SearchForm__searchRow.transitionPrevSearch`
      serviceFunc.updateTransition(selector, 'transitionNextSearch')
      selector = `#${this.cid} > div.row.SearchForm__categoryRow.transitionPrevSearch`
      serviceFunc.updateTransition(selector, 'transitionNextSearch')
    }, 0)

    setTimeout(() => {
      const elementsInput = document.querySelectorAll('input')
      elementsInput[0].focus()
      elementsInput[0].select()
    }, 1500)
  }

  render() {
    const { propsScope } = this.props
    const { sid, searchPlaceholder, searchButton, typeRequest, typeMedia } = propsScope

    let cid = `FieldButtons-${uuidv4()}`
    const typeRequestProps = { cid, typeRequest }
    cid = `Dropdown-${uuidv4()}`
    const classNames = 'p_l_2_rem'
    const typeMediaProps = { cid, classNames, typeMedia }

    const searchInputId = `${this.cid}-searchInput`
    const buttonInputId = `${this.cid}-buttonInput`

    // console.info('SearchForm->render() [10]',{});
    return (
      <div id={this.cid} className={`container-fluid form-group ${sid}`}>
        <div className='row SearchForm__searchRow transitionPrevSearch'>
          <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10 SearchForm__inputCol'>
            <input id={searchInputId} type='text' className='form-control' 
              placeholder={searchPlaceholder} />
          </div>
          <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2 SearchForm__searchButtonCol'>
            <button id={buttonInputId} type='submit' className='btn SearchForm__searchButton'>
              {searchButton}
            </button>
          </div>
        </div>
        <div className='row SearchForm__categoryRow transitionPrevSearch'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 SearchForm__categoryCol'>
            <FieldButtons {...typeRequestProps} />
            <Dropdown {...typeMediaProps} />
            {/*
            <button type='button' className='btn categoryButton'>
              <i class="fas fa-video"></i>
            </button>
            */}
          </div>
        </div>
      </div>
    )
  }
}

SearchForm.propTypes = {
}

export default SearchForm
