import React from 'react'
import uuidv4 from 'uuid/v4'

import { getFirstCharLowerCase } from '../../Shared/serviceFunc'

import CommonContainer from '../Containers/CommonContainer.react'
import CombineWrapper from '../Components/CombineWrapper.react'
import SectionWrapper from '../Components/SectionWrapper.react'
import NavBar from '../Components/NavBar.react'
import Descriptors from '../Components/Descriptors.react'
import Carousel from '../Components/Carousel.react'
import SearchForm from '../Components/SearchForm.react'
import CatalogTags from '../Components/CatalogTags.react'
import ImgListTable from '../Components/ImgListTable.react'
import IconCaptDesc from '../Components/IconCaptDesc.react'
import ButtonCommon from '../Components/ButtonCommon.react'
import Footer from '../Components/Footer.react'
import SelectRole from '../Modals/SelectRole.react'
import CommentForm from '../Modals/CommentForm.react'
import ThankYou from '../Modals/ThankYou.react'
import ModalBackdrop from '../Modals/ModalBackdrop.react'


const MODALS = {
  'SelectRole': SelectRole,
  'CommentForm': CommentForm,
  'ThankYou': ThankYou,
}

// eslint-disable-next-line react/prefer-stateless-function
class FacePage326 extends React.PureComponent {
  constructor(props) {
    super(props)
  }


  getModals = ({ ...props }) => {
    const { modalWindows, handleActions, modals } = { ...props }
    // console.info('FacePage326->getModals [0]', { modalWindows, handleActions, modals })
    return modalWindows
      .filter(item => item.display === true)
      .map((item, i) => {
        const componentDataProp = getFirstCharLowerCase(item.component)
        let propsScope = modals[componentDataProp]
        propsScope = { ...propsScope, handleActions }
        console.info('FacePage326->getModals [10]', { ...props, item, propsScope, modals })

        const Modal = MODALS[item.component]
        return <Modal key={i} {...propsScope} />
      })
  }

  render() {
    
    const { treeDefault, reduxState, handleActions } = this.props
    const { modalWindows } = reduxState
    let {
      navBar,
      descriptors,
      searchForm,
      carousel,
      catatogTags,
      itHelps,
      workFlow,
      keyFeatures,
      shortAdvantages,
      userReviews,
      registrationButton,
      footer,
      modals,
    } = treeDefault

    searchForm = { ...searchForm, handleActions }
    userReviews = { ...userReviews, handleActions }
    catatogTags = { ...catatogTags, handleActions }
    navBar = { ...navBar, handleActions }
    const modalBackdropProps = { ...modals, reduxState }

    const { sid: carouselSid } = carousel
    const carouselCid = `${carouselSid}-${uuidv4()}`
    const carouselPrefix = 'CarouselDesc'
    carousel = { ...carousel, cid: carouselCid, prefix: carouselPrefix }

    const searchFormTop = {...searchForm, sid: 'SearchForm_top'}
    const searchFormBottom = {...searchForm, sid: 'SearchForm_bottom'}


    const action = { type: 'openModalRegistrationQuick' }
    registrationButton = { ...registrationButton, handleFunction: handleActions, action }

    const modalWindowToReturn = this.getModals({ modalWindows, handleActions, modals })

    console.info('FacePage326->render() [10]', { modalWindows, reduxState, modals, props: this.props })
    return (
      <div className='FacePage326 globalStyle'>
        <header><NavBar {...navBar} /></header>
        <main>
          <CombineWrapper classStyle='CombineWrapper CombineWrapper_jumbotron'>
            <SectionWrapper classStyle='SectionWrapper_desc'>
              <Descriptors {...descriptors} />
            </SectionWrapper>
            <SectionWrapper classStyle='SectionWrapper_mobileImage'>
              <Carousel {...carousel} />
            </SectionWrapper>
            <SectionWrapper classStyle='SectionWrapper_searchForm'>
              <SearchForm {...searchFormTop} />
            </SectionWrapper>
          </CombineWrapper>
          <CombineWrapper classStyle='CombineWrapper'>
            <SectionWrapper classStyle='SectionWrapper_catalogTags'>
              <CatalogTags {...catatogTags} />
            </SectionWrapper>
            <SectionWrapper classStyle='SectionWrapper_imgListTable'>
              <ImgListTable {...itHelps} />
            </SectionWrapper>
            <SectionWrapper classStyle='SectionWrapper_workFlow'>
              <IconCaptDesc {...workFlow} />
            </SectionWrapper>
            <SectionWrapper classStyle='SectionWrapper_keyFeatures'>
              <ImgListTable {...keyFeatures} />
            </SectionWrapper>
            <CombineWrapper classStyle='CombineWrapper CombineWrapper_advantagesAndSearchForm'>
              <SectionWrapper classStyle='SectionWrapper_shortAdvantages'>
                <IconCaptDesc {...shortAdvantages} />
              </SectionWrapper>
              <SectionWrapper classStyle='SectionWrapper_searchForm'>
                <SearchForm {...searchFormBottom} />
              </SectionWrapper>
            </CombineWrapper>
            <SectionWrapper classStyle='SectionWrapper_userReviews'>
              <IconCaptDesc {...userReviews} />
            </SectionWrapper> 
            <SectionWrapper classStyle='SectionWrapper_registrationButton'>
              <ButtonCommon {...registrationButton} />
            </SectionWrapper>
          </CombineWrapper>
        </main>
        <footer>
          <SectionWrapper classStyle='SectionWrapper_footerSection bg_greyDark'>
            <Footer {...footer} />
          </SectionWrapper>
        </footer>
        {modalWindowToReturn}
        {/*
          <Modal {...modals} /> 
          <ModalBackdrop {...modalBackdropProps} />
        */}
      </div>
    )
  }
}

FacePage326.propTypes = {
}
//export default FacePage326
export default CommonContainer(FacePage326)
