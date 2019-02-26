
import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class Carousel extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {

    // console.info('Carousel->render() [10]',{});
    return (
      <div id='demo' className='carousel slide' >
        <ul className='carousel-indicators'>
          <li data-target='#demo' data-slide-to='0' className='active' />
          <li data-target='#demo' data-slide-to='1' />
          <li data-target='#demo' data-slide-to='2' />
        </ul>

        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src='https://www.w3schools.com/bootstrap4/la.jpg' alt='Los Angeles' width='1100' height='500' />
          </div>
          <div className='carousel-item'>
            <img src='https://www.w3schools.com/bootstrap4/chicago.jpg' alt='Chicago' width='1100' height='500' />
          </div>
          <div className='carousel-item'>
            <img src='https://www.w3schools.com/bootstrap4/ny.jpg' alt='New York' width='1100' height='500' />
          </div>
        </div>

        <a className='carousel-control-prev' href='#demo' data-slide='prev'>
          <span className='carousel-control-prev-icon' />
        </a>
        <a className='carousel-control-next' href='#demo' data-slide='next'>
          <span className='carousel-control-next-icon' />
        </a>
      </div>
    )
  }
}

Carousel.propTypes = {
}

export default Carousel
