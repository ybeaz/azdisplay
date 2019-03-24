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

import GetModals from '../Modals/GetModals.react'

// eslint-disable-next-line react/prefer-stateless-function
class FacePage326 extends React.PureComponent {

  render() {
    const { reduxState, handleActions } = this.props
    const { modalWindows, treeData, language } = reduxState
    // console.info('FacePage326->render() [5]', { treeData, reduxState })
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
    } = treeData[language]

    searchForm = { ...searchForm, handleActions }
    userReviews = { ...userReviews, handleActions }
    catatogTags = { ...catatogTags, handleActions }
    navBar = { ...navBar, handleActions }

    const { sid: carouselSid } = carousel
    const carouselCid = `${carouselSid}-${uuidv4()}`
    const carouselPrefix = 'CarouselDesc'
    carousel = { ...carousel, cid: carouselCid, prefix: carouselPrefix }

    const searchFormTop = {...searchForm, sid: 'SearchForm_top'}
    const searchFormBottom = {...searchForm, sid: 'SearchForm_bottom'}


    const action = { type: 'openModalRegistrationQuick' }
    registrationButton = { ...registrationButton, handleFunction: handleActions, action }
    
    // console.info('FacePage326->render() [10]', { modalWindows, reduxState, modals, props: this.props })
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
        </main>
        <footer>
          <SectionWrapper classStyle='SectionWrapper_footerSection bg_greyDark'>
            <Footer {...footer} />
          </SectionWrapper>
        </footer>
        <GetModals />
      </div>
    )
  }
}

FacePage326.propTypes = {
}
// export default FacePage326
export default CommonContainer(FacePage326)
