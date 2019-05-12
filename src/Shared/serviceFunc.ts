import * as actions from '../DataLayer/actions/index'
import store from '../DataLayer/store'

import { ARR_ACTION_TO_OMIT_FOR_LOG } from '../Constants/CONSTANTS'
import * as Interfaces from './interfaces'


/**
 * @description Function to select data from props and state
 */
export const getProject: Function = (props: any, state: any): {}[] | [] => {
  const { path, reduxState } = props
  const { treeData } = reduxState
  const { routes} = treeData.router
  const { language } = state

  return routes
    .filter((item: { path: string, [propName: string]: any }) =>
      !!item[language] && item.path === path)
}

/**
 * @description Function to check if this string convertable to json
 */
export const isJsonString: Function = (str: any): boolean => {
  try {
    let json = JSON.parse(str)

    return (typeof json === 'object')
  } catch (e) {
    return false
  }
}

/**
 * @description Function to check if the entity is object
 */
export const isObject: Function = (input: any): boolean => {
  let check: boolean = false
  if (typeof input === 'object'
    && typeof input !== 'function'
    && toString.call(input) !== '[object Array]'
    && input !== null) {
      check = true
    }

  return check
}

/**
 * @description Function to convert string into Date
 * 2019/04/11 22:17:09
 */
export const strToDate: Function = (dateString: string): any => {

  let reggie: any
  let reggieResult: any
  if (/(\d{4})\/(\d{2})\/(\d{2}) (\d{2}):(\d{2}):(\d{2})/.exec(dateString) !== null) {
    reggie = /(\d{4})\/(\d{2})\/(\d{2}) (\d{2}):(\d{2}):(\d{2})/
    reggieResult = reggie.exec(dateString)
  }

  // console.info('serviceFunc->strToDate [5]', { reggieResult, dateString })
  const [someS, yearS, monthS, dayS, hoursS, minutesS, secondsS = 0] = reggieResult

  const [, year, month, day, hours, minutes, seconds] =
    [someS, yearS, monthS, dayS, hoursS, minutesS, secondsS]
      .map((item: string) => parseInt(item, 10))

  const dateObject: Date = new Date(year, month - 1, day, hours, minutes, seconds)

  // console.info('serviceFunc->strToDate [10]', { dateString, year, month, day, hours, minutes, seconds, reggie, dateObject })
  return dateObject
}

/**
 * @description Function to return url composition
 * 
 */
export const urlComposition: Function = (strInit: string) => {
  const part: Interfaces.Url = {
    url: '',
    protocol: '',
    domain1: '',
    domain_2m1: '',
    domain2: '',
    domain3: '',
    id_tpc: '',
  }
  let str = strInit.replace(/^([a-zA-z]+:\/\/)www.([\s\S]*?)$/gim, "$1$2")
  str = str.replace(/\?([\s\S]*?)$/gim, "")
  //console.info(' str:',str)

  part.url = str
  if(str.match(/^([^\/]{1,10})([\/]{2,10})([^\/])([\s\S]*)$/gim)){
    part.protocol  = str.replace(/^([^\/]{1,10})([\/]{2,10})([^\/])([\s\S]*)$/gim, "$1$2")
  }
  else {
    part.protocol =  ''
  }
  part.domain1 = str.replace(/^([\s\S]*?\/\/[\s\S]*?|[\s\S]*?)\.([^.]*?)(\/([\s\S]*?)$|$)/gim, "$2")
  part.domain_2m1 = str.replace(/^([\s\S]*?\/\/[\s\S]*?|[\s\S]*?)([^.]*?)\.([^.]*?)(\/([\s\S]*?)$|$)/gim, "$2")
  part.domain2 = str.replace(/^([\s\S]*?\/\/[\s\S]*?|[\s\S]*?)([^.]*?\.[^.]*?)(\/([\s\S]*?)$|$)/gim, "$2")
  part.domain3 = str.replace(/^([\s\S]*?)\/\/([\s\S]*?)(\/([\s\S]*?)$|$)/gim, "$2")
  if ( str.match(/(^http[\S]{1,}answerlot.com\/question\/U[\d]{1,}T)([\S]{1,})(\/[\S]{1,}$)/gim)){
    part.id_tpc    = str.replace(/(^http[\S]{1,}answerlot.com\/question\/U[\d]{1,}T)([\S]{1,})(\/[\S]{1,}$)/gim, '$2')
  }
  else {
    part.id_tpc = '0'
  }

  return part
}


