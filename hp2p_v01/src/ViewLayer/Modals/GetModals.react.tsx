import React from 'react'

import { getFirstCharLowerCase } from '../../Shared/serviceFunc'

// tslint:disable-next-line: import-name
import CommonContainer from '../Containers/CommonContainer.react'
import { CommentForm } from './CommentForm.react'
import { ModalBackdrop } from './ModalBackdrop.react'
import { SelectRole } from './SelectRole.react'
import { Spinner } from './Spinner.react'
import { ThankYou } from './ThankYou.react'

const MODALS: any = {
  SelectRole: SelectRole,
  CommentForm: CommentForm,
  ThankYou: ThankYou,
  Spinner: Spinner,
}

interface Props {
  reduxState: any,
  handleActions: Function,
}
interface State {
}

class GetModals extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  public componentDidMount(): void {
    const { reduxState } = this.props
    const { modalWindows } = reduxState
    this.getStatusModalBackdrop(modalWindows)
  }

  public componentDidUpdate(): void {
    const { reduxState } = this.props
    const { modalWindows } = reduxState
    this.getStatusModalBackdrop(modalWindows)
  }

  public getStatusModalBackdrop = modalWindows => {
    const displayArr = modalWindows.filter(item => item.display === true)
    const elem = document.querySelectorAll('.ModalBackdrop ')[0]
    if (elem && displayArr.length > 0) {
      elem.classList.remove('ModalBackdrop__hide')
      elem.classList.add('ModalBackdrop__show')
    }
    else if (elem) {
      elem.classList.remove('ModalBackdrop__show')
      elem.classList.add('ModalBackdrop__hide')
    }
  }

  public getModalsToReturn = (modalWindows: any, handleActions: Function, modals: any) => modalWindows
    .filter((item: any) => item.display === true)
    .map((item: any, i: number) => {
      const componentDataProp = getFirstCharLowerCase(item.component)
      let propsScope = modals[componentDataProp]
      propsScope = { ...propsScope, handleActions }
      // console.info('FacePage326->getModals [10]', { ...props, item, propsScope, modals })

      if (item.component === 'Spinner') {
        propsScope = { ...propsScope, sid: '00' }
      }
      const Modal: any = MODALS[item.component]

      return (
        <div key={i}>
          <Modal {...propsScope} />
        </div>
      )
    })

  public render(): JSX.Element {
    const { reduxState, handleActions } = this.props
    const { modalWindows, treeData, language } = reduxState
    const { modals } = treeData[language]

    const modalBackdropProps = { sid: 'bd'}
    // console.info('FacePage326->getModals [0]', { modalWindows, handleActions, modals })
    return (
      <div>
        {this.getModalsToReturn(modalWindows, handleActions, modals)}
        <ModalBackdrop {...modalBackdropProps} />
      </div>
    )
  }
}

export default CommonContainer(GetModals)
