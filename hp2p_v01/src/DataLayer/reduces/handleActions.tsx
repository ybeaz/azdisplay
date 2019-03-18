import { bindActionCreators } from 'redux'
import * as actionSet from '../actions/index'
import store from '../store'
import * as Interface from '../../Shared/interfaces'

import { getFirstCharLowerCase } from '../../Shared/serviceFunc'

const { dispatch } = store
const actions = bindActionCreators(actionSet, dispatch)


export const handleActions = (e: {}, action: Interface.Action) => {
  // console.info(`handleActions.js type->${action.type}`, { e, action })

  switch (action.type) {
/*  'CLOSE_ALL_MODALS'
    'CLOSE_MODAL_THANKYOU':
    'CLOSE_COMMENTFORM'
    'SEND_COMMENTFORM'
    'PRESS_OK_IN_SELECT_ROLE'
*/

    case 'closeModalThankYou': {
      const data: any = {}
      actions.CLOSE_ALL_MODALS(data)
      // console.info(`handleActions.js type: ${action.type}`, { e, action })
    } break

    case 'closeCommentForm': {
      const data: any = {}
      actions.CLOSE_ALL_MODALS(data)
      const modalNext = 'ThankYou'
      actions.CLOSE_COMMENTFORM({ modalNext })
      // console.info(`handleActions.js type: ${action.type}`, { action, e })
    } break

    case 'sendCommentForm': {
      const data: any = {}
      actions.CLOSE_ALL_MODALS(data)
      const modalNext = 'ThankYou'
      const { treeData, language } = store.getState()
      const prop = getFirstCharLowerCase(modalNext)
      const { delay } = treeData[language].modals[prop]
      setTimeout(() => actions.SEND_COMMENTFORM({ modalNext }), delay)
      // const reduxState: any = store.getState()
      // console.info(`handleActions.js : ${action.type}`, { action, e })
    } break

    case 'pressOkInSelectRole': {
      const data: any = {}
      actions.CLOSE_ALL_MODALS(data)
      const modalNext = 'CommentForm'
      const { treeData, language } = store.getState()
      const prop = getFirstCharLowerCase(modalNext)
      const { delay } = treeData[language].modals[prop]
      setTimeout(() => actions.PRESS_OK_IN_SELECT_ROLE({ modalNext }), delay)
      // console.info(`handleActions.js type: ${action.type}`, { action, e })
    } break

    case 'pressSearchButton':
    case 'clickUserProfile':
    case 'selectCatalogCategory':
    case 'openModalRegistrationNavBar': 
    case 'openModalRegistrationQuick': {
      const modalNext = 'SelectRole'
      const { treeData, language } = store.getState()
      const prop = getFirstCharLowerCase(modalNext)
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
        default: {
          console.info('handleActions.js unexpected action', { action })
        }
      }

      // console.info(`handleActions.js type: ${action.type}`, { delay, treeData, language, prop, action, e })
    } break


    default: {
      console.info('handleActions.js unexpected action', { action })
    }
  }

}

export default handleActions