/**
 * @description Function to copy html entity into clipboard
 */
export const selectElementContents: Function =
  (window: Window, el: any): void => {
  // console.info('serviceFunc.js->selectElementContents() [0]', { window, document, el })
  let range: any
  let sel: any
  const document: Document = window.document
  const body: any = document.body
  if (document.createRange && window.getSelection) {
    range = document.createRange()
    sel = window.getSelection()
    sel.removeAllRanges()
    try {
      range.selectNodeContents(el)
      sel.addRange(range)
    } catch (e) {
      range.selectNode(el)
      sel.addRange(range)
    }
  } else if (body.createTextRange) {
    range = body.createTextRange()
    range.moveToElementText(el)
    range.select()
  }
  document.execCommand('copy')

  setTimeout(() =>
  {
    const s: Selection = window.getSelection()
    s.removeRange(range)
    alert('Table is copied into the clipboard')
  },
  1000)

}

/*
export const mediaSizeCrossBrowser: Function = (w: Window) => {
  // Use serviceFunc.mediaSizeCrossBrowser(global)
  const mediaSize: {width: number, height: number} = {width: 0, height: 0}
  const d = w.document
*/

/**
 * @description Function to copy text into clipboard
 */
export const textToClipboard: Function = (text: any): void => {
  const dummy: HTMLTextAreaElement = document.createElement('textarea')
  document.body.appendChild(dummy)
  dummy.value = text
  dummy.select()
  document.execCommand('copy')
  document.body.removeChild(dummy)
}

/**
 * @description Function to omit property of array of objects by values of simple array
 */
export const arrOfObjOmitItemsByPropValArr: Function = (arrIn: any, propToFilter: string, arrToOmit: string[]): any => {
  // console.info('serviceFunc->arrOfObjOmitPropArrByArr', { arrIn, propToFilter, arrToOmit })
  return arrIn.filter((item: any) => {
    let isTrue: boolean = true
    if (item[propToFilter]) {
      arrToOmit.filter((item01: string) => {
        if (item01 === item[propToFilter]) {
          isTrue = false
        }
      })
    }

    return isTrue
  })
}

/**
 * @description Return array with value or with empty string as a value
 */

/**
 * @description Detect "real" array to use for JSX.Element
 */
export const isArrGoodForJsx: Function = (variable: any): boolean => {
  let output: boolean = false
  if (typeof variable !== undefined
    && typeof variable !== null
    && Array.isArray(variable) === true
    && variable.length > 0
    && variable[0] !== null
    && variable[0] !== ''
  ) {
    output = true
  }

  return output
}

/**
 * @description Detect a "corrupted" variable
 */
export const isVarCorrupted: Function = (variable: any): boolean => {
  let output: boolean = false
  if (!variable
    || typeof variable === undefined
    || variable === undefined
    || typeof variable === null
    || typeof variable === 'boolean'
    || (Array.isArray(variable) && variable.length === 0)
    || (Array.isArray(variable) && variable[0] === null)
  ) {
    output = true
  }

  return output
}

/**
 * @description Return array with value or with empty string as a value
 */
const arrNotNull: Function = (str: any): string[] => {
  let output: string[]
  if (isVarCorrupted(str)) {
    output = ['']
  }
  else if (typeof str === 'string') {
    output = [str]
  }
  else if (Array.isArray(str)) {
    output = str
  }
  else {
    // console.info('serviceFunc.js->arrNotNull()', { output })
    output = ['strange string, see function arrNotNull']
  }

  return output
}

