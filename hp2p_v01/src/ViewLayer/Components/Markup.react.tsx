import DOMPurify from 'dompurify'
import React from 'react'

interface Props {
  readonly el: string,
  readonly content?: any,
  readonly className?: string,
}

const defaultProps: any = {
}

export const Markup: React.SFC<Props> = (props: Props): JSX.Element => {
  const propsPrivate: Props = { ...defaultProps, ...props }
  const { el, content, className } = propsPrivate
  const htmlSanitized: any = DOMPurify.sanitize(content, '')

  // console.info('Markup [10]', { htmlSanitized, el, content, className, propsPrivate, props, defaultProps})
  return React.createElement(`${el}`, {
      dangerouslySetInnerHTML: { __html: htmlSanitized },
      className,
    })
}
