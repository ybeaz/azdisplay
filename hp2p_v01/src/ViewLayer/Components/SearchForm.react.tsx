import React from 'react'
import PropTypes from 'prop-types'

import uuidv4 from 'uuid/v4'
import * as serviceFunc from '../../Shared/serviceFunc'
import * as Interfaces from '../../Shared/interfaces'

import FieldButtons from './FieldButtons.react'
import Dropdown from './Dropdown.react'


interface Props {
  sid: string,
  searchPlaceholder: string,
  searchButton: string,
  typeRequest: any,
  typeMedia: any,
  handleActions: Function,
}
interface State {
}
interface SearchForm {
  inputRef: any,
  cid: string,

}

class SearchForm extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  constructor(props: any) {
    super(props)
    this.inputRef = React.createRef()
    const { sid } = this.props
    this.cid = `${sid}-${uuidv4()}`
  }

  public componentDidMount(): void {
    setTimeout(() => {
      let selector: string = `#${this.cid} > div.SearchForm__searchRow.transitionPrevSearch`
      serviceFunc.updateTransition(selector, 'transitionNextSearch')
      selector = `#${this.cid} > div.SearchForm__categoryRow.transitionPrevSearch`
      serviceFunc.updateTransition(selector, 'transitionNextSearch')
    }, 0)

    if (this.inputRef.current.className.includes('SearchForm__SearchForm_top')) {
      setTimeout(() => {
        // console.info('SearchForm->componentDidMount()', this.inputRef.current.className)
        this.inputRef.current.focus()
        this.inputRef.current.select()
      },         1500)
    }
  }

  public handleEvents: Function = (e: any, action: Interfaces.Action): void => {
    const { handleActions } = this.props
    switch (action.type) {
      case 'pressSearchButton': {
        const action01: Interfaces.Action = { type: 'pressSearchButton' }
        handleActions(e, action01)
      }                         break

      default: {
        console.info('SearchForm->handleEvents unexpected action', { action })
      }
    }
  }


  public render(): JSX.Element {
    const {
      sid, searchPlaceholder, searchButton,
      typeRequest, typeMedia, handleActions,
    } = this.props

    const { sid: typeRequestSid } = typeRequest
    let cid = `${typeRequestSid}-${uuidv4()}`
    const classNames1: string = 'Dropdown_typeRequestFirstRow'
    const typeRequestProps1: any = {
      ...typeRequest, cid, displayBtnType: 'text', classNames: classNames1,
    }

    const { sid: typeMediaSid } = typeMedia
    cid = `${typeMediaSid}-${uuidv4()}`
    const classNames3: string = 'Dropdown_typeMediaFirstRow'
    const typeMediaProps3: any = {
      ...typeMedia, cid, displayBtnType: 'icon', classNames: classNames3,
    }

    const action: Interfaces.Action = {type: 'pressSearchButton'}

    // console.info('SearchForm->render() [10]',{ });
    return (
      <div id={this.cid} className={`SearchForm ${sid}`}>
        <div className='SearchForm__searchRow transitionPrevSearch'>
          <div className='SearchForm__searchInputCol'>
            <input
              type='text'
              className={`SearchForm__searchInput SearchForm__${sid}`}
              placeholder={searchPlaceholder}
              ref={this.inputRef}
            />
          </div>
          <div className='SearchForm__searchButtonCol'>
            <button
              type='submit'
              className='btn SearchForm__searchButton'
              onClickCapture={e => this.handleEvents(e, action)}
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

export default SearchForm
