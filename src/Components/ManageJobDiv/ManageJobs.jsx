import React from 'react'
import Siderbar from '../DashboardDiv/Sidebar'
import './managejob.css'
import { FiEye, FiEdit3, FiDelete } from 'react-icons/fi'


const ManageJobs = () => {
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
                        <div class="upper-title-box">
                            <h3>Job Listings!</h3>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='ls-widget'>
                                    <div className='tabs-box'>
                                        <div class="widget-title">
                                            <h4>My Job Listings</h4>
                                        </div>
                                        <div className='widget-content'>
                                            <div className='table-outer'>
                                                <table className='default-table manage-job-table'>
                                                    <thead><tr><th>Title</th><th>Applications</th><th>Created &amp; Expired</th><th>Status</th><th>Action</th></tr></thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><div class="job-block">
                                                                <div class="inner-box">
                                                                    <div class="content"><span class="company-logo">
                                                                    </span>
                                                                        <h4><a href="/job-single-v3/1">Software Engineer (Android), Libraries</a></h4><ul class="job-info">
                                                                            <li><span class="icon flaticon-briefcase"></span>Segment</li>
                                                                            <li><span class="icon flaticon-map-locator"></span>London, UK</li></ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </td>
                                                            <td class="applied"><a href="#">3+ Applied</a></td><td>October 27, 2017 <br />April 25, 2011</td>
                                                            <td class="status">Active</td>
                                                            <td>
                                                                <div class="option-box">
                                                                    <ul class="option-list">
                                                                        <li><FiEye className='icon-manage' /></li>
                                                                        <li><FiEdit3 className='icon-manage' /></li>
                                                                        <li><FiDelete className='icon-manage' /></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
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

export default ManageJobs