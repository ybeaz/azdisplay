import { bindActionCreators } from 'redux'
import * as actionSet from '../actions/index'
import store from '../store'
const { dispatch } = store
const actions: any = bindActionCreators(actionSet, dispatch)

import { ARR_ACTION_TO_OMIT_FOR_LOG } from '../../Constants/CONSTANTS'
import * as Interfaces from '../../Shared/interfaces'
import * as serviceFunc from '../../Shared/serviceFunc'

export const handleActions: Function = (e: object, action: Interfaces.Action): void => {
  // console.info(`handleActions.js type->${action.type}`, { e, action })
  let data: any = {}

  switch (action.type) {

    case 'selectLanguage':
    {
      data = action.data
      // console.info(`handleActions.js type: ${action.type}`, { data, action, e })
      actions.SELECT_LANGUAGE(data)
    }
    break

    case 'updateUserFootprint':
    {
      data = action.data
      // console.info(`handleActions.js type: ${action.type}`, { data, action, e })
      actions.UPDATE_USER_FOOTPRINT(data)
    }
    break

    case 'clickBack':
    {
      data = {}
      setTimeout(() => actions.GO_BACK(data), 0)
      setTimeout(() => serviceFunc.saveUserVisitActions(''), 0)
    }
    break

    case 'clickFooterToSpecialists':
    {
      data = {}
      setTimeout(() => actions.GO_LINK_TO_SPECIALISTS(data), 0)
      setTimeout(() => serviceFunc.saveUserVisitActions(''), 0)
    }
    break

    case 'clickFooterContacts':
    {
      data = {}
      setTimeout(() => actions.GO_LINK_CONTACTS(data), 0)
      setTimeout(() => serviceFunc.saveUserVisitActions(''), 0)
    }
    break

    case 'clickFooterAboutUs':
    {
      data = {}
      setTimeout(() => actions.GO_LINK_ABOUT_US(data), 0)
      setTimeout(() => serviceFunc.saveUserVisitActions(''), 0)
    }
    break

    case 'callSpinner':
    {
      data = {}
      actions.CLOSE_ALL_MODALS(data)
      const modalNext: string = 'Spinner'
      actions.CALL_SPINNER({ modalNext })

      setTimeout(() => actions.CLOSE_ALL_MODALS(data), 5000)
      // console.info(`handleActions.js type: ${action.type}`, { action, e })
    }
    break

    case 'getUserAnalyticsData2':
    {
      const payload02: Interfaces.PayloadGql  = {
        operationName: false,
        variables: { dateFrom: '2000/01/01', dateTo: '2030/01/01' },
        query: 'query getWebAnalytics2($dateFrom: String, $dateTo: String){getWebAnalytics2(dateFrom:$dateFrom,dateTo:$dateTo){utAnltSid,finish,start,initData{width,height,search,pathname,hostname,href,referrer,ip}target{level,name},topics}}',
      }
      actions.getActionAsync('GET_USER_ANALYTICS_DATA2', 'REQUEST', payload02)
      // console.info(`handleActions.js type: ${action.type}`, { e, payload, action })
    }
    break

    case 'getUserAnalyticsData':
    {
      const payload01: Interfaces.Payload  = {
        optGet: 'guad',
      }
      actions.getActionAsync('GET_USER_ANALYTICS_DATA', 'REQUEST', payload01)
      // console.info(`handleActions.js type: ${action.type}`, { e, payload, action })
    }
    break

    case 'closeModalThankYou':
    {
      data = {}
      actions.CLOSE_MODAL_THANK_YOU(data)
      // console.info(`handleActions.js type: ${action.type}`, { e, action })
    }
    break

    case 'closeModalCommentForm':
    {
      data = {}
      actions.CLOSE_ALL_MODALS(data)
      const modalNext: string = 'ThankYou'
      actions.CLOSE_COMMENT_FORM({ modalNext })
      // console.info(`handleActions.js type: ${action.type}`, { action, e })
    }
    break

    case 'closeModalSelectRole':
    {
      data = {}
      actions.CLOSE_ALL_MODALS(data)
      actions.CLOSE_MODAL_SELECT_ROLE(data)

      const target: string = 'cancelReg'
      setTimeout(() => serviceFunc.saveUserVisitActions(target), 0)
    }
    break

    case 'sendCommentForm':
    {
      data = {}
      actions.CLOSE_ALL_MODALS(data)
      const modalNext: string = 'ThankYou'
      const { treeData, language, actionLog, userFootprint } = store.getState()
      const prop: string = serviceFunc.getFirstCharLowerCase(modalNext)
      const { delay } = treeData[language].modals[prop]
      setTimeout(() => actions.SEND_COMMENT_FORM({ modalNext }), delay)

      const target: string = 'registration02'
      setTimeout(() => serviceFunc.saveUserVisitActions(target), 0)
    }
    break

    case 'pressOkInSelectRole':
    {
      data = {}
      actions.CLOSE_ALL_MODALS(data)
      const modalNext: string = 'CommentForm'
      const { treeData, language, actionLog, userFootprint } = store.getState()
      const prop: string = serviceFunc.getFirstCharLowerCase(modalNext)
      const { delay } = treeData[language].modals[prop]
      setTimeout(() => actions.SEND_COMMENT_FORM({ modalNext }), delay)

      const target: string = 'registration01'
      setTimeout(() => serviceFunc.saveUserVisitActions(target), 0)
    }
    break

    case 'pressSearchButton':
    case 'clickUserProfile':
    case 'selectCatalogCategory':
    case 'openModalRegistrationNavBar':
    case 'openModalRegistrationQuick':
    case 'openModalRegistrationFooter':
    case 'openModalRegistrationToSpec':
    {
      const modalNext: string = 'SelectRole'
      const { treeData, language, actionLog, userFootprint } = store.getState()
      const prop: any = serviceFunc.getFirstCharLowerCase(modalNext)
      const { delay } = treeData[language].modals[prop]

      switch (action.type) {

        case 'pressSearchButton': {
          setTimeout(() => actions.PRESS_SEARCH_BUTTON({ modalNext }), delay)
        }                         break
        case 'clickUserProfile': {
          setTimeout(() => actions.CLICK_USER_PROFILE({ modalNext }), delay)
        }                        break
        case 'selectCatalogCategory': {
          setTimeout(() => actions.SELECT_CATALOG_CATEGORY({ modalNext }), delay)
        }                             break
        case 'openModalRegistrationNavBar': {
          setTimeout(() => actions.OPEN_MODAL_REGISTRATION_NAV_BAR({ modalNext }), delay)
        }                                   break
        case 'openModalRegistrationQuick': {
          setTimeout(() => actions.OPEN_MODAL_REGISTRATION_QUICK({ modalNext }), delay)
        }                                  break
        case 'openModalRegistrationFooter': {
          setTimeout(() => actions.OPEN_MODAL_REGISTRATION_FOOTER({ modalNext }), delay)
        }                                   break
        case 'openModalRegistrationToSpec': {
          setTimeout(() => actions.OPEN_MODAL_REGISTRATION_TO_SPEC({ modalNext }), delay)
        }                                   break
        default: {
          console.info('handleActions.js unexpected action', { action })
        }
      }

      const target: string = 'inception'
      setTimeout(() => serviceFunc.saveUserVisitActions(target), 0)
      // console.info(`handleActions.js type: ${action.type}`, { delay, treeData, language, prop, action, e })
    }
    break

    default:
    {
      console.info('handleActions.js unexpected action', { action })
    }
  }
}