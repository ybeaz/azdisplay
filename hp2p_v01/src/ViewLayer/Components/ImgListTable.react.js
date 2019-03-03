import React from 'react'
import PropTypes from 'prop-types'
import Markup from './Markup.react'
import * as serviceFunc from '../../Shared/serviceFunc'

// eslint-disable-next-line react/prefer-stateless-function
class ImgListTable extends React.PureComponent {

  getListBlock = (listArr, listCapture) => {
  
    const listLi = listArr.map((item, i) => (
      <li key={i} className='ImgList_li'>
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
        <Markup el='h2' content={listCapture} className='titleSection' />
        <div className='ImgList__ul_wrapper'>
          <ul className='ImgList__ul'>
            {listLi}
          </ul>
        </div>
      </div>
    )
  }

  getImgBlock = imgSrc => {
    return (
      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
        <div className='ImgList__imgWrapper'>
          <img className='img-fluid' src={imgSrc} alt='Chania' />
          {/* <div className={`${imgClass} ImgList__img`} /> */}
        </div>
      </div>
    )
  }

  render() {
    const { propsScope } = this.props
    // console.info('ImgListTable->render() [10]', { propsScope, props: this.props })
    const { sid, listArr, captureSection, imgClass, imgSrc, sequence } = propsScope
    const listBlock = this.getListBlock(listArr, captureSection)
    const imgBlock = this.getImgBlock(imgSrc)

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
