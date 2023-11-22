import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const EC = ({arr}) => {
  return (
    <div className='d-flex shadow rounded-3 flex-column gap-1 p-3 col-5 text-center'>
        <img className='img-fluid rounded-3' src={arr.img} />
        <h3 className='m-0 mt-2 fs-2 fw-bold'>{arr.title}</h3>
        <p className=' fw-lighter fs-6 m-0'>{arr.date}</p>
        <p className=' fs-4 m-0'>{arr.body}</p>
    </div>
  )
}

export default EC