/**
 * @description SAVE_USER_VISIT_ACTIONS
 */
export const saveUserVisitActions: Function = (target: string): any => {
  setTimeout(() => {

    const { actionLog, userFootprint } = store.getState()
    const {
      role,
      msg,
      inception,
      searchPhrase,
      searchCategory,
      searchMedia,
      catalogCategory,
      userPrifile,
      email,
    } = userFootprint
    let actionLogNext: any = arrOfObjOmitItemsByPropValArr(actionLog, 'type', ARR_ACTION_TO_OMIT_FOR_LOG)
    actionLogNext = actionLogNext.map((item: any) => item.type)

    // console.info('serviceFunc.ts->saveUserVisitActions()', { actionLogNext, actionLog,  })

    const payload: Interfaces.Payload  = {
      optPost: 'suva',
      target: arrNotNull(target),
      actionLog: arrNotNull(actionLogNext),
      role: arrNotNull(role),
      msg: arrNotNull(msg),
      inception: arrNotNull(inception),
      searchPhrase: arrNotNull(searchPhrase),
      searchCategory: arrNotNull(searchCategory),
      searchMedia: arrNotNull(searchMedia),
      catalogCategory: arrNotNull(catalogCategory),
      userPrifile: arrNotNull(userPrifile),
      email: arrNotNull(email),
    }
    // console.info(`serviceFunc.js saveUserVisitActions() [10]`, { payload, userFootprint, actionLogNext, actionLog })
    store.dispatch(actions.getActionAsync('SAVE_USER_VISIT_ACTIONS', 'REQUEST', payload))

  }, 500)
}


/**
 * @description Returns true for devMode and false for production
 */
export const devModeTrueFalse: Function = (): boolean => {
  let devMode: boolean = false
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    devMode = true
  }

  return devMode
}

/**
 * @description Returns the arrObj filtered by array of strings
 * @example const abc = serviceFunc.filterArrObjByArr(arrObj, 'start', ['something']))
 */
export const filterArrObjByArr: Function =
  (arrObj: any, field: string, arr: string[], filter: boolean): any => {
  let output: any = arrObj

  if (filter) {
    output = arrObj.slice().filter((item: any) => {
      let isItemToFilter: boolean = true
      arr.forEach((itemIp: string) => {
        if (itemIp === item[field]) {
          isItemToFilter = false
        }
      })

      return isItemToFilter
    })
  }

  //console.info('serviceFunc.filterArrObjByArr() [10]', { filter, output, arrObj, field, arr })
  return output
}

/**
 * @description Returns a function which will sort an array of objects by the given key.
 * @param: string  key
 * @param: boolean reverse
 * @return: Function
 * @example arr.sort(serviceFunc.sortBy('start', true))
 */
export const sortBy: Function = (key: string, reverse: boolean): Function => {

  // Move smaller items towards the front
  // or back of the array depending on if
  // we want to sort the array in reverse
  // order or not.
  const moveSmaller = reverse ? 1 : -1

  // Move larger items towards the front
  // or back of the array depending on if
  // we want to sort the array in reverse
  // order or not.
  const moveLarger = reverse ? -1 : 1

  /**
   * @param  {*} a
   * @param  {*} b
   * @return {Number}
   */
  return (a, b) => {
    if (a[key] < b[key]) {
      return moveSmaller
    }
    if (a[key] > b[key]) {
      return moveLarger
    }
    return 0
  }
}

/**
 * @description Function to return array of objects composed of the own and inherited
 * enumerable property paths of object that are not omitted
 */
export const arrOfObjOmitByPropName: Function = (arrIn: any, arrPropName: any): any => {

  return arrIn.filter(item => {
    let isTrue: boolean = true
    for (let i = 0; i < arrPropName.length; i += 1) {
      const prop: any = arrPropName[i].prop
      const val: any = arrPropName[i].val
      if (item[prop] === val) {
        isTrue = false
      }
    }

    return isTrue
  })
}

