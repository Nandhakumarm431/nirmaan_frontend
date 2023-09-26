// import React, { useEffect, useState } from 'react'
// import iconGrid from '../../assets/images/icon-grid-hover.svg'
// import iconList from '../../assets/images/icon-list.svg'
// import Jobcard from './Jobcard'

// const SearchBar = () => {



//     const [postname, setPostname] = useState('');
//     const [jobType, setJobType] = useState('');
//     const [searchData, setLocation] = useState('');
//     const [locationDetails, setLocationDetails] = useState([]);
//     const [jobCategoryDetails, setJobCategoryDetails] = useState([]);
//     const [allJobsDetails, setAllJobsDetails] = useState([]);

//     const apiUrl = process.env.REACT_APP_API_URL;

//     useEffect(() => {
//         fetch(`${apiUrl}/getlocationDetls`)
//             .then(response => response.json())
//             .then(data => {
//                 setLocationDetails(data);
//             });
//     }, []);

//     useEffect(() => {
//         fetch(`${apiUrl}/getJobCategories`)
//             .then(response => response.json())
//             .then(data => {
//                 setJobCategoryDetails(data);
//             });
//     }, []);

//     useEffect(() => {
//         fetch(`${apiUrl}/getAlljobdet`)
//             .then(response => response.json())
//             .then(data => {
//                 setAllJobsDetails(data);
//             });
//     }, []);

//     const searchJobType = (e) => {
//         const query = e.target.value
//         setJobType(query);
//     }

//     const searchLocation = (e) => {
//         const query = e.target.value
//         setLocation(query);
//     }


//     const searchFilter = allJobsDetails.filter(item =>
//         // const postlower = item.PostName.toLowerCase();
//         postname ? item.PostName.includes(postname) : true ||
//             postname ? item.Qualification.includes(postname) : true)

//     const searchJobtypeFilter = searchFilter.filter(item2 =>
//         jobType ? item2.job_source === jobType : true)

//     const searLocFilter = searchJobtypeFilter.filter(item2 =>
//         searchData ? item2.job_source === searchData : true)

//     console.log('searLocFilter', searLocFilter);

//     const [cardViewmode, setcardViewmode] = useState(false)


//     const clearText = () => {
//         setPostname('');
//         setLocation('');
//         setJobType('');
//     }
//     const [page, setPage] = React.useState(0);
//     const [rowsPerPage, setRowsPerPage] = React.useState(10);

//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(+event.target.value);
//         setPage(0);
//     };
//     return (
//         <div>
//             <section className='section-box mt-30'>
//                 <div className="container">
//                     <div className='row flex-row-reverse'>
//                         <div className='col-lg-9 col-md-12 col-sm-12 col-12 float-right'>
//                             <div className='content-page'>
//                                 <div className='box-filters-job'>
//                                     <div className='row'>
//                                         <div className='col-xl-6 col-lg-5'>
//                                         </div>
//                                         <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
//                                             <div className="display-flex2">
//                                                 <div className="box-border">
//                                                     <span className="text-sortby">Sort by:</span>
//                                                     <div className="dropdown dropdown-sort">
//                                                         <button className="btn dropdown-toggle" id="dropdownSort2" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
//                                                             <span>Newest Post</span
//                                                             ><i className="fi-rr-angle-small-down"></i>
//                                                         </button>
//                                                         <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort2">
//                                                             <li><a className="dropdown-item active" href="/jobs-list#">Newest Post</a></li>
//                                                             <li><a className="dropdown-item" href="/jobs-list#">Oldest Post</a></li>
//                                                             <li><a className="dropdown-item" href="/jobs-list#">Rating Post</a></li>
//                                                         </ul>
//                                                     </div>
//                                                 </div>
//                                                 <div className="box-view-type" onClick={() => setcardViewmode(!cardViewmode)}>
//                                                     {cardViewmode ?
//                                                         <img src={iconList} alt="jobBox" /> :
//                                                         <img src={iconGrid} alt="jobBox" />}

//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='row '>
//                                     <Jobcard jobDetails={searLocFilter} />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='col-lg-3 col-md-12 col-sm-12 col-12'>
//                             <div className='sidebar-shadow none-shadow mb-30'>
//                                 <div className='sidebar-filters'>
//                                     <div className="filter-block head-border mb-30">
//                                         <h5>Advance Filter
//                                             <a className="link-reset" onClick={clearText}>Reset</a>
//                                         </h5>
//                                     </div>
//                                     <div className="filter-block mb-20">
//                                         <h5 className="medium-heading mb-15">
//                                             Search Jobs</h5>
//                                         <div className="form-group">
//                                             <input
//                                                 onChange={e => setPostname(e.target.value)}
//                                                 value={postname}
//                                                 className="form-input input-keysearch mr-10" type="text" placeholder="Your keyword... ">

//                                             </input>
//                                         </div>
//                                     </div>
//                                     <div className="filter-block mb-30">
//                                         <div className="form-group select-style select-style-icon">
//                                             <select className="form-control form-icons select-active"
//                                                 value={searchData} onChange={searchLocation} label="Location" placeholder='select Location'>

//                                                 <option>Choose a Location</option>
//                                                 {locationDetails === undefined ?
//                                                     <option value="true"></option> :
//                                                     locationDetails.map((item) => (
//                                                         <option key={item.location_name} value={item.location_name}>
//                                                             {item.location_name}
//                                                         </option>
//                                                     ))}
//                                             </select>
//                                             <i className="fi-rr-marker"></i>
//                                         </div>
//                                     </div>
//                                     <div className="filter-block mb-20">
//                                         <h5 className="medium-heading mb-15">
//                                             Job Category</h5><div className="form-group">
//                                             <select className="form-control form-icons select-active"
//                                                 value={searchData} onChange={searchLocation} label="Location" placeholder='select Location'>

//                                                 <option>Choose a Category</option>
//                                                 {jobCategoryDetails === undefined ?
//                                                     <option value="true"></option> :
//                                                     jobCategoryDetails.map((item) => (

//                                                         <option key={item.category_name} value={item.category_name}>
//                                                             {item.category_name}
//                                                         </option>
//                                                     ))}
//                                             </select>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default SearchBar