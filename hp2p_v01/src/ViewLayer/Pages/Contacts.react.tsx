import React from 'react'

import CommonContainer from '../Containers/CommonContainer.react'
import SectionWrapper from '../Components/SectionWrapper.react'
import NavBar from '../Components/NavBar.react'
import Footer from '../Components/Footer.react'

import GetModals from '../Modals/GetModals.react'

interface Props {
  reduxState: any,
  handleActions: Function,
}
interface State {
}


class Contacts extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { reduxState } = this.props

  }

  componentDidUpdate() {
    const { reduxState } = this.props

  }


  render() {
    const { reduxState, handleActions } = this.props
    const { modalWindows, treeData, language } = reduxState
    // console.info('FacePage326->render() [5]', { treeData, reduxState })
    let {
      navBar,
      footer,
      modals,
    } = treeData[language]
    navBar = { ...navBar, handleActions }

    const modalProps: any = { modalWindows, handleActions, modals }
    // console.info('FacePage326->render() [10]', { modalWindows, reduxState, modals, props: this.props })
    return (
      <div className='Contacts globalStyle'>
        <header><NavBar {...navBar} /></header>
        <main>
          <SectionWrapper classStyle='SectionWrapper_Contacts'>
            <div>Наши контакты</div>
            <div>Ответим на Ваше обращение в течение 12 часов</div>
            <div>1007 Chestnut St. Newton, MA, 02464, US</div>
            <div>+1 (650) 7410014</div>
            <div>support@userto.com</div>
          </SectionWrapper>
        </main>
        <footer>
          <SectionWrapper classStyle='SectionWrapper_footerSection bg_greyDark'>
            <Footer {...footer} />
          </SectionWrapper>
        </footer>
        <GetModals {...modalProps} />
      </div>
    )
  }
}

export default CommonContainer(Contacts)
