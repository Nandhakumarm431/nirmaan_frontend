/* eslint-disable react-hooks/exhaustive-deps */
import { Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { MdCancel } from 'react-icons/md';
import './editjobdet.css'
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


const EditJobDetails = ({ data, isOpen, onClose }) => {

    const apiUrl = process.env.REACT_APP_API_URL;

    // const [data, setoneJobDetail] = useState(data)
    const [jobSource, setJobSource] = useState(data === null ? '' : data.job_source)
    const [jobLocation, setJobLocation] = useState(data === null ? '' : data.job_source)
    const [postname, setPostName] = useState(data === null ? '' : data.PostName)
    const [requirmntBoard, setRequirmntBoard] = useState(data === null ? '' : data.RecruitmentBoard)
    const [examPostName, setexamPostName] = useState(data === null ? '' : data.ExamPostName)
    const [bankName, setBankName] = useState(data === null ? '' : data.BankName)
    const [qualification, setQualification] = useState(data === null ? '' : data.Qualification)
    const [advtno, setAdvtno] = useState(data === null ? '' : data.AdvtNo)
    const [postDate, setPostDate] = useState(data === null ? '' : data.PostDate)
    const [lastDate, setLastDate] = useState(data === null ? '' : data.LastDate)
    const [moreInformation, setMoreInformtn] = useState(data === null ? '' : data.MoreInformation)

    const jobID = useState(data === null ? '' : data.id)

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



    const onUpdatePostDetails = async (e) => {
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


        try {
            const response = await fetch(`${apiUrl}/updateData/${jobID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postdata),
            });
            if (response.ok) {
                const data = await response.json();
                NotificationManager.success(data.message);
                onClose()
                window.location = "/dashboard/managejob";

            } else {
                const data = await response.json();
                // console.log(data.message);
                NotificationManager.error(data.message);
            }
        } catch (error) {
            // console.error('Error:', error);
            NotificationManager.error(error);
        }

    }
    if (!isOpen) return null;
    return (
        <div>
            <Modal
                open={isOpen}
                aria-labelledby="editjobmodal-editjobmodal-title"
                aria-describedby="editjobmodal-editjobmodal-description"
            >
                <>
                    <div style={{ display: "block" }}>
                        <div className="editjobmodal " id="editjobPopupModal" style={{ display: "block" }} role="dialog">
                            <div className="editjobmodal-dialog editjobmodal-lg editjobmodal-dialog-centered editjob-editjobmodal editjobmodal-dialog-scrollable">
                                <div className="editjobmodal-content">
                                    <MdCancel className="closed-editjobmodal" onClick={onClose} />
                                    <div className="editjobmodal-body">
                                        <div id="editjob-editjobmodal">
                                            <div className="editjob-form default-form">
                                                <div className="form-inner">
                                                    <h3>Edit Job Details</h3>

                                                    <form method="put" onSubmit={onUpdatePostDetails}>
                                                        <div className='jm-post-job-wrapper mb-40'>
                                                            <h4 className="jm-job-acc-title">Job informations</h4>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-xl-6 col-md-3 forms-controfl">
                                                                    <label>Post Name</label>
                                                                    <input type="text" placeholder="Post Name"
                                                                        onChange={(e) => setPostName(e.target.value)}
                                                                        value={postname} />
                                                                </div>
                                                                <div className="col-xl-6 col-md-3 forms-controfl">
                                                                    <label>Requirement Board</label>
                                                                    <input type="text" placeholder="Requirement Board"
                                                                        onChange={(e) => setRequirmntBoard(e.target.value)}
                                                                        value={requirmntBoard} />
                                                                </div>
                                                                <div className="col-xl-6 col-md-3 forms-controfl">
                                                                    <label>Exam Post Name</label>
                                                                    <input type="text" placeholder="Exam Post Name"
                                                                        onChange={(e) => setexamPostName(e.target.value)}
                                                                        value={examPostName} />
                                                                </div>
                                                                <div className="col-xl-6 col-md-3 forms-controfl">
                                                                    <label>Bank Name</label>
                                                                    <input type="text" placeholder="Bank Name"
                                                                        onChange={(e) => setBankName(e.target.value)}
                                                                        value={bankName} />
                                                                </div>
                                                                <div className="col-xl-6 col-md-3 forms-controfl">
                                                                    <label>Job Category</label>
                                                                    <select className="jm-job-select"
                                                                        value={jobSource} onChange={(e) => setJobSource(e.target.value)}>
                                                                        <option>Select Category</option>
                                                                        {jobCategoryDetails === undefined ?
                                                                            <option value="true"></option> :
                                                                            jobCategoryDetails.map((item) => (

                                                                                <option key={item.category_name} value={item.category_name}>
                                                                                    {item.category_name}
                                                                                </option>
                                                                            ))}

                                                                    </select>
                                                                </div>
                                                                <div className="col-xl-6 col-md-6 forms-controfl">
                                                                    <label>Location</label>
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
                                                                <div className="col-xl-12 col-md-12 forms-controfl">
                                                                    <label>Qualification</label>
                                                                    <input type="text" placeholder="Qualification"
                                                                        onChange={(e) => setQualification(e.target.value)}
                                                                        value={qualification} />
                                                                </div>
                                                                <div className="col-xl-6 col-md-6 forms-controfl">
                                                                    <label>Advt No</label>
                                                                    <input type="text" placeholder="Advt No"
                                                                        onChange={(e) => setAdvtno(e.target.value)}
                                                                        value={advtno} />
                                                                </div>
                                                                <div className="col-xl-3 col-md-6 forms-controfl">
                                                                    <label>Post date</label>
                                                                    <input type="date" placeholder="Post date"
                                                                        onChange={(e) => setPostDate(e.target.value)}
                                                                        value={postDate} />
                                                                </div>
                                                                <div className="col-xl-3 col-md-6 forms-controfl">
                                                                    <label>Last date</label>
                                                                    <input type="text" placeholder="Last Date"
                                                                        onChange={(e) => setLastDate(e.target.value)}
                                                                        value={lastDate} />
                                                                </div>
                                                                <div className="col-xl-12 forms-controfl">
                                                                    <label>Application Email/URL/Description</label>
                                                                    <input type="text"
                                                                        // placeholder="Job description"
                                                                        placeholder="Application Email/URL/Description"
                                                                        onChange={(e) => setMoreInformtn(e.target.value)}
                                                                        value={moreInformation}
                                                                    >
                                                                    </input>
                                                                </div>

                                                            </div>
                                                            <div className="col-xl-12"><div className="jm-info-buttons mt-25">
                                                                <button type="submit" className="jm-post-job-btn jm-theme-btn">Update Job</button>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Modal>
        </div>
    )
}

export default EditJobDetails