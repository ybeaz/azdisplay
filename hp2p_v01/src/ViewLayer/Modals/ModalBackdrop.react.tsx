import React from 'react'

interface Props {
  readonly sid?: string,
}

export const ModalBackdrop: React.SFC<Props> = (props: Props): JSX.Element => {
  const { sid } = props

  return (
    <div className={`ModalBackdrop ModalBackdrop_${sid} ModalBackdrop__hide`} />
  )
}
