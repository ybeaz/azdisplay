import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class Carousel extends React.Component {

  carouselRender = source => {
    // console.info('Carousel->carouselRender [0]', { source, state: this.state })

    const indicators = source.map((item, i) => {
      const { active } = item
      let itemClass = ''
      if (active === true) {
        itemClass += ' active'
      }
      // console.info('Carousel->carouselRender [3]', { id: item.id, item, pageItemClass, activeItem: activeItem })
      return (
        <li key={i} data-target='#demo' data-slide-to='1' className={itemClass}
          onClick={e => this.handleEvent(e, 'clickItem', item)}
        />
      )
    })

    const imgs = source.map((item, i) => {
      const { capture, src, active } = item
      let itemClass = 'carousel-item'
      if (active === true) {
        itemClass += ' active'
      }
      // console.info('Carousel->carouselRender [5]', { item, pageItemClass, activeItem: activeItem })
      return (
        <div key={i} className={itemClass}>
          <img src={src} className='img-fluid' alt={capture} />
        </div>
      )
    })

    // console.info('Carousel->carouselRender [7]', { })
    return (
      <div id='demo' className='carousel slide' data-ride='carousel'>
        <ul className='carousel-indicators'>
          {indicators}
        </ul>
        <div className='carousel-inner'>
          {imgs}
        </div>
        <a className='carousel-control-prev' href='#demo' data-slide='prev'>
          <span className='carousel-control-prev-icon'
            onClick={e => this.handleEvent(e, 'prevItem', {}, source)}
          />
        </a>
        <a className='carousel-control-next' href='#demo' data-slide='next'>
          <span
            className='carousel-control-next-icon'
            onClick={e => this.handleEvent(e, 'nextItem', {}, source)}
          />
        </a>
      </div>
    )
  }

  handleEvent = (e, type, payload) => {
    console.info('Carousel->handleEvent', { e, type, payload, source });
  }

  render() {
    const { propsScope } = this.props
    const { listArr, activeItem, handleActions } = propsScope
    console.info('Carousel->render()', { listArr, handleActions, propsScope })

    return <div>{this.carouselRender(listArr, activeItem)}</div>
  }
}

Carousel.propTypes = {
}

export default Carousel
