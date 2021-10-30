import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
function Card(props) {
    const [readmore, setReadmore] = useState(false)

  return (
    <>
      <div className='col-md-4 col-10 mx-auto'>
        <div className='card'>
          <img src={props.imgsrc} className='card-img-top' alt={props.imgsrc} />
          <div className='card-body'>
            <h2 className='card-title font-weight-bold'>{props.title}</h2>
            <div className='description'>
              <p className='card-text'>
                {readmore ? props.des : `${props.des.substring(0, 100)}...`}
              </p>
              <button
                className='btn mb-3 btn btn-outline-secondary'
                onClick={() => setReadmore(!readmore)}
              >
                {readmore ? 'show less' : 'show more'}
              </button>
            </div>

            <NavLink to='' className='btn btn-primary'>
              Show detail
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
