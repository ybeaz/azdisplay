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

    case 'closeModalRegistrationNavBar': {
      actions.CLOSE_MODAL_REGISTRATION()
      actions.OPEN_MODAL_FAREWELL()
      // console.info(`handleActions.js type: ${action.type}`, { e, action })
    } break

    case 'pressSearchButton': {
      actions.PRESS_SEARCH_BUTTON()
      // console.info(`handleActions.js type: ${action.type}`, { e, action })
    } break

    case 'clickUserProfile': {
      actions.CLICK_USER_PROFILE()
      // console.info(`handleActions.js type: ${action.type}`, { e, action })
    } break

    case 'selectCatalogCategory': {
      actions.SELECT_CATALOG_CATEGORY()
      // console.info(`handleActions.js type: ${action.type}`, { e, action })
    } break

    case 'openModalRegistrationNavBar': {
      actions.OPEN_MODAL_REGISTRATION_NAV_BAR()
      // console.info(`handleActions.js type: ${action.type}`, { e, action })
    } break

    case 'openModalRegistrationQuick': {
      actions.OPEN_MODAL_REGISTRATION_QUICK()
      // console.info(`handleActions.js type: ${action.type}`, { e, action })
    } break

    default: {
      console.info('handleActions.js unexpected action', { action })
    }
  }

}

export default handleActions
