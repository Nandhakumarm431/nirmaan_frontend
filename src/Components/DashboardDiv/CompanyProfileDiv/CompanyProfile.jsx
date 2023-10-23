import React from 'react'
import Siderbar from '../Sidebar'
// import { TextField } from '@mui/material'
import './companyprofile.css'


const CompanyProfile = () => {
    return (
        <div className='page-wrapper'>
            <div className="page-wrapper dashboard">
                <div className="user-sidebar">
                    <div className='pro-header text-end pb-0 mb-0 show-1023'>
                        <div className='fix-icon'>
                            <span className="flaticon-close"></span>
                        </div>
                    </div>  
                    <Siderbar />
                </div>
                <section className='user-dashboard'>
                    <div className='dashboard-outer'>
                        <div className="upper-title-box">
                            <h3>Employee profile!</h3>
                            <div className="text">Ready to jump back in?
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-lg-12'>
                                <div className='ls-widget'>
                                    <div className='tabs-box'>
                                        <div className="widget-title">
                                            {/* <h4>My Profile</h4> */}
                                            </div>
                                        <div className='widget-content'>
                                            <form className='default-form'>
                                                <div className='row'>
                                                    <div className="form-group12  col-xl-6 col-md-3">
                                                        <label>Full name</label>
                                                        <input type="text" className='text-field-input ' name="name" required="" />
                                                    </div>
                                                    <div className="form-group12  col-xl-6 col-md-3">
                                                        <label>Email ID</label>
                                                        <input type="text" className='text-field-input ' name="name" required="" />
                                                    </div>
                                                    <div className="form-group12  col-xl-6 col-md-3">
                                                        <label>Phone number</label>
                                                        <input type="text" className='text-field-input ' name="name" required="" />
                                                    </div>
                                                    <div className="form-group12  col-xl-6 col-md-3">
                                                        <label>Address</label>
                                                        <input type="text" className='text-field-input ' name="name" required="" />
                                                    </div>
                                                    <div className="form-group12  col-xl-6 col-md-3">
                                                        <label>Location</label>
                                                        <input type="text" className='text-field-input ' name="name" required="" />
                                                    </div>
                                                    <div className="form-group12  col-xl-6 col-md-3">
                                                        <label>Team Size</label>
                                                        <select className='text-field-input ' >
                                                            <option>0-10</option>
                                                            <option>10-50</option>
                                                            <option>50-100</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group12  col-xl-12 col-md-12">
                                                        <label>About Company</label>
                                                        <textarea className='text-field-input ' name="name" required="" />
                                                    </div>
                                                    <div className="form-group12 col-lg-6 col-md-12">
                                                        <button className="btn-style-one">Update</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CompanyProfile