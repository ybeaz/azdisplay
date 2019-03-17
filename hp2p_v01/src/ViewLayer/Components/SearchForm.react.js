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
    this.inputRef = React.createRef()
    const { sid } = this.props
    this.cid = `${sid}-${uuidv4()}`
  }

  componentDidMount() {
    setTimeout(() => {
      let selector = `#${this.cid} > div.SearchForm__searchRow.transitionPrevSearch`
      serviceFunc.updateTransition(selector, 'transitionNextSearch')
      selector = `#${this.cid} > div.SearchForm__categoryRow.transitionPrevSearch`
      serviceFunc.updateTransition(selector, 'transitionNextSearch')
    }, 0)

    if (this.inputRef.current.className.includes('SearchForm__SearchForm_top')) {
      setTimeout(() => {
        console.info('SearchForm->componentDidMount()', this.inputRef.current.className)
        this.inputRef.current.focus()
        this.inputRef.current.select()
      }, 1500)
    }
  }

  render() {
    const {
      sid, searchPlaceholder, searchButton,
      typeRequest, typeMedia, handleActions,
    } = this.props

    const { sid: typeRequestSid } = typeRequest
    let cid = `${typeRequestSid}-${uuidv4()}`
    const classNames1 = 'Dropdown_typeRequestFirstRow'
    const typeRequestProps1 = {
      ...typeRequest, cid, displayBtnType: 'text', classNames: classNames1,
    }

    const { sid: typeMediaSid } = typeMedia
    cid = `${typeMediaSid}-${uuidv4()}`
    const classNames3 = 'Dropdown_typeMediaFirstRow'
    const typeMediaProps3 = {
      ...typeMedia, cid, displayBtnType: 'icon', classNames: classNames3,
    }

    const searchInputId = `${this.cid}-searchInput`
    const buttonInputId = `${this.cid}-buttonInput`

    const action = { type: 'pressSearchButton' }

    // console.info('SearchForm->render() [10]',{ });
    return (
      <div id={this.cid} className={`SearchForm ${sid}`}>
        <div className='SearchForm__searchRow transitionPrevSearch'>
          <div className='SearchForm__searchInputCol'>
            <input
              id={searchInputId}
              type='text'
              className={`SearchForm__searchInput SearchForm__${sid}`}
              placeholder={searchPlaceholder}
              ref={this.inputRef}
            />
          </div>
          <div className='SearchForm__searchButtonCol'>
            <button
              id={buttonInputId}
              type='submit'
              className='btn SearchForm__searchButton'
              onClickCapture={e => handleActions(e, action)}
            >
              {searchButton}
            </button>
          </div>
        </div>
        <div className='SearchForm__categoryRow transitionPrevSearch'>
          <div className='SearchForm__typeRequestCol'>
            <FieldButtons {...typeRequestProps1} />
            <Dropdown {...typeMediaProps3} />
          </div>
        </div>
      </div>
    )
  }
}

SearchForm.propTypes = {
}

export default SearchForm
