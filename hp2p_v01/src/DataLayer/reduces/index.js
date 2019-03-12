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




//Main application reducers
const appCombineReducers = combineReducers(
  {
    user,
    modalWindow,
  },
)

export default appCombineReducers
