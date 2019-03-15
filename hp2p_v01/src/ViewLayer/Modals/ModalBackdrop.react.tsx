import React from 'react'

interface Props {
  readonly sid: string,
}

const ModalBackdrop: React.DetailedReactHTMLElement<any, HTMLElement> = (props: Props) => {
  this.defaultProps = {
    sid: '',
  }
  // console.info('ModalBackdrop [0]', { ...props })

  const { sid } = { ...props }

  return (
    <div className={`ModalBackdrop ModalBackdrop_${sid}`} />
  )
}

export default ModalBackdrop
