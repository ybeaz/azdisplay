import React from 'react'

import * as Interfaces from '../../Shared/interfaces'

interface Props {
  readonly sid?: string,
  readonly capture?: string,
  readonly classAdd?: string,
  readonly handleFunctions?: Function,
  readonly action?: Interfaces.Action,
}
interface State {
}

export class ButtonCommon extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
    capture: '',
    handleFunctions: ((): void => {}),
    action: {},
  }

  public render(): JSX.Element {
    const { sid, capture, classAdd, handleFunctions, action } = this.props
    // console.info('RegistrationButton->render() [10]', { sid, capture, handleFunctions, action })

    return (<div>
        <button
          type='button'
          className={`btn ButtonCommon ${classAdd} ${sid}`}
          onClickCapture={e => handleFunctions(e, action)}
        >
          {capture}
        </button>
      </div>
    )
  }
}
