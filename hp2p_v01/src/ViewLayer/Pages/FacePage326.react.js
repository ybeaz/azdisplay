import React from 'react'

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

  handleActions = (e, payload) => {
    console.info('FacePage326->handleActions', { e, payload })




  }

  render() {
    const {
      navBar,
      descriptors,
      carousel,
      searchForm,
      catatogTags,
      itHelps,
      workFlow,
      keyFeatures,
      shortAdvantages,
      registrationButton,
      userReviews,
      footer,
    } = this.props.treeDefault
    console.info('FacePage326->render() [10]', { carousel, props: this.props })
    const payload = {type: '1'}
    this.props.handleActions({}, payload)

    return (
      <div className='FacePage326 globalStyle'>
        <header><NavBar {... { propsScope: navBar }} /></header>
        <main>
          <CombineWrapper classStyle='CombineWrapper CombineWrapper_jumbotron newSection'>
            <SectionWrapper classStyle='SectionWrapper SectionWrapper_desc'>
              <Descriptors {... { propsScope: descriptors }} />
            </SectionWrapper>
            <SectionWrapper classStyle='SectionWrapper SectionWrapper_mobileImage'>
              {/* <Carousel {... { propsScope: carousel }} /> */}
            </SectionWrapper>
            <SectionWrapper classStyle='SearchFormSection'>
              <SearchForm {... { propsScope: searchForm }} />
            </SectionWrapper>
          </CombineWrapper>
    <SectionWrapper classStyle='SectionWrapper'>
        <Carousel {... { propsScope: carousel }} />
    </SectionWrapper>
          <SectionWrapper classStyle='CatalogTagsSection p_t_2_rem'>
            <CatalogTags {... { propsScope: catatogTags }} />
          </SectionWrapper>
          <SectionWrapper classStyle='ImgListTableSection p_t_4_rem'>
            <ImgListTable {... { propsScope: itHelps }} />
          </SectionWrapper>
          <SectionWrapper classStyle='WorkFlowSection newSection m_t_2_rem bg_greyLight'>
            <WorkFlow {... { propsScope: workFlow }} />
          </SectionWrapper>
          <SectionWrapper classStyle='KeyFeaturesSection newSection'>
            <ImgListTable {... { propsScope: keyFeatures }} />
          </SectionWrapper>
          <CombineWrapper classStyle='CombineWrapper background03 newSection'>
            <SectionWrapper classStyle='ShortAdvantagesSection'>
              <ShortAdvantages {... { propsScope: shortAdvantages }} />
            </SectionWrapper>
            <SectionWrapper classStyle='SearchFormSection p_t_2_rem'>
              <SearchForm {... { propsScope: searchForm }} />
            </SectionWrapper>
          </CombineWrapper>
          <SectionWrapper classStyle='UserReviewSection newSection m_t_4_rem'>
            <UserReviews {... { propsScope: userReviews }} />
          </SectionWrapper>
          <SectionWrapper classStyle='RegistrationButtonSection newSection'>
            <RegistrationButton {... { propsScope: registrationButton }} />
          </SectionWrapper>
        </main>
        <footer>
          <SectionWrapper classStyle='FooterSection newSection bg_greyDark'>
            <Footer {... { propsScope: footer }} />
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
