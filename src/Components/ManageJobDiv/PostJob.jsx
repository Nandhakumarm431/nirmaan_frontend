import React, { useState } from 'react'
import Siderbar from '../DashboardDiv/Sidebar'
import './postjob.css'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useEffect } from 'react';


const PostJob = () => {

    const apiUrl = process.env.REACT_APP_API_URL;


    const [jobSource, setJobSource] = useState('')
    const [jobLocation, setJobLocation] = useState('')
    const [postname, setPostName] = useState('')
    const [requirmntBoard, setRequirmntBoard] = useState('')
    const [examPostName, setexamPostName] = useState('')
    const [bankName, setBankName] = useState('')
    const [qualification, setQualification] = useState('')
    const [advtno, setAdvtno] = useState('')
    const [postDate, setPostDate] = useState('')
    const [lastDate, setLastDate] = useState('')
    const [moreInformation, setMoreInformtn] = useState('')

    const [locationDetails, setLocationDetails] = useState([]);
    const [jobCategoryDetails, setJobCategoryDetails] = useState([]);


    useEffect(() => {
        fetch(`${apiUrl}/getlocationDetls`)
            .then(response => response.json())
            .then(data => {
                setLocationDetails(data);
            }).catch(error => {

            });
    }, []);

    useEffect(() => {
        fetch(`${apiUrl}/getJobCategories`)
            .then(response => response.json())
            .then(data => {
                setJobCategoryDetails(data);
            }).catch(error => {

            });
    }, []);

    const onSavePostDetails = async (e) => {
        e.preventDefault();

        let postdata = {
            "job_source": jobSource,
            "PostDate": postDate,
            "RecruitmentBoard": requirmntBoard,
            "PostName": postname,
            "ExamPostName": examPostName,
            "BankName": bankName,
            "Qualification": qualification,
            "AdvtNo": advtno,
            "LastDate": lastDate,
            "MoreInformation": moreInformation,
            "location_name": jobLocation,
            "job_category": jobSource
        }

        
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postdata),
        }

        fetch(`${apiUrl}/jobdet`, requestOptions)
            .then(response => response.json())
            .then(data => {
                window.location = "/dashboard/managejob";
                NotificationManager.success('Job Details added successfully');
            })
            .catch(error => {
                NotificationManager.error('Internal server error, Please try again later');
            })
    }


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
                            <h3>Post a Job!</h3>
                            <div className="text">Ready to jump back in?
                            </div>
                        </div>

                        <form method="post" onSubmit={onSavePostDetails}>
                            <div className='jm-post-job-wrapper mb-40'>
                                <h4 className="jm-job-acc-title">Job informations</h4>
                                <div className="row">
                                    <div className="col-lg-9 col-md-12">
                                        <input type="text" placeholder="Post Name"
                                            onChange={(e) => setPostName(e.target.value)}
                                            value={postname} />
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <input type="text" placeholder="Requirement Board"
                                            onChange={(e) => setRequirmntBoard(e.target.value)}
                                            value={requirmntBoard} />
                                    </div>
                                    <div className="col-lg-9 col-md-12">
                                        <input type="text" placeholder="Exam Post Name"
                                            onChange={(e) => setexamPostName(e.target.value)}
                                            value={examPostName} />
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <input type="text" placeholder="Bank Name"
                                            onChange={(e) => setBankName(e.target.value)}
                                            value={bankName} />
                                    </div>
                                    <div className="col-xl-6 col-md-3">
                                        <select className="jm-job-select"
                                            value={jobSource} onChange={(e) => setJobSource(e.target.value)}>
                                            <option>Job Category</option>
                                            {jobCategoryDetails === undefined ?
                                                <option value="true"></option> :
                                                jobCategoryDetails.map((item) => (

                                                    <option key={item.category_name} value={item.category_name}>
                                                        {item.category_name}
                                                    </option>
                                                ))}

                                        </select>
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                        <select className="jm-job-select"
                                            value={jobLocation} onChange={(e) => setJobLocation(e.target.value)}>
                                            <option>Select Location</option>
                                            {locationDetails === undefined ?
                                                <option value="true"></option> :
                                                locationDetails.map((item) => (
                                                    <option key={item.location_name} value={item.location_name}>
                                                        {item.location_name}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>
                                    {/* <div className="col-xl-3 col-md-3">
                                        <select className="jm-job-select">
                                            <option>Job Types</option>
                                            <option>Full Time</option>
                                            <option>Part Time</option>
                                            <option>Internship</option>
                                            <option>Temporary</option>
                                        </select>
                                    </div> */}
                                    <div className="col-xl-12 col-md-12">
                                        <input type="text" placeholder="Qualification"
                                            onChange={(e) => setQualification(e.target.value)}
                                            value={qualification} />
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                        <input type="text" placeholder="Advt No"
                                            onChange={(e) => setAdvtno(e.target.value)}
                                            value={advtno} />
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <input type="date" placeholder="Post date"
                                            onChange={(e) => setPostDate(e.target.value)}
                                            value={postDate} />
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <input type="date" placeholder="Last Date"
                                            onChange={(e) => setLastDate(e.target.value)}
                                            value={lastDate} />
                                    </div>
                                    {/* <div className="col-xl-12 col-md-12">
                                        <input type="text" placeholder="Application email/URL"
                                            onChange={(e) => setMoreInformtn(e.target.value)}
                                            value={moreInformation} />
                                    </div> */}
                                    <div className="col-xl-12">
                                        <textarea
                                            // placeholder="Job description"
                                            placeholder="Application Email/URL/Description"
                                            onChange={(e) => setMoreInformtn(e.target.value)}
                                            value={moreInformation}
                                        >
                                        </textarea>
                                    </div>

                                </div>
                                <div className="col-xl-12"><div className="jm-info-buttons mt-25">
                                    <button type="submit" className="jm-post-job-btn jm-theme-btn">Post A Job</button>
                                </div>
                                </div>
                            </div>
                        </form>
                        <NotificationContainer />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default PostJob