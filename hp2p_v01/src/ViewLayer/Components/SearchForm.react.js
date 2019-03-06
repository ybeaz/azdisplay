import React from 'react'
import PropTypes from 'prop-types'

import uuid from 'uuidv4'
import * as serviceFunc from '../../Shared/serviceFunc'

import FieldButtons from './FieldButtons.react'
import Dropdown from './Dropdown.react'

// eslint-disable-next-line react/prefer-stateless-function
class SearchForm extends React.PureComponent {
  constructor(props) {
    super(props)
    const { propsScope } = this.props
    const { sid } = propsScope
    this.cid = `${sid}-${uuid()}`
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

    let cid = `typeRequest-${uuid()}`
    const classNames1 = 'Dropdown_typeRequestSecondRow'
    const typeRequestProps = { cid, dataArr: typeRequest, displayType: 'text' }
    cid = `typeMedia-${uuid()}`
    const classNames2 = 'Dropdown_typeMediaFirstRow p_l_2_rem'
    const classNames3 = 'Dropdown_typeMediaSecondRow p_l_2_rem'
    const typeMediaProps = { cid, dataArr: typeMedia, displayType: 'icon' }

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
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 SearchForm__categoryCol'>
            <FieldButtons {...typeRequestProps} />
            <Dropdown {...typeMediaProps} classNames={classNames2} />
            {/*
            <button type='button' className='btn categoryButton'>
              <i class="fas fa-video"></i>
            </button>
            */}
          </div>
        </div>
        <div className='row SearchForm__dropdownsRow'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center'>
            <Dropdown {...typeRequestProps} classNames={classNames1} />
            <Dropdown {...typeMediaProps} classNames={classNames3} />
          </div>
        </div>
      </div>
    )
  }
}

SearchForm.propTypes = {
}

export default SearchForm
