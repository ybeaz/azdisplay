export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const createRequestTypes = base =>
  [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})

// Asynchroneous actions for saga
export const GET_USER_ANALYTICS_DATA: any = createRequestTypes('GET_USER_ANALYTICS_DATA')
export const SAVE_USER_VISIT_ACTIONS: any = createRequestTypes('SAVE_USER_VISIT_ACTIONS')
export const CANCEL_USER_REGISTRATION: any = createRequestTypes('CANCEL_USER_REGISTRATION')
export const START_USER_SESSION: any = createRequestTypes('START_USER_SESSION')
// export const LOADED_DOC_NAMED = createRequestTypes('LOADED_DOC_NAMED')

// Synchroneours actions
// Template export const  = ''

export const CLICK_FORWARD_2: string = 'CLICK_FORWARD_2'
export const CLICK_FORWARD_1: string = 'CLICK_FORWARD_1'
export const CLICK_ROLE: string = 'CLICK_ROLE'
export const CLICK_PROFILE_REVIEW: string = 'CLICK_PROFILE_REVIEW'
export const CLICK_CATALOG_CATEGORY: string = 'CLICK_CATALOG_CATEGORY'
export const CLICK_SEARCH_BUTTON_SECOND: string = 'CLICK_SEARCH_BUTTON_SECOND'
export const CLICK_SEARCH_BUTTON_FIRST: string = 'CLICK_SEARCH_BUTTON_FIRST'
export const CLICK_REGISTRATION_QUICK: string = 'CLICK_REGISTRATION_QUICK'
export const CLICK_REGISTRATION_FOOTER: string = 'CLICK_REGISTRATION_FOOTER'
export const CLICK_REGISTRATION_NAV_BAR: string = 'CLICK_REGISTRATION_NAV_BAR'

export const CALL_SPINNER: string = 'CALL_SPINNER'
export const CLOSE_ALL_MODALS: string = 'CLOSE_ALL_MODALS'
export const CLOSE_MODAL_THANK_YOU: string = 'CLOSE_MODAL_THANK_YOU'
export const CLOSE_COMMENT_FORM: string = 'CLOSE_COMMENT_FORM'
export const CLOSE_MODAL_SELECT_ROLE: string = 'CLOSE_ALL_MODALS'
export const SEND_COMMENT_FORM: string = 'SEND_COMMENT_FORM'
export const PRESS_OK_IN_SELECT_ROLE: string = 'PRESS_OK_IN_SELECT_ROLE'
export const PRESS_SEARCH_BUTTON: string = 'PRESS_SEARCH_BUTTON'
export const CLICK_USER_PROFILE: string = 'CLICK_USER_PROFILE'
export const SELECT_CATALOG_CATEGORY: string = 'SELECT_CATALOG_CATEGORY'
export const OPEN_MODAL_REGISTRATION_NAV_BAR: string = 'OPEN_MODAL_REGISTRATION_NAV_BAR'
export const OPEN_MODAL_REGISTRATION_QUICK: string = 'OPEN_MODAL_REGISTRATION_QUICK'
export const OPEN_MODAL_REGISTRATION_FOOTER: string = 'OPEN_MODAL_REGISTRATION_FOOTER'
export const CLOSE_MODAL_REGISTRATION: string = 'CLOSE_MODAL_REGISTRATION'  
export const OPEN_MODAL_FAREWELL: string = 'OPEN_MODAL_FAREWELL'
export const DISPATCH_ACTION: string = 'DISPATCH_ACTION'
export const UPLOAD_TREE_DATA: string = 'UPLOAD_TREE_DATA'
// export const SELECTED_PROJECT_TO_MERGE = 'SELECTED_PROJECT_TO_MERGE'
// export const UPDATED_NAMECOM_WIT_APPTOPTARGET = 'UPDATED_NAMECOM_WIT_APPTOPTARGET'
