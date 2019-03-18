import React from 'react'
import PropTypes from 'prop-types'

import LogoElem from './LogoElem.react'

// eslint-disable-next-line react/prefer-stateless-function
class Footer extends React.PureComponent {



  getListItems = arr => arr.map((item, i) => {

    const { capture, level01 } = item

    let listItemslevel01 = null
    if (level01 && level01.length > 0) {
      listItemslevel01 = level01.map((itemLevel01, iLevel01) => {
        const { capture: captureLevel01 } = itemLevel01
        return (
          <div key={iLevel01} className='Footer__itemLevel1Cell'>
            {captureLevel01}
          </div>
        )
      })
    }

    return (
      <div key={i} className='Footer__colItem'>
        <div className='Footer__capture'>{capture}</div>
        { level01 && level01.length > 0
          ? (
            <div className='Footer__colItemLevel1'>
              {listItemslevel01}
            </div>
          )
          : null
        }
      </div>
    )
  })

  render() {
    const { sid, listArr, copyRight } = this.props
    // console.info('Footer->render() [10]', { captureSection, listArr })

    const listItems = this.getListItems(listArr)

    return (
      <div id={sid} className={`Footer ${sid}`}>
        <div className='Footer__rowMain '>
          <div className='Footer__colLogo'>
            <LogoElem inverted />
          </div>
          <div className='Footer__colItems'>
            {listItems}
          </div>
        </div>
        <div className='Footer__rowCopyRight'>
          <div className='Footer_colCopyRight'>
            {copyRight}
          </div>
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
}

export default Footer
