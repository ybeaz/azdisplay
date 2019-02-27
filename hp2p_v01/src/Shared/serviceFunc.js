

export const updateTransition = (selector: String, classAdd: String) => {
  const elem = document.querySelector(selector)
  if (elem) {
    // elem.classList.remove(stylePrev)
    elem.classList.add(classAdd)
  }
  // console.info('serviceFunc->updateTransition', { elem, selector, classAdd })
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
