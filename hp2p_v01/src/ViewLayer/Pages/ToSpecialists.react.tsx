import React from 'react'

import * as Interfaces from '../../Shared/interfaces'
import { ButtonCommon } from '../Components/ButtonCommon.react'
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

class ToSpecialists extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  constructor(props: any) {
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
    let data: any

    switch (action.type) {

      case 'openModalRegistrationToSpec':
      {
        data = { inception: 'registrationToSpec' }
        const action03: Interfaces.Action = { type: 'updateUserFootprint', data }
        handleActions(e, action03)

        const action02: Interfaces.Action = { type: 'openModalRegistrationToSpec' }
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
    const { modalWindows, treeData, language } = reduxState
    // console.info('ToSpecialists->render() [5]', { treeData, reduxState })
    let {
      navBar,
      footer,
      modals,
      registrationButton,
    } = treeData[language]

    const action: Interfaces.Action = { type: 'openModalRegistrationToSpec' }
    registrationButton = { ...registrationButton, handleFunctions: this.handleEvents, action }

    const modalProps: any = { modalWindows, handleActions, modals }
    // console.info('ToSpecialists->render() [10]', { modalWindows, reduxState, modals, props: this.props })
    return (
      <div className='ToSpecialists globalStyle'>
        <header><NavBar {...navBar} /></header>
        <main>
          <SectionWrapper classStyle='SectionWrapper_ToSpecialists'>

            <div>Расскажите о ваших компетенциях на UserTo</div>
            <div>Многим пользователям необходимы  ваши навыки и знания. Поделитесь ими за вознаграждение.</div>
            <div>Где угодно</div>
            <div>Используйте UserTo , чтобы отвечать на запросы ваших пользователей буквально на ходу, при помощи смартфона или планшета.  Если требует ситуация, сервисом удобно пользоваться и на стационарном компьютере.</div>
            <div>В удобное время</div>
            <div>Вы сами настраиваете график, когда к вам могут обратиться.</div>
            <div>Аналитика</div>
            <div>Подробные статистические данные, которые показывают интерес пользователей к вашей компетенции, к вашему профилю.</div>
            <div>Принимайте платежи без проблем</div>
            <div>Пользователи  могут легко расплатиться любым удобным для них способом.</div>
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
        <GetModals {...modalProps} />
      </div>
    )
  }
}

// tslint:disable-next-line: export-name
export const ToSpecialistsPage = CommonContainer(ToSpecialists)
