import { bindActionCreators } from 'redux'
import * as actionSet from '../actions/index'
import store from '../store'

import { ARR_ACTION_TO_OMIT_FOR_LOG } from '../../Constants/CONSTANTS'
import * as Interfaces from '../../Shared/interfaces'
import * as serviceFunc from '../../Shared/serviceFunc'

const { dispatch } = store
const actions: any = bindActionCreators(actionSet, dispatch)

export const handleActions: Function = (e: object, action: Interfaces.Action): void => {
  // console.info(`handleActions.js type->${action.type}`, { e, action })
  let data: any = {}

  switch (action.type) {

    /*
      CLICK_FORWARD_2
      CLICK_FORWARD_1
      CLICK_ROLE
      CLICK_PROFILE_REVIEW
      CLICK_CATALOG_CATEGORY
      CLICK_SEARCH_BUTTON
      CLICK_REGISTRATION_QUICK
      CLICK_REGISTRATION_FOOTER
      CLICK_REGISTRATION_NAV_BAR'
    */

   case 'clickForward2':
   {
      data = {}
      actions.CLICK_FORWARD_2(data)
   }
   break

   case 'clickForward1':
   {
      data = {}
      actions.CLICK_FORWARD_1(data)
   }
   break

   case 'clickRole':
   {
      data = {}
      actions.CLICK_ROLE(data)
   }
   break

   case 'clickProfileReview':
   {
      data = {}
      actions.CLICK_PROFILE_REVIEW(data)
   }
   break

    case 'clickCatalogCategory':
    {
      data = {}
      actions.CLICK_CATALOG_CATEGORY(data)
    }
    break

    case 'clickSearchButton':
    {
      data = action.data
      console.info(`handleActions.js type: ${action.type}`, { data, action, e })
      actions.CLICK_SEARCH_BUTTON(data)
    }
    break

    case 'clickRegistrationQuick':
    {
      data = {}
      actions.CLICK_REGISTRATION_QUICK(data)
    }
    break

    case 'clickRegistrationFooter':
    {
      data = {}
      actions.CLICK_REGISTRATION_FOOTER(data)
    }
    break

    case 'clickRegistrationNavBar':
    {
      data = {}
      actions.CLICK_REGISTRATION_NAV_BAR(data)
    }
    break



    case 'updateUserFootprint':
    {
      data = action.data
      console.info(`handleActions.js type: ${action.type}`, { data, action, e })
      actions.UPDATE_USER_FOOTPRINT(data)
    }
    break

    case 'callSpinner':
    {
      data = {}
      actions.CLOSE_ALL_MODALS(data)
      const modalNext: string = 'Spinner'
      actions.CALL_SPINNER({ modalNext })
      // console.info(`handleActions.js type: ${action.type}`, { action, e })
    }
    break

    case 'getUserAnalyticsData':
    {
      const payload02: Interfaces.Payload  = {
        optGet: 'guad',
      }
      actions.getActionAsync('GET_USER_ANALYTICS_DATA', 'REQUEST', payload02)
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
      actions.CLOSE_MODAL_SELECT_ROLE(data)

      const { actionLog } = store.getState()
      let actionLogNext: any = actionLog
      actionLogNext.push({type: 'CANCEL_USER_REGISTRATION_REQUEST'})
      actionLogNext = serviceFunc.arrOfObjOmitItemsByPropValArr(actionLog, 'type', ARR_ACTION_TO_OMIT_FOR_LOG)
      actionLogNext = actionLogNext.map((item: any) => item.type)
      const payload: Interfaces.Payload  = {
        optGet: 'sus',
        target: 'cancelReg',
        email: '',
        msg: '',
        actionLog: JSON.stringify(actionLogNext) }
      actions.getActionAsync('CANCEL_USER_REGISTRATION', 'REQUEST', payload)
      // console.info(`handleActions.js type: ${action.type}`, { e, payload, action })
    }
    break

    case 'sendCommentForm':
    {
      data = {}
      actions.CLOSE_ALL_MODALS(data)
      const modalNext: string = 'ThankYou'
      const { treeData, language, actionLog } = store.getState()
      const prop: string = serviceFunc.getFirstCharLowerCase(modalNext)
      const { delay } = treeData[language].modals[prop]
      setTimeout(() => actions.SEND_COMMENT_FORM({ modalNext }), delay)

      let actionLogNext: any = serviceFunc.arrOfObjOmitItemsByPropValArr(actionLog, 'type', ARR_ACTION_TO_OMIT_FOR_LOG)
      actionLogNext = actionLogNext.map((item: any) => item.type)
      const payload01: Interfaces.Payload  = {
        optPost: 'suva',
        target: 'registration',
        email: 'email',
        msg: 'msg',
        actionLog: JSON.stringify(actionLogNext) }
      // console.info(`handleActions.js type: ${action.type} [10]`, { payload01, actionLogNext, actionLog, action, e })
      actions.getActionAsync('SAVE_USER_VISIT_ACTIONS', 'REQUEST', payload01)
    }
    break

    case 'pressOkInSelectRole':
    {
      data = {}
      actions.CLOSE_ALL_MODALS(data)
      const modalNext: string = 'CommentForm'
      const { treeData, language } = store.getState()
      const prop: string = serviceFunc.getFirstCharLowerCase(modalNext)
      const { delay } = treeData[language].modals[prop]
      setTimeout(() => actions.PRESS_OK_IN_SELECT_ROLE({ modalNext }), delay)
      // console.info(`handleActions.js type: ${action.type}`, { action, e })
    }
    break

    case 'pressSearchButton':
    case 'clickUserProfile':
    case 'selectCatalogCategory':
    case 'openModalRegistrationNavBar':
    case 'openModalRegistrationQuick':
    case 'openModalRegistrationFooter':
    {
      const modalNext: string = 'SelectRole'
      const { treeData, language, actionLog } = store.getState()
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
        default: {
          console.info('handleActions.js unexpected action', { action })
        }
      }

      // console.info(`handleActions.js type: ${action.type}`, { delay, treeData, language, prop, action, e })
    }
    break

    default:
    {
      console.info('handleActions.js unexpected action', { action })
    }
  }
}
