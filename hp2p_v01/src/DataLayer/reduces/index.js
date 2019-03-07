import { combineReducers } from 'redux'

export const user = (state = {}, action) => {

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

//Main application reducers
const appCombineReducers = combineReducers(
  {
    user,
  },
)

export default appCombineReducers
