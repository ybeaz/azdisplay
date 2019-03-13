export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const createRequestTypes = base =>
  [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})

// Asynchroneous actions for saga
// export const REMOVED_DOC_NAMED = createRequestTypes('REMOVED_DOC_NAMED')
// export const LOADED_DOC_NAMED = createRequestTypes('LOADED_DOC_NAMED')

// Synchroneours actions
export const OPEN_MODAL_FAREWELL = 'OPEN_MODAL_FAREWELL'
export const CLOSE_MODAL_REGISTRATION = 'CLOSE_MODAL_REGISTRATION'
export const OPEN_MODAL_REGISTRATION_NAV_BAR = 'OPEN_MODAL_REGISTRATION_NAV_BAR'
export const OPEN_MODAL_REGISTRATION_QUICK = 'OPEN_MODAL_REGISTRATION_QUICK'
export const DISPATCH_ACTION = 'DISPATCH_ACTION'
// export const SELECTED_PROJECT_TO_MERGE = 'SELECTED_PROJECT_TO_MERGE'
// export const UPDATED_NAMECOM_WIT_APPTOPTARGET = 'UPDATED_NAMECOM_WIT_APPTOPTARGET'
