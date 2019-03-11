import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class WorkFlow extends React.PureComponent {

  getWorkFlow = arr => {

    return arr.map((item, i) => {
      const { step, imgClass, iconFa, capture, details } = item
      return (
        <div  key={i} className='WorkFlow__itemCell'>
  
          <div className='WorkFlow__itemIcon'>
            <i className={iconFa} />
            {/* <div className={`WorkFlow__img ${imgClass}`} /> */}
          </div>


          <div className='WorkFlow__itemCapture titleSection'>
            {capture}
          </div>


          <div className='WorkFlow__itemDetails'>
            {details}
          </div>

        </div>
      )
    })
  }

  render() {
    const { sid, captureSection, workFlowArr } = this.props
    const workFlow = this.getWorkFlow(workFlowArr)

    return (
      <div id={sid} className={`container-fluid ${sid}`}>
        <div className='row WorkFlow__captureRow'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-12 WorkFlow__captureCol text-center'>
            <h2 className='WorkFlow__capture titleSection'>{captureSection}</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-12 WorkFlow__itemCol'>
            {workFlow}
          </div>
        </div>
      </div>
    )
  }
}

WorkFlow.propTypes = {
}

export default WorkFlow
