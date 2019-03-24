import React from 'react'
import PropTypes from 'prop-types'

import ButtonCommon from './ButtonCommon.react'

import * as serviceFunc from '../../Shared/serviceFunc'


// eslint-disable-next-line react/prefer-stateless-function
class CatalogTags extends React.PureComponent {
  constructor(props) {
    super(props)
    const {
      numItemsBeforeButton,
      captureButtonShowAll,
      captureButtonCompact,
    } = this.props
    this.state = {
      tags: [],
      numItemsBeforeButton,
      toggleShowHideButton: false,
    }

    this.mode = this.getMode()
  }

  componentDidMount() {
    this.updateTagsWithConditions()
  }

  componentDidUpdate() {

  }

  getMode = () => {
    const {
      isCompactAlways,
      isCompactPhone,
    } = this.props

    const { width } = serviceFunc.mediaSizeCrossBrowser(global)
    let mode = 'tagsListData'
    if (isCompactAlways) {
      mode = 'tagsIconsFa'
    }
    else if (isCompactPhone && width <= 480) {
      mode = 'tagsIconsFa'
    }
    else {
      let mode = 'tagsListData'
    }

    return mode
  }

  updateTagsWithConditions = () => {
    const {
      sid,
      listArr,
    } = this.props
    const { numItemsBeforeButton } = this.state
    // const tags = this.getTags(listArr, sid, numItemsBeforeButton)

    let tags
    if (this.mode === 'tagsIconsFa') {
      tags = this.getTagsIconsFa(listArr, sid, numItemsBeforeButton)
    }
    else if (this.mode === 'tagsListData') {
      tags = this.getTagsListData(listArr, sid)
    }
    this.setState({ tags })
  }

  getTagsListData = (arr, id) => {
    const { handleActions } = this.props
    const action = { type: 'selectCatalogCategory' }

    return arr.map((item, i) => {
      const { iconClass, capture, num } = item
      return (
        <div
          key={i}
          className={`CatalogTags__item ${iconClass}`}
          onClickCapture={e => handleActions(e, action)}
        >
          <span className='name'>{capture}</span>
          <span className='num'>{num}</span>
        </div>
      )
    })
  }

  getTagsIconsFa = (arr, id, numItemsBeforeButton) => {
    // console.info('CatalogTags->getTags', { arr, id, numItemsBeforeButton })
    const { handleActions } = this.props
    const action = { type: 'selectCatalogCategory' }
    return arr
      .filter((item, i) => i < numItemsBeforeButton)
      .map((item, i) => {
        const { capture, iconFa } = item
        return (
          <div
            key={i}
            className='CatalogTags__item'
            onClickCapture={e => handleActions(e, action)}
          >
            <div className='CatalogTags__itemIcon'><i className={iconFa} /></div>
            <div className='CatalogTags__itemCapture'>{capture}</div>
          </div>
        )
      })
  }

  handleEvents = (e, action) => {
    switch (action.type) {
      case 'toggleShowCompact': {
        const { numItemsBeforeButton } = this.props
        const { toggleShowHideButton } = this.state
        // console.info(`CatalogTags->handleEvents type->${action.type}`, { e, action, listArr })

        const toggleShowHideButtonNext = !toggleShowHideButton
        this.setState({
          numItemsBeforeButton,
          toggleShowHideButton: toggleShowHideButtonNext,
        },
        () => this.updateTagsWithConditions(),
        )
      } break

      case 'toggleShowAll': {
        const { listArr } = this.props
        const { toggleShowHideButton } = this.state
        // console.info(`CatalogTags->handleEvents type->${action.type}`, { e, action, listArr })

        const { length } = listArr
        const numItemsBeforeButton = length
        const toggleShowHideButtonNext = !toggleShowHideButton
        this.setState({
          numItemsBeforeButton,
          toggleShowHideButton: toggleShowHideButtonNext,
        },
        () => this.updateTagsWithConditions(),
        )
      } break

      default: {
        console.info('CatalogTags->handleEvents unexpected action', { action })
      }
    }
  }

  render() {
    const {
      sid,
      captureSection,
      captureButtonShowAll,
      captureButtonCompact,
    } = this.props
    const {
      tags,
      toggleShowHideButton,
    } = this.state
    
    let capture = captureButtonShowAll
    let action = { type: 'toggleShowAll' }
    if (toggleShowHideButton === true) {
      capture = captureButtonCompact
      action = { type: 'toggleShowCompact' }
    }

    const buttonProps = {
      sid: 'Button__buttonShowAll',
      capture,
      handleFunction: this.handleEvents,
      action,
    }

    // const tags = this.getTags(listArr, sid, numItemsBeforeButton)
    // console.info('CatalogTags->render()', { props: this.props })
    return (
      <div id={sid} className={sid}>
        <h2 className='CatalogTags__title titleSection'>{captureSection}</h2>
        <div className='CatalogTags__rowTag'>
          {tags}
        </div>
        {this.mode === 'tagsIconsFa'
          ? <div className='CatalogTags__rowButton'>
            <ButtonCommon {...buttonProps} />
          </div>
          : null
        }
      </div>
    )
  }
}

CatalogTags.defaultProps = {
  captureSection: '',
  captureButtonShowAll: '',
  captureButtonCompact: '',
  listArr: [],
  isCompactAlways: false,
  isCompactPhone: true,
  numItemsBeforeButton: 9,
}

/* eslint-disable indent */
CatalogTags.propTypes = {
  sid: PropTypes.string.isRequired,
    // component id
  captureSection: PropTypes.string,
    // Section name
  captureButtonShowAll: PropTypes.string,
    // Name for button to offer Show all
  captureButtonCompact: PropTypes.string,
    // Name for button to offer Show compact
  listArr: PropTypes.arrayOf(PropTypes.object),
    // Data for catalog output
  isCompactAlways: PropTypes.bool,
    // Make iconFa for all screen resolutions
  isCompactPhone: PropTypes.bool,
  numItemsBeforeButton: PropTypes.number,
    // Number output by default 
}

export default CatalogTags
