import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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
    <Link to='/'>
      <span className='LogoElem'>
        <span className={logoElemPart1}>User</span>
        <span className={logoElemPart2}>To</span>
      </span>
    </Link>
  )
}

LogoElem.propTypes = {
}

export default LogoElem
