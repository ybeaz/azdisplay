import * as actionTypes from './actionTypes'

export const action: any = (type, payload = {}): any => {
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
export const getActionAsync: any = (type: string, stage: any, data: any): any => {
  // console.info('action-index.js action()', { actionTS: actionTypes[type][stage], actionT: actionTypes[type], type })
  return action(actionTypes[type][stage], data)
}

// Get synchroneours actions
// Template export const : any = (data: any): any => action(actionTypes., data)

export const CLICK_FORWARD_2: any = (data: any): any => action(actionTypes.CLICK_FORWARD_2, data)
export const CLICK_FORWARD_1: any = (data: any): any => action(actionTypes.CLICK_FORWARD_1, data)
export const CLICK_ROLE: any = (data: any): any => action(actionTypes.CLICK_ROLE, data)
export const CLICK_PROFILE_REVIEW: any = (data: any): any => action(actionTypes.CLICK_PROFILE_REVIEW, data)
export const CLICK_CATALOG_CATEGORY: any = (data: any): any => action(actionTypes.CLICK_CATALOG_CATEGORY, data)
export const CLICK_SEARCH_BUTTON_SECOND: any = (data: any): any => action(actionTypes.CLICK_SEARCH_BUTTON_SECOND, data)
export const CLICK_SEARCH_BUTTON_FIRST: any = (data: any): any => action(actionTypes.CLICK_SEARCH_BUTTON_FIRST, data)
export const CLICK_REGISTRATION_QUICK: any = (data: any): any => action(actionTypes.CLICK_REGISTRATION_QUICK, data)
export const CLICK_REGISTRATION_FOOTER: any = (data: any): any => action(actionTypes.CLICK_REGISTRATION_FOOTER, data)
export const CLICK_REGISTRATION_NAV_BAR: any = (data: any): any => action(actionTypes.CLICK_REGISTRATION_NAV_BAR, data)

export const CALL_SPINNER: any = (data: any): any => action(actionTypes.CALL_SPINNER, data)
export const CLOSE_ALL_MODALS: any = (data: any): any => action(actionTypes.CLOSE_ALL_MODALS, data)
export const CLOSE_MODAL_THANK_YOU: any = (data: any): any => action(actionTypes.CLOSE_MODAL_THANK_YOU, data)
export const CLOSE_COMMENT_FORM: any = (data: any): any => action(actionTypes.CLOSE_COMMENT_FORM, data)
export const CLOSE_MODAL_SELECT_ROLE: any = (data: any): any => action(actionTypes.CLOSE_MODAL_SELECT_ROLE, data)
export const SEND_COMMENT_FORM: any = (data: any): any => action(actionTypes.SEND_COMMENT_FORM, data)
export const PRESS_OK_IN_SELECT_ROLE: any = (data: any): any => action(actionTypes.PRESS_OK_IN_SELECT_ROLE, data)
export const PRESS_SEARCH_BUTTON: any = (data: any): any => action(actionTypes.PRESS_SEARCH_BUTTON, data)
export const CLICK_USER_PROFILE: any = (data: any): any => action(actionTypes.CLICK_USER_PROFILE, data)
export const SELECT_CATALOG_CATEGORY: any = (data: any): any => action(actionTypes.SELECT_CATALOG_CATEGORY, data)
export const OPEN_MODAL_REGISTRATION_NAV_BAR: any = (data: any): any => action(actionTypes.OPEN_MODAL_REGISTRATION_NAV_BAR, data)
export const OPEN_MODAL_REGISTRATION_QUICK: any = (data: any): any => action(actionTypes.OPEN_MODAL_REGISTRATION_QUICK, data)
export const OPEN_MODAL_REGISTRATION_FOOTER: any = (data: any): any => action(actionTypes.OPEN_MODAL_REGISTRATION_FOOTER, data)
export const OPEN_MODAL_FAREWELL: any = (data: any): any => action(actionTypes.OPEN_MODAL_FAREWELL, data)
export const CLOSE_MODAL_REGISTRATION: any = (data: any): any => action(actionTypes.CLOSE_MODAL_REGISTRATION, data)
export const DISPATCH_ACTION: any = (data: any): any => action(actionTypes.DISPATCH_ACTION, data)
export const UPLOAD_TREE_DATA: any = (data: any): any => action(actionTypes.UPLOAD_TREE_DATA, data)
// export const SELECTED_PROJECT_TO_MERGE = data => action(actionTypes.SELECTED_PROJECT_TO_MERGE, data)
// export const UPDATED_NAMECOM_WIT_APPTOPTARGET = data => action(actionTypes.UPDATED_NAMECOM_WIT_APPTOPTARGET, data)
