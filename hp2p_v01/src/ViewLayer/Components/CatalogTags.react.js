import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class CatalogTags extends React.PureComponent {
  constructor(props) {
    super(props)

    this.catatogtagArr = [
      { nameRus: 'Ремонт и строительство', iconClass: 'iconFire', num: 319 },
      { nameRus: 'Ремонт и установка техники', iconClass: '', num:  160 },
      { nameRus: 'Ремонт авто', iconClass: 'iconFire', num: 92 },
      { nameRus: 'Репетиторы и обучение', iconClass: '', num: 460 },
      { nameRus: 'Красота', iconClass: '', num: 711 },
      { nameRus: 'Мистика', iconClass: 'iconFire', num: 263 },
      { nameRus: 'Компьютеры и IT', iconClass: 'iconFire', num: 917 },
      { nameRus: 'Работа и карьера', iconClass: '', num: 1307 },
      { nameRus: 'Саморазвитие', iconClass: 'iconFire', num: 452 },
      { nameRus: 'Юридические вопросы', iconClass: '', num: 688 },
      { nameRus: 'ЗОЖ', iconClass: '', num: 3166 },
      { nameRus: 'Фото', iconClass: '', num: 447 },
      { nameRus: 'Аудио', iconClass: 'iconFire', num: 417 },
      { nameRus: 'Творчество и хобби', iconClass: '', num: 1344 },
      { nameRus: 'Медицинские вопросы', iconClass: '', num: 927 },
      { nameRus: 'Путешествия', iconClass: '', num: 401 },
      { nameRus: 'Вопросы бизнеса', iconClass: '', num: 639 },
      { nameRus: 'Животные', iconClass: '', num: 401 },
      { nameRus: 'Религия', iconClass: '', num: 838 },
      { nameRus: 'Искусство', iconClass: '', num: 2162 },
      { nameRus: 'Недвижимость', iconClass: '', num: 4304 },
      { nameRus: 'Покупка авто', iconClass: '', num: 579 },
      { nameRus: 'Работа с текстом', iconClass: '', num: 431 },
      { nameRus: 'Реклама', iconClass: '', num: 211 },
      { nameRus: 'Работа в программах', iconClass: '', num: 2239 },
      { nameRus: 'Психология', iconClass: '', num: 995 },
      { nameRus: 'Видео', iconClass: '', num: 1819 },
      { nameRus: 'Дети', iconClass: '', num: 1607 },
      { nameRus: 'Спорт', iconClass: '', num: 3132 },
      { nameRus: 'Вопросы по профессии', iconClass: 'iconFire', num: 185 },
    ]
  }

  getTags = arr => {

    return arr.map((item, i) => {

      return <li key={i} className={`tagListLi ${item.iconClass}`}>
        <span className='name'>{item.nameRus}</span>
        <span className='num'>{item.num}</span>
      </li>
    })
  }

  render() {

    const tags = this.getTags(this.catatogtagArr)

    return (
      <div className='CatalogTags'>
        <h2 className='titleSection'>Разделы</h2>
        <ul>
          {tags}
        </ul>
      </div>
    )
  }
}

CatalogTags.propTypes = {
}

export default CatalogTags