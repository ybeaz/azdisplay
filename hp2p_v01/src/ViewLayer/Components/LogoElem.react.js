import React from 'react'
import PropTypes from 'prop-types'

const LogoElem = props => {
  const { fontSize: fontSizeArg, inverted } = props
  const fontSize = fontSizeArg || '2rem'

  let logoElemPart1 = 'LogoElem__part1'
  let logoElemPart2 = 'LogoElem__part2'

  if (inverted) {
    logoElemPart1 = 'LogoElem__part1_inv'
    logoElemPart2 = 'LogoElem__part2_inv'
  }

  // console.info('LogoElem [0]', { fontSizeArg, fontSize })

  return (
    <span className='LogoElem' style={{ fontSize }}>
      <span className={logoElemPart1}>User</span>
      <span className={logoElemPart2}>To</span>
    </span>
  )
}

LogoElem.propTypes = {
}

export default LogoElem
