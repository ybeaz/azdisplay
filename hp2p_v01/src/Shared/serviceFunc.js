

export const updateTransition = (classElem: String, stylePrev: String, styleNext: String) => {
  const elem = document.querySelector(`.${classElem}.${stylePrev}`)
  if (elem) {
    // elem.classList.remove(stylePrev)
    elem.classList.add(styleNext)
  }
  // console.info('serviceFunc->updateTransition', { elem, classElem, stylePrev, styleNext })
  return elem
}

export const getElementSize = element => {
  const width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''))
  const height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''))
  const x = element.getBoundingClientRect().left
  const y = element.getBoundingClientRect().top
  //console.info('serviceFunc.getElementSize', { x, y, width, height, element })
  return { x, y, width, height }
}
