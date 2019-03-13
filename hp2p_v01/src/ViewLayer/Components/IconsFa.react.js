import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
const IconsFa = ({ ...props }) => {
  const {iconFa, num} = { ...props }
  let listArr = []
  for (let i = 0; i < num; i += 1) {
    listArr.push(iconFa)
  }
  const iconFaItems = listArr.map(item => <i className={item} />)
  // console.info('IconsFa [5]', { listArr, iconFa, num })

  return (
    <div className='IconsFa'>
      {iconFaItems}
    </div>
  )
}

IconsFa.defaultProps = {

}

IconsFa.propTypes = {

}

export default IconsFa
