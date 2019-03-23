import React from 'react'

import * as Interfaces from '../../Shared/interfaces'
import CommonContainer from '../Containers/CommonContainer.react'
import SectionWrapper from '../Components/SectionWrapper.react'
import NavBar from '../Components/NavBar.react'
import Footer from '../Components/Footer.react'

import GetModals from '../Modals/GetModals.react'

interface Props {
  reduxState: any,
  handleActions: Function,
}
interface State {
  analytics: any,
}


class Analytics extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  constructor(props) {
    super(props)
    const { reduxState } = this.props
    const { analytics } = reduxState
    this.state = {
      analytics,
    }
  }

  public componentDidMount(): void {
    const { reduxState, handleActions } = this.props
    const { analytics } = reduxState
    const action: Interfaces.Action = { type: 'getUserAnalyticsData' }
    this.handleEvents({}, action)
  }

  public componentDidUpdate(): void {
    const { reduxState } = this.props
    const { analytics } = reduxState
    this.setState({ analytics })
  }

  public getActionLog = (actionLogJson: any): any => {
    const output = actionLogJson.map(item => {
        const itemElem = item.map(item01 => <div className='Analytics__itemElemCell'>{item}</div>)
        return <div className='Analytics__itemElem'>{itemElem}</div>
      }
    )
    return <div>{output}</div>
  }


  public getAnalyticsRows = (analytics: any): any => {
    // console.info('Analytics->getAnalyticsRows() [0]', { analytics })
    return analytics
      //.filter(item => item.actionLog !== '')
      .map(item => {

        const { PHPSESSID, start, finish, ip, target, email, 
          msg, actionLog, width, height } = item

        let actionLogNext = actionLog
        let actionLogJson
        let actionLogElem = null
        if( actionLogNext !== '' && actionLogNext !== null) {

          let regex: any = /&quot;/gm
          let subst: string = `"`
          actionLogNext = actionLogNext.replace(regex, subst)


          regex = /^"([\s\S]*?)"$/gm
          subst = `$1`
          actionLogNext = actionLogNext.replace(regex, subst)
          actionLogNext = `[${actionLogNext}]`.toString()

          // console.info('Analytics->getAnalyticsRows() [3]', { actionLogNext })
          actionLogJson = JSON.parse(actionLogNext)
          actionLogElem = this.getActionLog(actionLogJson)
        }

        // console.info('Analytics->getAnalyticsRows() [5]', {actionLogJson, item })
        return (
          <tr className='Analytics__rowClass'>
              <th className='Analytics__cellClass'>{PHPSESSID}</th>
              <th className='Analytics__cellClass'>{start}</th>
              <th className='Analytics__cellClass'>{finish}</th>
              <th className='Analytics__cellClass'>{ip}</th>
              <th className='Analytics__cellClass'>{target}</th>
              <th className='Analytics__cellClass'>{email}</th>
              <th className='Analytics__cellClass'>{msg}</th>
              <th className='Analytics__cellClass'>{actionLogElem}</th>
              <th className='Analytics__cellClass'>{width}</th>
              <th className='Analytics__cellClass'>{height}</th>
          </tr>
        )
    })
  }

  public getAnalyticsTable = (analytics: any): any => {

    return (
      <table className="Analytics__tableClass">
        <thead>
          <tr className='Analytics__thRowClass'>
              <th className='Analytics__thCellClass'>PHPSESSID</th>
              <th className='Analytics__thCellClass'>start</th>
              <th className='Analytics__thCellClass'>finish</th>
              <th className='Analytics__thCellClass'>ip</th>
              <th className='Analytics__thCellClass'>target</th>
              <th className='Analytics__thCellClass'>email</th>
              <th className='Analytics__thCellClass'>msg</th>
              <th className='Analytics__thCellClass'>actionLogElem</th>
              <th className='Analytics__thCellClass'>width</th>
              <th className='Analytics__thCellClass'>height</th>
          </tr>
        </thead>
        <tbody>
          {this.getAnalyticsRows(analytics)}
        </tbody>
      </table>
    )
  }

  public handleEvents = (e: any, action: Interfaces.Action): void => {
    switch (action.type) {
      case 'getUserAnalyticsData': {
        const { handleActions } = this.props
        const action01: Interfaces.Action = { type: 'getUserAnalyticsData' }
        handleActions({}, action01)
      } break

      default: {
        console.info('CatalogTags->handleEvents unexpected action', { action })
      }
    }
  }


  render() {
    const { reduxState, handleActions } = this.props
    const { modalWindows, treeData, language } = reduxState
    const { analytics } = this.state
    // console.info('Analytics->render() [5]', { analytics, reduxState })
    let {
      navBar,
      footer,
      modals,
    } = treeData[language]
    navBar = { ...navBar, handleActions }

    const modalProps: any = { modalWindows, handleActions, modals }
    // console.info('FacePage326->render() [10]', { modalWindows, reduxState, modals, props: this.props })
    return (
      <div className='Analytics globalStyle'>
        <header><NavBar {...navBar} /></header>
        <main>
          <SectionWrapper classStyle='SectionWrapper_Analytics'>
            {this.getAnalyticsTable(analytics)}
          </SectionWrapper>
        </main>
        <footer>
          <SectionWrapper classStyle='SectionWrapper_footerSection bg_greyDark'>
            <Footer {...footer} />
          </SectionWrapper>
        </footer>
        <GetModals {...modalProps} />
      </div>
    )
  }
}

export default CommonContainer(Analytics)
