import React, { useState } from 'react'
import './header.css'
import logo from '../../assets/images/nirmaan_logo.png';
import { Link } from "react-router-dom"
import Login from '../LoginDiv/Login';
import { useEffect } from 'react';
import userprofile from '../../assets/images/user3.png'
import { FaBell } from 'react-icons/fa'
import { BiChevronDown } from 'react-icons/bi'


const Header = () => {
    const [currentUrlPath, setCurrentUrlPath] = useState('/');
    useEffect(() => {
        setCurrentUrlPath(window.location.pathname);
    }, [currentUrlPath])

    const currentUserJSON = localStorage.getItem("userData");

    const currentUser = JSON.parse(currentUserJSON);
    const name = currentUser ? currentUser.name : null;
    const role = currentUser ? currentUser.roles[0] : null;


    const nav = [
        { id: 1, url: "/", navLink: "Home" },
        { id: 2, url: "/Jobscard", navLink: "Find a Job" },
        { id: 4, url: "/aboutus", navLink: "About Us" }
    ]

    const profileNav = [
        { id: 1, url: "/managejobs", navLink: "Manage Jobs" },
        role === "ROLE_USER" ?
            { id: 2, url: "/myprofile", navLink: "My Profile" } :
            { id: 2, url: "/dashboard", navLink: "Dashboard" },
        { id: 3, url: "/bookmarkjobs", navLink: "Bookmarks Jobs" },
        { id: 4, url: "/logout", navLink: "Logout" },
    ]

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // const getUserName(userId) {
    //     localStorage.setItem("username", "Ragunathan S");
    // }


    const [notifyclick, setnotifyclick] = useState(false)
    const [profileclick, setprofileclick] = useState(false)

    return (
        <header className='header sticky-bar stick'>
            <div className='container'>
                <div className='main-header'>
                    <div className="header-left">
                        <div className="header-logo">
                            <a className="d-flex" href="/">
                                <img className='logo-img' alt="jobBox" src={logo} />
                            </a>
                        </div>
                    </div>
                    <div className="header-nav">
                        <nav className="nav-main-menu">
                            <ul className="main-menu">
                                {nav.map((list, index) => (
                                    <li key={index} className="has-children">
                                        <Link className="active" to={list.url}>
                                            {list.navLink}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="burger-icon burger-icon-white ">
                            <span className="burger-icon-top"></span>
                            <span className="burger-icon-mid"></span>
                            <span className="burger-icon-bottom"></span>
                        </div>
                    </div>
                    {(localStorage.getItem("userData") === undefined || localStorage.getItem("userData") == null) ?

                        <div className="header-right">
                            <div className="block-signin">
                                {/* <a className="text-link-bd-btom" href="/page-register">Register</a> */}
                                <a href="#" onClick={openModal} className="theme-btn btn-style-three call-modal" data-bs-toggle="modal" data-bs-target="#loginPopupModal">Login / Register</a>

                                {/* <a className="btn btn-default btn-shadow ml-40" href="/page-signin">Sign in</a> */}
                            </div>
                        </div> :

                        <div className="header-right">
                            <ul className='header-menu list-inline d-flex align-items-center mb-0'>
                                <li className='list-inline-item dropdown me-4'>
                                    <a onClick={() => setnotifyclick(true)} className='header-item noti-icon position-relative'>
                                        <FaBell className='mdi mdi-bell fs-22' />
                                        <div className="count position-absolute">3</div>
                                    </a>
                                    <div onClick={() => setnotifyclick(!notifyclick)} style={{ display: !notifyclick ? "none" : 'block' }} className='dropdown-menu dropdown-menu-sm dropdown-menu-end p-0 show' data-bs-popper="none">
                                        <div className="notification-header border-bottom bg-light">
                                            <h6 className="mb-1"> Notification </h6>
                                            <p className="text-muted fs-13 mb-0">You have 4 unread Notification</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='list-inline-item dropdown'>
                                    <a className='header-item' onClick={() => setprofileclick(true)} >
                                        <img src={userprofile} alt="mdo" style={{ width: '35px', height: '35px' }} className="rounded-circle me-1" />
                                        <span className="d-none d-md-inline-block fw-medium">Hi, {name}</span>
                                        <BiChevronDown style={{ marginLeft: '5px' }} />
                                    </a>
                                    <ul onClick={() => setprofileclick(!profileclick)} style={{ display: !profileclick ? "none" : 'block' }}
                                        className="dropdown-menu dropdown-menu-end show" aria-labelledby="userdropdown" data-bs-popper="none">

                                        {profileNav.map((list, index) => (
                                            <li key={index}>
                                                <Link className="dropdown-item" to={list.url}>
                                                    {list.navLink}
                                                </Link>
                                            </li>
                                        ))}
                                        {/*  <li><Link className="dropdown-item" href="manage-jobs.html">Manage Jobs</Link></li>
                                        <li><Link className="dropdown-item" href="bookmark-jobs.html">Bookmarks Jobs</Link></li>
                                        <li><Link className="dropdown-item" href="profile.html">My Profile</Link></li>
                                        <li><Link className="dropdown-item" to="/logout">Logout</Link></li> */}
                                    </ul>
                                </li>
                            </ul>
                            {/* <Link className="nav-link" to="/logout">Logout
                            </Link> */}
                        </div>
                    }
                </div>
                <Login isOpen={isModalOpen} onClose={closeModal} />
            </div>

        </header>
    )
}

export default Header