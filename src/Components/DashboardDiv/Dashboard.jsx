import React from 'react'
import './dashboard.css'
import { BsBriefcase } from 'react-icons/bs'
import { HiOutlineUsers } from 'react-icons/hi'

import Siderbar from './Sidebar'

const Dashboard = () => {

    const rowdata = [
        { id: 1, title: 'Posted Jobs', count: 200, icondata: <BsBriefcase className='icon-style' /> },
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
                        <div class="upper-title-box">
                            <h3>Dashboard Home!</h3>
                            <div class="text">Ready to jump back in?
                            </div>
                        </div>
                        <div className="row">
                            {rowdata.map((item, index) => (
                                <div key={index} className='ui-block col-xl-3 col-lg-6 col-md-6 col-sm-12'>
                                    <div className='ui-item ui-blue'>
                                        <div className="left">
                                            {item.icondata}
                                        </div>
                                        <div class="right">
                                            <h4>{item.count}</h4>
                                            <p>{item.title}</p></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Dashboard