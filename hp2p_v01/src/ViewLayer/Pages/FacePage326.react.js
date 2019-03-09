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
import WorkFlow from '../Components/WorkFlow.react'
import ShortAdvantages from '../Components/ShortAdvantages.react'
import ButtonCommon  from '../Components/ButtonCommon.react'
import UserReviews from '../Components/UserReviews.react'
import Footer from '../Components/Footer.react'

import handleActions from '../../DataLayer/reduces/handleActions'

// eslint-disable-next-line react/prefer-stateless-function
class FacePage326 extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    
    const { treeDefault } = this.props
    const {
      navBar,
      descriptors,
      searchForm,
      catatogTags,
      itHelps,
      workFlow,
      keyFeatures,
      shortAdvantages,
      userReviews,
      footer,
    } = treeDefault
    let { carousel, registrationButton } = treeDefault

    const { sid: carouselSid } = carousel
    const carouselCid = `${carouselSid}-${uuidv4()}`
    const carouselPrefix = 'CarouselDesc'
    carousel = { ...carousel, cid: carouselCid, prefix: carouselPrefix }
    // console.info('FacePage326->render() [10]', { catatogTags, props: this.props })
    const action = { type: 'registrationQuick' }
    registrationButton = { ...registrationButton, handleFunction: handleActions, action }

    return (
      <div className='FacePage326 globalStyle'>
        <header><NavBar {...navBar} /></header>
        <main>
          <CombineWrapper classStyle='CombineWrapper CombineWrapper_jumbotron newSection'>
            <SectionWrapper classStyle='SectionWrapper_desc'>
              <Descriptors {...descriptors} />
            </SectionWrapper>
            <SectionWrapper classStyle='SectionWrapper_mobileImage'>
              <Carousel {...carousel} />
            </SectionWrapper>
          </CombineWrapper>
          <SectionWrapper classStyle='SectionWrapper_searchFormSection newSection'>
            <SearchForm {...searchForm} />
          </SectionWrapper>
          <SectionWrapper classStyle='SectionWrapper_catalogTags p_t_2_rem'>
            <CatalogTags {...catatogTags} />
          </SectionWrapper>
          <SectionWrapper classStyle='SectionWrapper_imgListTable p_t_4_rem'>
            <ImgListTable {...itHelps} />
          </SectionWrapper>
          <SectionWrapper classStyle='SectionWrapper_workFlow newSection m_t_2_rem bg_greyLight'>
            <WorkFlow {...workFlow} />
          </SectionWrapper>
          <SectionWrapper classStyle='SectionWrapper_keyFeatures newSection'>
            <ImgListTable {...keyFeatures} />
          </SectionWrapper>
          <CombineWrapper classStyle='CombineWrapper background03 newSection'>
            <SectionWrapper classStyle='SectionWrapper_shortAdvantages'>
              <ShortAdvantages {...shortAdvantages} />
            </SectionWrapper>
            <SectionWrapper classStyle='SectionWrapper_searchForm p_t_2_rem'>
              <SearchForm {...searchForm} />
            </SectionWrapper>
          </CombineWrapper>
          <SectionWrapper classStyle='SectionWrapper_userReview newSection m_t_4_rem'>
            <UserReviews {...userReviews} />
          </SectionWrapper>
          <SectionWrapper classStyle='SectionWrapper_registrationButton newSection'>
            <ButtonCommon {...registrationButton} />
          </SectionWrapper>
        </main>
        <footer>
          <SectionWrapper classStyle='SectionWrapper_footerSection newSection bg_greyDark'>
            <Footer {...footer} />
          </SectionWrapper>
        </footer>
      </div>
    )
  }
}

FacePage326.propTypes = {
}
//export default FacePage326
export default CommonContainer(FacePage326)
