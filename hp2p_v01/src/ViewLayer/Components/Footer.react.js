
import React from 'react'
import PropTypes from 'prop-types'
import LogoElem from './LogoElem.react'

// eslint-disable-next-line react/prefer-stateless-function
class Footer extends React.PureComponent {



  getListItems = arr => arr.map((item, i) => {

    const { capture, level01 } = item

    const listItems = level01.map((item, i) => {
      const { capture, href } = item
      return <li key={i} className=''><a className='' href={href}>{capture}</a></li>
    })

    return (
      <div key={i} className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
        <div className='Footer__capture'>{capture}</div>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  })

  render() {
    const { propsScope } = this.props
    const { sid, captureSection, listArr } = propsScope
    // console.info('Footer->render() [10]', { captureSection, listArr })

    const listItems = this.getListItems(listArr)

    return (
      <div id={sid} className={`container-fluid form-group ${sid}`}>
        <div className='row'>
          <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
            <LogoElem inverted />
          </div>
          {listItems}
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
}

export default Footer
