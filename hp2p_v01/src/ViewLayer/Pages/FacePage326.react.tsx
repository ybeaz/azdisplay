import React from 'react'
import uuidv4 from 'uuid/v4'

import * as Interfaces from '../../Shared/interfaces'
import { ButtonCommon } from '../Components/ButtonCommon.react'
import { Carousel } from '../Components/Carousel.react'
import { CatalogTags } from '../Components/CatalogTags.react'
import { CombineWrapper } from '../Components/CombineWrapper.react'
import { Descriptors } from '../Components/Descriptors.react'
import { Footer } from '../Components/Footer.react'
import { IconCaptDesc } from '../Components/IconCaptDesc.react'
import { ImgListTable } from '../Components/ImgListTable.react'
import { NavBar } from '../Components/NavBar.react'
import { SearchForm } from '../Components/SearchForm.react'
import { SectionWrapper } from '../Components/SectionWrapper.react'
import { CommonContainer } from '../Containers/CommonContainer.react'

import { GetModals } from '../Modals/GetModals.react'

interface Props {
  readonly reduxState: any,
  readonly handleActions: Function,
}
interface State {
}

export class Face326 extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }


  public handleEvents: Function = (e: any, action: Interfaces.Action): void => {
    const { handleActions } = this.props
    let data: any
    // console.info(`Face326->handleEvents() type: ${action.type} [0]`, { handleActions, props: this.props, action, e })

    switch (action.type) {

      case 'openModalRegistrationQuick':
      {
        data = { inception: 'registrationQuick' }
        const action03: Interfaces.Action = { type: 'updateUserFootprint', data }
        handleActions(e, action03)

        const action02: Interfaces.Action = { type: 'openModalRegistrationQuick' }
        handleActions(e, action02)

        // console.info(`Face326->handleEvents() type: ${action.type} [10]`, { props: this.props, action, e })
      }
      break

      default: {
        console.info(`Face326->handleEvents unexpected action type: ${action.type}`, { action })
      }
    }
  }

  public render(): JSX.Element {
    const { reduxState, handleActions } = this.props
    const { treeData, language } = reduxState
    // console.info('Face326->render() [5]', { treeData, reduxState })
    const {
      navBar,
      descriptors,
      itHelps,
      workFlow,
      keyFeatures,
      shortAdvantages,
      footer,
      modals,
    } = treeData[language]

    let {
      searchForm,
      carousel,
      catatogTags,
      userReviews,
      registrationButton,
    } = treeData[language]

    searchForm = { ...searchForm, handleActions }
    userReviews = { ...userReviews, handleActions }
    catatogTags = { ...catatogTags, handleActions }

    const { sid: carouselSid } = carousel
    const carouselCid = `${carouselSid}-${uuidv4()}`
    const carouselPrefix = 'CarouselDesc'
    carousel = { ...carousel, cid: carouselCid, prefix: carouselPrefix }

    const searchFormTop = {...searchForm, sid: 'SearchForm_top'}
    const searchFormBottom = {...searchForm, sid: 'SearchForm_bottom'}


    const action: Interfaces.Action = { type: 'openModalRegistrationQuick' }
    registrationButton = { ...registrationButton, handleFunctions: this.handleEvents.bind(this), action }

    // console.info('Face326->render() [10]', { modalWindows, reduxState, modals, props: this.props })
    return (
      <div className='Face326 globalStyle'>
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

export const Face326Page = CommonContainer(Face326)
