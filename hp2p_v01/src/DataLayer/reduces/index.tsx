import { combineReducers } from 'redux'
import * as Interfaces from '../../Shared/interfaces'

const userFootprint: any = (state: {} = {}, action: Interfaces.Action): any => {
  switch (action.type) {

    case 'CLICK_FORWARD_2': {
      //msg: string
      return state
    }


    case 'CLICK_FORWARD_1': {
      //email: string
      return state
    }

    case 'CLICK_ROLE': {
      //role: arr
      return state
    }

    case 'CLICK_PROFILE_REVIEW': {
      //inception: string 'userProfile: '
      //name: string
      return state
    }

    case 'CLICK_CATALOG_CATEGORY': {
      //inception: string 'catalogCategory'
      //catalogCategory: string
      return state
    }

    case 'CLICK_SEARCH_BUTTON_SECOND': {
      //inception: string 'searchButtonSecond'
      //searchPhrase: string
      //searchCategory: string[]
      //searchMedia: string
      return state
    }

    case 'CLICK_SEARCH_BUTTON_FIRST': {
      //inception: string 'searchButtonFirst'
      //inputPhrase: string
      //category: string[]
      //media: string
      return state
    }

    case 'CLICK_REGISTRATION_QUICK': {
      //inception: string 'registrationQuick'
      return state
    }

    case 'CLICK_REGISTRATION_FOOTER': {
      //inception: string 'registrationFooter'
      return state
    }

    case 'CLICK_REGISTRATION_NAV_BAR': {
      //inception: string 'registrationNavBar'
      return state
    }

    default: {
      return state
    }
  }
}

const analytics: any = (state: any = [], action: Interfaces.Action): any => {
  switch (action.type) {
    case 'GET_USER_ANALYTICS_DATA_SUCCESS': {
      const stateNext: any = action.data.filter((item: any) => item.PHPSESSID)
      //console.info(`reducer->analytics type: ${action.type}`, { stateNext, state, action })

      return stateNext
    }

    default: {
      return state
    }
  }
}

const language: any = (state: string = 'rus', action: Interfaces.Action): any => {

  switch (action.type) {
    case 'SELECT_LANGUAGE': {
      return action.lang
    }

    default: {
      return state
    }
  }
}

const user: any = (state: {} = {}, action: Interfaces.Action): any => {

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

const modalWindows: any = (
    state: Interfaces.ModalWindowState | any = [],
    action: Interfaces.Action,
  ): any => {

  switch (action.type) {

    case 'CLOSE_MODAL_THANK_YOU':
    case 'CLOSE_ALL_MODALS': {
      return state.map((item: Interfaces.ModalWindowStateItem) => {
        return { ...item, display: false }
      })
      // console.info(`reducer->modalWindows type: ${action.type}`, { stateNext, state, action })
    }

    case 'CLOSE_COMMENT_FORM':
    case 'SEND_COMMENT_FORM':
    case 'PRESS_OK_IN_SELECT_ROLE': {
      const { modalNext } = action
      let stateNext: Interfaces.ModalWindowState | any = state
      //const { length } = state
      const index: number = state.map((item: any) => item.component)
        .indexOf(modalNext)

      if (index === -1) {
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
      // console.info(`reducer->modalWindows type: ${action.type}`, { index, stateNext, state, action })

      return stateNext
    }

    case 'PRESS_SEARCH_BUTTON':
    case 'CLICK_USER_PROFILE':
    case 'SELECT_CATALOG_CATEGORY':
    case 'OPEN_MODAL_REGISTRATION_NAV_BAR':
    case 'OPEN_MODAL_REGISTRATION_QUICK':
    case 'OPEN_MODAL_REGISTRATION_FOOTER':
    case 'OPEN_MODAL_FAREWELL': {
      const { modalNext } = action
      let stateNext: any = state
      const { length } = state
      let index: number
      if (length === 0) {
        stateNext = [
          { component: modalNext, display: true },
        ]
      }
      else {
        index = state.map((item: any) => item.component)
          .indexOf(modalNext)
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

const actionLog: any = (state: any = [], action: Interfaces.Action): any => {

  switch (action.type) {

    case 'DISPATCH_ACTION': {
      const { payload } = action

      return [...state, payload]
      // console.info('actionLog->statePrev', { action, statePrev: state, stateNext })
    }

    default: {
      return state
    }
  }
}

const treeData: any = (state: any = {}, action: Interfaces.Action): any => {

  switch (action.type) {
    case 'UPLOAD_TREE_DATA': {
      // console.info(`reducer->treeData type: ${action.type}`, { stateNext, state, action })
      return action.treeData
    }

    default: {
      return state
    }
  }
}

//Main application reducers
const appCombineReducers: any = combineReducers(
  {
    userFootprint,
    analytics,
    language,
    user,
    modalWindows,
    actionLog,
    treeData,
  },
)

export default appCombineReducers
