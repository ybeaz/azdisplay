import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class WorkFlow extends React.PureComponent {

  getWorkFlow = arr => {

    return arr.map((item, i) => {
      const { step, imgClass, capture, details } = item
      return (
        <div key={i} className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                <div className={`WorkFlow__img ${imgClass}`} />
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 WorkFlow__capture titleSection'>
                {capture}
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 WorkFlow__details'>
                {details}
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {

    const { propsScope } = this.props
    const { captureSection, workFlowArr } = propsScope
    const workFlow = this.getWorkFlow(workFlowArr)

    return (
      <div className='container-fluid WorkFlow'>
        <div className='row'>
          {workFlow}
        </div>
      </div>
    )
  }
}

WorkFlow.propTypes = {
}

export default WorkFlow