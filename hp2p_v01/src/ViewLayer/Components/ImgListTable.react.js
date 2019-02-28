import React from 'react'
import PropTypes from 'prop-types'
import * as serviceFunc from '../../Shared/serviceFunc'

// eslint-disable-next-line react/prefer-stateless-function
class ImgListTable extends React.PureComponent {

  componentDidMount() {
    setTimeout(() => {
      const { propsScope } = this.props
      const { sid } = propsScope

      const element01 = document.querySelectorAll(`.${sid} .ImgList__ul_wrapper`)[0]
      const { width: widthUl, height: heightUl } = serviceFunc.getElementSize(element01)

      const element03 = document.querySelectorAll(`.${sid} .ImgList__img`)[0]
      const { width: widthImg, height: heightImg } = serviceFunc.getElementSize(element03)

      if (heightUl > widthUl) {
        element03.style.height = `${heightUl}px`
      }
      else {
        element03.style.width = `${widthUl}px` //'-webkit-fill-available'
        element03.style.height = `${widthUl * 0.65}px`
      }

      // console.info('ImgListTable->componentDidMount() [5]', { widthImg, heightImg, widthUl, heightUl, element01, element02, element03 })
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
        <div className='ImgList__imgWrapper'>
          <div className={`${imgClass} ImgList__img`} />
        </div>
      </div>
    )
  }

  render() {
    const { propsScope } = this.props
    // console.info('ImgListTable->render() [10]', { propsScope, props: this.props })
    const { sid, listArr, captureSection, imgClass, sequence } = propsScope
    const listBlock = this.getListBlock(listArr, captureSection)
    const imgBlock = this.getImgBlock(imgClass)

    return (
      <div id={sid} className={`container-fluid form-group ImgList ${sid}`}>
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
