import React from 'react'
import PropTypes from 'prop-types'
import * as serviceFunc from '../../Shared/serviceFunc'

// eslint-disable-next-line react/prefer-stateless-function
class ImgListTable extends React.PureComponent {

  componentDidMount() {
    setTimeout(() => {
      let element = document.querySelectorAll('.ImgList__ul_wrapper')[0]
      const { height } = serviceFunc.getElementSize(element)
      element = document.querySelectorAll('.ImgList__manWorks_wrapper')[0]
      element.style.height = `${height}px`
      element.style.maxHeight = `${height}px`
      element = document.querySelectorAll('.ImgList__manWorks')[0]
      element.style.height = `${height}px`
      element.style.maxHeight = `${height}px`
      serviceFunc.updateTransition('.ImgList__manWorks', 'bgImgSizeManWorks')
    }, 500)
  }

  getListBlock = (listArr, listCapture) => {
  
    const listLi = listArr.map((item, i) => (
      <li key={i} className=''>
        <div className='ImgList__capture'>
          {item.capture}
        </div>
        <div className='ImgList__details'>
          {item.details}
        </div>
      </li>
    ))

    return (
      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
        <h2 className='titleSection' dangerouslySetInnerHTML={{ __html: listCapture }} />
        <div className='ImgList__ul_wrapper'>
          <ul className='ImgList__ul'>
            {listLi}
          </ul>
        </div>
      </div>
    )
  }

  getImgBlock = imgClass => {
    return (
      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
        <div className='ImgList__manWorks_wrapper'>
          <div className={`ImgList__manWorks ${imgClass}`} />
        </div>
      </div>
    )
  }

  render() {
    const { propsScope } = this.props
    // console.info('ImgListTable->render() [10]', { propsScope, props: this.props })
    const { listArr, captureSection, imgClass, sequence } = propsScope
    const listBlock = this.getListBlock(listArr, captureSection)
    const imgBlock = this.getImgBlock(imgClass)

    return (
      <div className='container-fluid form-group ImgList'>
        <div className='row'>
          {sequence.a === 'img' ? imgBlock : listBlock}
          {sequence.b === 'list' ? listBlock : imgBlock}
        </div>
      </div>
    )
  }
}

ImgListTable.propTypes = {
}

export default ImgListTable
