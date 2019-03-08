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
import RegistrationButton  from '../Components/RegistrationButton.react'
import UserReviews from '../Components/UserReviews.react'
import Footer from '../Components/Footer.react'

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
      registrationButton,
      userReviews,
      footer,
    } = treeDefault
    let { carousel } = treeDefault

    // console.info('FacePage326->render() [10]', { carousel, props: this.props })

    const { sid: carouselSid } = carousel
    const carouselCid = `${carouselSid}-${uuidv4()}`
    const carouselPrefix = 'CarouselDesc'
    carousel = { ...carousel, cid: carouselCid, prefix: carouselPrefix }

    return (
      <div className='FacePage326 globalStyle'>
        <header><NavBar { ...navBar } /></header>
        <main>
          <CombineWrapper classStyle='CombineWrapper CombineWrapper_jumbotron newSection'>
            <SectionWrapper classStyle='SectionWrapper SectionWrapper_desc'>
              <Descriptors { ...descriptors } />
            </SectionWrapper>
            <SectionWrapper classStyle='SectionWrapper SectionWrapper_mobileImage'>
              <Carousel { ...carousel } />
            </SectionWrapper>
            <SectionWrapper classStyle='SearchFormSection'>
              <SearchForm { ...searchForm } />
            </SectionWrapper>
          </CombineWrapper>
          <SectionWrapper classStyle='CatalogTagsSection p_t_2_rem'>
            <CatalogTags {... catatogTags } />
          </SectionWrapper>
          <SectionWrapper classStyle='ImgListTableSection p_t_4_rem'>
            <ImgListTable { ...itHelps } />
          </SectionWrapper>
          <SectionWrapper classStyle='WorkFlowSection newSection m_t_2_rem bg_greyLight'>
            <WorkFlow { ...workFlow } />
          </SectionWrapper>
          <SectionWrapper classStyle='KeyFeaturesSection newSection'>
            <ImgListTable { ...keyFeatures } />
          </SectionWrapper>
          <CombineWrapper classStyle='CombineWrapper background03 newSection'>
            <SectionWrapper classStyle='ShortAdvantagesSection'>
              <ShortAdvantages { ...shortAdvantages } />
            </SectionWrapper>
            <SectionWrapper classStyle='SearchFormSection p_t_2_rem'>
              <SearchForm { ...searchForm } />
            </SectionWrapper>
          </CombineWrapper>
          <SectionWrapper classStyle='UserReviewSection newSection m_t_4_rem'>
            <UserReviews { ...userReviews } />
          </SectionWrapper>
          <SectionWrapper classStyle='RegistrationButtonSection newSection'>
            <RegistrationButton { ...registrationButton } />
          </SectionWrapper>
        </main>
        <footer>
          <SectionWrapper classStyle='FooterSection newSection bg_greyDark'>
            <Footer { ...footer } />
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
