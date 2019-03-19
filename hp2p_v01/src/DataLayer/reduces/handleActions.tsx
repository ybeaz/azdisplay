import { bindActionCreators } from 'redux'
import * as actionSet from '../actions/index'
import store from '../store'

import * as Interface from '../../Shared/interfaces'
import * as serviceFunc from '../../Shared/serviceFunc'

const { dispatch } = store
const actions: any = bindActionCreators(actionSet, dispatch)


export const handleActions: void = (e: {}, action: Interface.Action) => {
  // console.info(`handleActions.js type->${action.type}`, { e, action })

  switch (action.type) {
/*  'CLOSE_ALL_MODALS'
    'CLOSE_MODAL_THANKYOU':
    'CLOSE_COMMENT_FORM'
    'SEND_COMMENT_FORM'
    'PRESS_OK_IN_SELECT_ROLE'
*/

    case 'closeModalThankYou':
    {
      const data: any = {}
      actions.CLOSE_MODAL_THANK_YOU(data)
      // console.info(`handleActions.js type: ${action.type}`, { e, action })
    }
    break

    case 'closeModalCommentForm':
    {
      const data: any = {}
      actions.CLOSE_ALL_MODALS(data)
      const modalNext = 'ThankYou'
      actions.CLOSE_COMMENT_FORM({ modalNext })
      // console.info(`handleActions.js type: ${action.type}`, { action, e })
    }
    break

    case 'closeModalSelectRole':
    {
      const data: any = {}
      actions.CLOSE_MODAL_SELECT_ROLE(data)
      // console.info(`handleActions.js type: ${action.type}`, { e, action })
    }
    break

    case 'sendCommentForm':
    {
      const data: any = {}
      actions.CLOSE_ALL_MODALS(data)
      const modalNext: string = 'ThankYou'
      const { treeData, language, actionLog } = store.getState()
      const prop: string = serviceFunc.getFirstCharLowerCase(modalNext)
      const { delay } = treeData[language].modals[prop]
      setTimeout(() => actions.SEND_COMMENT_FORM({ modalNext }), delay)

      const arrToOmit: string[] = ['UPLOAD_TREE_DATA', 'CLOSE_ALL_MODALS', 'PRESS_OK_IN_SELECT_ROLE' ]
      let actionLogNext: any = serviceFunc.arrOfObjOmitItemsByPropValArr(actionLog, 'type', arrToOmit)
      actionLogNext = actionLogNext.map((item: any) => item.type)
      const payload: any = { actionLog: JSON.stringify(actionLogNext), optGet: 1 }
      console.info(`handleActions.js type: ${action.type} [10]`, { payload, actionLogNext, actionLog, action, e })
      actions.getActionAsync('SAVE_USER_VISIT_ACTIONS','REQUEST', payload)
    }
    break

    case 'pressOkInSelectRole':
    {
      const data: any = {}
      actions.CLOSE_ALL_MODALS(data)
      const modalNext = 'CommentForm'
      const { treeData, language } = store.getState()
      const prop = serviceFunc.getFirstCharLowerCase(modalNext)
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
        } break
        case 'clickUserProfile': {
          setTimeout(() => actions.CLICK_USER_PROFILE({ modalNext }), delay)
        } break
        case 'selectCatalogCategory': {
          setTimeout(() => actions.SELECT_CATALOG_CATEGORY({ modalNext }), delay)
        } break
        case 'openModalRegistrationNavBar': {
          setTimeout(() => actions.OPEN_MODAL_REGISTRATION_NAV_BAR({ modalNext }), delay)
        } break
        case 'openModalRegistrationQuick': {
          setTimeout(() => actions.OPEN_MODAL_REGISTRATION_QUICK({ modalNext }), delay)
        } break
        case 'openModalRegistrationFooter': {
          setTimeout(() => actions.OPEN_MODAL_REGISTRATION_FOOTER({ modalNext }), delay)
        } break
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

export default handleActions
