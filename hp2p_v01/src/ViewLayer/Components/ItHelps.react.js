import React from 'react'
import PropTypes from 'prop-types'
import * as serviceFunc from '../../Shared/serviceFunc'

// eslint-disable-next-line react/prefer-stateless-function
class ItHelps extends React.PureComponent {
  constructor(props) {
    super(props)
    this.itHelpsArr = [
      { capture: 'Быстро разобраться в вопросе', details: 'Не нужно куда-то идти или ехать, искать людей, сидеть в очередях. Найдите специалиста на сайте'},
      { capture: 'Не переплачивать', details: 'Для решения многих вопросов не требуется присутствия специалиста. Зачем за это платить, если вопрос легко решить в чате, по аудио или видеосвязи?! Специалист экономит свое время, вы выигрываете в деньгах'},
      { capture: 'Не зависеть от одного мнения', details: 'Получите сразу несколько ответов по вашей теме. Это поможет лучше разобраться в вопросе и принять взвешенное решение'},
    ]
  }

  componentDidMount() {
    setTimeout(() => {
      let elem = document.querySelectorAll('.itHelps__ul_wrapper')[0]
      const { height } =  serviceFunc.getElementSize(elem)
      // console.info('ItHelps->componentDidMount() [5]', { height })
      elem = document.querySelectorAll('.itHelps__manWorks_wrapper')[0]
      elem.style.height = `${height}px`
    }, 500)
  }

  getItHelpsList = itHelpsArr => itHelpsArr
    .map((item, i) => (
      <li key={i} className=''>
        <div className='itHelps__capture'>
          {item.capture}
        </div>
        <div className='itHelps__details'>
          {item.details}
        </div>
      </li>
    ))

  render() {
    const itHelpsList = this.getItHelpsList(this.itHelpsArr)

    return (
      <div className='container-fluid form-group ItHelps'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
            <div className='itHelps__manWorks_wrapper'>
              <div className='itHelps__manWorks imgManWorks' />
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
            <h2 className='titleSection'>
              <span>User</span>
              <span className='c_green'>To</span>
              &nbsp;
              <span>помогает</span>
            </h2>
            <div className='itHelps__ul_wrapper'>
              <ul className='itHelps__ul'>
                {itHelpsList}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ItHelps.propTypes = {
}

export default ItHelps
