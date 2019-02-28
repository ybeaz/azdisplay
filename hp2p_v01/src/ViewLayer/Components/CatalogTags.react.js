import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class CatalogTags extends React.PureComponent {

  getTags = (arr, id) => {

    return arr.map((item, i) => {
      return <li key={i} className={`tagListLi ${item.iconClass}`}>
        <a href={`#${id}`}>
          <span className='name'>{item.nameRus}</span>
        </a>
        <span className='num'>{item.num}</span>
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