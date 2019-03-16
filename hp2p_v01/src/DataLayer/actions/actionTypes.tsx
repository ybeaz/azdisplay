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
export const CLOSE_ALL_MODALS = 'CLOSE_ALL_MODALS'
export const CLOSE_COMMENTFORM = 'CLOSE_COMMENTFORM'
export const SEND_COMMENTFORM = 'SEND_COMMENTFORM'
export const PRESS_OK_IN_SELECT_ROLE = 'PRESS_OK_IN_SELECT_ROLE'
export const PRESS_SEARCH_BUTTON = 'PRESS_SEARCH_BUTTON'
export const CLICK_USER_PROFILE = 'CLICK_USER_PROFILE'
export const SELECT_CATALOG_CATEGORY = 'SELECT_CATALOG_CATEGORY'
export const OPEN_MODAL_REGISTRATION_NAV_BAR = 'OPEN_MODAL_REGISTRATION_NAV_BAR'
export const OPEN_MODAL_REGISTRATION_QUICK = 'OPEN_MODAL_REGISTRATION_QUICK'
export const CLOSE_MODAL_REGISTRATION = 'CLOSE_MODAL_REGISTRATION'  
export const OPEN_MODAL_FAREWELL = 'OPEN_MODAL_FAREWELL'
export const DISPATCH_ACTION = 'DISPATCH_ACTION'
export const UPLOAD_TREE_DATA = 'UPLOAD_TREE_DATA'
// export const SELECTED_PROJECT_TO_MERGE = 'SELECTED_PROJECT_TO_MERGE'
// export const UPDATED_NAMECOM_WIT_APPTOPTARGET = 'UPDATED_NAMECOM_WIT_APPTOPTARGET'
