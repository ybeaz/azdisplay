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

const modalWindows = (state = [], action) => {

  switch (action.type) {


    case 'CLOSE_ALL_MODALS': {
      const stateNext = state.map(item => {
        return { ...item, display: false }
      })
      console.info(`reducer->modalWindows type: ${action.type}`, { stateNext, state, action })
      return stateNext
    }

    case 'CLOSE_COMMENTFORM':
    case 'SEND_COMMENTFORM':
    case 'PRESS_OK_IN_SELECT_ROLE': {
      const { modalNext } = action
      let stateNext = state
      const { length } = state
      const index = state.map(item => item.component).indexOf(modalNext)
      if (length === 0) {
        stateNext = [
          { component: modalNext, display: true },
        ]
      }
      else if (index === -1) {
        stateNext = [
          ...state,
          { component: modalNext, display: true },
        ]
      }
      else {
        stateNext = [
          ...state.slice(0, index),
          { component: modalNext, display: true },
          ...state.slice(index + 1),
        ]
      }

      console.info(`reducer->modalWindows type: ${action.type}`, { index, stateNext, state, action })
      return stateNext
    }

    
    case 'PRESS_SEARCH_BUTTON':
    case 'CLICK_USER_PROFILE':
    case 'SELECT_CATALOG_CATEGORY':
    case 'OPEN_MODAL_REGISTRATION_NAV_BAR':
    case 'OPEN_MODAL_REGISTRATION_QUICK':
    case 'OPEN_MODAL_FAREWELL': {
      const { modalNext } = action
      let stateNext = state
      const { length } = state
      let index
      if (length === 0) {
        stateNext = [
          { component: modalNext, display: true },
        ]
      }
      else {
        index = state.map(item => item.component).indexOf(modalNext)
        stateNext = [
          ...state.slice(0, index),
          { component: modalNext, display: true },
          ...state.slice(index + 1),
        ]
      }

      // console.info(`reducer->modalWindows type: ${action.type}`, { stateNext, state, action })
      return stateNext
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
    modalWindows,
    actionLog,
  },
)

export default appCombineReducers
