export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const createRequestTypes = base =>
  [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})

// Asynchroneous actions for saga
export const SAVE_ACTIONS = createRequestTypes('SAVE_ACTIONS')
// export const LOADED_DOC_NAMED = createRequestTypes('LOADED_DOC_NAMED')

// Synchroneours actions
// Template export const  = ''
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
