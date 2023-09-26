import React, { useEffect, useState } from 'react'
import './jobscard.css'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { BsTable, BsCardText } from 'react-icons/bs';
import Box from '@mui/material/Box';

import './job.css'
import { Button, Card, CardActions, CardContent, IconButton, Tooltip, Typography } from '@mui/material';
// import { FaMapMarkerAlt } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'



const Jobscard = () => {



    const [locationDetails, setLocationDetails] = useState([]);
    const [jobCategoryDetails, setJobCategoryDetails] = useState([]);
    const [allJobsDetails, setAllJobsDetails] = useState([]);

    const apiUrl = process.env.REACT_APP_API_URL;

    const sampleCategory = [
        { id: 1, category_name: 'Example1' },
        { id: 2, category_name: 'Example2' }
    ]

    const sampleLocation = [
        { id: 1, location_name: 'Example1' },
        { id: 2, location_name: 'Example2' }
    ]
    useEffect(() => {
        fetch(`${apiUrl}/getlocationDetls`)
            .then(response => response.json())
            .then(data => {
                setLocationDetails(data);
            }).catch(error => {
                setLocationDetails(sampleLocation)

            });
    }, []);

    useEffect(() => {
        fetch(`${apiUrl}/getJobCategories`)
            .then(response => response.json())
            .then(data => {
                setJobCategoryDetails(data);
            }).catch(error => {
                setJobCategoryDetails(sampleCategory)

            });
    }, []);

    useEffect(() => {
        fetch(`${apiUrl}/getAlljobdet`)
            .then(response => response.json())
            .then(data => {
                setAllJobsDetails(data);
            }).catch(error => {
                setAllJobsDetails([])

            });
    }, []);

    const location = useLocation();


    const receivedData = location.state === undefined ? '' : location.state.data;
    const receivedText = location.state === undefined ? '' : location.state.input;


    const [searchText, setsearchText] = useState(receivedText.toLowerCase());
    const [jobType, setJobType] = useState('');
    const [searchData, setLocation] = useState(receivedData);


    const [postssortdate, sortBy] = useState('');



    const handleSortChange = (e) => {
        const sr = e.target.value
        sortBy(sr);
    };

    // const searchJobType = (e) => {
    //     const query = e.target.value
    //     setJobType(query);
    // }

    const searchLocation = (e) => {
        const query = e.target.value
        setLocation(query);
    }


    const searchFilter =
        allJobsDetails.filter(item =>
            searchText ? item.PostName !== null && item.PostName.toLowerCase().includes(searchText.toLowerCase()) : true
        )


    // const searchJobtypeFilter = searchFilter.filter(item2 =>
    //     jobType ? item2.job_source === jobType : true)

    const sortfilter = searchFilter.sort((a, b) =>
        postssortdate === 'name' ? a.PostName !== null && a.PostName.localeCompare(b.PostName)
            : a.PostDate !== null && a.PostDate.localeCompare(b.PostDate)
    );

    const searLocFilter = sortfilter.filter(item3 =>
        searchData ? item3.job_source === searchData : true)



    const [cardViewmode, setcardViewmode] = useState(false)


    const clearText = () => {
        setsearchText('');
        setLocation('');
        setJobType('');
        sortBy('');
    }
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    // const sortedPosts = [...allJobsDetails]);

    // console.log('sortedPosts', sortedPosts);

    return (
        <main>
            <div>
                <section className='section-box-2'>
                    <div className="container">
                        <div className='banner-hero banner-single banner-single-bg'>
                            <div className='block-banner text-center'>
                                <h3>
                                    <span className="color-brand-2">{allJobsDetails === undefined ? 0 : allJobsDetails.length} jobs</span> Available Now
                                </h3>
                                <div className="font-sm color-text-paragraph-2 mt-10 " data-wow-delay=".1s">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni,
                                    <br className="d-xl-block" />atque delectus molestias quis?
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-box mt-30'>
                    <div className="container">
                        <div className='row flex-row-reverse'>
                            <div className='col-lg-9 '>
                                <div className='content-page'>
                                    <div className='box-filters-job'>
                                        <div className='row'>
                                            <div className='col-xl-6 col-lg-7'>
                                                <div className="filter-block ">
                                                    <div className="form-group">
                                                        <input
                                                            className="form-input input-keysearch mr-10" type="search" placeholder="Search with Your keyword... "
                                                            onChange={e => setsearchText(e.target.value)}
                                                            value={searchText}
                                                        >
                                                        </input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-5 text-lg-end mt-sm-15">
                                                <div className="display-flex2">

                                                    <div className="box-border">
                                                        <span className="text-sortby">Sort by:</span>
                                                        <div className="dropdown dropdown-sort">
                                                            <select className='text-sortby' value={postssortdate} onChange={handleSortChange}>
                                                                {/* <option className='text-sortby' value=""></option> */}
                                                                <option className='text-sortby' value="date">Date</option>
                                                                <option className='text-sortby' value="name">Name</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="box-view-type" onClick={() => setcardViewmode(!cardViewmode)}>
                                                        {cardViewmode ?
                                                            // <img src={iconList} alt="jobBox" /> 
                                                            <BsTable className='gridicon' /> : <BsCardText className='gridicon' />}
                                                        {/* <img src={iconGrid} alt="jobBox" /> */}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row '>
                                        {searLocFilter === undefined || searLocFilter.length === 0 ?
                                            <div style={{ textAlign: "center" }}>
                                                No Jobs Available
                                            </div>
                                            :
                                            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                                {cardViewmode ?
                                                    <>
                                                        <Box className='box-card'>
                                                            {searLocFilter
                                                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                                .map((row, index) => {
                                                                    return (

                                                                        <Card variant="outlined" className='card-view-data' key={index} >
                                                                            <CardContent>
                                                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                                                    {row.PostDate}
                                                                                </Typography>


                                                                                {row.job_source === 'SSC' || row.job_source === 'UPSC' ?
                                                                                    <Typography style={{ fontSize: "18px", fontWeight: "600" }} >
                                                                                        {row.ExamPostName}
                                                                                    </Typography>
                                                                                    :
                                                                                    <Typography style={{ fontSize: "18px", fontWeight: "600" }} >
                                                                                        {row.PostName}
                                                                                    </Typography>

                                                                                }


                                                                                {row.RecruitmentBoard === '' || row.RecruitmentBoard === null ?
                                                                                    <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ fontSize: "14px" }}>
                                                                                        {row.BankName}
                                                                                    </Typography> :
                                                                                    <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ fontSize: "14px" }}>
                                                                                        {row.RecruitmentBoard}
                                                                                    </Typography>
                                                                                }

                                                                                <Typography variant="body2" style={{ fontSize: "12px" }}>
                                                                                    {row.Qualification}
                                                                                    <br />
                                                                                    {row.AdvtNo}
                                                                                </Typography>
                                                                            </CardContent>
                                                                            <CardActions>
                                                                                <Button className='btn-link' size="small"><a style={{ color: "blue" }} href={row.MoreInformation} target='_new'>Get Details</a></Button>
                                                                            </CardActions>
                                                                        </Card>

                                                                    );
                                                                })}
                                                        </Box>
                                                    </> :
                                                    <TableContainer className='table-container-view' sx={{ maxHeight: 500 }}>
                                                        <Table stickyHeader
                                                            // aria-label="sticky table"
                                                            size="small" aria-label="a dense table">
                                                            <TableHead className='table-header'>
                                                                <TableRow>
                                                                    <TableCell style={{ fontWeight: '600', minWidth: '100px', backgroundColor: '#a4aba6' }}>Post Date</TableCell>
                                                                    <TableCell style={{ fontWeight: '600', minWidth: '100px', backgroundColor: '#a4aba6' }}>Recruitment Board</TableCell>
                                                                    <TableCell style={{ fontWeight: '600', minWidth: '100px', backgroundColor: '#a4aba6' }}>Post Name</TableCell>
                                                                    <TableCell style={{ fontWeight: '600', minWidth: '100px', backgroundColor: '#a4aba6' }}>Qualification</TableCell>
                                                                    <TableCell style={{ fontWeight: '600', minWidth: '100px', backgroundColor: '#a4aba6' }}>Advt No</TableCell>
                                                                    <TableCell style={{ fontWeight: '600', minWidth: '140px', backgroundColor: '#a4aba6' }}>Last Date</TableCell>
                                                                    <TableCell style={{ fontWeight: '600', minWidth: '100px', backgroundColor: '#a4aba6' }}>More Information</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {

                                                                    searLocFilter
                                                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                                        .map((row, index) => {
                                                                            return (
                                                                                <TableRow hover role="checkbox" key={index}>
                                                                                    <TableCell>{row.PostDate}</TableCell>
                                                                                    {row.RecruitmentBoard === '' || row.RecruitmentBoard === null ?
                                                                                        <TableCell>{row.BankName}</TableCell> :
                                                                                        <TableCell>{row.RecruitmentBoard}</TableCell>
                                                                                    }

                                                                                    {row.job_source === 'SSC' || row.job_source === 'UPSC' ?
                                                                                        <TableCell> {row.ExamPostName} </TableCell> :
                                                                                        <TableCell>{row.PostName}</TableCell>
                                                                                    }
                                                                                    <TableCell>{row.Qualification}</TableCell>
                                                                                    <TableCell>{row.AdvtNo}</TableCell>
                                                                                    <TableCell>{row.LastDate}</TableCell>
                                                                                    <TableCell><a href={row.MoreInformation} target='_new'>Get Details</a></TableCell>

                                                                                    {/* })} */}
                                                                                </TableRow>
                                                                            );
                                                                        })}
                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                }
                                                <TablePagination
                                                    rowsPerPageOptions={[10, 25, 100]}
                                                    component="div"

                                                    count={searLocFilter === undefined ? null : searLocFilter.length}
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
                            <div className='col-lg-3 '>
                                <div className='sidebar-shadow none-shadow mb-30'>
                                    <div className='sidebar-filters'>
                                        <div className="filter-block head-border mb-30">
                                            <h5>Advance Filter</h5>
                                            {searchText === '' && postssortdate === '' && jobType === '' && searchData === '' ?
                                                <></> :
                                                <button onClick={clearText} className="btn-danger txt-btn">Clear All</button>
                                            }
                                        </div>

                                        <div className="filter-block mb-30">
                                            <h5 className="h5-heading mb-15">
                                                Location</h5>
                                            <div className="form-group-loca">
                                                <select className="form-control location-select form-icons select-active"
                                                    value={searchData} onChange={searchLocation} label="Location" placeholder='select Location'>
                                                    <option>Choose a Location</option>
                                                    {locationDetails === undefined ?
                                                        <option value="true"></option> :
                                                        locationDetails.map((item) => (
                                                            <option key={item.location_name} value={item.location_name}>
                                                                {item.location_name}
                                                            </option>
                                                        ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="filter-block mb-20">
                                            <h5 className="h5-heading mb-15">
                                                Job Category</h5>
                                            <div className="form-group">
                                                <select className="form-control category-select form-icons select-active"
                                                    value={searchData} onChange={searchLocation} label="Location" placeholder='select Location'>

                                                    <option>Choose a Category</option>
                                                    {jobCategoryDetails === undefined ?
                                                        <option value="true"></option> :
                                                        jobCategoryDetails.map((item) => (

                                                            <option key={item.category_name} value={item.category_name}>
                                                                {item.category_name}
                                                            </option>
                                                        ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Jobscard