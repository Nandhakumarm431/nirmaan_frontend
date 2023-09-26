import React from 'react'
import Siderbar from '../DashboardDiv/Sidebar'
import './postjob.css'


const PostJob = () => {
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
                            <h3>Post a Job!</h3>
                            <div class="text">Ready to jump back in?
                            </div>
                        </div>

                        <form>
                            <div className='jm-post-job-wrapper mb-40'>
                                <h4 class="jm-job-acc-title">Job informations</h4>
                                <div className="row">
                                    <div class="col-xl-12">
                                        <input type="text" placeholder="Job Title" value="" />
                                    </div>
                                    <div class="col-xl-6 col-md-6">
                                        <input type="text" placeholder="Application email/URL" value="" />
                                    </div>
                                    <div class="col-xl-6 col-md-6">
                                        <input type="text" placeholder="Job Location" value="" />
                                    </div>
                                    <div class="col-xl-6 col-md-6">
                                        <select class="jm-job-select">
                                            <option>Job Types</option>
                                            <option>Full Time</option>
                                            <option>Part Time</option>
                                            <option>Internship</option>
                                            <option>Temporary</option>
                                        </select>
                                    </div>
                                    <div class="col-xl-6 col-md-6">
                                        <select class="jm-job-select">
                                            <option>Job Category</option>
                                            <option>Bank Jobs</option>

                                        </select>
                                    </div>

                                    <div class="col-xl-12">
                                        <textarea placeholder="Job description">
                                        </textarea>
                                    </div>
                                </div>
                                <div class="col-xl-12"><div class="jm-info-buttons mt-25">
                                    <button type="submit" class="jm-post-job-btn jm-theme-btn">Post A Job</button>
                                </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default PostJob