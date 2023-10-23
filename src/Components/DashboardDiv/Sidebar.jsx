import React from 'react'
import './dashboard.css'
import { LiaHomeSolid } from 'react-icons/lia'
import { MdOutlinePerson3 } from 'react-icons/md'
import { AiOutlineSend } from 'react-icons/ai'
import { PiSuitcaseSimple } from 'react-icons/pi'
import { BiLogOutCircle } from 'react-icons/bi'
import { useState } from 'react'
import { useEffect } from 'react'

const Siderbar = () => {

    const [currentUrlPath, setCurrentUrlPath] = useState('/');
    useEffect(() => {
        setCurrentUrlPath(window.location.pathname);
    }, [currentUrlPath])

    const currentUserJSON = localStorage.getItem("userData");

    const currentUser = JSON.parse(currentUserJSON);
    const name = currentUser ? currentUser.name : null;
    const role = currentUser ? currentUser.roles[0] : null;


    const sidebarMenu =
        role === "ROLE_USER" ? [
            { id: 2, url: "/dashboard/company-profile", navLink: "Employee Profile", icon: <MdOutlinePerson3 className='icon-vis' /> },
            { id: 6, url: "/logout", navLink: "Log out", icon: <BiLogOutCircle className='icon-vis' /> },

        ] :
            [
                { id: 1, url: "/dashboard", navLink: "Dashboard", icon: <LiaHomeSolid className='icon-vis' /> },
                { id: 2, url: "/dashboard/company-profile", navLink: "Employee Profile", icon: <MdOutlinePerson3 className='icon-vis' /> },
                { id: 3, url: "/dashboard/postjob", navLink: "Post A Job", icon: <AiOutlineSend className='icon-vis' /> },
                { id: 4, url: "/dashboard/managejob", navLink: "Manage Jobs", icon: <PiSuitcaseSimple className='icon-vis' /> },
                // { id: 5, url: "/dashboard/manageusers", navLink: "Manage Users", icon: <MdOutlinePerson3 className='icon-vis' /> },
                { id: 6, url: "/logout", navLink: "Log out", icon: <BiLogOutCircle className='icon-vis' /> },
                // { id: 7, url: "/", navLink: "Delete Profile", icon: <MdDeleteOutline className='icon-vis' /> },
            ]

    return (

        <div className='sidebar-inner'>
            <div style={{marginBottom:'30px'}}>
                <h4> Welcome, {name}</h4>
            </div>
            <ul className='navigation'>
                {sidebarMenu.map((item, index) => (
                    <li className=" mb-1" key={index}>
                        <a href={item.url} className='li-data'>
                            {item.icon}
                            {item.navLink}</a>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default Siderbar