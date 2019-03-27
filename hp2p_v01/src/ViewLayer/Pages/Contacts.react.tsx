import React from 'react'

import { Footer } from '../Components/Footer.react'
import { NavBar } from '../Components/NavBar.react'
import { SectionWrapper } from '../Components/SectionWrapper.react'
import { CommonContainer } from '../Containers/CommonContainer.react'

import { GetModals } from '../Modals/GetModals.react'

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

  public render(): JSX.Element {
    // console.info('Contacts->render() [10]', { modalWindows, reduxState, modals, props: this.props })
    return (
      <div className='Contacts globalStyle'>
        <header><NavBar /></header>
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
            <Footer />
          </SectionWrapper>
        </footer>
        <GetModals />
      </div>
    )
  }
}

// tslint:disable-next-line: export-name
export const ContactsPage = CommonContainer(Contacts)
