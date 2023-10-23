import React from 'react'
import './topbar.css'
import { FiPhoneCall } from 'react-icons/fi'

const TopBar = () => {
  return (
    <div className='top_bar'>
      <div className='container-fluid custom-container'>
        <div className='row g-0 align-items-center'>
          <div className='col-md-7'>
            <ul className='list-inline mb-0 text-center text-md-start'>
              <li className="list-inline-item">
                {/* <p className="fs-13 mb-0"> <i className="mdi mdi-map-marker"></i>
                  Your Location:
                  <a href="#" className="text-dark">New Caledonia</a></p> */}
              </li>
            </ul>
          </div>
          <div className='col-md-5'>
            <ul className='list-inline mb-0 text-center text-md-end'>
              <li className="list-inline-item  align-middle">
                <p className="textw-icon" >
                  <FiPhoneCall className='icon-phone'/>
                  Toll Free: 18004252425</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar