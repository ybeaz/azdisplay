import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class CatalogTags extends React.PureComponent {

  getTags = (arr, id) => {

    return arr.map((item, i) => {
      const { iconClass, capture, num } = item
      return <li key={i} className={`tagListLi ${iconClass}`}>
        <a href={`#${id}`}>
          <span className='name'>{capture}</span>
        </a>
        <span className='num'>{num}</span>
      </li>
    })
  }

  render() {
    const { propsScope } = this.props
    const { sid, captureSection, catatogtagArr } = propsScope

    const tags = this.getTags(catatogtagArr, sid)

    return (
      <div id={sid} className={sid}>
        <h2 className='titleSection'>{captureSection}</h2>
        <ul>
          {tags}
        </ul>
      </div>
    )
  }
}

CatalogTags.propTypes = {
}

export default CatalogTags