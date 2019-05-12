import React, { DOMElement } from 'react'

import * as Interfaces from '../../Shared/interfaces'
import * as serviceFunc from '../../Shared/serviceFunc'
// tslint:disable: import-name
import { ButtonCommon } from '../Components/ButtonCommon.react'
import { Footer } from '../Components/Footer.react'
import { NavBar } from '../Components/NavBar.react'
import { SectionWrapper } from '../Components/SectionWrapper.react'
import { CommonContainer } from '../Containers/CommonContainer.react'

interface Props {
  path: string,
  reduxState: any,
  handleActions: Function,
}
interface State {
  analytics: any,
  analyticsSrc: any,
  buttonSortState: boolean,
  buttonIpFilterState: boolean,
  language: any,
}

class Analytics02 extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  constructor(props: any) {
    super(props)
    const { reduxState } = this.props
    const { language } = reduxState

    // console.info('Analytics->constructor [0]', { props: this.props })

    this.state = {
      analytics: [],
      analyticsSrc: [],
      buttonSortState: true,
      buttonIpFilterState: true,
      language,
    }
  }

  public componentDidMount(): void {
    const project: {}[] | [] = serviceFunc.getProject(this.props, this.state)
    const action: Interfaces.Action = { type: 'getUserAnalyticsData', project }
    this.handleEvents({}, action)
  }

  public componentDidUpdate(prevProps: any, prevState: any, snapshot: any): void {
    const { reduxState } = this.props
    const { analytics } = reduxState
    const project: {}[] | [] = serviceFunc.getProject(this.props, this.state)
    if (JSON.stringify(prevState.analyticsSrc) !== JSON.stringify(analytics)) {
      const action: Interfaces.Action = {
        type: 'setStateWithAnalyticsData',
        data: analytics,
        project,
      }
      this.handleEvents({}, action)
    }
  }

  public getItemList: Function = (listArr: any | undefined): JSX.Element | undefined => {

    if (!serviceFunc.isArrGoodForJsx(listArr)) {
      return undefined
    }
    // console.info('Analytics->getItemList()', { listArr })
    const itemCellGroup: JSX.Element = listArr.map((itemElem: string) =>
      <span className='Analytics__itemCellGroup'>{itemElem}&nbsp;&nbsp;</span>)

    return <div className='Analytics__itemCell'>{itemCellGroup}</div>
  }

  public getCellContent: Function = (prop: any, input: any): JSX.Element | undefined => {
    // console.info('Analytics->getCellContent() [0]', { prop, input })
    let output: any

    if (serviceFunc.isJsonString(input[prop])) {
      input[prop] = JSON.parse(input[prop])
    }

    if (prop === 'diff') {
      const { start, finish } = input
      const st: Date = serviceFunc.strToDate(input.start)
      const fn: Date = serviceFunc.strToDate(input.finish)
      output = Math.abs(fn.getTime() - st.getTime()) / 1000
      // if (input.PHPSESSID === '6eaa25c6-176b-4c0c-83dc-34cd87d93a81') {
        // console.info('Analytics->getCellContent() [0]', { output, fn, st, input, prop })
      // }
    }
    else if (serviceFunc.isVarCorrupted(input[prop])) {
      return undefined
    }
    else if (typeof input[prop] === 'string' && prop === 'search') {
      output = input[prop].replace(/\?/gim, '')
      output = output.replace(/utm_content=/gim, '')
    }
    else if (typeof input[prop] === 'string' && prop === 'referrer') {
      const { domain3 } = serviceFunc.urlComposition(input[prop])
      output = domain3
    }
    else if (typeof input[prop] === 'string') {
      output = input[prop]
    }
    else {
      const inputArrObj: any = Object.values(input[prop])
      const inputArr: any[] = []
      for (let i: number = 0; i < inputArrObj.length; i += 1) {
        inputArr[i] = inputArrObj[i]
      }
      /*
      if (serviceFunc.isObject(input[prop]) === true) {
        console.info('Analytics->getCellContent() [5]', { inputProp: input[prop], inputArr, prop, input })
      }
      */
      output = inputArr.map((item: any) => {
        // console.info('Analytics->getCellContent() [7]', { actionLogNext, item })
        let itemGroup: any
        if (serviceFunc.isArrGoodForJsx(item)) {
          // console.info('Analytics->getCellContent() [9-1]', { item, actionLogNext })
          itemGroup = item.map((itemElem: string) =>
            <span className='Analytics__logCellGroupElem'>{itemElem}&nbsp;&nbsp;</span>)
        }
        else if (typeof item === 'string' && item.length > 0) {
          // console.info('Analytics->getCellContent() [9-2]', { item, actionLogNext })
          itemGroup = item
        }
        else {
          // console.info('Analytics->getCellContent() [9-3]', { item, actionLogNext })
          itemGroup = <div />
        }
        // console.info('Analytics->getCellContent() [9-f]', { item, actionLogNext })

        return <span className='Analytics__logCellGroup'>{itemGroup}&nbsp;&nbsp;</span>
      })
    }

    return <div className='Analytics__logCell'>{output}</div>
  }

  public getCellsForTable: Function = (item: any, columns: any): JSX.Element => {
    // console.info('Analytics->getCellsForTable()' { item, columns })

    return columns
      .filter((column: any) => column.active === true)
      .map((column: any) => {
        const itemElem: JSX.Element | undefined = this.getCellContent(column.prop, item)
        // console.info('Analytics->getCellsForTable()' { itemCol: item[column], column, item, columns })

        return (
          <th className={`Analytics__thTbody Analytics__thTbody_${column.prop} ${column.widthClass} scrollX`}>
            {itemElem}
          </th>
        )
      })
  }

  public getAnalyticsRows: Function = (analytics: any, columns: any): any => {
    // console.info('Analytics->getAnalyticsRows() [0]', { analytics, props: this.props })
    return analytics
      //.filter(item => item.actionLog !== '')
      .map((item: any, i: number) => {
        // console.info('Analytics->getAnalyticsRows() [5]', { i })
        return (
          <tr className='Analytics__trTbody'>
           {this.getCellsForTable(item, columns)}
          </tr>
        )
    })
  }

  public getHeadersForTable = (columns: any): JSX.Element => {
    return columns
      .filter((column: any) => column.active === true)
      .map((column: any) =>
        <th className={`Analytics__thThead ${column.widthClass} scrollX`}>{column.capture}</th>)
  }

  public getAnalyticsTable = (columns: any, analytics: any): any => {

    // const { columns } = treeData[language]
    // console.info('Analytics->getAnalyticsTable() [5]', { project, columns, language, treeData })

    return (
      <div className='Analytics__tableWrapper'>
        <table className='Analytics__tableHead'>
          <thead className='Analytics__thead'>
            <tr className='Analytics__trThead'>
              {this.getHeadersForTable(columns)}
            </tr>
          </thead>
        </table>
        <div className='Analytics__scroll'>
          <table className='Analytics__tableBody'>
            <tbody className='Analytics__tbody'>
              {this.getAnalyticsRows(analytics, columns)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  public controlRow = (project: {}[] | []): any => {

    const { analytics, buttonSortState, buttonIpFilterState } = this.state
    //console.info('Analytics->controlRow', { analytics, analyticsState, length: analytics.length})

    let sortButtonCapture: string = 'Go reverse'
    if (buttonSortState) {
      sortButtonCapture = 'Go straight'
    }
    let filterButtonCapture: string = 'Show all'
    if (!buttonIpFilterState) {
      filterButtonCapture = 'Show users'
    }

    const copyClipboardButton: any = {
      sid: 'Analytics__copyClipboardButtonWrapper',
      sidButton: 'Analytics__copyClipboard',
      capture: 'To clipboard',
      classAdd: 'm_l_0p5_rem',
      handleFunctions: this.handleEvents,
      action: { type: 'copyClipboard', project }}

    const ipFilterButton: any = {
      sid: 'Analytics__ipFilterButtonWrapper',
      sidButton: 'Analytics__ipFilterButton',
      capture: filterButtonCapture,
      classAdd: 'm_l_0p5_rem',
      handleFunctions: this.handleEvents,
      action: { type: 'ipFilter', project }}

    const sortButton: any = {
      sid: 'Analytics__sortButtonWrapper',
      sidButton: 'Analytics__sortButton',
      capture: sortButtonCapture,
      classAdd: 'm_l_0p5_rem',
      handleFunctions: this.handleEvents,
      action: { type: 'sortAnalyticsTable', project }}

    const refreshButton: any = {
      sid: 'Analytics__refreshButtonWrapper',
      sidButton: 'Analytics__refreshButton',
      capture: 'Refresh',
      handleFunctions: this.handleEvents,
      action: { type: 'refreshAnalyticsTable', project }}

    return (
      <div className='Analytics__controlRow'>
        <ButtonCommon {...refreshButton} />
        <ButtonCommon {...sortButton} />
        <ButtonCommon {...ipFilterButton} />
        <ButtonCommon {...copyClipboardButton} />
        <div className='Analytics__itemNumber'>Items in table: {analytics.length}</div>
      </div>
    )

  }

  public handleEvents = (e: any, action: Interfaces.Action): void => {
    const { reduxState } = this.props
    const { treeData } = reduxState
    const { language } = this.state
    const { project } = action
    let ipToFilter: any
    if (project.length > 0 && project[0][language]) {
      ipToFilter = project[0][language].ipToFilter
    }

    // console.info('Analytics->handleEvents', { action, ipToFilter })

    switch (action.type) {

      case 'copyClipboard':
      {
        const selector: string = '.Analytics__tableWrapper'
        const el: NodeList = document.querySelectorAll(selector);
        serviceFunc.selectElementContents(global, el[0])
      }
      break

      case 'ipFilter':
      {
        const { analyticsSrc, buttonIpFilterState, buttonSortState } = this.state

        const buttonIpFilterStateNext: boolean = !buttonIpFilterState
        let analyticsNext: any = serviceFunc
          .filterArrObjByArr(analyticsSrc, 'ip', ipToFilter, buttonIpFilterStateNext)

        analyticsNext = analyticsNext.slice()
          .sort(serviceFunc.sortBy('start', buttonSortState))

        this.setState({ analytics: analyticsNext, buttonIpFilterState: buttonIpFilterStateNext })
      }
      break

      case 'sortAnalyticsTable':
      {
        const { analyticsSrc, buttonIpFilterState, buttonSortState } = this.state

        const buttonSortStateNext: boolean = !buttonSortState
        let analyticsNext: any = analyticsSrc.slice()
          .sort(serviceFunc.sortBy('start', buttonSortStateNext))

        analyticsNext = serviceFunc
          .filterArrObjByArr(analyticsNext, 'ip', ipToFilter, buttonIpFilterState)

        // console.info(`Analytics->handleEvents() type->${action.type}`, { buttonIpFilterState, action, e })
        this.setState({ analytics: analyticsNext, buttonSortState: buttonSortStateNext })
      }
      break

      case 'refreshAnalyticsTable':
      {
        const { handleActions } = this.props
        this.setState({ analyticsSrc: [] })
        const action03: Interfaces.Action = { type: 'callSpinner' }
        handleActions({}, action03)
        const action02: Interfaces.Action = { type: 'getUserAnalyticsData' }
        // console.info(`handleActions.js type->${action.type}`, { action, e })
        handleActions({}, action02)
      }
      break

      case 'setStateWithAnalyticsData':
      {
        const { data } = action
        const { analytics, analyticsSrc, buttonIpFilterState, buttonSortState } = this.state

        let analyticsNext: any = analyticsSrc
        if (buttonSortState) {
        analyticsNext = analyticsNext.slice()
          .reverse()
        }

        analyticsNext = serviceFunc.filterArrObjByArr(analyticsNext, 'ip', ipToFilter, buttonIpFilterState)

        // analytics.sort(serviceFunc.sortBy('start', false))
        // console.info('Analytics->handleEvents()', { analytics })
        this.setState({ analytics: analyticsNext, analyticsSrc: data })
      }
      break

      case 'getUserAnalyticsData':
      {
        const { handleActions } = this.props
        const action01: Interfaces.Action = { type: 'getUserAnalyticsData' }
        // console.info(`Analytics->handleEvents() type->${action.type}`, { action, e })
        handleActions({}, action01)
      }
      break

      default: {
        console.info('Analytics->handleEvents unexpected action', { action })
      }
    }
  }

  public render(): JSX.Element {
    const { path } = this.props
    const { analytics, language } = this.state

    const project: {}[] | [] = serviceFunc.getProject(this.props, this.state)
    let columns: {} = {}
    if (project.length > 0 && project[0][language]) {
      columns = project[0][language].columns
    }


    // console.info('Analytics->render() [10]', { analytics, props: this.props })

    return (
      <div className='Analytics globalStyle'>
        <header><NavBar path={path} /></header>
        <main>
          <SectionWrapper classStyle='SectionWrapper_Analytics'>
            {this.controlRow(project)}
            {this.getAnalyticsTable(columns, analytics)}
          </SectionWrapper>
        </main>
        <footer>
          <SectionWrapper classStyle='SectionWrapper_footerSection bg_greyDark'>
            <Footer path={path} />
          </SectionWrapper>
        </footer>
      </div>
    )
  }
}

// tslint:disable-next-line: export-name
export const AnalyticsPage02: JSX.Element = CommonContainer(Analytics02)
