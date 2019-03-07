


/* Function to return width of the DOM object's in crossbrowser style */
export const mediaSizeCrossBrowser = w => {
  const mediaSize = {}
  const d = w.document
  const e = d.documentElement
  const g = d.getElementsByTagName('body')[0]
  const x = w.innerWidth || e.clientWidth || g.clientWidth
  const y = w.innerHeight || e.clientHeight || g.clientHeight
  // console.info(' mediaSize:', { x, y })

  mediaSize.width = parseInt(x, 10)
  mediaSize.height = parseInt(y, 10)

  //console.info(' mediaSize:', { mediaSize })
  return mediaSize
}

/* Function to return height of the DOM object's in crossbrowser style */
function heightCrossBrowser(element) {
  /* element - DOM element */
  
  /* For FireFox & IE */
  if(    element.height != undefined && element.height != '' && element.height != 0){
    this.height  =  element.height
  }
  /* For FireFox & IE */
  else if(element.clientHeight != undefined && element.clientHeight != '' && element.clientHeight != 0){
    this.height  =  element.clientHeight
  }
  /* For Chrome * FireFox */
  else if(element.naturalHeight != undefined && element.naturalHeight != '' && element.naturalHeight != 0){
    this.height  =  element.naturalHeight
  }
  /* For FireFox & IE */
  else if(element.offsetHeight != undefined && element.offsetHeight != '' && element.offsetHeight != 0){
    this.height  =  element.offsetHeight
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


export const updateTransition = (selector: String, classAdd: String) => {
  const elem = document.querySelector(selector)
  if (elem) {
    // elem.classList.remove(stylePrev)
    elem.classList.add(classAdd)
  }
  //console.info('serviceFunc->updateTransition', { elem, selector, classAdd })
  return elem
}

export const getElementSize = element => {
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
