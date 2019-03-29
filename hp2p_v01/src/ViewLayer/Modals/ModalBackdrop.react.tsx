import React from 'react'

interface Props {
  readonly sid?: string,
}

const defaultProps: Props = {
  sid: '',
}

export const ModalBackdrop: React.SFC<Props> = (props: Props): JSX.Element => {
  const propsPrivate: Props = { ...defaultProps, ...props }
  const { sid } = propsPrivate

  return (
    <div className={`ModalBackdrop ModalBackdrop_${sid} ModalBackdrop__hide`} />
  )
}
