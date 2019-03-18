


/* Function to capitalize (make uppercase) first letter of the stringT */
export const getFirstCharLowerCase = (stringT: string) => {
  return stringT.charAt(0).toLowerCase() + stringT.slice(1)
}

/* Function to capitalize (make uppercase) first letter of the stringT */
export const getFirstCharUpperCase = (stringT: string) => {
  return stringT.charAt(0).toUpperCase() + stringT.slice(1)
}

/* Function to return data to render for modal window according to the scenario */
export const getModalKeyToRender = (actionLog: {type: string}[]) => {
  let modalKeyToRender = 'registration'
  const { length } = actionLog
  if (length > 0
    && actionLog[length - 1].type === 'OPEN_MODAL_FAREWELL') {
    modalKeyToRender = 'farewell'
  }
  return modalKeyToRender
}

/* Function to return width of the DOM object's in crossbrowser style */
export const mediaSizeCrossBrowser = (w: Window) => {
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

/* Function to return height of the DOM object's in crossbrowser style */
function heightCrossBrowser(element: HTMLElement) {
  /* element - DOM element */
  
  let height
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
  return parseInt('s', this.height)
}


export const updateTransition = (selector: string, classAdd: string) => {
  const elem: HTMLElement = document.querySelector(selector)
  if (elem) {
    // elem.classList.remove(stylePrev)
    elem.classList.add(classAdd)
  }
  //console.info('serviceFunc->updateTransition', { elem, selector, classAdd })
  return elem
}

export const getElementSize = (element: HTMLElement) => {
  const width = Math.round(parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', '')))
  const height = Math.round(parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', '')))
  const x = Math.round(element.getBoundingClientRect().left)
  const y = Math.round(element.getBoundingClientRect().top)
  //console.info('serviceFunc.getElementSize', { x, y, width, height, element })
  return { x, y, width, height }
}

// Function to override default object properties with new ones
export const getDefaultOveride = (defaultObj = {}, overideObj = {}) => {
  return new Proxy(defaultObj, {
    get: function (defaultObj, propName) {
      if (!overideObj) { return defaultObj[propName] }
      return propName in overideObj ? overideObj[propName] : defaultObj[propName]
    }
  })
}
