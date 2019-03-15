import * as actionTypes from './actionTypes'

export const action = (type, payload = {}) => {
  // console.info('action-index.js action()', { type, ...payload })
  return ({ type, ...payload })
}

// Not used now
export const getAction = type => ({
  'request': data => action(actionTypes[type].REQUEST, data),
  'success': data => action(actionTypes[type].SUCCESS, data),
  'failure': data => action(actionTypes[type].FAILURE, data),
})


// Get asynchroneous actions for saga
export const getActionAsync = (type, stage, data) => {
  // console.info('action-index.js action()', { actionTS: actionTypes[type][stage], actionT: actionTypes[type], type })
  return action(actionTypes[type][stage], data)
}

// Get synchroneours actions
// Template export const  = data => action(actionTypes., data)
export const CLOSE_ALL_MODALS = data => action(actionTypes.CLOSE_ALL_MODALS, data)
export const CLOSE_COMMENTFORM = data => action(actionTypes.CLOSE_COMMENTFORM, data)
export const SEND_COMMENTFORM = data => action(actionTypes.SEND_COMMENTFORM, data)
export const PRESS_OK_IN_SELECT_ROLE = data => action(actionTypes.PRESS_OK_IN_SELECT_ROLE, data)
export const PRESS_SEARCH_BUTTON = data => action(actionTypes.PRESS_SEARCH_BUTTON, data)
export const CLICK_USER_PROFILE = data => action(actionTypes.CLICK_USER_PROFILE, data)
export const SELECT_CATALOG_CATEGORY = data => action(actionTypes.SELECT_CATALOG_CATEGORY, data)
export const OPEN_MODAL_REGISTRATION_NAV_BAR = data => action(actionTypes.OPEN_MODAL_REGISTRATION_NAV_BAR, data)
export const OPEN_MODAL_REGISTRATION_QUICK = data => action(actionTypes.OPEN_MODAL_REGISTRATION_QUICK, data)
export const OPEN_MODAL_FAREWELL = data => action(actionTypes.OPEN_MODAL_FAREWELL, data)
export const CLOSE_MODAL_REGISTRATION = data => action(actionTypes.CLOSE_MODAL_REGISTRATION, data)
export const DISPATCH_ACTION = data => action(actionTypes.DISPATCH_ACTION, data)
// export const SELECTED_PROJECT_TO_MERGE = data => action(actionTypes.SELECTED_PROJECT_TO_MERGE, data)
// export const UPDATED_NAMECOM_WIT_APPTOPTARGET = data => action(actionTypes.UPDATED_NAMECOM_WIT_APPTOPTARGET, data)
