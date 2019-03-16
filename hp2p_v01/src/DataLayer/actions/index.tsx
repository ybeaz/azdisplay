import * as actionTypes from './actionTypes'

export const action = (type, payload = {}) => {
  // console.info('action-index.js action()', { type, ...payload })
  return ({ type, ...payload })
}

// Not used now
export const getAction: any = (type: string): any => ({
  request: (data: any): any => action(actionTypes[type].REQUEST, data),
  success: (data: any): any => action(actionTypes[type].SUCCESS, data),
  failure: (data: any): any => action(actionTypes[type].FAILURE, data),
})


// Get asynchroneous actions for saga
export const getActionAsync = (type: string, stage: any, data: any) => {
  // console.info('action-index.js action()', { actionTS: actionTypes[type][stage], actionT: actionTypes[type], type })
  return action(actionTypes[type][stage], data)
}

// Get synchroneours actions
// Template export const  = (data: any) => action(actionTypes., data)
export const CLOSE_ALL_MODALS = (data: any) => action(actionTypes.CLOSE_ALL_MODALS, data)
export const CLOSE_COMMENTFORM = (data: any) => action(actionTypes.CLOSE_COMMENTFORM, data)
export const SEND_COMMENTFORM = (data: any) => action(actionTypes.SEND_COMMENTFORM, data)
export const PRESS_OK_IN_SELECT_ROLE = (data: any) => action(actionTypes.PRESS_OK_IN_SELECT_ROLE, data)
export const PRESS_SEARCH_BUTTON = (data: any) => action(actionTypes.PRESS_SEARCH_BUTTON, data)
export const CLICK_USER_PROFILE = (data: any) => action(actionTypes.CLICK_USER_PROFILE, data)
export const SELECT_CATALOG_CATEGORY = (data: any) => action(actionTypes.SELECT_CATALOG_CATEGORY, data)
export const OPEN_MODAL_REGISTRATION_NAV_BAR = (data: any) => action(actionTypes.OPEN_MODAL_REGISTRATION_NAV_BAR, data)
export const OPEN_MODAL_REGISTRATION_QUICK = (data: any) => action(actionTypes.OPEN_MODAL_REGISTRATION_QUICK, data)
export const OPEN_MODAL_FAREWELL = (data: any) => action(actionTypes.OPEN_MODAL_FAREWELL, data)
export const CLOSE_MODAL_REGISTRATION = (data: any) => action(actionTypes.CLOSE_MODAL_REGISTRATION, data)
export const DISPATCH_ACTION = (data: any) => action(actionTypes.DISPATCH_ACTION, data)
export const UPLOAD_TREE_DATA = (data: any) => action(actionTypes.UPLOAD_TREE_DATA, data)
// export const SELECTED_PROJECT_TO_MERGE = data => action(actionTypes.SELECTED_PROJECT_TO_MERGE, data)
// export const UPDATED_NAMECOM_WIT_APPTOPTARGET = data => action(actionTypes.UPDATED_NAMECOM_WIT_APPTOPTARGET, data)
