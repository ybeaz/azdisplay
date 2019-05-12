import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  readonly inverted?: boolean,
}

const defaultProps: any = {
  inverted: false,
}

export const LogoElem: React.SFC<Props> = (props: Props): JSX.Element => {
  const propsPrivate: Props = { ...defaultProps, ...props }

  const { inverted } = propsPrivate

  let logoElemPart1: string = 'LogoElem__part1'
  let logoElemPart2: string = 'LogoElem__part2'

  if (inverted) {
    logoElemPart1 = 'LogoElem__part1_inv'
    logoElemPart2 = 'LogoElem__part2_inv'
  }

  // console.info('LogoElem [0]', { logoElemPart1 })

  return (
    <Link to='/'>
      <span className='LogoElem'>
        <span className={logoElemPart1}>User</span>
        <span className={logoElemPart2}>To</span>
      </span>
    </Link>
  )
}
