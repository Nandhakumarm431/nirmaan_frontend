import { Modal } from '@mui/material'
import React from 'react'
import { MdCancel } from 'react-icons/md';
import './editjobdet.css'


const ViewJobDetail = ({ data, isOpen, onClose }) => {

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
                                                    <h3>View Job Details</h3>
                                                    <hr />
                                                    <form >
                                                        <div className='jm-post-job-wrapper mb-40'>
                                                            <div className="row">
                                                                <div className="col-xl-12 col-md-3 forms-controfl">
                                                                    <label>Post Name</label>
                                                                    <input type="text"
                                                                        value={data === null ? '' : data.PostName} readOnly={true} />
                                                                </div>
                                                                <div className="col-xl-12 col-md-12 forms-controfl">
                                                                    <label>Qualification</label>
                                                                    <input type="text"
                                                                        value={data === null ? '' : data.Qualification} readOnly={true} />
                                                                </div>
                                                                <div className="col-xl-6 col-md-3 forms-controfl">
                                                                    <label>Requirement Board</label>
                                                                    <input type="text"
                                                                        value={data === null ? '' : data.RecruitmentBoard} readOnly={true} />
                                                                </div>

                                                                <div className="col-xl-6 col-md-3 forms-controfl">
                                                                    <label>Exam Post Name</label>
                                                                    <input type="text"
                                                                        value={data === null ? '' : data.ExamPostName} readOnly={true} />
                                                                </div>
                                                                <div className="col-xl-6 col-md-3 forms-controfl">
                                                                    <label>Bank Name</label>
                                                                    <input type="text"
                                                                        value={data === null ? '' : data.BankName} readOnly={true} />
                                                                </div>
                                                                <div className="col-xl-6 col-md-6 forms-controfl">
                                                                    <label>Advt No</label>
                                                                    <input type="text"
                                                                        value={data === null ? '' : data.AdvtNo} readOnly={true} />
                                                                </div>

                                                                <div className="col-xl-6 col-md-3 forms-controfl">
                                                                    <label>Job Category</label>
                                                                    <input type="text"
                                                                        value={data === null ? '' : data.job_source} readOnly={true} />

                                                                </div>
                                                                <div className="col-xl-6 col-md-6 forms-controfl">
                                                                    <label>Location</label>
                                                                    <input type="text"
                                                                        value={data === null ? '' : data.job_source} readOnly={true} />
                                                                </div>


                                                                <div className="col-xl-6 col-md-6 forms-controfl">
                                                                    <label>Post date</label>
                                                                    <input type="text"
                                                                        value={data === null ? '' : data.PostDate} readOnly={true} />
                                                                </div>
                                                                <div className="col-xl-6 col-md-6 forms-controfl">
                                                                    <label>Last date</label>
                                                                    <input type="text"
                                                                        value={data === null ? '' : data.LastDate} readOnly={true} />
                                                                </div>
                                                                <div className="col-xl-12 forms-controfl">
                                                                    <label>Application Email/URL/Description</label>
                                                                    <input type="text"
                                                                        readOnly={true}
                                                                        value={data === null ? '' : data.MoreInformation}
                                                                    >
                                                                    </input>
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

export default ViewJobDetail