import React from 'react'
import PropTypes from 'prop-types'
import uuidv4 from 'uuid/v4'
import * as serviceFunc from '../../Shared/serviceFunc'

// eslint-disable-next-line react/prefer-stateless-function
class SearchForm extends React.PureComponent {
  constructor(props){
    super(props)
    const { propsScope } = this.props
    const { sid } = propsScope    
    this.cid = `${sid}-${uuidv4()}`
    this.firstButtonFieldId = ''
  }

  componentDidMount() {
    
    setTimeout(() => {
      let selector = `#${this.cid} > div.row.SearchForm__searchRow.transitionPrevSearch`
      serviceFunc.updateTransition(selector, 'transitionNextSearch')
      selector = `#${this.cid} > div.row.SearchForm__categoryRow.transitionPrevSearch`
      serviceFunc.updateTransition(selector, 'transitionNextSearch')
      selector = `#${this.firstButtonFieldId}`
      const element = document.querySelectorAll(selector)[0]
      element.style.color = '#fff'
      element.style.backgroundColor = '#0ca940'
    }, 0)

    
    //document.getElementById(frmObj.id).focus();
    //document.getElementById(frmObj.id).select();

    setTimeout(() => {
      const elementsInput = document.querySelectorAll('input')
      elementsInput[0].focus()
      elementsInput[0].select()
    }, 1500)

  }

  getFieldButtons = arr => arr.map((item, i) => {
    const { capture, autoFocus } = item
    const buttonFieldId = `${this.cid}-buttonField`
    if (i === 0) {
      this.firstButtonFieldId = buttonFieldId
    }
    return (
      <button id={buttonFieldId} key={i} type='button' className='btn categoryButton' autofocus={autoFocus}>
        {capture}
      </button>
    )
  })

  render() {
    const { propsScope } = this.props
    const { sid, searchPlaceholder, searchButton, fieldButtonArr } = propsScope

    const fieldButtons = this.getFieldButtons(fieldButtonArr)
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
            {fieldButtons}
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
