import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class CatalogTags extends React.PureComponent {

  getTags = arr => {
    return arr.map((item, i) => {
      return <li key={i} className={`tagListLi ${item.iconClass}`}>
        <span className='name'>{item.nameRus}</span>
        <span className='num'>{item.num}</span>
      </li>
    })
  }

  render() {
    const { propsScope } = this.props
    const { captureSection, catatogtagArr } = propsScope

    const tags = this.getTags(catatogtagArr)

    return (
      <div className='CatalogTags'>
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