/**
 * @description Function to capitalize (make uppercase) first letter of the stringT
 */
export const getFirstCharLowerCase: Function = (stringT: string): string => {
  return stringT
    .charAt(0)
    .toLowerCase() + stringT.slice(1)
}

/**
 * @description Function to capitalize (make uppercase) first letter of the stringT
 */
export const getFirstCharUpperCase: Function = (stringT: string): string => {
  return stringT
    .charAt(0)
    .toUpperCase() + stringT.slice(1)
}

/**
 * @description Function to return data to render for modal window according to the scenario
 */
export const getModalKeyToRender: Function = (actionLog: {type: string}[]) => {
  let modalKeyToRender = 'registration'
  const { length } = actionLog
  if (length > 0
    && actionLog[length - 1].type === 'OPEN_MODAL_FAREWELL') {
    modalKeyToRender = 'farewell'
  }
  return modalKeyToRender
}

/**
 * @description Function to return width of the DOM object's in crossbrowser style
 */
export const mediaSizeCrossBrowser: Function = (w: Window) => {
  // Use serviceFunc.mediaSizeCrossBrowser(global)
  const mediaSize: {width: number, height: number} = {width: 0, height: 0}
  const d = w.document
  const e = d.documentElement
  const g = d.getElementsByTagName('body')[0]
  const x = w.innerWidth || e.clientWidth || g.clientWidth
  const y = w.innerHeight || e.clientHeight || g.clientHeight
  // console.info(' mediaSize:', { x, y })

  mediaSize.width = x
  mediaSize.height = y

  //console.info(' mediaSize:', { mediaSize })
  return mediaSize
}

/**
 * @description Function to return height of the DOM object's in crossbrowser style
 * @param: HTMLElement element
 */
function heightCrossBrowser(element: HTMLElement): number {

  let height: any
  // For FireFox & IE
  if (element.style.height != undefined) {
    height  =  element.style.height
  }
  // For FireFox & IE
  else if (element.clientHeight != undefined) {
    height  =  element.clientHeight
  }
  // For FireFox & IE
  else if (element.offsetHeight != undefined) {
    height  =  element.offsetHeight
  }
  else {
    height = undefined
  }

    /*
      console.info(' heightheight height:',    element.height)
      console.info(' clntheight clientheight:',  element.clientheight)
      console.info(' natheight naturalheight:',  element.naturalheight)
      console.info(' offstheight offsetheight:',  element.offsetheight)    
      console.info(' parseInt(this.height):',parseInt(this.height))
    */
  return parseInt('s', height)
}

/**
 * @description Function to update transition
 */
export const updateTransition: Function = (selector: string, classAdd: string): any => {
  const elem: HTMLElement = document.querySelector(selector)
  if (elem) {
    // elem.classList.remove(stylePrev)
    elem.classList.add(classAdd)
  }
  //console.info('serviceFunc->updateTransition', { elem, selector, classAdd })
  return elem
}

/**
 * @description Function to get object of the size and positions of the HTMLelement
 */
export const getElementSize: Function = (element: HTMLElement): any => {
  const width = Math.round(parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', '')))
  const height = Math.round(parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', '')))
  const x = Math.round(element.getBoundingClientRect().left)
  const y = Math.round(element.getBoundingClientRect().top)
  //console.info('serviceFunc.getElementSize', { x, y, width, height, element })
  return { x, y, width, height }
}

/**
 * @description Function to override default object properties with new ones
 */
export const getDefaultOveride: Function = (defaultObj: any = {}, overideObj: any = {}): any => {
  return new Proxy(defaultObj, {
    get: function (defaultObj, propName) {
      if (!overideObj) { return defaultObj[propName] }
      return propName in overideObj ? overideObj[propName] : defaultObj[propName]
    }
  })
}
