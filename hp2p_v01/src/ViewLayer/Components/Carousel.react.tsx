import React from 'react'
import { Swipeable } from 'react-swipeable'

interface Props {
  readonly cid: string,
    // component id
  readonly prefix: string,
    // For each prefix styles tree can be created in Dropdown.less file
  readonly isDisplayArrows: boolean,
    // Allows or bans right, left arrows for listing items
  readonly isDisplayIndicators: boolean,
    // Allows or bans underscore indicators for listing items
  readonly isAutoCarousel: any,
    // If it equals number, than it works with number delay automatically
  readonly autoCarouselInterval: number,
    // Interval of changing images in miliseconds
  readonly listArr: any,
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
  readonly scrollInterval: number,
    // Set the interval of changing the img in miliseconds
  readonly scrollPeriodEnd: number,
    // Set the period withing the images will be changing in miliseconds
}
interface State {
  readonly listArr: any,
  readonly date: any,
}

export interface Carousel {
  preventSwipeTwice: boolean,
  totimeZone: any,
  tickID: any,
}

export class Carousel extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
    cid: '',
    prefix: '',
    isDisplayArrows: true,
    isDisplayIndicators: true,
    isAutoCarousel: false,
    autoCarouselInterval: 2000,
    scrollInterval: 500,
    scrollPeriodEnd: 1000,
  }

  constructor(props) {
    super(props)
    const { listArr } = this.props
    const totimeZone =	new Date()
    //console.info('Carousel->constructor', { props: this.props })
    this.preventSwipeTwice = false

    this.state = {
      listArr,
      date: totimeZone,
    }
  }

  componentDidMount() {
    const {
      isAutoCarousel,
      autoCarouselInterval,
    } = this.props

    const actionNextItem = {
      type: 'nextItem',
    }

    if (isAutoCarousel) {
      this.tickID	=	setInterval(() => this.handleEvents({}, actionNextItem), autoCarouselInterval)
    }
  }

  indicators = listArr => listArr.map((item, i) => {
    const { active } = item
    let itemClass = ''
    if (active === true) {
      itemClass += ' active'
    }

    const action = {
      type: 'clickItem',
      item,
    }

    // console.info('Carousel->carouselRender [3]', { id: item.id, item, pageItemClass, activeItem: activeItem })
    return (
      <li key={i} className={itemClass}
        onClick={e => this.handleEvents(e, action)}
      />
    )
  })

  imgs = listArr => listArr.map((item, i) => {
    const { capture, src, active } = item
    let itemClass = 'carousel-item Carousel__item transitionPrevDesc'
    if (active === true) {
      itemClass = 'carousel-item Carousel__item transitionNextDesc'
    }

    // console.info('Carousel->carouselRender [5]', { item, pageItemClass, activeItem: activeItem })
    return (
      <div
        key={i}
        className={itemClass}
      >
        <div className='Carousel__itemCapture'>
          {capture}
        </div>
        <img
          src={src}
          className='Carousel__item-img img-fluid'
          alt={capture}
        />
      </div>
    )
  })

  handleEvents = (e, action) => {
    const { listArr } = this.state

    // console.info('Carousel->handleEvents', { e, listArr, action })
    switch (action.type) {

      case 'onTouchStart': {
        alert('We onTap')
        const actionOnTouchStopMove = {
          type: 'onTouchStopMove',
        }
        this.handleEvents({}, actionOnTouchStopMove)
      }

      case 'onTouchMove': {
        // console.info( 'Dropdown->handleEvents() [1]', action)

        if (this.preventSwipeTwice === false) {
          const { scrollInterval, scrollPeriodEnd } = action
          const actionNextItem = {
            type: 'nextItem',
          }
          // console.info( 'Dropdown->handleEvents() [5]', { delay, action })
          this.tickID	=	setInterval(() => this.handleEvents({}, actionNextItem), scrollInterval)
          this.preventSwipeTwice = !this.preventSwipeTwice

          setTimeout(() => {
            clearInterval(this.tickID)
            this.preventSwipeTwice = false
          }, scrollPeriodEnd);
        }

      } break

      case 'onTouchStopMove': {
        // console.info( 'Dropdown->handleEvents() [1]', action)
        clearInterval(this.tickID);
        this.preventSwipeTwice = false
      } break

      case 'nextItem': {
        // console.info( 'Dropdown->handleEvents() [1]', action)
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
        // console.info( 'Dropdown->handleEvents() [1]', action)
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
        const { item } = action
        const { capture } = item

        const listArrNext = listArr.map((item, i) => {
          let activeNext = false
          if (capture === item.capture) {
            activeNext = true
          }
          return { ...item, active: activeNext }
        })
        this.setState({ listArr: listArrNext })

        // console.info('Carousel->handleEvents', { listArr, action })
      } break

      default: {
        console.info( 'Carousel->handleEvents() [10]','I have never heard of that ... ', action)
      } break
    }
  }

  public render(): JSX.Element {
    const {
      cid,
      prefix,
      isDisplayArrows,
      isDisplayIndicators,
      scrollInterval,
      scrollPeriodEnd
    } = this.props
    const { listArr } = this.state
    // console.info('Carousel->render()', { listArr })

    const actionPrevItem = {
      type: 'prevItem',
    }

    const actionNextItem = {
      type: 'nextItem',
    }

    const actionOnTouchMove = {
      type: 'onTouchMove',
      scrollInterval,
      scrollPeriodEnd,
    }

    const actionOnTouchStopMove = {
      type: 'onTouchStopMove',
    }

    // react-swipeable https://www.npmjs.com/package/react-swipeable
    const swipeConfig = {
      delta: 10,                             // min distance(px) before a swipe starts
      preventDefaultTouchmoveEvent: false,   // preventDefault on touchmove, *See Details*
      trackTouch: true,                      // track touch input
      trackMouse: false,                     // track mouse input
      rotationAngle: 0,
      onSwipedLeft: () => this.handleEvents({}, actionOnTouchMove),
      onSwipedRight: () => this.handleEvents({}, actionOnTouchStopMove),
    }

    return (
      <div id={cid} className={`carousel slide ${prefix}`}>
        { isDisplayIndicators ? (
          <ul className='carousel-indicators'>
            {this.indicators(listArr)}
          </ul>
        )
          : null
        }
        <div className='carousel-inner'>
          <Swipeable { ...swipeConfig } >
          {this.imgs(listArr)}
          </ Swipeable>
        </div>
        { isDisplayArrows ? (
          <div>
            <div className='carousel-control-prev'>
              <span className='carousel-control-prev-icon'
                onClick={e => this.handleEvents(e, actionPrevItem)}
              />
            </div>
            <div className='carousel-control-next'>
              <span
                className='carousel-control-next-icon'
                onClick={e => this.handleEvents(e, actionNextItem)}
              />
            </div>
          </div>
        )
          : null
        }
      </div>
    )
  }
}
