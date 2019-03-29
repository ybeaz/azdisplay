import React from 'react'

import uuidv4 from 'uuid/v4'
import * as Interfaces from '../../Shared/interfaces'
import * as serviceFunc from '../../Shared/serviceFunc'

// tslint:disable: import-name
import { Dropdown } from './Dropdown.react'
import { FieldButtons } from './FieldButtons.react'

interface Props {
  sid: string,
  searchPlaceholder: string,
  searchButton: string,
  typeRequest: any,
  typeMedia: any,
  modeProdDev: any, 
  alertShortSearchInput: string,
  handleActions: Function,
}
interface State {
  searchPhrase: string,
  searchCategory: string[],
  searchMedia: string[],
}

export class SearchForm extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }
  public inputRef: React.RefObject<HTMLInputElement>;
  private readonly cid: string;

  constructor(props: any) {
    super(props)
    this.inputRef = React.createRef()
    const { sid } = this.props
    this.cid = `${sid}-${uuidv4()}`
    this.state = {
      searchPhrase: '',
      searchCategory: [],
      searchMedia: [],
    }
  }

  public componentDidMount(): void {
    setTimeout(() => {
      let selector: string = `#${this.cid} > div.SearchForm__searchRow.transitionPrevSearch`
      serviceFunc.updateTransition(selector, 'transitionNextSearch')
      selector = `#${this.cid} > div.SearchForm__categoryRow.transitionPrevSearch`
      serviceFunc.updateTransition(selector, 'transitionNextSearch')
    },         0)

    if (this.inputRef.current.className.includes('SearchForm__SearchForm_top')) {
      setTimeout(() => {
        // console.info('SearchForm->componentDidMount()', this.inputRef.current.className)
        this.inputRef.current.focus()
        this.inputRef.current.select()
      },         1500)
    }
  }

  public handleEvents: Function = (e: any, action: Interfaces.Action): void => {
    const { sid, typeMedia, handleActions, modeProdDev, alertShortSearchInput } = this.props
    const { listArr } = typeMedia
    const { checkSearchField } = modeProdDev
    let data: any

    switch (action.type) {

      case 'pressSearchButton':
      {
        let inception: string = 'searchButtonFirst'
        if (sid === 'SearchForm_bottom') {
          inception = 'searchButtonSecond'
        }
        const { searchPhrase, searchCategory, searchMedia: searchMediaTemp } = this.state

        if ( checkSearchField && searchPhrase.length < 4) {
          alert(alertShortSearchInput)
          return
        }

        let searchMedia = searchMediaTemp
        if ( searchMediaTemp[0] === listArr[0].capture ) {
          searchMedia = ['']
        }

        // console.info('SearchForm->handleEvents()', { listArr, inception, searchPhrase, searchCategory, searchMedia })
        data = { inception, searchPhrase, searchCategory, searchMedia }
        const action03: Interfaces.Action = { type: 'updateUserFootprint', data }
        handleActions(e, action03)

        const action01: Interfaces.Action = { type: 'pressSearchButton' }
        handleActions(e, action01)

        // console.info(`${sid}->handleEvents() type: ${action.type}`, { action, e })
      }
      break

      case 'onInputSearchPhrase':
      {
        const searchPhrase: string = e.target.value
        this.setState({ searchPhrase })
        // console.info(`${sid}->handleEvents() type: ${action.type}`, { action, e })
      }
      break

      case 'onClickSearchMedia':
      {
        const { data: dataMedia } = action
        const searchMedia: string[]  = dataMedia.filter((item: any) => item.active === true)
          .map((item: any) => item.capture)
        this.setState({ searchMedia })
        // console.info(`SearchForm->handleEvents() type: ${action.type}`, { action, e })
      }
      break

      case 'onClickSearchCategory':
      {
        const { data: dataCategory } = action
        const searchCategory: string[] = dataCategory.filter((item: any) => item.active === true)
          .map((item: any) => item.capture)
        this.setState({ searchCategory })
        // console.info(`SearchForm->handleEvents() type: ${action.type}`, { action, e })
      }
      break

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
    const { searchPhrase } = this.state

    const { sid: typeRequestSid } = typeRequest
    let cid: string = `${typeRequestSid}-${uuidv4()}`
    const classNames1: string = 'Dropdown_typeRequestFirstRow'
    const typeRequestProps1: any = {
      ...typeRequest, cid, displayBtnType: 'text', classNames: classNames1,
      parentHandleEvents: this.handleEvents.bind(this),
    }

    const { sid: typeMediaSid } = typeMedia
    cid = `${typeMediaSid}-${uuidv4()}`
    const classNames3: string = 'Dropdown_typeMediaFirstRow'
    const typeMediaProps3: any = {
      ...typeMedia, cid, displayBtnType: 'icon', classNames: classNames3,
      parentHandleEvents: this.handleEvents.bind(this),
    }

    const action: Interfaces.Action = {type: 'pressSearchButton'}

    // console.info('SearchForm->render() [10]',{ state: this.state })

    return (
      <div id={this.cid} className={`SearchForm ${sid}`}>
        <div className='SearchForm__searchRow transitionPrevSearch'>
          <div className='SearchForm__searchInputCol'>
            <input
              type='text'
              className={`SearchForm__searchInput SearchForm__${sid}`}
              placeholder={searchPlaceholder}
              ref={this.inputRef}
              onInput={e => this.handleEvents(e, {type: 'onInputSearchPhrase'})}
              value={searchPhrase}
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
