import React from 'react'

import * as Interfaces from '../../Shared/interfaces'
import * as serviceFunc from '../../Shared/serviceFunc'
// tslint:disable: import-name
import { ButtonCommon } from '../Components/ButtonCommon.react'
import { Footer } from '../Components/Footer.react'
import { NavBar } from '../Components/NavBar.react'
import { SectionWrapper } from '../Components/SectionWrapper.react'
import { CommonContainer } from '../Containers/CommonContainer.react'
import { GetModals } from '../Modals/GetModals.react'

interface Props {
  reduxState: any,
  handleActions: Function,
}
interface State {
  analytics: any,
  analyticsSrc: any,
  buttonSortState: boolean,
}

class Analytics extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  constructor(props: any) {
    super(props)
    this.state = {
      analytics: [],
      analyticsSrc: [],
      buttonSortState: false,
    }
  }

  public componentDidMount(): void {
    const action: Interfaces.Action = { type: 'getUserAnalyticsData' }
    this.handleEvents({}, action)
  }

  public componentDidUpdate(prevProps: any, prevState: any, snapshot: any): void {
    const { reduxState } = this.props
    const { analytics } = reduxState
    if (JSON.stringify(prevState.analyticsSrc) !== JSON.stringify(analytics)) {
      const action: Interfaces.Action = {
        type: 'setStateWithAnalyticsData',
        data: analytics,
      }
      this.handleEvents({}, action)
    }
  }

  public getItemList: Function = (listArr: string[] | undefined): JSX.Element | undefined => {
    if(!listArr || typeof listArr[0] === 'undefined') {
      return undefined
    }
    console.info('Analytics->getItemList()', { listArr })
    const itemCellGroup = listArr.map((itemElem: string) =>
      <span className='Analytics__itemCellGroup'>{itemElem}&nbsp;&nbsp;</span>)
    return <div className='Analytics__itemCell'>{itemCellGroup}</div>
  }


  public getActionLog: Function = (actionLog: any): JSX.Element | undefined => {

    let actionLogNext = actionLog
    let actionLogJson = actionLog
    if (!actionLogJson || actionLogJson[0] === null || actionLogJson.length === 0 || typeof actionLogJson[0] === 'undefined') {
      return undefined
    }
    // console.info('Analytics->getActionLog() [5]', { actionLogNext })
    const output: any = actionLogJson.map((item: any) => {
      // console.info('Analytics->getActionLog() [7]', { actionLogNext, item })
      let itemGroup: any
      if (serviceFunc.isArrGoodForJsx(item)) {
        // console.info('Analytics->getActionLog() [9-1]', { item, actionLogNext })
        itemGroup = item.map((itemElem: string) =>
          <span className='Analytics__logCellGroupElem'>{itemElem}&nbsp;&nbsp;</span>)
      }
      else if (typeof item === 'string' && item.length > 0) {
        // console.info('Analytics->getActionLog() [9-2]', { item, actionLogNext })
        itemGroup = item
      }
      else {
        // console.info('Analytics->getActionLog() [9-3]', { item, actionLogNext })
        itemGroup = <div />
      }
      // console.info('Analytics->getActionLog() [9-f]', { item, actionLogNext })
      return <div className='Analytics__logCellGroup'>{itemGroup}</div>
    },
  )

    return <div className='Analytics__logCell'>{output}</div>
  }

  public getAnalyticsRows: Function = (analytics: any): any => {
    // console.info('Analytics->getAnalyticsRows() [0]', { analytics })
    return analytics
      //.filter(item => item.actionLog !== '')
      .map((item: any) => {

        const { PHPSESSID, start, finish, ip, target,
          msg, role, actionLog, 
          inception, searchPhrase, searchCategory,
          searchMedia, catalogCategory, userPrifile,
          width, height, email, search, pathname, hostname, href,
        } = item

        // console.info('Analytics->getAnalyticsRows() [5]', {item, role, searchCategory, searchMedia, actionLog })
        const targetElem: JSX.Element | undefined = this.getActionLog(target)
        const msgElem: JSX.Element | undefined = this.getActionLog(msg)
        const roleElem: JSX.Element | undefined = this.getActionLog(role)
        const actionLogElem: JSX.Element | undefined = this.getActionLog(actionLog)
        const inceptionElem: JSX.Element | undefined = this.getActionLog(inception)
        const searchPhraseElem: JSX.Element | undefined = this.getActionLog(searchPhrase)
        const searchMediaElem: JSX.Element | undefined = this.getActionLog(searchMedia)
        const searchCategoryElem: JSX.Element | undefined = this.getActionLog(searchCategory)
        const catalogCategoryElem: JSX.Element | undefined = this.getActionLog(catalogCategory)
        const userPrifileElem: JSX.Element | undefined = this.getActionLog(userPrifile)
        const emailElem: JSX.Element | undefined = this.getActionLog(email)

        const classNameHere: string = 'Analytics__cellClass'
        const searchElem: string = search ? search.replace(/\?/gim, '') : ''

        return (
          <tr className='Analytics__rowClass'>
              <th className={`${classNameHere} Analytics__cellClass_PHPSESSID`}>{PHPSESSID}</th>
              <th className={`${classNameHere} Analytics__cellClass_start`}>{start}</th>
              <th className={`${classNameHere} Analytics__cellClass_finish`}>{finish}</th>
              <th className={`${classNameHere} Analytics__cellClass_ip`}>{ip}</th>
              <th className={`${classNameHere} Analytics__cellClass_target`}>{targetElem}</th>
              <th className={`${classNameHere} Analytics__cellClass_msg`}>{msgElem}</th>
              <th className={`${classNameHere} Analytics__cellClass_roleElem`}>{roleElem}</th>
              <th className={`${classNameHere} Analytics__cellClass_actionLogElem`}>{actionLogElem}</th>
              <th className={`${classNameHere} Analytics__cellClass_inception`}>{inceptionElem}</th>
              <th className={`${classNameHere} Analytics__cellClass_searchPhrase`}>{searchPhraseElem}</th>
              <th className={`${classNameHere} Analytics__cellClass_searchCategory`}>{searchCategoryElem}</th>
              <th className={`${classNameHere} Analytics__cellClass_searchMedia`}>{searchMediaElem}</th>
              <th className={`${classNameHere} Analytics__cellClass_catalogCategory`}>{catalogCategoryElem}</th>
              <th className={`${classNameHere} Analytics__cellClass_userPrifile`}>{userPrifileElem}</th>
              <th className={`${classNameHere} Analytics__cellClass_width`}>{width}</th>
              <th className={`${classNameHere} Analytics__cellClass_height`}>{height}</th>
              <th className={`${classNameHere} Analytics__cellClass_email`}>{emailElem}</th>
              <th className={`${classNameHere} Analytics__cellClass_searchElem`}>{searchElem}</th>
              <th className={`${classNameHere} Analytics__cellClass_{pathname`}>{pathname}</th>
              <th className={`${classNameHere} Analytics__cellClass_hostname`}>{hostname}</th>
              <th className={`${classNameHere} Analytics__cellClass_href`}>{href}</th>
          </tr>
        )
    })
  }

  public getAnalyticsTable = (analytics: any): any => {

    const classNameHere: string ='Analytics__thCellClass'

    return (
      <table className='Analytics__tableClass'>
        <thead>
          <tr className='Analytics__thRowClass'>
          <th className={classNameHere}>PHPSESSID</th>
              <th className={classNameHere}>start</th>
              <th className={classNameHere}>finish</th>
              <th className={classNameHere}>ip</th>
              <th className={classNameHere}>target</th>
              <th className={classNameHere}>msg</th>
              <th className={classNameHere}>role</th>
              <th className={classNameHere}>actionLog</th>
              <th className={classNameHere}>inception</th>
              <th className={classNameHere}>searchPhrase</th>
              <th className={classNameHere}>searchCategory</th>
              <th className={classNameHere}>searchMedia</th>
              <th className={classNameHere}>catalogCategory</th>
              <th className={classNameHere}>userPrifile</th>
              <th className={classNameHere}>width</th>
              <th className={classNameHere}>height</th>
              <th className={classNameHere}>email</th>
              <th className={classNameHere}>search</th>
              <th className={classNameHere}>pathname</th>
              <th className={classNameHere}>hostname</th>
              <th className={classNameHere}>href</th>
          </tr>
        </thead>
        <tbody>
          {this.getAnalyticsRows(analytics)}
        </tbody>
      </table>
    )
  }

  public controlRow = (): any => {

    const { buttonSortState } = this.state
    let buttonCapture: string = 'Go straight'
    let buttonActionType: string = 'sortStraightAnalyticsTable'
    if (buttonSortState) {
      buttonCapture = 'Go reverse'
      buttonActionType = 'sortReverseAnalyticsTable'
    }

    const sortButton: any = {
      sid: 'Analytics__sortButton',
      sidButton: 'Analytics__sortButton',
      capture: buttonCapture,
      classAdd: 'm_l_0p5_rem',
      handleFunctions: this.handleEvents,
      action: { type: buttonActionType }}

    const refreshButton: any = {
      sid: 'Analytics__refreshButton',
      sidButton: 'Analytics__refreshButton',
      capture: 'Refresh',
      handleFunctions: this.handleEvents,
      action: { type: 'refreshAnalyticsTable' }}

    return (
      <div className='Analytics__controlRow'>
        <ButtonCommon {...refreshButton} />
        <ButtonCommon {...sortButton} />
      </div>
    )

  }

  public handleEvents = (e: any, action: Interfaces.Action): void => {
    switch (action.type) {
      case 'sortStraightAnalyticsTable': {
        const { analytics, buttonSortState } = this.state
        const analyticsSorted: any = analytics.sort(serviceFunc.sortBy('start', false))
        // console.info(`Analytics->handleEvents() type->${action.type}`, { analyticsSorted, analytics, action, e })
        this.setState({ analytics: analyticsSorted, buttonSortState: !buttonSortState })
      }
      break

      case 'sortReverseAnalyticsTable': {
        const { analytics, buttonSortState } = this.state
        const analyticsSorted: any = analytics.sort(serviceFunc.sortBy('start', true))
        // console.info(`handleActions.js type->${action.type}`, { analyticsSorted, analytics, action, e })
        this.setState({ analytics: analyticsSorted, buttonSortState: !buttonSortState })
      }
      break

      case 'refreshAnalyticsTable': {
        const { handleActions } = this.props
        this.setState({ analyticsSrc: [] })
        const action03: Interfaces.Action = { type: 'callSpinner' }
        handleActions({}, action03)
        const action02: Interfaces.Action = { type: 'getUserAnalyticsData' }
        // console.info(`handleActions.js type->${action.type}`, { action, e })
        handleActions({}, action02)
      }
      break

      case 'setStateWithAnalyticsData': {
        const { buttonSortState } = this.state
        const { data } = action
        const analytics: any = data.slice()
          .reverse()
        // analytics.sort(serviceFunc.sortBy('start', false))
        // console.info('Analytics->handleEvents()', { analytics })
        this.setState({ analytics, analyticsSrc: data, buttonSortState: !buttonSortState })
      }
      break

      case 'getUserAnalyticsData': {
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
    const { analytics } = this.state

    // console.info('Analytics->render() [10]', { analytics, props: this.props })

    return (
      <div className='Analytics globalStyle'>
        <header><NavBar /></header>
        <main>
          <SectionWrapper classStyle='SectionWrapper_Analytics'>
            {this.controlRow()}
            {this.getAnalyticsTable(analytics)}
          </SectionWrapper>
        </main>
        <footer>
          <SectionWrapper classStyle='SectionWrapper_footerSection bg_greyDark'>
            <Footer />
          </SectionWrapper>
        </footer>
        <GetModals />
      </div>
    )
  }
}

// tslint:disable-next-line: export-name
export const AnalyticsPage = CommonContainer(Analytics)
