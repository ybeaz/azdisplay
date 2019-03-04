import React from 'react'
import PropTypes from 'prop-types'
import DOMPurify from 'dompurify'

const Markup = ({ ...props }) => {
  
  const { el, content, className } = {...props}
  const htmlSanitized  = DOMPurify.sanitize(content)
  return React.createElement(`${el}`,
      {dangerouslySetInnerHTML: { __html: htmlSanitized },,
      className,
    })
}

Markup.defaultProps = {
  el: 'span',
  content: '',
  className: '',
}

Markup.propTypes = {
  /** default value: span */
  el: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.string,
}

export default Markup
