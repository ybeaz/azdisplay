import React, { DOMElement, ReactElement } from 'react'

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
    const action: Interfaces.Action = { type: 'getUserAnalyticsData2', project }
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
      // console.info('Analytics02->componentDidUpdate', { analytics })
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
    else if (typeof input[prop] === 'string') {
      output = input[prop]
    }
    else if (serviceFunc.isArrGoodForJsx(input[prop]) === true) {

      if (typeof input[prop][0] === 'string') {
        output = input[prop].map((itemElem: string) =>
          <span className='Analytics__logCellGroupElem'>{itemElem}&nbsp;&nbsp;</span>)
      }
      else if (serviceFunc.isObject(input[prop][0]) === true) {

        let classAnalyticsLogCellGroupElem: string = 'Analytics__logCellGroupElem'
        let classAnalyticsLogCellGroupEl: string = 'Analytics__logCellGroupEl'
        if (input[prop].length === 1 && prop !== 'eventData') {
          classAnalyticsLogCellGroupElem = 'Analytics__logCellGroupElem0'
          classAnalyticsLogCellGroupEl = 'Analytics__logCellGroupEl0'
        }

        output = input[prop].map((itemElem: {}) => {

          let keys: string[] = Object.keys(itemElem)

          keys = keys.filter((item: string) => (
               item !== 'class'
            && item !== 'tag'
            && item !== 'href'
            && item !== 'pathname'
          ))

          const outputObj: any = keys.map((itemKey: string) => {

            return <span className={classAnalyticsLogCellGroupEl}>
              { itemElem[itemKey]
                ? <span>{itemKey}: {itemElem[itemKey]}&ensp;</span>
                : undefined
              }</span>
          })

          return <span className={classAnalyticsLogCellGroupElem}>{outputObj}</span>
        })

        output = <span className='Analytics__logCellGroup'>{output}&ensp;&ensp;</span>
      }
      else {
        output = <span className='Analytics__logCellGroup'>UNKNOWN[]</span>
      }
    }
    else {
      output = <span className='Analytics__logCellGroup'>Unknown cell type</span>
    }

    return <div className='Analytics__logCell'>{output}</div>
  }

  public getRowForTable: Function = (item: any, columns: any): JSX.Element => {
    // console.info('Analytics->getRowForTable()' { item, columns })

    return columns
      .filter((column: any) => column.active === true)
      .map((column: any) => {
        const itemElem: JSX.Element | undefined = this.getCellContent(column.prop, item)
        // console.info('Analytics->getRowForTable()' { itemCol: item[column], column, item, columns })

        return (
          <th className={`Analytics__thTbody Analytics__thTbody_${column.prop} ${column.widthClass} scrollX`}>
            {itemElem}
          </th>
        )
      })
  }

  public getAllRowsForTable: Function = (analytics: any, columns: any): any => {
    // console.info('Analytics->getAllRowsForTable() [0]', { analytics, props: this.props })
    return analytics
      //.filter(item => item.actionLog !== '')
      .map((item: any, i: number) => {
        // console.info('Analytics->getAllRowsForTable() [5]', { i })
        return (
          <tr className='Analytics__trTbody'>
           {this.getRowForTable(item, columns)}
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
              {this.getAllRowsForTable(analytics, columns)}
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

        // console.info(`Analytics02.react->handleEvents() type: ${action.type} [10]`, { ipToFilter, analyticsSrc, props: this.props, action, e })
        const buttonIpFilterStateNext: boolean = !buttonIpFilterState
        let analyticsNext: any = serviceFunc
          .filterArrObjByArr2(
            analyticsSrc, 'initData', 'ip', ipToFilter, buttonIpFilterStateNext)

        analyticsNext = analyticsNext.slice()
          .sort(serviceFunc.sortBy('start', buttonSortState))

        this.setState({ analytics: analyticsNext, buttonIpFilterState: buttonIpFilterStateNext })
      }
      break

      case 'sortAnalyticsTable':
      {
        const { analyticsSrc, buttonIpFilterState, buttonSortState } = this.state

        const buttonSortStateNext: boolean = !buttonSortState

        let analyticsNext: any[] = serviceFunc
          .filterArrObjByArr2(
            analyticsSrc, 'initData', 'ip', ipToFilter, buttonIpFilterState)

        analyticsNext = analyticsNext.slice()
          .sort(serviceFunc.sortBy('start', buttonSortStateNext))

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
        const action02: Interfaces.Action = { type: 'getUserAnalyticsData2' }
        // console.info(`handleActions.js type->${action.type}`, { action, e })
        handleActions({}, action02)
      }
      break

      case 'setStateWithAnalyticsData':
      {
        const { data } = action
        const { analytics, analyticsSrc, buttonIpFilterState, buttonSortState } = this.state

        let analyticsNext: any = analyticsSrc
 
        analyticsNext = serviceFunc
          .filterArrObjByArr2(
            analyticsSrc, 'initData', 'ip', ipToFilter, buttonIpFilterState)

        if (buttonSortState) {
          analyticsNext = analyticsNext.slice().reverse()
        }
        // analytics.sort(serviceFunc.sortBy('start', false))
        // console.info('Analytics->handleEvents()', { analytics })
        this.setState({ analytics: analyticsNext, analyticsSrc: data })
      }
      break

      case 'getUserAnalyticsData2':
      {
        const { handleActions } = this.props
        const action01: Interfaces.Action = { type: 'getUserAnalyticsData2' }
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
