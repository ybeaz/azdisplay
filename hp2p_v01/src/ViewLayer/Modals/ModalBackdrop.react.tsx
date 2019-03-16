import React from 'react'

interface Props {
  readonly sid: string,
}

interface State {

}

// eslint-disable-next-line react/prefer-stateless-function
class ModalBackdrop extends React.PureComponent<Props, State> {
  public static defaultProps = {
    sid: '',
  }

  render(){
    const { sid } = this.props
    return (
      <div className={`ModalBackdrop ModalBackdrop_${sid} ModalBackdrop__hide`} />
    )
  }
}

export default ModalBackdrop
