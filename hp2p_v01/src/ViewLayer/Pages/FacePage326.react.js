import React from 'react'
import uuidv4 from 'uuid/v4'

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
import Modal from '../Components/Modal.react'
import ModalBackdrop from '../Components/ModalBackdrop.react'

// eslint-disable-next-line react/prefer-stateless-function
class FacePage326 extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    
    const { treeDefault, reduxState, handleActions } = this.props
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

    navBar = {...navBar, handleActions }
    modals = { ...modals, reduxState, handleActions } 
    const modalBackdropProps = { ...modals, reduxState }

    const { sid: carouselSid } = carousel
    const carouselCid = `${carouselSid}-${uuidv4()}`
    const carouselPrefix = 'CarouselDesc'
    carousel = { ...carousel, cid: carouselCid, prefix: carouselPrefix }

    const action = { type: 'openModalRegistrationQuick' }
    registrationButton = { ...registrationButton, handleFunction: handleActions, action }

    // console.info('FacePage326->render() [10]', { props: this.props })
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
            <SectionWrapper classStyle='SectionWrapper_searchFormSection'>
              <SearchForm {...searchForm} />
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
                <SearchForm {...searchForm} />
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
        <Modal {...modals} />
        <ModalBackdrop {...modalBackdropProps} />
      </div>
    )
  }
}

FacePage326.propTypes = {
}
//export default FacePage326
export default CommonContainer(FacePage326)
