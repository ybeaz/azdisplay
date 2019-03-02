import React from 'react'

// eslint-disable-next-line react/prefer-stateless-function
const Error404 = () => {

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='error-template'>
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className='error-details'>
              Sorry, an error has occured, Requested page not found!
            </div>
            <div className='error-actions'>
              <a href='/' className='btn btn-primary btn-lg'>
                <span className='glyphicon glyphicon-home' />
                Take Me Home
              </a>
                <a href='/' className='btn btn-default btn-lg'>
                  <span className='glyphicon glyphicon-envelope' />
                  Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Error404