import React from 'react'

interface Props {
  readonly sid: string,
  readonly statusClass: string,
}

interface State {

}

// eslint-disable-next-line react/prefer-stateless-function
class ModalBackdrop extends React.PureComponent<Props, State> {
  public static defaultProps = {
    sid: '',
    statusClass: 'ModalBackdrop__hide',
  }

  render(){
    const { sid, statusClass } = this.props
    const modalClass = 'ModalBackdrop__show'
    return (
      <div className={`ModalBackdrop ModalBackdrop_${sid} ${statusClass}`} />
    )
  }
}

export default ModalBackdrop
