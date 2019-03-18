import React from 'react'

interface Props {
  readonly sid: string,
}

const ModalBackdrop: React.SFC<Props> = props => {
  const { sid } = props
  return (
    <div className={`ModalBackdrop ModalBackdrop_${sid} ModalBackdrop__hide`} />
  )
}

export default ModalBackdrop
