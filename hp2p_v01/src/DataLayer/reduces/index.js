import { combineReducers } from 'redux'

const user = (state = {}, action) => {

  switch (action.type) {
    case 'REG_LOGIN_CHECK_USER': {
      return state
    }

    case 'SIGNED_OUT_USER': {
      return state
    }

    default: {
      return state
    }
  }
}

const modalWindow = (state = false, action) => {

  switch (action.type) {

    case 'OPEN_MODAL_FAREWELL':
    case 'PRESS_SEARCH_BUTTON':
    case 'CLICK_USER_PROFILE':
    case 'SELECT_CATALOG_CATEGORY':
    case 'OPEN_MODAL_REGISTRATION_NAV_BAR':
    case 'OPEN_MODAL_REGISTRATION_QUICK': {
      return true
    }

    case 'CLOSE_MODAL_REGISTRATION': {
      return false
    }

    default: {
      return state
    }
  }
}

const actionLog = (state = [], action) => {

  switch (action.type) {

    case 'DISPATCH_ACTION': {
      const { payload } = action
      const stateNext = [...state, payload]
      // console.info('actionLog->statePrev', { action, statePrev: state, stateNext })
      return stateNext
    }

    default: {
      return state
    }
  }
}


//Main application reducers
const appCombineReducers = combineReducers(
  {
    user,
    modalWindow,
    actionLog,
  },
)

export default appCombineReducers
