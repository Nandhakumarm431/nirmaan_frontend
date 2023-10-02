/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Siderbar from '../DashboardDiv/Sidebar'
import './managejob.css'
import { FiEye, FiEdit3, FiDelete } from 'react-icons/fi'
import { useState } from 'react'
import { useEffect } from 'react'
import EditJobDetails from './EditJobsDiv/EditJobDetails'
import { Paper, TableContainer, TablePagination } from '@mui/material'
import UploadJobDet from './UploadFileDiv/UploadJobDet'
import { ImUpload } from 'react-icons/im'
import { ExportToExcel } from './ExportToExcel'
import ViewJobDetail from './EditJobsDiv/ViewJobDetail'

import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const ManageJobs = () => {

    const [alljobsdet, setAlljobsdet] = useState('');

    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetch(`${apiUrl}/getAlljobdet`)
            .then(response => response.json())
            .then(data => {
                setAlljobsdet(data);
            }).catch(error => {

            });
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [selectedData, setSelectedData] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isViewModalOpen, setViewModalOpen] = useState(false);

    const handleRowClick = (rowData) => {
        setSelectedData(rowData);
        setIsEditModalOpen(true);
    };

    const ViewModalClick = (rowData) => {
        setSelectedData(rowData);
        setViewModalOpen(true);


    };

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const formatDate = (inputDate) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(inputDate).toLocaleDateString(undefined, options);
    }


    const deletePostDetails = async (e) => {
        const jobID = e;
        try {
            const response = await fetch(`${apiUrl}/deleteData/${jobID}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.ok) {
                const data = await response.json();
                NotificationManager.success(data.message);
                window.location = "/dashboard/managejob";

            } else {
                const data = await response.json();
                NotificationManager.error(data.message);
            }
        } catch (error) {
            NotificationManager.error(error);
        }
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
                            <h3>Job Listings!</h3>
                            <p>Describe jobs can make anything add/edit, import, export process.</p>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='ls-widget'>
                                    <div className='tabs-box'>
                                        <div className="widget-title">
                                            <h3>Available Jobs </h3>
                                            <div className='icon-container'>
                                                <ExportToExcel apiData={alljobsdet} fileName={'jobdetails'} />

                                                <ImUpload onClick={openModal} />
                                            </div>

                                        </div>
                                        <div className='widget-content'>
                                            <div className='table-outer'>
                                                {alljobsdet === undefined || alljobsdet.length === 0 ?
                                                    <div style={{ textAlign: "center" }}>
                                                        No Jobs Available
                                                    </div>
                                                    :
                                                    // <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                                    //     <TableContainer className='table-container-view' sx={{ maxHeight: 500 }}>
                                                    //         <Table stickyHeader
                                                    //             aria-label="sticky table"
                                                    //             // aria-label="a dense table"
                                                    //             size="small" >
                                                    //             <TableHead className='table-header'>
                                                    //                 <TableRow>
                                                    //                     <TableCell style={{ fontWeight: '600', minWidth: '100px', backgroundColor: '#a4aba6' }}>Post Date</TableCell>
                                                    //                     <TableCell style={{ fontWeight: '600', minWidth: '100px', backgroundColor: '#a4aba6' }}>Recruitment Board</TableCell>
                                                    //                     <TableCell style={{ fontWeight: '600', minWidth: '100px', backgroundColor: '#a4aba6' }}>Post Name</TableCell>
                                                    //                     <TableCell style={{ fontWeight: '600', minWidth: '100px', backgroundColor: '#a4aba6' }}>Qualification</TableCell>
                                                    //                     <TableCell style={{ fontWeight: '600', minWidth: '100px', backgroundColor: '#a4aba6' }}>Advt No</TableCell>
                                                    //                     <TableCell style={{ fontWeight: '600', minWidth: '140px', backgroundColor: '#a4aba6' }}>Last Date</TableCell>
                                                    //                     <TableCell style={{ fontWeight: '600', minWidth: '100px', backgroundColor: '#a4aba6' }}>More Information</TableCell>
                                                    //                     <TableCell style={{ fontWeight: '600', minWidth: '100px', backgroundColor: '#a4aba6' }}>Action</TableCell>
                                                    //                 </TableRow>
                                                    //             </TableHead>
                                                    //             <TableBody>
                                                    //                 {
                                                    //                     alljobsdet
                                                    //                         .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                    //                         .map((row, index) => {
                                                    //                             return (
                                                    //                                 <TableRow hover role="checkbox" key={index}>
                                                    //                                     <TableCell>{row.PostDate}</TableCell>
                                                    //                                     {row.RecruitmentBoard === '' || row.RecruitmentBoard === null ?
                                                    //                                         <TableCell>{row.BankName}</TableCell> :
                                                    //                                         <TableCell>{row.RecruitmentBoard}</TableCell>
                                                    //                                     }

                                                    //                                     {row.job_source === 'SSC' || row.job_source === 'UPSC' ?
                                                    //                                         <TableCell> {row.ExamPostName} </TableCell> :
                                                    //                                         <TableCell>{row.PostName}</TableCell>
                                                    //                                     }
                                                    //                                     <TableCell>{row.Qualification}</TableCell>
                                                    //                                     <TableCell>{row.AdvtNo}</TableCell>
                                                    //                                     <TableCell>{row.LastDate}</TableCell>
                                                    //                                     <TableCell><a href={row.MoreInformation} target='_new'>Get Details</a></TableCell>

                                                    //                                     <TableCell>
                                                    //                                         <div className="option-box">
                                                    //                                             <ul className="option-list">
                                                    //                                                 <li><FiEye className='icon-manage' /></li>
                                                    //                                                 <li><FiEdit3 onClick={() => handleRowClick(row.id)} className='icon-manage' /></li>
                                                    //                                                 <li><FiDelete className='icon-manage' /></li>
                                                    //                                             </ul>
                                                    //                                         </div>
                                                    //                                     </TableCell>
                                                    //                                 </TableRow>
                                                    //                             );
                                                    //                         })}
                                                    //             </TableBody>
                                                    //         </Table>
                                                    //     </TableContainer>
                                                    //     <TablePagination
                                                    //         rowsPerPageOptions={[10, 25, 100]}
                                                    //         component="div"
                                                    //         count={alljobsdet === undefined ? null : alljobsdet.length}
                                                    //         rowsPerPage={rowsPerPage}
                                                    //         page={page}
                                                    //         onPageChange={handleChangePage}
                                                    //         onRowsPerPageChange={handleChangeRowsPerPage}
                                                    //     />
                                                    // </Paper>
                                                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                                        <TableContainer className='table-container-view' sx={{ maxHeight: 500 }}>

                                                            <table className='default-table manage-job-table'>
                                                                <thead><tr><th>Title</th><th>Viewers</th><th>Created &amp; Expired</th><th>Status</th><th>Action</th></tr></thead>
                                                                <tbody>
                                                                    {
                                                                        alljobsdet
                                                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                                            .map((row, index) => {
                                                                                return (
                                                                                    <tr key={index}>
                                                                                        {row.job_source === 'SSC' || row.job_source === 'UPSC' ?
                                                                                            <td >
                                                                                                <div className="job-block">
                                                                                                    <div className="inner-box">
                                                                                                        <div className="content"><span className="company-logo">
                                                                                                        </span>
                                                                                                            <h4><a href={row.MoreInformation}>{row.ExamPostName}</a></h4>
                                                                                                            <h5>{row.Qualification}</h5>
                                                                                                            <ul className="job-info">
                                                                                                                <li><span className="icon flaticon-briefcase"></span>{row.BankName}</li> -
                                                                                                                <li><span className="icon flaticon-map-locator"></span>{row.job_source}</li>
                                                                                                            </ul>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </td> :
                                                                                            <td>
                                                                                                <div className="job-block">
                                                                                                    <div className="inner-box">
                                                                                                        <div className="content"><span className="company-logo">
                                                                                                        </span>
                                                                                                            <h5><a href={row.MoreInformation}>{row.PostName}</a></h5>
                                                                                                            <h4>{row.Qualification}</h4>
                                                                                                            <ul className="job-info">
                                                                                                                <li>
                                                                                                                    <span className="icon flaticon-briefcase"></span>{row.RecruitmentBoard}</li> -
                                                                                                                <li><span className="icon flaticon-map-locator"></span>{row.job_source}</li>
                                                                                                            </ul>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </td>
                                                                                        }

                                                                                        <td className="applied">3+ Viewed
                                                                                            {/* <a href="#">3+ Viewed</a> */}
                                                                                        </td>
                                                                                        <td className='date-linebr'>{formatDate(row.PostDate)}  - <br />
                                                                                            {
                                                                                                formatDate(row.LastDate) === "Invalid Date" ? row.LastDate : formatDate(row.LastDate)
                                                                                            }

                                                                                        </td>
                                                                                        <td className="status">Active</td>
                                                                                        <td>
                                                                                            <div className="option-box">
                                                                                                <ul className="option-list">
                                                                                                    <li><FiEye onClick={() => ViewModalClick(row)} className='icon-manage' /></li>
                                                                                                    <li><FiEdit3 onClick={() => handleRowClick(row)} className='icon-manage' /></li>
                                                                                                    <li><FiDelete onClick={() => deletePostDetails(row.id)} className='icon-manage' /></li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                );
                                                                            })}
                                                                </tbody>
                                                            </table>
                                                        </TableContainer>
                                                        <TablePagination
                                                            rowsPerPageOptions={[10, 25, 100]}
                                                            component="div"
                                                            count={alljobsdet === undefined ? null : alljobsdet.length}
                                                            rowsPerPage={rowsPerPage}
                                                            page={page}
                                                            onPageChange={handleChangePage}
                                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                                        />
                                                    </Paper>
                                                }


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section >
                <UploadJobDet isOpen={isModalOpen} onClose={closeModal} />


                {isEditModalOpen && (
                    <EditJobDetails data={selectedData} isOpen={isEditModalOpen}
                        onClose={() => setIsEditModalOpen(false)}
                    />
                )}

                {isViewModalOpen && (
                    <ViewJobDetail data={selectedData} isOpen={isViewModalOpen}
                        onClose={() => setViewModalOpen(false)}
                    />
                )}
                <NotificationContainer />
            </div >

        </div >

    )
}

export default ManageJobs