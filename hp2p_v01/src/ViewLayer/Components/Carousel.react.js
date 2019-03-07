import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class Carousel extends React.Component {
  constructor(props) {
    super(props)
    const { listArr } = this.props
    const totimeZone =	new Date()
    //console.info('Carousel->constructor', { props: this.props })

    this.state = {
      listArr,
      date: totimeZone,
    }
  }

  componentDidMount() {
    const actionNextItem = {
      type: 'nextItem',
      payload: {},
    }

    // this.tickID	=	setInterval(() => this.handleEvent({}, actionNextItem), 2000)
  }

  tick = () => this.setState({	date:	new Date() })
  
  carouselRender = source => {
    // console.info('Carousel->carouselRender [0]', { source, state: this.state })
    const { cid, prefix } = this.props

    const indicators = source.map((item, i) => {
      const { active } = item
      let itemClass = ''
      if (active === true) {
        itemClass += ' active'
      }

      const action = {
        type: 'clickItem',
        payload: {
          item,
        },
      }

      // console.info('Carousel->carouselRender [3]', { id: item.id, item, pageItemClass, activeItem: activeItem })
      return (
        <li key={i} className={itemClass}
          onClick={e => this.handleEvent(e, action)}
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

    const actionPrevItem = {
      type: 'prevItem',
      payload: {},
    }

    const actionNextItem = {
      type: 'nextItem',
      payload: {},
    }

    // console.info('Carousel->carouselRender [7]', { })
    return (
      <div id={cid} className={`carousel slide ${prefix}`}>
        <ul className='carousel-indicators'>
          {indicators}
        </ul>
        <div className='carousel-inner'>
          {imgs}
        </div>
        <div className='carousel-control-prev'>
          <span className='carousel-control-prev-icon'
            onClick={e => this.handleEvent(e, actionPrevItem)}
          />
        </div>
        <div className='carousel-control-next'>
          <span
            className='carousel-control-next-icon'
            onClick={e => this.handleEvent(e, actionNextItem)}
          />
        </div>
      </div>
    )
  }

  handleEvent = (e, action) => {
    const { listArr } = this.state

    // console.info('Carousel->handleEvent', { e, listArr, action })
    switch (action.type) {

      case 'nextItem': {
        // console.info( 'Dropdown->handleEvent() [1]', action)
        const index = listArr.map(item => item.active).indexOf(true)
        const { length } = listArr
        let indexNext = index + 1 
        if (index === length - 1) {
          indexNext = 0
        }
        const listArrNext = listArr.map((item, i) => {
          let activeNext = false
          if (i === indexNext) {
            activeNext = true
          }
          return { ...item, active: activeNext }
        })
        this.setState({ listArr: listArrNext })
      } break

      case 'prevItem': {
        // console.info( 'Dropdown->handleEvent() [1]', action)
        const index = listArr.map(item => item.active).indexOf(true)
        const { length } = listArr
        let indexNext = index - 1
        if (index === 0) {
          indexNext = length - 1
        }
        const listArrNext = listArr.map((item, i) => {
          let activeNext = false
          if (i === indexNext) {
            activeNext = true
          }
          return { ...item, active: activeNext }
        })
        this.setState({ listArr: listArrNext })
      } break

      case 'clickItem': {
        const { payload } = action
        const { item } = payload
        const { capture } = item

        const listArrNext = listArr.map((item, i) => {
          let activeNext = false
          if (capture === item.capture) {
            activeNext = true
          }
          return { ...item, active: activeNext }
        })
        this.setState({ listArr: listArrNext })

        // console.info('Carousel->handleEvent', { listArr, action })
      } break

      default: {
        console.info( 'Carousel->handleEvent() [10]','I have never heard of that ... ', action)
      } break
    }
  }

  render() {
    const { listArr } = this.state
    // console.info('Carousel->render()', { listArr })

    return (
      <div>
        {this.carouselRender(listArr)}
      </div>
    )
  }
}

Carousel.defaultProps = {
  cid: '',
  prefix: '',
  displayArrows: true,
}

/* eslint-disable indent */
Carousel.propTypes = {
  cid: PropTypes.string,
    // component id
  prefix: PropTypes.string,
    // For each prefix styles tree can be created in Dropdown.less file
  displayArrows: PropTypes.bool,
    // Possible values: 'icon', 'text'
  listArr: PropTypes.arrayOf(PropTypes.object).isRequired,
    /* Example
      listArr: [
          {
            capture: 'Los Angeles',
            src: 'https://www.w3schools.com/bootstrap4/la.jpg',
            active: true,
          },
        ...
      ]
    */
}

export default Carousel
