import React from 'react'
import PropTypes from 'prop-types'

import * as serviceFunc from '../../Shared/serviceFunc'
import Markup from './Markup.react'

// eslint-disable-next-line react/prefer-stateless-function
class Descriptors extends React.PureComponent {
  constructor(props) {
    super(props)
    const { propsScope } = this.props
    const { h1 } = propsScope
    this.state = {
      h1,
    }
  }

  componentDidMount() {
    setTimeout(() => {

      const { width } = serviceFunc.mediaSizeCrossBrowser(global)
      const { h1 } = this.state

      const h1Next = h1
      if ( width > 768 ) {
        const arr = h1.split(' ').slice()
        const l = arr.length
        const arr1 =  [...arr.slice(0, l - 1 ),
          '<br />',
          ...arr.slice(l-1, l),
        ];
        h1Next = arr1.join(' ')
      }

      this.setState({ h1: h1Next })
      //console.info('Descriptors->componentDidMount():', { arr1, arr, width, h1, h1Next })

      serviceFunc.updateTransition('.descWrapper1.transitionPrevDesc', 'transitionNextDesc')
      serviceFunc.updateTransition('.descWrapper2.transitionPrevDesc', 'transitionNextDesc')
    }, 0)
  }

  render() {
    const { propsScope } = this.props
    const { sid, h2 } = propsScope
    const { h1 } = this.state
    // console.info('Descriptors->render() [10]',{});
    return (
      <div id={sid} className={`container-fluid ${sid}`}>
        <div className='row'>
          <div className='col-lg-10 col-md-10 col-sm-10 col-xs-12 descWrapper1 transitionPrevDesc column'>
            <Markup el='h1' content={h1} className='descriptorRow1' />
          </div>
          <div className='col-lg-2 col-md-2 col-sm-2 col-xs-0 column' />
        </div>
        <div className='row'>
          <div className='col-lg-10 col-md-10 col-sm-10 col-xs-12 descWrapper2 transitionPrevDesc column'>
            <Markup el='h2' content={h2} className='descriptorRow2' />
          </div>
          <div className='col-lg-2 col-md-2 col-sm-2 col-xs-0 column' />
        </div>
      </div>
    )
  }
}

Descriptors.propTypes = {
}

export default Descriptors
