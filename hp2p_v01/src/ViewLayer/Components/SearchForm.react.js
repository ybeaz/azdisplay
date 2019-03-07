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
    const { sid } = this.props
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
    const { sid, searchPlaceholder, searchButton, typeRequest, typeMedia } = this.props

    let cid = `typeRequest-${uuidv4()}`
    const prefix1 = 'FieldButtons_typeRequestFirstRow'
    const classNames1 = 'Dropdown_typeRequestFirstRow'
    const typeRequestProps1 = { cid, prefix: prefix1, listArr: typeRequest, displayBtnType: 'text', classNames: classNames1 }

    cid = `typeMedia-${uuidv4()}`
    const prefix3 = 'Dropdown_typeMediaFirstRow'
    const classNames3 = 'Dropdown_typeMediaFirstRow'
    const typeMediaProps3 = { cid, prefix: prefix3, listArr: typeMedia, displayBtnType: 'icon', classNames: classNames3 }

    const searchInputId = `${this.cid}-searchInput`
    const buttonInputId = `${this.cid}-buttonInput`

    // console.info('SearchForm->render() [10]',{ });
    return (
      <div id={this.cid} className={`container-fluid form-group ${sid}`}>
        <div className='row SearchForm__searchRow transitionPrevSearch'>
          <div className='col-lg-8 col-md-8 col-sm-8 col-9 SearchForm__inputCol'>
            <input id={searchInputId} type='text' className='form-control' 
              placeholder={searchPlaceholder} />
          </div>
          <div className='col-lg-2 col-md-2 col-sm-2 col-3 SearchForm__searchButtonCol'>
            <button id={buttonInputId} type='submit' className='btn SearchForm__searchButton'>
              {searchButton}
            </button>
          </div>
          <div className='col-lg-2 col-md-2 col-sm-2 col-0' />
        </div>
        <div className='row SearchForm__categoryRow transitionPrevSearch'>
          <div className='col-lg-8 col-md-8 col-sm-8 col-12 SearchForm__categoryCol'>
            <FieldButtons {...typeRequestProps1} />
          </div>
          <div className='col-lg-2 col-md-2 col-sm-2 col-0 SearchForm__categoryCol'>
            <Dropdown {...typeMediaProps3} />
          </div>
          <div className='col-lg-2 col-md-2 col-sm-2 col-0' />
        </div>
      </div>
    )
  }
}

SearchForm.propTypes = {
}

export default SearchForm
