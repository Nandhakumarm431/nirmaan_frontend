/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import './dashboard.css'
import { BsBriefcase } from 'react-icons/bs'
import { HiOutlineUsers } from 'react-icons/hi'

import Siderbar from './Sidebar'
import { useEffect } from 'react'

const Dashboard = () => {

    const [jobscount, setJobCounts] = useState('');
    // const [usercount, setUsercount] = useState('');
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetch(`${apiUrl}/getAlljobdet`)
            .then(response => response.json())
            .then(data => {
                setJobCounts(data);
            }).catch(error => {

            });
    }, []);
    const rowdata = [
        {
            id: 1, title: 'Posted Jobs', count:
                jobscount === undefined ? 0 : jobscount.length
            , icondata: <BsBriefcase className='icon-style' />
        },
        { id: 2, title: 'Users', count: 5, icondata: <HiOutlineUsers className='icon-style' /> },

    ]

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
                            <h3>Dashboard Home!</h3>
                            <div className="text">Ready to jump back in?
                            </div>
                        </div>
                        <div className="row">
                            {rowdata.map((item, index) => (
                                <div key={index} className='ui-block '>
                                    <div className='ui-item ui-blue'>
                                        <div className="left">
                                            {item.icondata}
                                        </div>
                                        <div className="right">
                                            <h4>{item.count}</h4>
                                            <p>{item.title}</p></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <div className='row'>
                            <div className="col-xl-7 col-lg-6">
                                <div className="graph-widget ls-widget">
                                    <div className="tabs-box">
                                        <div className="widget-title">
                                            <h4>Your Profile Views</h4>
                                            <div className="chosen-outer">
                                                <select className="chosen-single form-select">
                                                    <option>Last 6 Months</option>
                                                    <option>Last 12 Months</option>
                                                    <option>Last 16 Months</option>
                                                    <option>Last 24 Months</option>
                                                    <option>Last 5 year</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="widget-content">
                                            <canvas role="img" height="320" width="600" className='canvas_data'
                                            >
                                            </canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5">
                                <div className="notification-widget ls-widget">
                                    <div className="tabs-box">
                                        <div className="widget-title">
                                            <h4>Notifications</h4>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="notification-list">
                                                <li>
                                                    <span className="icon flaticon-briefcase"></span>
                                                    <strong>Henry Wilson</strong> applied for a job
                                                    <span className="colored"> Product Designer</span>
                                                </li>
                                                <li>
                                                    <strong>Henry Wilson</strong> applied for a job
                                                    <span className="colored"> Product Designer</span>
                                                </li>
                                                <li>
                                                    <strong>Henry Wilson</strong> applied for a job
                                                    <span className="colored"> Product Designer</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
            </div >
        </div >
    )
}

export default Dashboard