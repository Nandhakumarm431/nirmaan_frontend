import { IconButton, Modal, Tooltip } from "@mui/material";
import React, { useState } from "react";
// import EmployeeService from '../services/EmployeeService'
import { ImUpload } from 'react-icons/im'
import { MdCancel } from "react-icons/md";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './uploadexcel.css'


const UploadJobDet = ({ isOpen, onClose }) => {

    const [file, setFile] = useState();
    const apiUrl = process.env.REACT_APP_API_URL;


    const sendFile = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('file', file.file);
        if (file == null || file === undefined) {
            NotificationManager.error('please upload file');

        }

        else if (file && file.file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            // Valid .xlsx file selected
            try {
                const response = await fetch(`${apiUrl}/upload`, {
                    method: 'POST',
                    body: formData

                });
                if (response.ok) {
                    // window.location = "/dashboard/managejob";
                    NotificationManager.success('Bulk job details successfully uploaded');
                    onClose()
                }
                else {
                    // Handle login error
                    const data = await response.json();
                    // console.log(data.message);
                    NotificationManager.error(data.message);
                }

            } catch (error) {
                // console.error('Error:', error);
                NotificationManager.error(error);
            }

        }
    }
    if (!isOpen) return null;

    return (
        <div>
            <Modal
                open={isOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <>
                    <div style={{ display: "block" }}>
                        <div className="modal fade show" id="loginPopupModal" style={{ display: "block" }} aria-modal="true" role="dialog">
                            <div className="modal-dialog modal-lg modal-dialog-centered login-modal modal-dialog-scrollable">
                                <div className="modal-content">
                                    <MdCancel className="closed-modal" onClick={onClose} />
                                    <div className="modal-body">
                                        <div id="login-modal">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">File upload</h5>
                                            </div>
                                            <div className="modal-body" id="input-body">
                                                <div className="input-group" id="uploadfile-input">
                                                    <input type="file" name="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"
                                                        aria-label="Upload" onChange={e => setFile({ file: e.target.files[0] })} />
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                                                <button type="button" onClick={sendFile} className="btn-sendfile">Upload</button>
                                            </div>
                                        </div></div>
                                </div>

                            </div>
                        </div>
                    </div>

                </>
            </Modal>
            <NotificationContainer />
        </div>
    );
};

export default UploadJobDet;