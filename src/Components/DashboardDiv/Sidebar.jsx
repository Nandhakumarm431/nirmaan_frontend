import React from 'react'
import './dashboard.css'
import { LiaHomeSolid } from 'react-icons/lia'
import { MdOutlinePerson3, MdDeleteOutline } from 'react-icons/md'
import { AiOutlineSend } from 'react-icons/ai'
import { PiSuitcaseSimple } from 'react-icons/pi'
import { BiLogOutCircle } from 'react-icons/bi'

const Siderbar = () => {

    const sidebarMenu = [
        { id: 1, url: "/dashboard", navLink: "Dashboard", icon: <LiaHomeSolid className='icon-vis' /> },
        { id: 2, url: "/dashboard/company-profile", navLink: "Company Profile", icon: <MdOutlinePerson3 className='icon-vis' /> },
        { id: 3, url: "/dashboard/postjob", navLink: "Post A Job", icon: <AiOutlineSend className='icon-vis' /> },
        { id: 4, url: "/dashboard/managejob", navLink: "Manage Jobs", icon: <PiSuitcaseSimple className='icon-vis' /> },
        { id: 5, url: "/dashboard/manageusers", navLink: "Manage Users", icon: <MdOutlinePerson3 className='icon-vis' /> },
        { id: 6, url: "/logout", navLink: "Log out", icon: <BiLogOutCircle className='icon-vis' /> },
        { id: 7, url: "/", navLink: "Delete Profile", icon: <MdDeleteOutline className='icon-vis' /> },
    ]

    return (

        <div className='sidebar-inner'>
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