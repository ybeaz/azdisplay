import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as action from '../../DataLayer/actions/index'
import handleActions from '../../DataLayer/reduces/handleActions'

const mapStateToProps = state => {
  return {
    reduxState: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    action: bindActionCreators(action, dispatch),
    handleActions,
  }
}

//export const CommonContainer = Component => connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)
const CommonContainer = Component => connect(mapStateToProps, mapDispatchToProps)(Component)
export default CommonContainer
