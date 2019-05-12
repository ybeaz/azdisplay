import React from 'react'
import { Link } from 'react-router-dom'

import * as Interfaces from '../../Shared/interfaces'
import { Footer } from '../Components/Footer.react'
import { NavBar } from '../Components/NavBar.react'
import { SectionWrapper } from '../Components/SectionWrapper.react'
import { CommonContainer } from '../Containers/CommonContainer.react'

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

  public handleEvents: Function = (e: any, action: Interfaces.Action): void => {
    const { handleActions } = this.props
    const sid: string = 'Contacts'
    let data: any

    switch (action.type) {

      case 'clickBack':
      {
        const action01: Interfaces.Action = { type: 'clickBack' }
        handleActions(e, action01)
        // console.info(`Footer->handleEvents type->${action.type} [10]`, { props: this.props, action, e })
      }
      break

      default: {
        console.info(`${sid}->handleEvents unexpected action type: ${action.type}`, { action })
      }
    }
  }

  public render(): JSX.Element {
    // console.info('Contacts->render() [10]', { modalWindows, reduxState, modals, props: this.props })
    return (
      <div className='Contacts globalStyle'>
        <header><NavBar /></header>
        <main>
        <SectionWrapper classStyle='Contacts__linkBack'>
            <Link to={'/326_HP2P_v01/enter'} onClickCapture={e => this.handleEvents(e, {type: 'clickBack'})}>
              <div className={`Contacts__linkBackCapture`}>
                  Назад
              </div>
            </Link>
          </SectionWrapper>

          <SectionWrapper classStyle='Contacts__content'>
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
      </div>
    )
  }
}

// tslint:disable-next-line: export-name
export const ContactsPage = CommonContainer(Contacts)
