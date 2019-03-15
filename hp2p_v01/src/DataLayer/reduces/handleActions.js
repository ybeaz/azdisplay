import { bindActionCreators } from 'redux'
import * as actionSet from '../actions/index'
import store from '../store'
import * as serviceFunc from '../../Shared/serviceFunc'

const { dispatch } = store
let actions = bindActionCreators(actionSet, dispatch)

/*
const loggerDispatch = bindActionCreators => next => actionSet => {
    store.dispatch(actionSet.DISPATCH_ACTION())
    return bindActionCreators(actionSet, dispatch)
}
let actions = loggerDispatch(actionSet)

export const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result;
}
*/


export const handleActions = (e, action) => {
  // console.info(`handleActions.js type->${action.type}`, { e, action })

  switch (action.type) {
/*  'CLOSE_ALL_MODALS'
    'CLOSE_MODAL_THANKYOU':
    'CLOSE_COMMENTFORM'
    'SEND_COMMENTFORM'
    'PRESS_OK_IN_SELECT_ROLE'
*/

    case 'closeModalThankYou': {
      actions.CLOSE_ALL_MODALS()
      // console.info(`handleActions.js type: ${action.type}`, { e, action })
    } break

    case 'closeCommentForm': {
      actions.CLOSE_ALL_MODALS()
      const modalNext = 'ThankYou'
      actions.CLOSE_COMMENTFORM({ modalNext })
      // console.info(`handleActions.js type: ${action.type}`, { e, action })
    } break

    case 'sendCommentForm': {
      actions.CLOSE_ALL_MODALS()
      const modalNext = 'ThankYou'
      actions.SEND_COMMENTFORM({ modalNext })
      // console.info(`handleActions.js type: ${action.type}`, { e, action })
    } break

    case 'pressOkInSelectRole': {
      actions.CLOSE_ALL_MODALS()
      const modalNext = 'CommentForm'
      actions.PRESS_OK_IN_SELECT_ROLE({ modalNext })
      // console.info(`handleActions.js type: ${action.type}`, { e, action })
    } break

    case 'pressSearchButton': {
      const modalNext = 'SelectRole'
      actions.PRESS_SEARCH_BUTTON({ modalNext })
      // console.info(`handleActions.js type: ${action.type}`, { e, action })
    } break

    case 'clickUserProfile': {
      const modalNext = 'SelectRole'
      actions.CLICK_USER_PROFILE({ modalNext })
      // console.info(`handleActions.js type: ${action.type}`, { e, action })
    } break

    case 'selectCatalogCategory': {
      const modalNext = 'SelectRole'
      actions.SELECT_CATALOG_CATEGORY({ modalNext })
      // console.info(`handleActions.js type: ${action.type}`, { e, action })
    } break

    case 'openModalRegistrationNavBar': {
      const modalNext = 'SelectRole'
      actions.OPEN_MODAL_REGISTRATION_NAV_BAR({ modalNext })
      // console.info(`handleActions.js type: ${action.type}`, { e, action })
    } break

    case 'openModalRegistrationQuick': {
      const modalNext = 'SelectRole'
      actions.OPEN_MODAL_REGISTRATION_QUICK({ modalNext })
      // console.info(`handleActions.js type: ${action.type}`, { e, action })
    } break

    case 'closeModalRegistrationNavBar': {
      actions.CLOSE_MODAL_REGISTRATION()
      actions.OPEN_MODAL_FAREWELL()
      // console.info(`handleActions.js type: ${action.type}`, { e, action })
    } break

    default: {
      console.info('handleActions.js unexpected action', { action })
    }
  }

}

export default handleActions
