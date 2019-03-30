import React from 'react'

import * as serviceFunc from '../../Shared/serviceFunc'
import { Markup } from './Markup.react'

interface Props {
  readonly sid: string,
  readonly h1: string,
  readonly h2: string,
}
interface State {
  readonly h1: string,
}

export class Descriptors extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  constructor(props) {
    super(props)
    const { h1 } = this.props
    this.state = {
      h1,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      serviceFunc.updateTransition('.descWrapper1.transitionPrevDesc', 'transitionNextDesc')
      serviceFunc.updateTransition('.descWrapper2.transitionPrevDesc', 'transitionNextDesc')
    }, 0)
  }

  public render(): JSX.Element {
    const { sid, h1, h2 } = this.props
    //const { h1 } = this.state
    // console.info('Descriptors->render() [10]',{});
    return (
      <div id={sid} className={`container-fluid ${sid}`}>
        <div className='row'>
          <div className='col-lg-10 col-md-10 col-sm-10 col-12 descWrapper1 transitionPrevDesc column'>
            <Markup el='h1' content={h1} className='descriptorRow1' />
          </div>
          <div className='col-lg-2 col-md-2 col-sm-2 col-0 column' />
        </div>
        <div className='row'>
          <div className='col-lg-10 col-md-10 col-sm-10 col-12 descWrapper2 transitionPrevDesc column'>
            <Markup el='h2' content={h2} className='descriptorRow2' />
          </div>
          <div className='col-lg-2 col-md-2 col-sm-2 col-0 column' />
        </div>
      </div>
    )
  }
}
